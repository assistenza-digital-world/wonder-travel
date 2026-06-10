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

$ALLOWED_ORIGIN = 'https://wondertravel-tour.com'; // origine consentita (stesso dominio del banner). '*' = qualsiasi.

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

// Rate-limit anti-abuso: max 30 registrazioni consenso per IP ogni 10 minuti.
require_once __DIR__ . '/ratelimit.php';
if (!wt_rate_ok('consent_' . wt_client_ip(), 30, 600)) {
    out(429, ['ok' => false, 'error' => 'Too many requests']);
}

$raw = file_get_contents('php://input', false, null, 0, 8192);
$data = json_decode($raw, true);
if (!is_array($data)) {
    out(400, ['ok' => false, 'error' => 'Invalid JSON']);
}

function f($d, $k) { return isset($d[$k]) ? trim((string)$d[$k]) : ''; }

$choice = f($data, 'choice');
if (!in_array($choice, ['accepted', 'rejected', 'custom'], true)) {
    out(422, ['ok' => false, 'error' => 'Invalid choice']);
}

$consentId     = substr(f($data, 'consentId'), 0, 64);
$event         = substr(f($data, 'event'), 0, 16);
$categories    = substr(f($data, 'categories'), 0, 190);
$analytics     = !empty($data['analytics']) ? 1 : 0;
$marketing     = !empty($data['marketing']) ? 1 : 0;
$policyVersion = substr(f($data, 'policyVersion'), 0, 32);
$locale        = substr(f($data, 'locale'), 0, 5);
$ip = wt_client_ip();
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
         (created_at, consent_id, choice, event, categories, analytics_consent, marketing_consent, policy_version, locale, ip, user_agent)
         VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    $stmt->execute([$consentId, $choice, $event, $categories, $analytics, $marketing, $policyVersion, $locale, $ip, $ua]);
    out(200, ['ok' => true, 'stored' => true]);
} catch (Throwable $e) {
    error_log('WT consent insert failed: ' . $e->getMessage());
    out(500, ['ok' => false, 'error' => 'Not stored']);
}
