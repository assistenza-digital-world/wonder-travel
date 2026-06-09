/*!
 * Wonder Travel - Consent Manager (GDPR/LGPD)
 * Banner cookie granulare + Google Consent Mode v2 + caricamento condizionato
 * di Google Analytics 4 e Meta Pixel, registrazione del consenso su DB (/consent.php),
 * revoca tramite pulsante persistente. Vanilla JS, nessuna dipendenza.
 *
 * CONFIG: inserisci ga4Id (G-XXXX) e metaPixelId quando disponibili. Finché sono
 * vuoti NESSUNO script di tracciamento viene caricato (solo registrazione consenso).
 */
(function () {
  'use strict';
  var CONFIG = {
    policyVersion: '2026-06-09',     // deve combaciare con cookiePolicyVersion del sito
    consentApiUrl: '/consent.php',
    ga4Id: '',                       // <-- Measurement ID GA4 (es. "G-XXXXXXX")
    metaPixelId: '',                 // <-- ID Meta Pixel (es. "123456789012345")
    maxAgeDays: 365                  // ri-chiede il consenso dopo 12 mesi
  };

  var LS_STATE = 'wt_consent_state';   // {v, ts, analytics, marketing, id}
  var LS_LEGACY = 'wt_cookie_consent'; // 'accepted' | 'rejected' (compat banner precedente)
  var LS_ID = 'wt_consent_id';

  var lang = ((document.documentElement.lang || '').toLowerCase().indexOf('pt') === 0 ||
              location.pathname.indexOf('/pt-br') === 0) ? 'pt' : 'it';
  var base = location.pathname.indexOf('/pt-br') === 0 ? '/pt-br' : '/it';

  var STR = {
    it: {
      title: 'Rispettiamo la tua privacy',
      body: 'Usiamo cookie tecnici necessari al sito e, solo con il tuo consenso, cookie di statistica (Google Analytics) e di marketing (Meta Pixel). Puoi accettarli, rifiutarli o scegliere quali attivare.',
      accept: 'Accetta tutti', reject: 'Rifiuta', customize: 'Personalizza', save: 'Salva preferenze',
      privacy: 'Privacy Policy', cookie: 'Cookie Policy',
      manage: 'Preferenze cookie',
      cTech: 'Tecnici (necessari)', cTechD: 'Indispensabili al funzionamento del sito. Sempre attivi.',
      cStat: 'Statistica', cStatD: 'Google Analytics 4: statistiche aggregate sull’uso del sito.',
      cMkt: 'Marketing', cMktD: 'Meta Pixel: misurazione campagne e annunci pertinenti.',
      always: 'Sempre attivi'
    },
    pt: {
      title: 'Respeitamos a sua privacidade',
      body: 'Usamos cookies técnicos necessários ao site e, somente com o seu consentimento, cookies de estatística (Google Analytics) e de marketing (Meta Pixel). Pode aceitar, recusar ou escolher quais ativar.',
      accept: 'Aceitar todos', reject: 'Recusar', customize: 'Personalizar', save: 'Guardar preferências',
      privacy: 'Política de Privacidade', cookie: 'Política de Cookies',
      manage: 'Preferências de cookies',
      cTech: 'Técnicos (necessários)', cTechD: 'Indispensáveis ao funcionamento do site. Sempre ativos.',
      cStat: 'Estatística', cStatD: 'Google Analytics 4: estatísticas agregadas de uso do site.',
      cMkt: 'Marketing', cMktD: 'Meta Pixel: medição de campanhas e anúncios relevantes.',
      always: 'Sempre ativos'
    }
  }[lang];

  // ---- Google Consent Mode v2: default DENIED prima di tutto ----
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied', analytics_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500
  });

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'c_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
  function getId() {
    try { var e = localStorage.getItem(LS_ID); if (!e) { e = uuid(); localStorage.setItem(LS_ID, e); } return e; }
    catch (x) { return uuid(); }
  }
  function loadState() { try { return JSON.parse(localStorage.getItem(LS_STATE)); } catch (x) { return null; } }
  function needsConsent() {
    var st = loadState();
    if (!st || st.v !== CONFIG.policyVersion) return true;
    return (Date.now() - st.ts) / 86400000 > CONFIG.maxAgeDays;
  }

  var gaLoaded = false, metaLoaded = false;
  function loadGA() {
    if (gaLoaded || !CONFIG.ga4Id) return; gaLoaded = true;
    var s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(CONFIG.ga4Id);
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', CONFIG.ga4Id, { anonymize_ip: true });
  }
  function loadMeta() {
    if (metaLoaded || !CONFIG.metaPixelId) return; metaLoaded = true;
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', CONFIG.metaPixelId);
    window.fbq('track', 'PageView');
  }

  function applyConsent(st) {
    gtag('consent', 'update', {
      analytics_storage: st.analytics ? 'granted' : 'denied',
      ad_storage: st.marketing ? 'granted' : 'denied',
      ad_user_data: st.marketing ? 'granted' : 'denied',
      ad_personalization: st.marketing ? 'granted' : 'denied'
    });
    if (st.analytics) loadGA();
    if (st.marketing) loadMeta();
  }

  function postConsent(st, choice) {
    var cats = ['technical'];
    if (st.analytics) cats.push('analytics');
    if (st.marketing) cats.push('marketing');
    try {
      fetch(CONFIG.consentApiUrl, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, keepalive: true,
        body: JSON.stringify({
          consentId: getId(), choice: choice, event: choice,
          categories: cats.join(','), analytics: !!st.analytics, marketing: !!st.marketing,
          technical: true, policyVersion: CONFIG.policyVersion, locale: lang
        })
      }).catch(function () {});
    } catch (x) {}
  }

  function commit(analytics, marketing, choice) {
    var st = { v: CONFIG.policyVersion, ts: Date.now(), analytics: !!analytics, marketing: !!marketing, id: getId() };
    try { localStorage.setItem(LS_STATE, JSON.stringify(st)); } catch (x) {}
    try { localStorage.setItem(LS_LEGACY, (analytics || marketing) ? 'accepted' : 'rejected'); } catch (x) {}
    applyConsent(st);
    postConsent(st, choice);
    removeBanner();
  }

  // ---------------- UI ----------------
  var TEAL = '#0d7a74', INK = '#0f2e2c';
  function el(tag, css, html) { var n = document.createElement(tag); if (css) n.style.cssText = css; if (html != null) n.innerHTML = html; return n; }
  var root = null;

  function removeBanner() { if (root && root.parentNode) root.parentNode.removeChild(root); root = null; }

  function buildBanner(expanded) {
    removeBanner();
    var st = loadState() || { analytics: false, marketing: false };
    root = el('div', 'position:fixed;inset:0;z-index:2147483600;display:flex;align-items:flex-end;justify-content:center;background:rgba(15,46,44,.35);padding:12px;');
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', STR.title);
    var card = el('div', 'background:#fff;max-width:680px;width:100%;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.25);padding:20px 22px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:' + INK + ';max-height:90vh;overflow:auto;');
    var h = el('div', 'font-size:17px;font-weight:700;margin-bottom:6px;', STR.title);
    var pLink = base + '/privacy', cLink = base + '/cookie';
    var body = el('p', 'font-size:14px;line-height:1.5;color:#3f4f4e;margin:0 0 14px;',
      STR.body + ' <a href="' + cLink + '" style="color:' + TEAL + ';font-weight:600;text-decoration:underline;">' + STR.cookie + '</a> · <a href="' + pLink + '" style="color:' + TEAL + ';font-weight:600;text-decoration:underline;">' + STR.privacy + '</a>');
    card.appendChild(h); card.appendChild(body);

    // granular panel
    var panel = el('div', 'margin:0 0 14px;border-top:1px solid #eee;padding-top:12px;' + (expanded ? '' : 'display:none;'));
    function row(label, desc, checked, disabled, id) {
      var r = el('label', 'display:flex;gap:10px;align-items:flex-start;padding:8px 0;cursor:' + (disabled ? 'default' : 'pointer') + ';');
      var cb = el('input'); cb.type = 'checkbox'; cb.checked = checked; cb.disabled = disabled; cb.id = id;
      cb.style.cssText = 'margin-top:3px;width:18px;height:18px;accent-color:' + TEAL + ';flex:none;';
      var tx = el('div', 'flex:1;');
      tx.appendChild(el('div', 'font-size:14px;font-weight:600;', label + (disabled ? ' <span style="font-weight:400;color:#7a8a89;">(' + STR.always + ')</span>' : '')));
      tx.appendChild(el('div', 'font-size:12.5px;color:#6b7b7a;margin-top:2px;', desc));
      r.appendChild(cb); r.appendChild(tx); return r;
    }
    panel.appendChild(row(STR.cTech, STR.cTechD, true, true, 'wt_c_tech'));
    panel.appendChild(row(STR.cStat, STR.cStatD, !!st.analytics, false, 'wt_c_stat'));
    panel.appendChild(row(STR.cMkt, STR.cMktD, !!st.marketing, false, 'wt_c_mkt'));
    card.appendChild(panel);

    // buttons
    var btns = el('div', 'display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end;');
    function button(label, primary, onclick) {
      var b = el('button', 'min-height:44px;padding:0 18px;border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;border:1px solid ' +
        (primary ? TEAL : '#cdd6d5') + ';background:' + (primary ? TEAL : '#fff') + ';color:' + (primary ? '#fff' : INK) + ';', label);
      b.type = 'button'; b.onclick = onclick; return b;
    }
    var bReject = button(STR.reject, false, function () { commit(false, false, 'rejected'); });
    var bCustom = button(STR.customize, false, function () { panel.style.display = 'block'; bCustom.style.display = 'none'; bSave.style.display = ''; });
    var bSave = button(STR.save, false, function () {
      commit(document.getElementById('wt_c_stat').checked, document.getElementById('wt_c_mkt').checked, 'custom');
    });
    bSave.style.display = expanded ? '' : 'none';
    if (expanded) bCustom.style.display = 'none';
    var bAccept = button(STR.accept, true, function () { commit(true, true, 'accepted'); });
    btns.appendChild(bReject); btns.appendChild(bCustom); btns.appendChild(bSave); btns.appendChild(bAccept);
    card.appendChild(btns);

    root.appendChild(card);
    document.body.appendChild(root);
    try { bAccept.focus(); } catch (x) {}
  }

  // persistent "manage" button (revoca/modifica — diritto di revoca facile come il consenso)
  function manageButton() {
    if (document.getElementById('wt-cookie-manage')) return;
    var b = el('button', 'position:fixed;left:14px;bottom:14px;z-index:2147483000;min-height:40px;padding:0 14px;border-radius:999px;border:1px solid #cdd6d5;background:#fff;color:' + INK + ';font:600 12.5px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.12);cursor:pointer;display:flex;align-items:center;gap:7px;');
    b.id = 'wt-cookie-manage'; b.type = 'button'; b.setAttribute('aria-label', STR.manage);
    b.innerHTML = '<span aria-hidden="true">🍪</span><span>' + STR.manage + '</span>';
    b.onclick = function () { buildBanner(true); };
    document.body.appendChild(b);
  }

  window.wtConsent = { open: function () { buildBanner(true); }, state: loadState };

  function init() {
    var st = loadState();
    if (st && !needsConsent()) applyConsent(st); // riapplica il consenso già dato (carica GA/Meta se concessi)
    manageButton();
    if (needsConsent()) buildBanner(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
