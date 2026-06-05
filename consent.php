<?php
/**
 * Wonder Travel - Registro consenso cookie (banner).
 *
 * Riceve un POST JSON dal banner cookie e salva la scelta nel database
 * (tabella cookie_consents) per avere un registro auditabile (GDPR/LGPD).
 *
 * Body atteso: { consentId, choice: "accepted"|"rejected", categories,
 *                policyVersion, locale }
 *
 * Endpoint usato dal front-end via VITE_CONSENT_API_URL=/consent.php
 */

$ALLOWED_ORIGIN = '*'; // metti il tuo dominio per limitare

header('Access-Control-Allow-Origin: ' . $ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=utf-8');

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

$raw = file_get_contents('php://input', false, null, 0, 8192);
$data = json_decode($raw, true);
if (!is_array($data)) {
    out(400, ['ok' => false, 'error' => 'Invalid JSON']);
}

function f($d, $k) { return isset($d[$k]) ? trim((string)$d[$k]) : ''; }

$choice = f($data, 'choice');
if (!in_array($choice, ['accepted', 'rejected'], true)) {
    out(422, ['ok' => false, 'error' => 'Invalid choice']);
}

$consentId     = substr(f($data, 'consentId'), 0, 64);
$categories    = substr(f($data, 'categories'), 0, 190);
$policyVersion = substr(f($data, 'policyVersion'), 0, 32);
$locale        = substr(f($data, 'locale'), 0, 5);
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$ua = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 255);

require_once __DIR__ . '/db.php';
$pdo = wt_db();
if (!$pdo) {
    // DB non configurato: rispondi comunque ok (il banner ha già il localStorage)
    out(200, ['ok' => true, 'stored' => false]);
}

try {
    $stmt = $pdo->prepare(
        "INSERT INTO cookie_consents
         (created_at, consent_id, choice, categories, policy_version, locale, ip, user_agent)
         VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?)"
    );
    $stmt->execute([$consentId, $choice, $categories, $policyVersion, $locale, $ip, $ua]);
    out(200, ['ok' => true, 'stored' => true]);
} catch (Throwable $e) {
    error_log('WT consent insert failed: ' . $e->getMessage());
    out(500, ['ok' => false, 'error' => 'Not stored']);
}
