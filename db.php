<?php
/**
 * Connessione database (MySQL/MariaDB) + creazione automatica delle tabelle.
 *
 * Su Cloudways i dati del DB sono in: Application > Access Details
 * (Database Name, Username, Password; host di solito "localhost").
 * Inserisci i valori qui sotto (oppure impostali come variabili d'ambiente
 * WT_DB_HOST / WT_DB_NAME / WT_DB_USER / WT_DB_PASS).
 *
 * Se il DB non è configurato, le funzioni restituiscono null e gli script
 * continuano a funzionare (email + log), senza errori.
 */

// ------------------------- CONFIG DB -------------------------
// Credenziali: priorità alle variabili d'ambiente WT_DB_*, poi al file NON
// versionato secrets.php (vedi secrets.example.php). Se nulla è impostato, i
// campi restano vuoti e il DB viene considerato "non configurato" (vedi sotto):
// gli script continuano a funzionare con email + log, senza esporre password.
$__wt_secrets = is_file(__DIR__ . '/secrets.php') ? (require __DIR__ . '/secrets.php') : [];
$WT_DB = [
    'host' => getenv('WT_DB_HOST') ?: ($__wt_secrets['db_host'] ?? 'localhost'),
    'name' => getenv('WT_DB_NAME') ?: ($__wt_secrets['db_name'] ?? ''),   // nome database (Cloudways)
    'user' => getenv('WT_DB_USER') ?: ($__wt_secrets['db_user'] ?? ''),   // utente
    'pass' => getenv('WT_DB_PASS') ?: ($__wt_secrets['db_pass'] ?? ''),   // password
];
// -------------------------------------------------------------

function wt_db() {
    global $WT_DB;
    static $pdo = false; // false = non ancora tentato

    if ($pdo !== false) return $pdo;

    if (empty($WT_DB['name']) || empty($WT_DB['user'])) {
        $pdo = null; // DB non configurato
        return null;
    }

    try {
        $pdo = new PDO(
            "mysql:host={$WT_DB['host']};dbname={$WT_DB['name']};charset=utf8mb4",
            $WT_DB['user'],
            $WT_DB['pass'],
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]
        );
        wt_db_ensure_schema($pdo);
        return $pdo;
    } catch (Throwable $e) {
        error_log('WT DB connect failed: ' . $e->getMessage());
        $pdo = null;
        return null;
    }
}

function wt_db_ensure_schema($pdo) {
    // Tabella lead (include i consensi del form, con versione e timestamp)
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS leads (
            id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            created_at DATETIME NOT NULL,
            locale VARCHAR(5) DEFAULT NULL,
            name VARCHAR(190) DEFAULT NULL,
            email VARCHAR(190) DEFAULT NULL,
            phone VARCHAR(60) DEFAULT NULL,
            org VARCHAR(190) DEFAULT NULL,
            role VARCHAR(120) DEFAULT NULL,
            participants VARCHAR(40) DEFAULT NULL,
            period VARCHAR(80) DEFAULT NULL,
            hotel VARCHAR(80) DEFAULT NULL,
            message TEXT DEFAULT NULL,
            consent_privacy TINYINT(1) NOT NULL DEFAULT 0,
            consent_marketing TINYINT(1) NOT NULL DEFAULT 0,
            privacy_version VARCHAR(32) DEFAULT NULL,
            utm_source VARCHAR(190) DEFAULT NULL,
            utm_medium VARCHAR(190) DEFAULT NULL,
            utm_campaign VARCHAR(190) DEFAULT NULL,
            utm_content VARCHAR(190) DEFAULT NULL,
            utm_term VARCHAR(190) DEFAULT NULL,
            referrer VARCHAR(255) DEFAULT NULL,
            landing_path VARCHAR(190) DEFAULT NULL,
            ip VARCHAR(45) DEFAULT NULL,
            user_agent VARCHAR(255) DEFAULT NULL,
            INDEX (created_at), INDEX (email)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );

    // Registro consensi cookie (banner accetta/rifiuta) — auditabile
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS cookie_consents (
            id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            created_at DATETIME NOT NULL,
            consent_id VARCHAR(64) DEFAULT NULL,
            choice VARCHAR(16) NOT NULL,
            categories VARCHAR(190) DEFAULT NULL,
            policy_version VARCHAR(32) DEFAULT NULL,
            locale VARCHAR(5) DEFAULT NULL,
            ip VARCHAR(45) DEFAULT NULL,
            user_agent VARCHAR(255) DEFAULT NULL,
            INDEX (created_at), INDEX (consent_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );
}
