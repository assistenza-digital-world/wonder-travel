<?php
/**
 * Wonder Travel - Mini client SMTP (senza dipendenze esterne).
 *
 * Invia email autenticate via SMTP (molto piu' affidabile di mail() su Cloudways).
 * Supporta:
 *   - STARTTLS (porta 587, secure = 'tls')
 *   - SSL implicito (porta 465, secure = 'ssl')
 *   - AUTH LOGIN
 *
 * Usato da lead.php. Richiede PHP 7.4+ con openssl.
 */

/**
 * @return bool true se l'email e' stata accettata dal server SMTP.
 *         In caso di errore, il messaggio viene messo in $error.
 */
function wt_smtp_send(array $cfg, $to, $subject, $bodyText, $fromEmail, $fromName = '', $replyToEmail = '', $replyToName = '', &$error = null) {
    $host    = $cfg['host'] ?? '';
    $port    = (int)($cfg['port'] ?? 587);
    $user    = $cfg['user'] ?? '';
    $pass    = $cfg['pass'] ?? '';
    $secure  = strtolower($cfg['secure'] ?? 'tls'); // 'tls' | 'ssl' | ''
    $timeout = 15;

    if ($host === '' || $user === '') { $error = 'SMTP non configurato'; return false; }

    $transport = ($secure === 'ssl') ? "ssl://{$host}" : $host;
    $fp = @fsockopen($transport, $port, $errno, $errstr, $timeout);
    if (!$fp) { $error = "Connessione SMTP fallita: $errstr ($errno)"; return false; }
    stream_set_timeout($fp, $timeout);

    $read = function () use ($fp) {
        $data = '';
        while (($line = fgets($fp, 515)) !== false) {
            $data .= $line;
            // Risposte multiriga: il 4Â° carattere e' '-' se continua, ' ' se e' l'ultima.
            if (isset($line[3]) && $line[3] === ' ') break;
        }
        return $data;
    };
    $cmd  = function ($c) use ($fp, $read) { fwrite($fp, $c . "\r\n"); return $read(); };
    $code = function ($resp) { return (int)substr((string)$resp, 0, 3); };

    $resp = $read(); // saluto 220
    if ($code($resp) !== 220) { $error = 'Greeting: ' . trim($resp); fclose($fp); return false; }

    $ehloHost = $_SERVER['SERVER_NAME'] ?? 'localhost';
    $resp = $cmd("EHLO {$ehloHost}");
    if ($code($resp) !== 250) { $error = 'EHLO: ' . trim($resp); fclose($fp); return false; }

    if ($secure === 'tls') {
        $resp = $cmd('STARTTLS');
        if ($code($resp) !== 220) { $error = 'STARTTLS: ' . trim($resp); fclose($fp); return false; }
        $crypto = STREAM_CRYPTO_METHOD_TLS_CLIENT;
        if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) $crypto |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
        if (!stream_socket_enable_crypto($fp, true, $crypto)) { $error = 'TLS handshake fallito'; fclose($fp); return false; }
        $resp = $cmd("EHLO {$ehloHost}"); // ri-EHLO dopo TLS
        if ($code($resp) !== 250) { $error = 'EHLO post-TLS: ' . trim($resp); fclose($fp); return false; }
    }

    // Autenticazione
    $resp = $cmd('AUTH LOGIN');
    if ($code($resp) !== 334) { $error = 'AUTH LOGIN: ' . trim($resp); fclose($fp); return false; }
    $resp = $cmd(base64_encode($user));
    if ($code($resp) !== 334) { $error = 'AUTH user: ' . trim($resp); fclose($fp); return false; }
    $resp = $cmd(base64_encode($pass));
    if ($code($resp) !== 235) { $error = 'Autenticazione SMTP fallita: ' . trim($resp); fclose($fp); return false; }

    // Busta
    $resp = $cmd("MAIL FROM:<{$fromEmail}>");
    if ($code($resp) !== 250) { $error = 'MAIL FROM: ' . trim($resp); fclose($fp); return false; }
    $resp = $cmd("RCPT TO:<{$to}>");
    if ($code($resp) !== 250 && $code($resp) !== 251) { $error = 'RCPT TO: ' . trim($resp); fclose($fp); return false; }

    $resp = $cmd('DATA');
    if ($code($resp) !== 354) { $error = 'DATA: ' . trim($resp); fclose($fp); return false; }

    // Intestazioni + corpo (corpo in base64: niente problemi di encoding o dot-stuffing)
    $fromHeader = $fromName !== '' ? '=?UTF-8?B?' . base64_encode($fromName) . '?= <' . $fromEmail . '>' : $fromEmail;
    $encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $headers   = [];
    $headers[] = 'Date: ' . date('r');
    $headers[] = 'From: ' . $fromHeader;
    $headers[] = 'To: <' . $to . '>';
    if ($replyToEmail !== '') {
        $rt = $replyToName !== '' ? '=?UTF-8?B?' . base64_encode($replyToName) . '?= <' . $replyToEmail . '>' : $replyToEmail;
        $headers[] = 'Reply-To: ' . $rt;
    }
    $headers[] = 'Subject: ' . $encSubject;
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: base64';

    $message = implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($bodyText));

    fwrite($fp, $message . "\r\n.\r\n");
    $resp = $read();
    if ($code($resp) !== 250) { $error = 'Invio messaggio rifiutato: ' . trim($resp); fclose($fp); return false; }

    $cmd('QUIT');
    fclose($fp);
    return true;
}
