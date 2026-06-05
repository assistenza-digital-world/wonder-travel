<?php
/**
 * Wonder Travel - Ricezione lead dal form della landing.
 *
 * Riceve un POST JSON dal form (src/lib/submitLead.js), valida i dati,
 * invia un'email di notifica e risponde { "ok": true }.
 *
 * USO:
 *   1. Carica questo file sul tuo hosting PHP (es. https://tuodominio/lead.php).
 *   2. Nella landing imposta in .env:  VITE_LEAD_API_URL=https://tuodominio/lead.php
 *   3. (Opzionale) personalizza i parametri qui sotto.
 *
 * Nessuna dipendenza esterna. Richiede PHP 7.4+.
 */

// ------------------------- CONFIGURAZIONE -------------------------
$TO          = 'info@wondertravel.it';            // destinatario delle notifiche lead
$FROM        = 'info@wondertravel.it';            // mittente fallback mail(): stessa casella autenticata (coerenza SPF/DMARC)
$SUBJECT_TAG = 'Nuovo lead pellegrinaggi';        // prefisso oggetto email
$ALLOWED_ORIGIN = 'https://wondertravel.it';      // origine consentita (il form è sullo stesso dominio). '*' = qualsiasi.
$LOG_FILE    = __DIR__ . '/leads.log';            // backup su file (JSON per riga). Metti '' per disattivare.

// Credenziali sensibili: priorità alla variabile d'ambiente WT_SMTP_PASS,
// poi al file NON versionato secrets.php (vedi secrets.example.php).
$__wt_secrets = is_file(__DIR__ . '/secrets.php') ? (require __DIR__ . '/secrets.php') : [];
$SMTP_PASS    = getenv('WT_SMTP_PASS') ?: ($__wt_secrets['smtp_pass'] ?? '');

// --- SMTP (consigliato: mail() su Cloudways e' inaffidabile) ---
// Se 'host' resta vuoto o la password non è impostata, si usa mail() di sistema.
// IMPORTANTE: 'from_email' deve appartenere al dominio che autentichi via SMTP
// (altrimenti SPF/DMARC fanno finire l'email in spam o la bloccano).
$SMTP = [
    'host'       => 'smtps.aruba.it',                  // SMTP Aruba
    'port'       => 465,                               // 465 con SSL (standard Aruba)
    'secure'     => 'ssl',                             // SSL implicito
    'user'       => 'info@wondertravel.it',            // login = indirizzo completo
    'pass'       => $SMTP_PASS,                         // password: da env WT_SMTP_PASS o secrets.php
    'from_email' => 'info@wondertravel.it',            // mittente: DEVE essere la stessa casella autenticata
    'from_name'  => 'Wonder Travel',
];
// ------------------------------------------------------------------

// CORS (utile se il form è su un dominio diverso da questo script)
header('Access-Control-Allow-Origin: ' . $ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=utf-8');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function out($code, $payload) {
    http_response_code($code);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    out(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Leggi il corpo (max ~64KB per sicurezza)
$raw = file_get_contents('php://input', false, null, 0, 65536);
$data = json_decode($raw, true);
if (!is_array($data)) {
    out(400, ['ok' => false, 'error' => 'Invalid JSON']);
}

// Honeypot anti-spam (se presente e compilato => scarta silenziosamente)
if (!empty($data['company_url'])) {
    out(200, ['ok' => true]);
}

// Helper
function field($d, $k) { return isset($d[$k]) ? trim((string)$d[$k]) : ''; }

$name         = field($data, 'name');
$email        = field($data, 'email');
$phone        = field($data, 'phone');
$org          = field($data, 'org');
$role         = field($data, 'role');
$participants = field($data, 'participants');
$period       = field($data, 'period');
$hotel        = field($data, 'hotel');
$message      = field($data, 'message');
$locale       = field($data, 'locale');
$marketing    = !empty($data['marketing']) ? 'Sì' : 'No';
$consent      = !empty($data['consent']);
$privacyVersion = field($data, 'privacyVersion');

// Validazione minima
$errors = [];
if ($name === '')  $errors[] = 'name';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if (strlen(preg_replace('/\D/', '', $phone)) < 8) $errors[] = 'phone';
if ($org === '')   $errors[] = 'org';
if ($role === '')  $errors[] = 'role';
if (!$consent)     $errors[] = 'consent';

if ($errors) {
    out(422, ['ok' => false, 'error' => 'Validation failed', 'fields' => $errors]);
}

// Attribuzione (UTM, referrer) inviata dal front-end
$attr = isset($data['attribution']) && is_array($data['attribution']) ? $data['attribution'] : [];
function a($attr, $k) { return isset($attr[$k]) ? trim((string)$attr[$k]) : ''; }

$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
$submittedAt = field($data, 'submittedAt');

// ------------------------- EMAIL -------------------------
$lang = ($locale === 'pt') ? 'PT-BR' : 'IT';

$lines = [];
$lines[] = "Nuova richiesta dal sito Wonder Travel ($lang)";
$lines[] = str_repeat('=', 48);
$lines[] = "Nome:           $name";
$lines[] = "Email:          $email";
$lines[] = "WhatsApp/Tel:   $phone";
$lines[] = "Organizzazione: $org";
$lines[] = "Ruolo:          $role";
$lines[] = "Partecipanti:   $participants";
$lines[] = "Periodo:        $period";
$lines[] = "Hotel:          " . ($hotel !== '' ? $hotel : '-');
$lines[] = "Consenso mktg:  $marketing";
$lines[] = "Lingua sito:    $lang";
$lines[] = '';
$lines[] = "Messaggio:";
$lines[] = ($message !== '' ? $message : '(nessun messaggio)');
$lines[] = '';
$lines[] = str_repeat('-', 48);
$lines[] = "Provenienza:";
$lines[] = "  utm_source:   " . a($attr, 'utm_source');
$lines[] = "  utm_medium:   " . a($attr, 'utm_medium');
$lines[] = "  utm_campaign: " . a($attr, 'utm_campaign');
$lines[] = "  utm_content:  " . a($attr, 'utm_content');
$lines[] = "  utm_term:     " . a($attr, 'utm_term');
$lines[] = "  referrer:     " . a($attr, 'referrer');
$lines[] = "  pagina:       " . a($attr, 'landingPath');
$lines[] = "  inviato:      $submittedAt";
$lines[] = "  IP:           $ip";
$lines[] = "  user-agent:   $ua";

$body = implode("\n", $lines);

$subject = "$SUBJECT_TAG: $name ($org)";

// Header email (UTF-8, Reply-To = email del lead per rispondere al volo)
$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: 8bit';
$headers[] = 'From: Wonder Travel Lead <' . $FROM . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: WonderTravelLanding';

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

// Invio: prima via SMTP autenticato (affidabile); se non configurato o fallisce,
// fallback su mail() di sistema.
$sent = false;
$mailError = '';
if (!empty($SMTP['host']) && !empty($SMTP['pass'])) {
    require_once __DIR__ . '/smtp-mailer.php';
    $fromSmtp = !empty($SMTP['from_email']) ? $SMTP['from_email'] : $FROM;
    $sent = wt_smtp_send($SMTP, $TO, $subject, $body, $fromSmtp, $SMTP['from_name'] ?? '', $email, $name, $mailError);
    if (!$sent) error_log('WT SMTP failed: ' . $mailError);
}
if (!$sent) {
    $sent = @mail($TO, $encodedSubject, $body, implode("\r\n", $headers), '-f' . $FROM);
}

// Alert: se la notifica email NON è partita (né SMTP né mail()), lascia una
// traccia dedicata da monitorare, così i lead non notificati non passano
// inosservati. Il dato del lead resta comunque salvato su DB e leads.log.
if (!$sent) {
    $alert = '[' . date('c') . '] NOTIFICA EMAIL FALLITA — lead: ' . $email
           . ' (' . $name . ') — SMTP: ' . ($mailError !== '' ? $mailError : 'n/d') . "\n";
    @file_put_contents(__DIR__ . '/lead-failures.log', $alert, FILE_APPEND | LOCK_EX);
    error_log('WT lead NON notificato via email: ' . $email . ' — ' . $mailError);
}

// ------------------------- LOG DI BACKUP -------------------------
if ($LOG_FILE !== '') {
    $record = [
        'at' => date('c'),
        'lang' => $lang,
        'name' => $name, 'email' => $email, 'phone' => $phone,
        'org' => $org, 'role' => $role, 'participants' => $participants,
        'period' => $period, 'hotel' => $hotel, 'marketing' => $marketing,
        'message' => $message, 'attribution' => $attr, 'ip' => $ip,
        'mail_sent' => $sent ? 1 : 0,
    ];
    @file_put_contents(
        $LOG_FILE,
        json_encode($record, JSON_UNESCAPED_UNICODE) . "\n",
        FILE_APPEND | LOCK_EX
    );
}

// ------------------------- SALVATAGGIO IN DATABASE -------------------------
// Salva il lead e i consensi (privacy obbligatorio + marketing) con timestamp
// e versione della policy. Best-effort: se il DB non è configurato si salta.
$dbSaved = false;
require_once __DIR__ . '/db.php';
$pdo = wt_db();
if ($pdo) {
    try {
        $stmt = $pdo->prepare(
            "INSERT INTO leads
             (created_at, locale, name, email, phone, org, role, participants, period, hotel, message,
              consent_privacy, consent_marketing, privacy_version,
              utm_source, utm_medium, utm_campaign, utm_content, utm_term, referrer, landing_path, ip, user_agent)
             VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        );
        $stmt->execute([
            $locale, $name, $email, $phone, $org, $role, $participants, $period, $hotel, $message,
            $consent ? 1 : 0,
            ($marketing === 'Sì') ? 1 : 0,
            $privacyVersion,
            a($attr, 'utm_source'), a($attr, 'utm_medium'), a($attr, 'utm_campaign'),
            a($attr, 'utm_content'), a($attr, 'utm_term'), a($attr, 'referrer'), a($attr, 'landingPath'),
            $ip, substr($ua, 0, 255),
        ]);
        $dbSaved = true;
    } catch (Throwable $e) {
        error_log('WT lead insert failed: ' . $e->getMessage());
    }
}

// Rispondi 200 se almeno una persistenza è riuscita (DB, mail o log).
if ($dbSaved || $sent || $LOG_FILE !== '') {
    out(200, ['ok' => true]);
} else {
    out(500, ['ok' => false, 'error' => 'Lead not stored']);
}