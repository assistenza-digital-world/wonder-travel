<?php
/**
 * Wonder Travel - Helper di sicurezza condivisi (rate-limit + IP client).
 * Nessuna dipendenza esterna. Incluso da lead.php e consent.php.
 */

if (!function_exists('wt_client_ip')) {
    /**
     * IP client affidabile: dietro il proxy/load-balancer di Cloudways il vero
     * IP è il PRIMO valore di X-Forwarded-For. Lo validiamo come IP reale,
     * altrimenti ripieghiamo su REMOTE_ADDR (così l'XFF non è spoofabile a piacere
     * per inquinare log/DB o aggirare il rate-limit).
     */
    function wt_client_ip() {
        $xff = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
        if ($xff !== '') {
            $first = trim(explode(',', $xff)[0]);
            if (filter_var($first, FILTER_VALIDATE_IP)) {
                return $first;
            }
        }
        $ra = $_SERVER['REMOTE_ADDR'] ?? '';
        return filter_var($ra, FILTER_VALIDATE_IP) ? $ra : 'unknown';
    }
}

if (!function_exists('wt_rate_ok')) {
    /**
     * Rate-limit a finestra scorrevole, per-chiave (tipicamente per-IP), su file.
     * Ritorna true se la richiesta è consentita, false se la soglia è superata.
     * Fail-open: se il filesystem non è scrivibile NON blocca gli utenti legittimi.
     *
     * @param string $bucket  chiave logica (es. "lead_1.2.3.4")
     * @param int    $max     numero massimo di richieste nella finestra
     * @param int    $window  ampiezza finestra in secondi
     */
    function wt_rate_ok($bucket, $max, $window) {
        $dir = sys_get_temp_dir() . '/wt_rl';
        if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
        $file = $dir . '/' . preg_replace('/[^A-Za-z0-9_.-]/', '_', $bucket) . '.json';
        $now = time();

        $fp = @fopen($file, 'c+');
        if (!$fp) { return true; } // fail-open
        @flock($fp, LOCK_EX);
        $raw = stream_get_contents($fp);
        $hits = json_decode($raw, true);
        if (!is_array($hits)) { $hits = []; }
        // tieni solo gli hit dentro la finestra
        $hits = array_values(array_filter($hits, function ($t) use ($now, $window) {
            return is_int($t) && $t > ($now - $window);
        }));
        $allowed = count($hits) < $max;
        if ($allowed) { $hits[] = $now; }
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($hits));
        fflush($fp);
        @flock($fp, LOCK_UN);
        fclose($fp);
        return $allowed;
    }
}
