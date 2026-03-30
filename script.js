/* ════════════════════════════════════════════
   BillbyVOForce — Supabase Edition
   ════════════════════════════════════════════ */

// ─── SUPABASE CONFIG ─────────────────────────
const SUPABASE_URL = 'https://hucfpspphbbxztcduiqz.supabase.co';
const SUPABASE_KEY = 'sb_publishable_mDonpTjarnpJFYO4uYe4XA_3tHJrzd3';

// Load Supabase from CDN (added to index.html <head>)
const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

// ─── AVOA RATE CARD SERVICES ─────────────────
const AVOA_SERVICES = {
  'Radio': [
    { name: 'Standard Radio Commercial', desc: 'Standard Radio Commercial — FMCG/Family/Household/Electronic Brand', amount: 100000 },
    { name: 'Premium Radio Commercial', desc: 'Premium Radio Commercial — Political/Telecom/Oil & Gas/Financial/Luxury Brand', amount: 150000 },
    { name: 'Radio Promo/Teaser', desc: 'Radio Promo/Teaser — Audience awareness of upcoming events or giveaways', amount: 100000 },
    { name: 'Radio Mnemonic/Pay-Off', desc: 'Radio Mnemonic/Pay-Off', amount: 100000 },
    { name: 'Radio Sponsorship Ident/Bumper', desc: 'Radio Sponsorship Identifier/Bumper — Opening and Closing program components', amount: 100000 },
    { name: 'Radio End Board/Tag', desc: 'Radio End Board/Tag — Date, time, phone, website, legal disclaimer at end of commercial', amount: 100000 },
    { name: 'Radio Timecheck', desc: 'Radio Timecheck — Branded time alert with call to action', amount: 50000 },
  ],
  'TV': [
    { name: 'Standard TV Commercial', desc: 'Standard TV Commercial — FMCG/Family/Household/Electronic Brand', amount: 150000 },
    { name: 'Premium TV Commercial', desc: 'Premium TV Commercial — Political/Telecom/Oil & Gas/Financial/Luxury Brand', amount: 250000 },
    { name: 'TV Promo/Teaser', desc: 'TV Promo/Teaser — Audience awareness of upcoming events or giveaways', amount: 100000 },
    { name: 'TV Sponsorship Ident/Bumper (Program)', desc: 'TV Program Sponsorship Ident/Bumper — per set, per program', amount: 150000 },
    { name: 'TV Sponsorship Ident/Bumper (Franchise)', desc: 'TV Franchise Ident/Bumper — per set, per season', amount: 300000 },
    { name: 'TV End Board/Tag', desc: 'TV End Board/Tag — Date, time, phone, website, legal disclaimer at end of commercial', amount: 150000 },
    { name: 'TV Trailer', desc: 'TV Trailer — Promotional commercial for a film or video release', amount: 150000 },
  ],
  'Corporate': [
    { name: 'Corporate External Presentation', desc: 'Corporate External Presentation — Conference, concert or live event (Non-Broadcast)', amount: 500000 },
    { name: 'Corporate Audio Guide', desc: 'Corporate Audio Guide — Museum/Exhibition/Tour audio guide (under 20 minutes)', amount: 150000 },
    { name: 'Corporate Generic VO', desc: 'Corporate Generic VO — Company audiovisual website content, up to 5 recorded minutes', amount: 150000 },
    { name: 'Corporate Internal Presentation', desc: 'Corporate Internal Presentation — Company retreats, AGMs, Stakeholder Meetings', amount: 150000 },
  ],
  'E-Learning': [
    { name: 'E-Learning (Minimum Charge)', desc: 'E-Learning Voiceover — Minimum project charge', amount: 100000 },
    { name: 'E-Learning Per Finished Hour', desc: 'E-Learning Per Finished Hour — includes editing, proofing, mastering', amount: 900000 },
    { name: 'E-Learning Per Raw Hour', desc: 'E-Learning Per Raw Hour — RAW recording only, no editing', amount: 400000 },
  ],
  'Explainer Videos': [
    { name: 'Explainer Video (Up to 90 seconds)', desc: 'Explainer Video — Single video up to 90 seconds, 1–2 year usage', amount: 200000 },
    { name: 'Explainer Video (Bulk Rate, up to 175 words)', desc: 'Explainer Video — Bulk rate, up to 175 words per video, no editing', amount: 150000 },
  ],
  'Audiobooks': [
    { name: 'Audiobook Per Finished Hour (PFH)', desc: 'Audiobook Per Finished Hour — clean recording delivery, no additional editing', amount: 180000 },
    { name: 'Audiobook Per Raw Hour', desc: 'Audiobook Per Raw Hour — RAW narration only, no editing', amount: 150000 },
    { name: 'Audiobook Production Add-On (Per Hour)', desc: 'Audiobook Production Add-On — independent editing, proofing and mastering, per hour', amount: 80000 },
  ],
  'Audio Drama': [
    { name: 'Audio Drama — Non-Commercial (5–30 min)', desc: 'Audio Drama (Non-Commercial) — per artist, per character, 5–30 minute episode', amount: 50000 },
    { name: 'Audio Drama — Non-Commercial (31–60 min)', desc: 'Audio Drama (Non-Commercial) — per artist, per character, 31–60 minute episode', amount: 80000 },
    { name: 'Audio Drama — Commercial (5–30 min)', desc: 'Audio Drama (Commercial) — per artist, per character, 5–30 minute episode', amount: 80000 },
    { name: 'Audio Drama — Commercial (31–60 min)', desc: 'Audio Drama (Commercial) — per artist, per character, 31–60 minute episode', amount: 100000 },
  ],
  'Animation': [
    { name: 'Animated Series — Episode Rate', desc: 'Animated Series Episode Rate — per character, per episode', amount: 250000 },
    { name: 'Animated Series — Session Rate (per hour)', desc: 'Animated Series Session Rate — first hour', amount: 200000 },
    { name: 'Animated Series — Half Day Rate', desc: 'Animated Series Half Day Session Rate', amount: 500000 },
    { name: 'Animated Series — Full Day Rate', desc: 'Animated Series Full Day Session Rate', amount: 800000 },
  ],
  'IVR': [
    { name: 'IVR — Per Prompt (Minimum Charge)', desc: 'IVR Interactive Voice Response — per prompt, minimum charge, RAW recording', amount: 300000 },
    { name: 'IVR — Automated Call Blast (up to 5 min)', desc: 'IVR Automated Call Blast Service — up to 5 recorded minutes, RAW recording', amount: 100000 },
  ],
  'Internet': [
    { name: 'Internet Pre-Roll Commercial', desc: 'Internet Pre-Roll Commercial — YouTube/Streaming platforms, per commercial', amount: 100000 },
    { name: 'Internet Generic Online Ad', desc: 'Internet Generic Online Ad — stand-alone commercial for internet use only', amount: 100000 },
    { name: 'Internet Explainer/Infomercial', desc: 'Internet Explainer/Infomercial — up to 5 recorded minutes', amount: 150000 },
    { name: 'YouTube Content (Non-Commercial)', desc: 'YouTube Content (Non-Commercial) — up to 5 recorded minutes', amount: 150000 },
  ],
  'Podcast': [
    { name: 'Podcast Intro/Outro', desc: 'Podcast Intro/Outro', amount: 150000 },
  ],
  'Cinema': [
    { name: 'Cinema Commercial', desc: 'Cinema Commercial — per artist, per character/accent, annually', amount: 100000 },
  ],
  'ADR': [
    { name: 'Audio Description (per hour)', desc: 'Audio Description — voicing on-screen action for visually impaired audience, per hour', amount: 150000 },
    { name: 'Reversion Dubbing (per hour)', desc: 'Reversion Dubbing — voicing in a different language, per hour', amount: 150000 },
    { name: 'Single ADR Lip Sync — Film/Series (per hour)', desc: 'Single ADR (Lip Sync) for Film or Series — per hour', amount: 150000 },
    { name: 'Single ADR Lip Sync — TV Commercial', desc: 'Single ADR (Lip Sync) for TV Commercial — per character, per commercial', amount: 150000 },
  ],
  'Games': [
    { name: 'Video Game VO (per hour)', desc: 'Video Game Voiceover — per hour (minimum 2–4 hours)', amount: 200000 },
    { name: 'Toy VO (per hour)', desc: 'Toy Voiceover — per hour', amount: 50000 },
    { name: 'Mobile Game App (per session)', desc: 'Mobile Game App Voiceover — per session', amount: 600000 },
  ],
};

// ─── STATE ───────────────────────────────────
const App = {
  currentUser: null,   // { id, email, name, isLocked, isAdmin }
  currentReceipt: null,
  logoBase64: null,    // preview only; actual upload goes to Supabase Storage
  logoFile: null,      // File object for upload
  brandColor: '#e63030',
  fontStyle: 'DM Sans',
  savedLogoUrl: null,  // permanent logo from profile
  profileData: null,   // { name, phone, address, bankName, accountNumber, accountName }
  profileLogoFile: null,
  lineItems: [{ desc: '', qty: 1, rate: 0 }],  // multi-service line items
};

// ─── HELPERS ─────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function generateReceiptNum() {
  const count = (parseInt(localStorage.getItem('vof_receipt_counter') || '1000', 10)) + 1;
  localStorage.setItem('vof_receipt_counter', String(count));
  return `VO-${String(count).padStart(6, '0')}`;
}

function formatAmount(amount, currency) {
  const symbols = { NGN: '₦', USD: '$', GBP: '£', EUR: '€' };
  const sym = symbols[currency] || currency;
  return `${sym}${parseFloat(amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function computeAmounts(amount, vatEnabled, vatRate, discEnabled = false, discType = 'percent', discValue = 0) {
  const subtotal = parseFloat(amount || 0);
  const discAmt = discEnabled
    ? (discType === 'percent' ? subtotal * (parseFloat(discValue || 0) / 100) : parseFloat(discValue || 0))
    : 0;
  const afterDisc = subtotal - Math.min(discAmt, subtotal);
  const vatAmt = vatEnabled ? afterDisc * (parseFloat(vatRate || 0) / 100) : 0;
  const total = afterDisc + vatAmt;
  return { subtotal, discAmt, afterDisc, vatAmt, total };
}

function getLineItemsSubtotal(items) {
  return (items || []).reduce((s, it) => s + parseFloat(it.qty || 1) * parseFloat(it.rate || 0), 0);
}

function buildLineItemsTableHTML(items, currency) {
  if (!items || items.length === 0) return '';
  const rows = items.map(it => {
    const sub = parseFloat(it.qty || 1) * parseFloat(it.rate || 0);
    return `<tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;word-break:break-word">${escapeHTML(it.desc || '')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555;text-align:center;white-space:nowrap">${escapeHTML(String(it.qty || 1))}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555;text-align:right;white-space:nowrap">${formatAmount(it.rate || 0, currency)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#111;text-align:right;white-space:nowrap">${formatAmount(sub, currency)}</td>
    </tr>`;
  }).join('');
  return `<table style="width:100%;border-collapse:collapse;margin-bottom:16px">
    <thead>
      <tr style="background:#f8f8f8">
        <th style="padding:8px 6px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;text-align:left;border-bottom:2px solid #ebebeb">Description</th>
        <th style="padding:8px 6px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;text-align:center;border-bottom:2px solid #ebebeb">Qty</th>
        <th style="padding:8px 6px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;text-align:right;border-bottom:2px solid #ebebeb">Rate</th>
        <th style="padding:8px 6px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;text-align:right;border-bottom:2px solid #ebebeb">Amount</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function buildAmountSectionHTML(amount, currency, vatEnabled, vatRate, hex, amountPaid, discEnabled = false, discType = 'percent', discValue = 0) {
  const amountBg = hex + '18';
  const { subtotal, discAmt, afterDisc, vatAmt, total } = computeAmounts(amount, vatEnabled, vatRate, discEnabled, discType, discValue);
  let html = '';
  if (discEnabled && discAmt > 0 || vatEnabled) {
    html += `<div class="receipt-breakdown">`;
    html += `<div class="receipt-breakdown-row"><span class="receipt-breakdown-label">Subtotal</span><span class="receipt-breakdown-val">${formatAmount(subtotal, currency)}</span></div>`;
    if (discEnabled && discAmt > 0) {
      const discLabel = discType === 'percent' ? `Discount (${discValue}%)` : 'Discount';
      html += `<div class="receipt-breakdown-row"><span class="receipt-breakdown-label">${discLabel}</span><span class="receipt-breakdown-val" style="color:#16a34a">−${formatAmount(discAmt, currency)}</span></div>`;
    }
    if (vatEnabled) {
      html += `<div class="receipt-breakdown-row"><span class="receipt-breakdown-label">VAT (${vatRate}%)</span><span class="receipt-breakdown-val">${formatAmount(vatAmt, currency)}</span></div>`;
    }
    html += `</div>`;
  }
  html += `<div class="receipt-amount-row" style="background:${amountBg};border:1px solid ${hex}30">
    <div class="receipt-amount-label" style="color:${hex}">Total Amount</div>
    <div class="receipt-amount-value">${formatAmount(total, currency)}</div>
  </div>`;
  const paid = parseFloat(amountPaid || 0);
  if (paid > 0 && paid < total) {
    const balance = total - paid;
    html += `<div class="receipt-payment-breakdown">
      <div class="receipt-payment-row"><span class="receipt-payment-label">Amount Paid</span><span class="receipt-payment-val receipt-val-paid">${formatAmount(paid, currency)}</span></div>
      <div class="receipt-payment-row receipt-balance-row"><span class="receipt-payment-label">Balance Due</span><span class="receipt-payment-val receipt-val-balance">${formatAmount(balance, currency)}</span></div>
    </div>`;
  }
  return html;
}

function buildFromContactHTML(email, phone, address) {
  const lines = [];
  if (email) lines.push(`<div class="receipt-contact-line">${escapeHTML(email)}</div>`);
  if (phone) lines.push(`<div class="receipt-contact-line">${escapeHTML(phone)}</div>`);
  if (address) lines.push(`<div class="receipt-contact-line">${escapeHTML(address)}</div>`);
  return lines.length ? `<div class="receipt-contact-details">${lines.join('')}</div>` : '';
}

function buildTermsHTML(terms) {
  if (!terms) return '';
  const lines = escapeHTML(terms).replace(/\n/g, '<br>');
  return `<div class="receipt-terms"><div class="receipt-terms-label">TERMS &amp; CONDITIONS</div><div class="receipt-terms-body">${lines}</div></div>`;
}

function buildAccountDetailsHTML(bankName, accountNumber, accountName) {  if (!bankName && !accountNumber && !accountName) return '';
  const rows = [];
  if (bankName) rows.push(`<div class="receipt-account-row"><span class="receipt-account-key">Bank</span><span class="receipt-account-val">${escapeHTML(bankName)}</span></div>`);
  if (accountNumber) rows.push(`<div class="receipt-account-row"><span class="receipt-account-key">Account No.</span><span class="receipt-account-val receipt-account-number">${escapeHTML(accountNumber)}</span></div>`);
  if (accountName) rows.push(`<div class="receipt-account-row"><span class="receipt-account-key">Account Name</span><span class="receipt-account-val">${escapeHTML(accountName)}</span></div>`);
  return `<div class="receipt-account-details"><div class="receipt-account-label">PAYMENT DETAILS</div>${rows.join('')}</div>`;
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}

// ─── TOAST ───────────────────────────────────
function toast(msg, type = 'info') {
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const iconSpan = document.createElement('span');
  iconSpan.textContent = icons[type] || icons.info;
  const msgSpan = document.createElement('span');
  msgSpan.textContent = msg;
  t.appendChild(iconSpan);
  t.appendChild(msgSpan);
  $('#toast-container').appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0'; t.style.transform = 'translateX(20px)';
    t.style.transition = 'all 0.3s'; setTimeout(() => t.remove(), 300);
  }, 3500);
}

// ─── PAGE ROUTING ─────────────────────────────
function showPage(pageId) {
  $$('.page').forEach(p => p.classList.remove('active'));
  const page = $(`#page-${pageId}`);
  if (page) page.classList.add('active');
  $$('.nav-link[data-page]').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });
}

function showNav(show) {
  $('#main-nav').style.display = show ? 'flex' : 'none';
}

// ─── AUTH ─────────────────────────────────────
function initAuth() {
  $$('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      $('#form-login').style.display = target === 'login' ? 'block' : 'none';
      $('#form-signup').style.display = target === 'signup' ? 'block' : 'none';
      $('#form-forgot').style.display = 'none';
      $('#auth-tabs-wrap').style.display = 'flex';
    });
  });

  $('#btn-login').addEventListener('click', handleLogin);
  $('#login-password').addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });
  $('#btn-signup').addEventListener('click', handleSignup);
  $('#signup-password').addEventListener('keydown', e => { if (e.key === 'Enter') handleSignup(); });
  $('#btn-forgot').addEventListener('click', handleForgotPassword);
  $('#go-signup').addEventListener('click', e => { e.preventDefault(); $('[data-tab="signup"]').click(); });
  $('#go-login').addEventListener('click', e => { e.preventDefault(); $('[data-tab="login"]').click(); });
  $('#go-forgot').addEventListener('click', e => { e.preventDefault(); showForgotForm(); });
  $('#go-back-login').addEventListener('click', e => { e.preventDefault(); showLoginForm(); });
}

function showForgotForm() {
  clearErrors();
  $('#form-login').style.display = 'none';
  $('#form-signup').style.display = 'none';
  $('#form-forgot').style.display = 'block';
  $('#auth-tabs-wrap').style.display = 'none';
}

function showLoginForm() {
  clearErrors();
  $('#form-forgot').style.display = 'none';
  $('#form-signup').style.display = 'none';
  $('#form-login').style.display = 'block';
  $('#auth-tabs-wrap').style.display = 'flex';
  $$('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'login'));
}

// ── SUPABASE AUTH HANDLERS ──
async function handleLogin() {
  const email = $('#login-email').value.trim().toLowerCase();
  const password = $('#login-password').value;
  clearErrors();
  if (!email) return showError('login-email', 'Email is required');
  if (!password) return showError('login-password', 'Password is required');

  const btn = $('#btn-login');
  btn.textContent = 'Logging in…'; btn.disabled = true;

  const { data, error } = await sb.auth.signInWithPassword({ email, password });

  btn.textContent = 'Login →'; btn.disabled = false;

  if (error) {
    if (error.message.includes('Invalid login')) return showError('login-password', 'Incorrect email or password');
    return showError('login-email', error.message);
  }

  const profile = await fetchProfile(data.user.id);
  App.currentUser = {
    id: data.user.id,
    email: data.user.email,
    name: profile?.name || email,
    isLocked: profile?.is_locked || false,
    isAdmin: profile?.is_admin || false,
  };
  enterApp();
}

async function handleSignup() {
  const name = $('#signup-name').value.trim();
  const email = $('#signup-email').value.trim().toLowerCase();
  const password = $('#signup-password').value;
  clearErrors();
  if (!name) return showError('signup-name', 'Business name is required');
  if (!email || !email.includes('@')) return showError('signup-email', 'Valid email is required');
  if (password.length < 6) return showError('signup-password', 'Password must be at least 6 characters');

  const btn = $('#btn-signup');
  btn.textContent = 'Creating account…'; btn.disabled = true;

  const { data, error } = await sb.auth.signUp({
    email, password,
    options: { data: { name } }
  });

  btn.textContent = 'Create Account →'; btn.disabled = false;

  if (error) return showError('signup-email', error.message);

  // Insert profile manually in case trigger hasn't fired yet
  if (data.user) {
    await sb.from('profiles').upsert({ id: data.user.id, name, email });
    App.currentUser = { id: data.user.id, email, name, isLocked: false, isAdmin: false };
    App.profileData = { name, phone: '', address: '', bankName: '', accountNumber: '', accountName: '' };
    enterApp(true); // go to profile setup first
    toast(`Welcome, ${name}! Complete your profile below. 🎙️`, 'success');
  }
}

async function handleForgotPassword() {
  const email = $('#forgot-email').value.trim().toLowerCase();
  clearErrors();
  if (!email || !email.includes('@')) return showError('forgot-email', 'Valid email is required');

  const btn = $('#btn-forgot');
  btn.textContent = 'Sending…'; btn.disabled = true;

  const { error } = await sb.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '/index.html'
  });

  btn.textContent = 'Reset Password →'; btn.disabled = false;

  if (error) return showError('forgot-email', error.message);
  toast('Password reset email sent! Check your inbox.', 'success');
  showLoginForm();
}

async function fetchProfile(userId) {
  const { data } = await sb.from('profiles').select('*').eq('id', userId).single();
  if (data) {
    if (data.logo_url) {
      App.savedLogoUrl = data.logo_url;
      App.logoBase64 = data.logo_url;
    }
    if (data.brand_color) App.brandColor = data.brand_color;
    if (data.font_style) App.fontStyle = data.font_style;
    App.profileData = {
      name: data.name || '',
      phone: data.phone || '',
      address: data.address || '',
      bankName: data.bank_name || '',
      accountNumber: data.account_number || '',
      accountName: data.account_name || '',
      brandColor: data.brand_color || '#e63030',
      fontStyle: data.font_style || 'DM Sans',
    };
  }
  return data;
}

function showError(fieldId, msg) {
  const field = $(`#${fieldId}`);
  if (!field) return;
  field.style.borderColor = 'var(--accent)';
  const err = document.createElement('div');
  err.className = 'form-error';
  err.textContent = msg;
  field.parentNode.appendChild(err);
}

function clearErrors() {
  $$('.form-error').forEach(e => e.remove());
  $$('.form-input').forEach(f => f.style.borderColor = '');
}

function enterApp(goToProfile = false) {
  showNav(true);
  updateNavUser();
  $('#nav-profile-link').style.display = 'inline-flex';
  if (App.currentUser?.isAdmin) $('#nav-admin-link').style.display = 'inline-flex';
  initDashboard();
  if (goToProfile) {
    showPage('profile');
    initProfile(true);
  } else {
    showPage('generator');
    initGenerator();
  }
}

async function handleLogout() {
  await sb.auth.signOut();
  App.currentUser = null;
  App.logoBase64 = null;
  App.logoFile = null;
  showNav(false);
  showPage('auth');
  $('#login-email').value = '';
  $('#login-password').value = '';
}

function updateNavUser() {
  const el = $('#nav-username');
  if (el && App.currentUser) el.textContent = App.currentUser.name;
  // Hide admin/profile links by default; enterApp shows them
  $('#nav-admin-link').style.display = 'none';
  $('#nav-profile-link').style.display = 'none';
}

// ─── GENERATOR ────────────────────────────────
function initGenerator() {
  if (App.currentUser) $('#field-artist').value = App.currentUser.name;
  $('#field-date').value = new Date().toISOString().split('T')[0];
  initServiceQuickFill();

  // Apply saved branding
  const fontEl = $('#field-font');
  if (fontEl) fontEl.value = App.fontStyle || 'DM Sans';

  // Pre-fill bank details from profile
  if (App.profileData) {
    $('#field-bank-name').value = App.profileData.bankName || '';
    $('#field-account-number').value = App.profileData.accountNumber || '';
    $('#field-account-name').value = App.profileData.accountName || '';
  }

  // Reset and render line items
  App.lineItems = [{ desc: '', qty: 1, rate: 0 }];
  renderLineItems();

  $$('#generator-form input, #generator-form select, #generator-form textarea').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });

  $('#field-vat-toggle').addEventListener('change', () => {
    $('#vat-rate-group').style.display = $('#field-vat-toggle').checked ? 'flex' : 'none';
    updatePreview();
  });

  $('#field-discount-toggle').addEventListener('change', () => {
    $('#discount-rate-group').style.display = $('#field-discount-toggle').checked ? 'flex' : 'none';
    updatePreview();
  });

  $$('#field-bank-name, #field-account-number, #field-account-name').forEach(el => {
    el.addEventListener('input', updatePreview);
  });

  $('#btn-add-item').addEventListener('click', addLineItem);
  $('#btn-save-receipt').addEventListener('click', saveReceipt);
  $('#btn-download').addEventListener('click', downloadReceipt);
  $('#btn-new-receipt').addEventListener('click', newReceipt);
  $('#btn-send-email').addEventListener('click', sendReceiptEmail);
  updatePreview();
}

function renderLineItems() {
  const container = $('#line-items-container');
  if (!container) return;
  container.innerHTML = App.lineItems.map((item, idx) => {
    const sub = parseFloat(item.qty || 1) * parseFloat(item.rate || 0);
    const currency = $('#field-currency')?.value || 'NGN';
    const symbols = { NGN: '₦', USD: '$', GBP: '£', EUR: '€' };
    const sym = symbols[currency] || currency;
    return `<div class="line-item-row" data-idx="${idx}">
      <input type="text" class="form-input li-desc" placeholder="Service description" value="${escapeHTML(item.desc || '')}" oninput="updateLineItem(${idx},'desc',this.value)">
      <input type="number" class="form-input li-qty" value="${item.qty || 1}" min="1" step="1" oninput="updateLineItem(${idx},'qty',this.value)">
      <input type="number" class="form-input li-rate" placeholder="0.00" value="${item.rate || ''}" min="0" step="0.01" oninput="updateLineItem(${idx},'rate',this.value)">
      <span class="li-subtotal">${sym}${parseFloat(sub).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
      ${App.lineItems.length > 1 ? `<button type="button" class="li-remove-btn" onclick="removeLineItem(${idx})">✕</button>` : '<span></span>'}
    </div>`;
  }).join('');
}

function updateLineItem(idx, field, value) {
  App.lineItems[idx][field] = field === 'desc' ? value : parseFloat(value) || 0;
  renderLineItems();
  updatePreview();
}

function addLineItem() {
  App.lineItems.push({ desc: '', qty: 1, rate: 0 });
  renderLineItems();
  // Focus the new row's description input
  const rows = $$('.li-desc');
  if (rows.length) rows[rows.length - 1].focus();
  updatePreview();
}

function removeLineItem(idx) {
  if (App.lineItems.length <= 1) return;
  App.lineItems.splice(idx, 1);
  renderLineItems();
  updatePreview();
}

function initServiceQuickFill() {
  const catSel = $('#service-category');
  const itemSel = $('#service-item');

  catSel.addEventListener('change', () => {
    const cat = catSel.value;
    if (!cat) { itemSel.innerHTML = '<option value="">— Select Category First —</option>'; itemSel.disabled = true; return; }
    const services = AVOA_SERVICES[cat] || [];
    itemSel.innerHTML =
      '<option value="">— Select Service —</option>' +
      services.map((s, i) => `<option value="${i}">${s.name}</option>`).join('') +
      '<option value="custom">✏ Other / Custom</option>';
    itemSel.disabled = false;
  });

  itemSel.addEventListener('change', () => {
    const cat = catSel.value;
    const val = itemSel.value;
    if (!val) return;
    if (val === 'custom') {
      // Add a blank line item for custom entry
      App.lineItems.push({ desc: '', qty: 1, rate: 0 });
      renderLineItems();
      const descs = $$('.li-desc');
      if (descs.length) descs[descs.length - 1].focus();
      updatePreview(); return;
    }
    const service = AVOA_SERVICES[cat]?.[parseInt(val)];
    if (!service) return;
    // Fill the first empty item or add a new row
    const emptyIdx = App.lineItems.findIndex(it => !it.desc && !it.rate);
    if (emptyIdx >= 0) {
      App.lineItems[emptyIdx] = { desc: service.description || service.desc, qty: 1, rate: service.amount };
    } else {
      App.lineItems.push({ desc: service.description || service.desc, qty: 1, rate: service.amount });
    }
    renderLineItems();
    updatePreview();
    toast(`Auto-filled: ${service.name}`, 'success');
  });
}

function initColorPicker() {
  const picker = $('#color-picker-input');
  const swatch = $('#color-swatch-preview');
  picker.value = App.brandColor;
  swatch.style.background = App.brandColor;

  picker.addEventListener('input', e => {
    App.brandColor = e.target.value;
    swatch.style.background = e.target.value;
    $$('.color-preset').forEach(p => p.classList.toggle('active', p.dataset.color === e.target.value));
    updatePreview();
  });

  $$('.color-preset').forEach(preset => {
    preset.style.background = preset.dataset.color;
    preset.addEventListener('click', () => {
      App.brandColor = preset.dataset.color;
      picker.value = preset.dataset.color;
      swatch.style.background = preset.dataset.color;
      $$('.color-preset').forEach(p => p.classList.remove('active'));
      preset.classList.add('active');
      updatePreview();
    });
  });

  const firstPreset = $('[data-color="#e63030"]');
  if (firstPreset) firstPreset.classList.add('active');
}

function handleLogoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { toast('Logo must be under 2MB', 'error'); e.target.value = ''; return; }
  App.logoFile = file;
  const reader = new FileReader();
  reader.onload = async ev => {
    App.logoBase64 = ev.target.result;
    const area = $('#logo-upload-area');
    area.innerHTML = `<img src="${App.logoBase64}" class="logo-preview-img" alt="Logo" style="pointer-events:none">
      <div class="logo-upload-hint" style="margin-top:8px;color:var(--text3);font-size:12px">Click to change</div>
      <input type="file" id="logo-upload" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
    area.style.padding = '16px';
    $('#logo-upload').addEventListener('change', handleLogoUpload);
    updatePreview();

    // Upload to Supabase Storage and save to profile permanently
    if (App.currentUser) {
      const logoUrl = await uploadLogo(file, App.currentUser.id);
      if (logoUrl) {
        App.savedLogoUrl = logoUrl;
        await sb.from('profiles').update({ logo_url: logoUrl }).eq('id', App.currentUser.id);
        toast('Logo saved to your profile! 🎨', 'success');
      }
    }
  };
  reader.readAsDataURL(file);
}

function restoreLogoInArea(areaSelector, inputSelector, changeHandler) {
  const area = $(areaSelector);
  if (!area) return;
  if (App.savedLogoUrl) {
    area.innerHTML = `<img src="${App.savedLogoUrl}" class="logo-preview-img" alt="Logo" style="pointer-events:none">
      <div class="logo-upload-hint" style="margin-top:8px;color:var(--text3);font-size:12px">Click to change</div>
      <input type="file" id="${inputSelector.replace('#','')}" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
    area.style.padding = '16px';
  } else {
    area.innerHTML = `<div class="logo-upload-icon">📎</div><div class="logo-upload-text">Upload Your Logo</div><div class="logo-upload-hint">PNG, JPG, SVG — Max 2MB</div><input type="file" id="${inputSelector.replace('#','')}" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
    area.style.padding = '24px';
  }
  const input = $(inputSelector);
  if (input) input.addEventListener('change', changeHandler);
}

async function uploadLogo(file, userId) {
  if (!file) return null;
  const ext = file.name.split('.').pop();
  const path = `${userId}/${Date.now()}.${ext}`;
  const { error } = await sb.storage.from('logos').upload(path, file, { upsert: true });
  if (error) { console.error('Logo upload failed:', error.message); return null; }
  const { data } = sb.storage.from('logos').getPublicUrl(path);
  return data.publicUrl;
}

function updatePreview() {
  const artist = $('#field-artist').value || 'Your Business';
  const client = $('#field-client').value || 'Client Name';
  const currency = $('#field-currency').value || 'NGN';
  const date = $('#field-date').value;
  const status = $('#field-status').value || 'paid';
  const font = App.fontStyle || $('#field-font')?.value || 'DM Sans';
  const vatEnabled = $('#field-vat-toggle').checked;
  const vatRate = $('#field-vat-rate').value || '7.5';
  const discEnabled = $('#field-discount-toggle').checked;
  const discType = $('#field-discount-type')?.value || 'percent';
  const discValue = $('#field-discount-value')?.value || '0';
  const bankName = $('#field-bank-name')?.value || '';
  const accountNumber = $('#field-account-number')?.value || '';
  const accountName = $('#field-account-name')?.value || '';

  // Contact info from profile
  const email = App.currentUser?.email || '';
  const phone = App.profileData?.phone || '';
  const address = App.profileData?.address || '';

  if (!App.currentReceipt) App.currentReceipt = { receiptNum: generateReceiptNum() };
  const hex = App.brandColor;
  const logoHtml = App.logoBase64 ? `<img src="${App.logoBase64}" class="receipt-logo-img" alt="Logo">` : '';
  const statusClass = status === 'paid' ? 'paid' : 'pending';
  const docType = 'INVOICE'; // Always INVOICE in generator; becomes RECEIPT only after dashboard payment

  // Line items — use App.lineItems
  const subtotal = getLineItemsSubtotal(App.lineItems);
  const itemsTableHtml = buildLineItemsTableHTML(App.lineItems, currency);
  const amountSection = buildAmountSectionHTML(subtotal, currency, vatEnabled, vatRate, hex, 0, discEnabled, discType, discValue);
  const accountDetailsHtml = buildAccountDetailsHTML(bankName, accountNumber, accountName);
  const contactHtml = buildFromContactHTML(email, phone, address);
  const terms = $('#field-terms')?.value.trim() || '';
  const termsHtml = buildTermsHTML(terms);

  $('#receipt-preview').style.fontFamily = font;
  $('#receipt-preview').innerHTML = `
    <div class="receipt-preview-header">
      <div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex};font-family:${font}">${escapeHTML(artist)}</div>${contactHtml}</div>
      <div class="receipt-meta"><div class="receipt-title" style="color:${hex};font-family:${font}">${docType}</div><div class="receipt-number">#${escapeHTML(App.currentReceipt.receiptNum)}</div></div>
    </div>
    <div class="receipt-body">
      <div class="receipt-parties">
        <div><div class="receipt-party-label">From</div><div class="receipt-party-name" style="font-family:${font}">${escapeHTML(artist)}</div></div>
        <div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name" style="font-family:${font}">${escapeHTML(client)}</div></div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-project-label">Services</div>
      ${itemsTableHtml}
      ${amountSection}
    </div>
    <div class="receipt-footer">
      <div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(date)}</div></div>
      <span class="receipt-status-badge ${statusClass}">${status.toUpperCase()}</span>
    </div>
    ${accountDetailsHtml}
    ${termsHtml}
    <div class="receipt-brand-footer">
      <img src="Media/logo.png" class="receipt-brand-logo" alt="VOForce">
      <div class="receipt-brand-name">BILL<span style="color:${hex}">BY</span>VOFORCE</div>
      <div class="receipt-brand-slogan">Africa's First Indigenous Voice Actors Receipt</div>
    </div>`;
}

// ── SAVE RECEIPT TO SUPABASE ──
async function saveReceipt() {
  if (!App.currentUser) return;
  const client = $('#field-client').value.trim();
  const validItems = App.lineItems.filter(it => it.desc || it.rate > 0);
  if (!client) { toast('Please enter a client name', 'error'); return; }
  if (validItems.length === 0) { toast('Please add at least one service', 'error'); return; }

  const btn = $('#btn-save-receipt');
  btn.textContent = '💾 Saving…'; btn.disabled = true;

  // Upload logo if a new file was selected, otherwise use saved profile logo
  let logoUrl = App.savedLogoUrl || null;
  if (App.logoFile) {
    const uploaded = await uploadLogo(App.logoFile, App.currentUser.id);
    if (uploaded) logoUrl = uploaded;
  }

  const receiptStatus = $('#field-status').value;
  const vatEnabled = $('#field-vat-toggle').checked;
  const vatRate = $('#field-vat-rate').value || '7.5';
  const discEnabled = $('#field-discount-toggle').checked;
  const discType = $('#field-discount-type')?.value || 'percent';
  const discValue = parseFloat($('#field-discount-value')?.value || 0);

  const subtotal = getLineItemsSubtotal(App.lineItems);
  const { total: invoiceTotal } = computeAmounts(subtotal, vatEnabled, vatRate, discEnabled, discType, discValue);
  const receiptNum = App.currentReceipt?.receiptNum || generateReceiptNum();
  // Combined description for backward compat / search
  const description = App.lineItems.map(it => it.desc).filter(Boolean).join('; ');

  const payload = {
    user_id: App.currentUser.id,
    receipt_num: receiptNum,
    artist: $('#field-artist').value.trim(),
    client,
    client_email: $('#field-client-email').value.trim(),
    description,
    amount: subtotal,   // pre-discount, pre-VAT subtotal for stats compat
    currency: $('#field-currency').value,
    vat_enabled: vatEnabled,
    vat_rate: parseFloat(vatRate),
    discount_enabled: discEnabled,
    discount_type: discType,
    discount_value: discValue,
    line_items: App.lineItems,
    bank_name: $('#field-bank-name').value.trim(),
    account_number: $('#field-account-number').value.trim(),
    account_name: $('#field-account-name').value.trim(),
    amount_paid: receiptStatus === 'paid' ? invoiceTotal : 0,
    payments: receiptStatus === 'paid'
      ? [{ amount: invoiceTotal, date: $('#field-date').value, note: 'Full payment' }]
      : [],
    date: $('#field-date').value,
    status: receiptStatus,
    brand_color: App.brandColor,
    logo_url: logoUrl,
    font_style: $('#field-font').value,
    artist_email: App.currentUser.email || '',
    artist_phone: App.profileData?.phone || '',
    artist_address: App.profileData?.address || '',
    terms: $('#field-terms')?.value.trim() || '',
  };

  const { data, error } = await sb.from('receipts').insert(payload).select().single();

  btn.textContent = '💾 Save Receipt'; btn.disabled = false;

  if (error) { toast('Save failed: ' + error.message, 'error'); return; }

  App.currentReceipt = { ...App.currentReceipt, id: data.id, receiptNum };
  App.logoFile = null; // clear after upload
  toast('Receipt saved! 🎉', 'success');
  renderStats();
}

function newReceipt() {
  App.currentReceipt = null;
  App.logoBase64 = App.savedLogoUrl || null; // keep saved logo
  App.logoFile = null;
  App.lineItems = [{ desc: '', qty: 1, rate: 0 }];
  $('#field-client').value = '';
  $('#field-client-email').value = '';
  $('#field-currency').value = 'NGN';
  $('#field-status').value = 'paid';
  $('#field-date').value = new Date().toISOString().split('T')[0];
  $('#field-vat-toggle').checked = false;
  $('#field-vat-rate').value = '7.5';
  $('#vat-rate-group').style.display = 'none';
  $('#field-discount-toggle').checked = false;
  $('#field-discount-value').value = '0';
  $('#discount-rate-group').style.display = 'none';
  const termsEl = $('#field-terms');
  if (termsEl) termsEl.value = '';
  // Restore bank details + font from profile
  $('#field-bank-name').value = App.profileData?.bankName || '';
  $('#field-account-number').value = App.profileData?.accountNumber || '';
  $('#field-account-name').value = App.profileData?.accountName || '';
  const fontEl = $('#field-font');
  if (fontEl) fontEl.value = App.fontStyle || 'DM Sans';
  renderLineItems();
  updatePreview();
  toast('New receipt started', 'info');
}

function sendReceiptEmail() {
  const clientEmail = $('#field-client-email').value.trim();
  if (!clientEmail || !clientEmail.includes('@')) { toast('Please enter a valid client email', 'error'); return; }
  const artist = $('#field-artist').value.trim() || App.currentUser?.name || '';
  const client = $('#field-client').value.trim();
  const currency = $('#field-currency').value;
  const date = $('#field-date').value;
  const status = $('#field-status').value;
  const vatEnabled = $('#field-vat-toggle').checked;
  const vatRate = $('#field-vat-rate').value || '7.5';
  const discEnabled = $('#field-discount-toggle').checked;
  const discType = $('#field-discount-type')?.value || 'percent';
  const discValue = $('#field-discount-value')?.value || '0';
  const receiptNum = App.currentReceipt?.receiptNum || '';
  const subtotal = getLineItemsSubtotal(App.lineItems);
  const { discAmt, vatAmt, total } = computeAmounts(subtotal, vatEnabled, vatRate, discEnabled, discType, discValue);

  const itemLines = App.lineItems
    .filter(it => it.desc || it.rate > 0)
    .map(it => `  - ${it.desc || 'Service'} (x${it.qty || 1}) @ ${formatAmount(it.rate || 0, currency)} = ${formatAmount((it.qty||1)*(it.rate||0), currency)}`)
    .join('\n');

  const discLine = discEnabled && discAmt > 0 ? `Discount:    −${formatAmount(discAmt, currency)}\n` : '';
  const vatLine = vatEnabled ? `VAT (${vatRate}%): ${formatAmount(vatAmt, currency)}\n` : '';
  const subject = `Receipt ${receiptNum} from ${artist}`;
  const body =
`Dear ${client},\n\nPlease find your receipt details below.\n\nReceipt No:  ${receiptNum}\nDate:        ${formatDate(date)}\nFrom:        ${artist}\n\nSERVICES:\n${itemLines}\n\nSubtotal:    ${formatAmount(subtotal, currency)}\n${discLine}${vatLine}Total:       ${formatAmount(total, currency)}\nStatus:      ${status.toUpperCase()}\n\nThank you for your business!\n\n${artist}`;
  window.location.href = `mailto:${encodeURIComponent(clientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function downloadReceipt() {
  buildPrintWindow($('#receipt-preview').innerHTML, $('#field-font').value || 'DM Sans', App.brandColor);
}

function buildPrintWindow(previewInnerHTML, font, hex) {
  const win = window.open('', '_blank', 'width=700,height=900');
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@600&family=Syne:wght@600&display=swap" rel="stylesheet">
    <style>*{box-sizing:border-box;margin:0;padding:0}body{background:white;padding:20px;font-family:'${font}',sans-serif}
    .receipt-preview{background:white;max-width:600px;margin:0 auto}
    .receipt-preview-header{padding:28px 28px 20px;border-bottom:2px solid #f0f0f0;display:flex;justify-content:space-between;align-items:flex-start}
    .receipt-logo-area{display:flex;flex-direction:column;gap:6px}.receipt-logo-img{max-width:120px;max-height:50px;object-fit:contain}
    .receipt-business-name{font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:1px}
    .receipt-meta{text-align:right}.receipt-title{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:3px;margin-bottom:4px}
    .receipt-number{font-family:'JetBrains Mono',monospace;font-size:12px;color:#888;letter-spacing:1px}
    .receipt-body{padding:24px 28px}.receipt-parties{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px}
    .receipt-party-label{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#aaa;margin-bottom:4px}
    .receipt-party-name{font-size:15px;font-weight:600;color:#111}.receipt-divider{height:1px;background:#f0f0f0;margin:16px 0}
    .receipt-project-label{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#aaa;margin-bottom:8px}
    .receipt-project-desc{font-size:14px;color:#333;margin-bottom:20px}
    .receipt-contact-details{margin-top:4px}.receipt-contact-line{font-size:10px;color:#666;line-height:1.5}
    .receipt-breakdown{margin-bottom:8px}.receipt-breakdown-row{display:flex;justify-content:space-between;padding:5px 0;font-size:13px;color:#666;border-bottom:1px dashed #f0f0f0}
    .receipt-amount-row{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-radius:10px;margin-bottom:16px}
    .receipt-amount-label{font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase}
    .receipt-amount-value{font-family:'JetBrains Mono',monospace;font-size:26px;font-weight:700;color:#111}
    .receipt-payment-breakdown{padding:8px 0;margin-bottom:8px}
    .receipt-payment-row{display:flex;justify-content:space-between;padding:5px 0;font-size:13px;border-top:1px dashed #f0f0f0}
    .receipt-payment-label{font-weight:500;color:#666}.receipt-val-paid{color:#16a34a}.receipt-val-balance{color:#d97706;font-size:15px}
    .receipt-footer{padding:16px 28px 24px;display:flex;justify-content:space-between;align-items:center}
    .receipt-date-label{font-size:11px;color:#aaa;letter-spacing:1px;text-transform:uppercase;margin-bottom:2px}
    .receipt-date-value{font-size:14px;color:#333;font-weight:500}
    .receipt-status-badge{padding:6px 16px;border-radius:100px;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
    .receipt-status-badge.paid{background:#dcfce7;color:#16a34a}.receipt-status-badge.pending{background:#fef3c7;color:#d97706}
    .receipt-account-details{padding:14px 28px;border-top:1px solid #f0f0f0}
    .receipt-account-label{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#aaa;margin-bottom:8px}
    .receipt-account-row{display:flex;justify-content:space-between;padding:4px 0;font-size:13px;color:#444}
    .receipt-account-key{color:#888;font-weight:500}.receipt-account-number{font-family:monospace;letter-spacing:1px}
    .receipt-brand-footer{padding:16px 28px;text-align:center;border-top:2px solid #f0f0f0;display:flex;flex-direction:column;align-items:center;gap:4px}
    .receipt-brand-logo{width:36px;height:36px;object-fit:cover;border-radius:6px}
    .receipt-brand-name{font-family:'Bebas Neue',sans-serif;font-size:16px;letter-spacing:2px;color:#111}
    .receipt-brand-slogan{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#aaa}
    .receipt-terms{padding:12px 28px 16px;border-top:1px solid #f0f0f0}
    .receipt-terms-label{font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#aaa;margin-bottom:6px}
    .receipt-terms-body{font-size:11px;color:#666;line-height:1.6;white-space:pre-wrap}
    @media print{@page{margin:0.5cm;size:A4}}</style></head>
    <body><div class="receipt-preview">${previewInnerHTML}</div>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),500)}<\/script></body></html>`);
  win.document.close();
}

// ─── DASHBOARD ────────────────────────────────
function initDashboard() {
  if (!App.currentUser) return;
  renderDashboard();
  $('#dashboard-search').addEventListener('input', renderReceiptList);
  $('#dashboard-filter').addEventListener('change', renderReceiptList);
  $('#btn-record-payment').addEventListener('click', recordPayment);
}

async function renderDashboard() {
  await renderStats();
  await renderReceiptList();
}

async function renderStats() {
  const { data: receipts } = await sb.from('receipts')
    .select('status, amount, currency, vat_enabled, vat_rate')
    .eq('user_id', App.currentUser.id);

  if (!receipts) return;
  $('#stat-total').textContent = receipts.length;
  $('#stat-paid').textContent = receipts.filter(r => r.status === 'paid').length;
  $('#stat-pending').textContent = receipts.filter(r => r.status === 'pending').length;

  function sumByCurrency(list) {
    const totals = {};
    list.forEach(r => {
      const { total } = computeAmounts(r.amount, r.vat_enabled, r.vat_rate, r.discount_enabled, r.discount_type, r.discount_value);
      const cur = r.currency || 'NGN';
      totals[cur] = (totals[cur] || 0) + total;
    });
    return totals;
  }

  function renderRevenueStat(elId, list) {
    const el = $('#' + elId);
    if (list.length === 0) { el.textContent = '—'; return; }
    const totals = sumByCurrency(list);
    const currencies = Object.keys(totals);
    if (currencies.length === 1) {
      el.textContent = formatAmount(totals[currencies[0]], currencies[0]);
    } else {
      el.innerHTML = currencies.map(c => `<span style="display:block;font-size:14px">${formatAmount(totals[c], c)}</span>`).join('');
    }
  }

  renderRevenueStat('stat-revenue', receipts.filter(r => r.status === 'paid'));
  renderRevenueStat('stat-outstanding', receipts.filter(r => r.status === 'pending'));
}

async function renderReceiptList() {
  const search = ($('#dashboard-search').value || '').toLowerCase();
  const filter = $('#dashboard-filter').value || 'all';

  let query = sb.from('receipts')
    .select('*')
    .eq('user_id', App.currentUser.id)
    .order('created_at', { ascending: false });

  if (filter !== 'all') query = query.eq('status', filter);

  const { data: receipts, error } = await query;

  if (error) { toast('Error loading receipts', 'error'); return; }

  const filtered = search
    ? receipts.filter(r => [r.client, r.receipt_num, r.description].join(' ').toLowerCase().includes(search))
    : receipts;

  const list = $('#receipts-list');
  if (!filtered || filtered.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🧾</div><div class="empty-title">NO RECEIPTS YET</div>
      <div class="empty-sub">${!receipts?.length ? 'Create your first receipt in the Generator.' : 'No receipts match your search.'}</div>
      ${!receipts?.length ? `<button class="btn btn-primary" onclick="navigateTo('generator')">Go to Generator</button>` : ''}</div>`;
    return;
  }

  list.innerHTML = filtered.map(r => `
    <div class="table-row" onclick="previewReceiptFromDashboard('${r.id}')">
      <div class="table-cell"><div style="font-weight:600">${escapeHTML(r.client || '—')}</div><div style="font-size:12px;color:var(--text3)">${escapeHTML(r.receipt_num || '')}</div></div>
      <div class="table-cell muted" style="font-size:12px;word-break:break-all">${escapeHTML(r.client_email || '—')}</div>
      <div class="table-cell muted">${formatDate(r.date)}</div>
      <div class="table-cell mono">${formatAmount(r.amount, r.currency)}</div>
      <div class="table-cell"><span class="status-pill ${r.status}">${r.status.toUpperCase()}</span></div>
      <div class="table-cell"><div class="table-actions" onclick="event.stopPropagation()">
        ${r.status === 'pending' ? `<button class="btn btn-primary btn-sm btn-icon" title="Receive Payment" onclick="receivePayment('${r.id}')">💰</button>` : ''}
        <button class="btn btn-ghost btn-sm btn-icon" title="Download" onclick="downloadFromDashboard('${r.id}')">⬇</button>
        <button class="btn btn-danger btn-sm btn-icon" title="Delete" onclick="deleteReceipt('${r.id}')">✕</button>
      </div></div>
    </div>`).join('');
}

async function previewReceiptFromDashboard(id) {
  const { data: r } = await sb.from('receipts').select('*').eq('id', id).single();
  if (!r) return;
  const hex = r.brand_color || '#e63030';
  const font = r.font_style || 'DM Sans';
  const logoHtml = r.logo_url ? `<img src="${r.logo_url}" class="receipt-logo-img" alt="Logo">` : '';
  const statusClass = r.status === 'paid' ? 'paid' : 'pending';
  const amountPaid = parseFloat(r.amount_paid || 0);
  const docType = (r.status === 'paid' || amountPaid > 0) ? 'RECEIPT' : 'INVOICE';

  // Line items table (new) or legacy single description
  const lineItems = Array.isArray(r.line_items) && r.line_items.length ? r.line_items : null;
  const itemsHtml = lineItems
    ? buildLineItemsTableHTML(lineItems, r.currency)
    : `<div class="receipt-project-label">Project Description</div><div class="receipt-project-desc">${escapeHTML(r.description || '—')}</div>`;

  const subtotal = lineItems ? getLineItemsSubtotal(lineItems) : r.amount;
  const amountSection = buildAmountSectionHTML(subtotal, r.currency, r.vat_enabled, r.vat_rate, hex, r.amount_paid, r.discount_enabled, r.discount_type, r.discount_value);
  const accountDetailsHtml = buildAccountDetailsHTML(r.bank_name, r.account_number, r.account_name);
  const contactHtml = buildFromContactHTML(r.artist_email || '', r.artist_phone || '', r.artist_address || '');
  const termsHtml = buildTermsHTML(r.terms || '');

  const html = `
    <div class="receipt-preview-header"><div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex};font-family:${font}">${escapeHTML(r.artist||'')}</div>${contactHtml}</div>
    <div class="receipt-meta"><div class="receipt-title" style="color:${hex};font-family:${font}">${docType}</div><div class="receipt-number">#${escapeHTML(r.receipt_num||'')}</div></div></div>
    <div class="receipt-body"><div class="receipt-parties">
      <div><div class="receipt-party-label">From</div><div class="receipt-party-name" style="font-family:${font}">${escapeHTML(r.artist||'')}</div></div>
      <div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name" style="font-family:${font}">${escapeHTML(r.client||'')}</div></div>
    </div><div class="receipt-divider"></div>
    ${lineItems ? '<div class="receipt-project-label">Services</div>' : ''}
    ${itemsHtml}
    ${amountSection}</div>
    <div class="receipt-footer"><div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(r.date)}</div></div>
    <span class="receipt-status-badge ${statusClass}">${r.status.toUpperCase()}</span></div>
    ${accountDetailsHtml}
    ${termsHtml}
    <div class="receipt-brand-footer"><img src="Media/logo.png" class="receipt-brand-logo" alt="VOForce">
    <div class="receipt-brand-name">BILL<span style="color:${hex}">BY</span>VOFORCE</div>
    <div class="receipt-brand-slogan">Africa's First Indigenous Voice Actors Receipt</div></div>`;
  $('#modal-receipt-preview').innerHTML = html;
  $('#modal-receipt-preview').style.fontFamily = font;
  $('#modal-download-btn').onclick = () => downloadFromDashboard(id);
  openModal('modal-view-receipt');
}

async function downloadFromDashboard(id) {
  const { data: r } = await sb.from('receipts').select('*').eq('id', id).single();
  if (!r) return;
  const hex = r.brand_color || '#e63030';
  const font = r.font_style || 'DM Sans';
  const logoHtml = r.logo_url ? `<img src="${r.logo_url}" style="max-width:120px;max-height:50px;object-fit:contain" alt="Logo">` : '';
  const statusClass = r.status === 'paid' ? 'paid' : 'pending';
  const amountPaid = parseFloat(r.amount_paid || 0);
  const docType = (r.status === 'paid' || amountPaid > 0) ? 'RECEIPT' : 'INVOICE';
  const lineItems = Array.isArray(r.line_items) && r.line_items.length ? r.line_items : null;
  const itemsHtml = lineItems
    ? buildLineItemsTableHTML(lineItems, r.currency)
    : `<div class="receipt-project-label">Project Description</div><div class="receipt-project-desc">${escapeHTML(r.description||'—')}</div>`;
  const subtotal = lineItems ? getLineItemsSubtotal(lineItems) : r.amount;
  const amountSection = buildAmountSectionHTML(subtotal, r.currency, r.vat_enabled, r.vat_rate, hex, r.amount_paid, r.discount_enabled, r.discount_type, r.discount_value);
  const accountDetailsHtml = buildAccountDetailsHTML(r.bank_name, r.account_number, r.account_name);
  const contactHtml = buildFromContactHTML(r.artist_email || '', r.artist_phone || '', r.artist_address || '');
  const termsHtml = buildTermsHTML(r.terms || '');
  const html = `<div class="receipt-preview-header"><div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex}">${escapeHTML(r.artist||'')}</div>${contactHtml}</div><div class="receipt-meta"><div class="receipt-title" style="color:${hex}">${docType}</div><div class="receipt-number">#${escapeHTML(r.receipt_num||'')}</div></div></div><div class="receipt-body"><div class="receipt-parties"><div><div class="receipt-party-label">From</div><div class="receipt-party-name">${escapeHTML(r.artist||'')}</div></div><div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name">${escapeHTML(r.client||'')}</div></div></div><div class="receipt-divider"></div>${lineItems ? '<div class="receipt-project-label">Services</div>' : ''}${itemsHtml}${amountSection}</div><div class="receipt-footer"><div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(r.date)}</div></div><span class="receipt-status-badge ${statusClass}">${r.status.toUpperCase()}</span></div>${accountDetailsHtml}${termsHtml}<div class="receipt-brand-footer"><img src="Media/logo.png" class="receipt-brand-logo" alt="VOForce"><div class="receipt-brand-name">BILL<span style="color:${hex}">BY</span>VOFORCE</div><div class="receipt-brand-slogan">Africa's First Indigenous Voice Actors Receipt</div></div>`;
  buildPrintWindow(html, font, hex);
}

async function deleteReceipt(id) {
  if (!confirm('Delete this receipt? This cannot be undone.')) return;
  const { error } = await sb.from('receipts').delete().eq('id', id);
  if (error) { toast('Delete failed: ' + error.message, 'error'); return; }
  renderDashboard();
  toast('Receipt deleted', 'info');
}

async function receivePayment(id) {
  const { data: r } = await sb.from('receipts').select('*').eq('id', id).single();
  if (!r) return;
  App._paymentReceiptId = id;
  const { total } = computeAmounts(r.amount, r.vat_enabled, r.vat_rate, r.discount_enabled, r.discount_type, r.discount_value);
  const alreadyPaid = parseFloat(r.amount_paid || 0);
  const balance = total - alreadyPaid;
  $('#payment-receipt-info').innerHTML = `
    <div class="payment-summary-card">
      <div class="payment-summary-client">${escapeHTML(r.client)} — <span style="color:var(--text3)">#${escapeHTML(r.receipt_num)}</span></div>
      <div class="payment-summary-row"><span>Invoice Total</span><span>${formatAmount(total, r.currency)}</span></div>
      ${alreadyPaid > 0 ? `<div class="payment-summary-row"><span>Already Received</span><span style="color:var(--green)">${formatAmount(alreadyPaid, r.currency)}</span></div>` : ''}
      <div class="payment-summary-row payment-summary-balance"><span>Balance Due</span><span>${formatAmount(balance, r.currency)}</span></div>
    </div>`;
  $('#payment-amount').value = balance.toFixed(2);
  $('#payment-date').value = new Date().toISOString().split('T')[0];
  $('#payment-note').value = '';
  openModal('modal-receive-payment');
}

async function recordPayment() {
  const id = App._paymentReceiptId;
  if (!id) return;
  const amountIn = parseFloat($('#payment-amount').value || 0);
  const date = $('#payment-date').value;
  const note = $('#payment-note').value.trim();
  if (!amountIn || amountIn <= 0) { toast('Enter a valid amount received', 'error'); return; }

  const { data: r } = await sb.from('receipts').select('*').eq('id', id).single();
  if (!r) return;

  const { total } = computeAmounts(r.amount, r.vat_enabled, r.vat_rate, r.discount_enabled, r.discount_type, r.discount_value);
  const payments = Array.isArray(r.payments) ? r.payments : [];
  payments.push({ amount: amountIn, date, note });
  const newAmountPaid = parseFloat((parseFloat(r.amount_paid || 0) + amountIn).toFixed(2));
  const newStatus = newAmountPaid >= total ? 'paid' : 'pending';
  const finalPaid = newStatus === 'paid' ? total : newAmountPaid;

  const { error } = await sb.from('receipts').update({
    payments, amount_paid: finalPaid, status: newStatus
  }).eq('id', id);

  if (error) { toast('Update failed: ' + error.message, 'error'); return; }

  if (newStatus === 'paid') {
    toast('Receipt marked as PAID ✅', 'success');
  } else {
    toast(`${formatAmount(amountIn, r.currency)} recorded — ${formatAmount(total - finalPaid, r.currency)} still outstanding`, 'info');
  }

  App._paymentReceiptId = null;
  closeModal('modal-receive-payment');
  renderDashboard();
}

// ─── MODAL ────────────────────────────────────
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

// ─── NAVIGATION ───────────────────────────────
function navigateTo(page) {
  if (!App.currentUser && page !== 'auth') { showPage('auth'); return; }
  if (page === 'admin' && !App.currentUser?.isAdmin) { showPage('generator'); return; }
  showPage(page);
  if (page === 'dashboard') renderDashboard();
  if (page === 'generator') { initGenerator(); updatePreview(); }
  if (page === 'admin') initAdmin();
  if (page === 'profile') initProfile(false);
  $('#nav-links').classList.remove('open');
}

// ─── PROFILE ──────────────────────────────────────────────────────────────────
function initProfile(isNewUser = false) {
  const subtitle = $('#profile-page-subtitle');
  if (subtitle) subtitle.textContent = isNewUser
    ? 'Welcome! Complete your profile — it auto-fills every receipt you create.'
    : 'Update your business profile. Changes apply to all future receipts.';

  const u = App.currentUser;
  const p = App.profileData || {};
  if ($('#profile-name')) $('#profile-name').value = p.name || u?.name || '';
  if ($('#profile-email')) $('#profile-email').value = u?.email || '';
  if ($('#profile-phone')) $('#profile-phone').value = p.phone || '';
  if ($('#profile-address')) $('#profile-address').value = p.address || '';
  if ($('#profile-bank-name')) $('#profile-bank-name').value = p.bankName || '';
  if ($('#profile-account-number')) $('#profile-account-number').value = p.accountNumber || '';
  if ($('#profile-account-name')) $('#profile-account-name').value = p.accountName || '';

  // Logo
  restoreLogoInArea('#profile-logo-area', '#profile-logo-upload', handleProfileLogoUpload);
  const area = $('#profile-logo-area');
  if (area) area.onclick = () => $('#profile-logo-upload').click();

  // Branding
  initColorPicker();
  const fontSel = $('#profile-font');
  if (fontSel) fontSel.value = App.fontStyle || 'DM Sans';
  if (fontSel) fontSel.addEventListener('change', e => { App.fontStyle = e.target.value; });

  $('#btn-save-profile').onclick = saveProfile;
  $('#btn-profile-back').onclick = () => navigateTo('generator');
}

async function saveProfile() {
  const name = $('#profile-name').value.trim();
  const phone = $('#profile-phone').value.trim();
  const address = $('#profile-address').value.trim();
  const bankName = $('#profile-bank-name').value.trim();
  const accountNumber = $('#profile-account-number').value.trim();
  const accountName = $('#profile-account-name').value.trim();
  const errEl = $('#profile-save-error');
  errEl.textContent = '';

  if (!name) { errEl.textContent = 'Business name is required'; return; }

  const btn = $('#btn-save-profile');
  btn.textContent = 'Saving…'; btn.disabled = true;

  if (App.profileLogoFile) {
    const logoUrl = await uploadLogo(App.profileLogoFile, App.currentUser.id);
    if (logoUrl) { App.savedLogoUrl = logoUrl; App.logoBase64 = logoUrl; }
    App.profileLogoFile = null;
  }

  const { error } = await sb.from('profiles').update({
    name, phone, address,
    bank_name: bankName,
    account_number: accountNumber,
    account_name: accountName,
    brand_color: App.brandColor,
    font_style: App.fontStyle,
    logo_url: App.savedLogoUrl || null,
  }).eq('id', App.currentUser.id);

  btn.textContent = '💾 Save Profile'; btn.disabled = false;

  if (error) { errEl.textContent = 'Save failed: ' + error.message; return; }

  App.currentUser.name = name;
  App.profileData = { name, phone, address, bankName, accountNumber, accountName, brandColor: App.brandColor, fontStyle: App.fontStyle };
  updateNavUser();
  $('#nav-profile-link').style.display = 'inline-flex';
  if (App.currentUser?.isAdmin) $('#nav-admin-link').style.display = 'inline-flex';

  toast('✅ Profile saved!', 'success');
  setTimeout(() => navigateTo('generator'), 800);
}

function handleProfileLogoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { toast('Logo must be under 2MB', 'error'); return; }
  App.profileLogoFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    App.savedLogoUrl = ev.target.result;
    App.logoBase64 = ev.target.result;
    const area = $('#profile-logo-area');
    area.innerHTML = `<img src="${ev.target.result}" class="logo-preview-img" alt="Logo" style="pointer-events:none">
      <div class="logo-upload-hint" style="margin-top:8px;color:var(--text3);font-size:12px">Click to change</div>
      <input type="file" id="profile-logo-upload" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
    area.style.padding = '16px';
    $('#profile-logo-upload').addEventListener('change', handleProfileLogoUpload);
  };
  reader.readAsDataURL(file);
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────
async function initAdmin() {
  if (!App.currentUser?.isAdmin) { showPage('generator'); return; }
  await renderAdminUsers();
}

async function renderAdminUsers() {
  const { data: profiles, error } = await sb.from('profiles').select('*').order('created_at', { ascending: false });
  if (error) {
    toast('Failed to load users: ' + error.message, 'error');
    $('#admin-users-list').innerHTML = `<div class="empty-state"><div class="empty-icon">⚠️</div><div class="empty-title">ERROR LOADING USERS</div><div class="empty-sub">${escapeHTML(error.message)}</div></div>`;
    return;
  }
  if (!profiles || profiles.length === 0) {
    $('#admin-users-list').innerHTML = '<div class="empty-state"><div class="empty-icon">👤</div><div class="empty-title">NO USERS YET</div></div>';
    return;
  }

  const { data: receipts } = await sb.from('receipts').select('user_id, amount_paid, currency');
  const receiptMap = {};
  (receipts || []).forEach(r => {
    if (!receiptMap[r.user_id]) receiptMap[r.user_id] = { count: 0, paid: 0 };
    receiptMap[r.user_id].count++;
    receiptMap[r.user_id].paid += parseFloat(r.amount_paid || 0);
  });
  const totalRevenue = (receipts || []).reduce((sum, r) => sum + parseFloat(r.amount_paid || 0), 0);

  $('#admin-stat-users').textContent = profiles.length;
  $('#admin-stat-active').textContent = profiles.filter(p => !p.is_locked).length;
  $('#admin-stat-locked').textContent = profiles.filter(p => p.is_locked).length;
  $('#admin-stat-receipts').textContent = (receipts || []).length;
  $('#admin-stat-revenue').textContent = formatAmount(totalRevenue, 'NGN');

  const list = $('#admin-users-list');
  list.innerHTML = profiles.map(p => {
    const stats = receiptMap[p.id] || { count: 0, paid: 0 };
    const locked = p.is_locked || false;
    const joined = p.created_at ? new Date(p.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '—';
    const isSelf = p.id === App.currentUser?.id;
    return `
    <div class="table-row admin-table-row" id="admin-row-${p.id}">
      <div class="table-cell"><div style="font-weight:600">${escapeHTML(p.name || '—')}</div></div>
      <div class="table-cell muted" style="font-size:11px;word-break:break-all">${escapeHTML(p.email || '—')}</div>
      <div class="table-cell muted" style="font-size:11px">${joined}</div>
      <div class="table-cell mono">${stats.count}</div>
      <div class="table-cell mono" style="font-size:11px">${formatAmount(stats.paid, 'NGN')}</div>
      <div class="table-cell" id="admin-status-${p.id}"><span class="status-pill ${locked ? 'pending' : 'paid'}">${locked ? '🔒 LOCKED' : '✓ ACTIVE'}</span></div>
      <div class="table-cell" style="text-align:right">
        <label class="toggle-switch" title="${locked ? 'Unlock Account' : 'Lock Account'}">
          <input type="checkbox" ${locked ? '' : 'checked'} onchange="toggleUserLock('${p.id}', ${locked}, this)">
          <span class="toggle-slider"></span>
        </label>
      </div>
      <div class="table-cell" style="text-align:right">
        ${isSelf ? '<span style="font-size:11px;color:var(--text3)">—</span>' : `<button class="btn btn-danger btn-sm btn-icon" title="Delete Account" onclick="deleteAdminUser('${p.id}','${escapeHTML(p.name||p.email||'this user')}')">🗑</button>`}
      </div>
    </div>`;
  }).join('');
}

async function toggleUserLock(userId, currentlyLocked, checkbox) {
  const newLocked = !currentlyLocked;
  // Revert checkbox immediately while we wait — prevents visual flicker on error
  checkbox.disabled = true;
  const { error } = await sb.from('profiles').update({ is_locked: newLocked }).eq('id', userId);
  checkbox.disabled = false;
  if (error) {
    // Roll back the checkbox visually
    checkbox.checked = !newLocked;
    toast('Update failed: ' + error.message, 'error');
    return;
  }
  // Update just this row in-place (no full re-render flicker)
  const statusEl = $(`#admin-status-${userId}`);
  if (statusEl) {
    statusEl.innerHTML = `<span class="status-pill ${newLocked ? 'pending' : 'paid'}">${newLocked ? '🔒 LOCKED' : '✓ ACTIVE'}</span>`;
  }
  // Update the toggle's onchange to reflect the new state
  checkbox.onchange = () => toggleUserLock(userId, newLocked, checkbox);
  checkbox.title = newLocked ? 'Unlock Account' : 'Lock Account';
  toast(newLocked ? '🔒 Account locked' : '✅ Account unlocked', newLocked ? 'info' : 'success');
}

async function deleteAdminUser(userId, displayName) {
  if (!confirm(`Delete "${displayName}"?\n\nThis will permanently remove their profile and all their receipts from the database. This cannot be undone.`)) return;
  // Delete their receipts first, then their profile
  const { error: rErr } = await sb.from('receipts').delete().eq('user_id', userId);
  if (rErr) { toast('Failed to delete receipts: ' + rErr.message, 'error'); return; }
  const { error: pErr } = await sb.from('profiles').delete().eq('id', userId);
  if (pErr) { toast('Failed to delete profile: ' + pErr.message, 'error'); return; }
  // Remove the row from the DOM immediately
  $(`#admin-row-${userId}`)?.remove();
  toast(`🗑 "${displayName}" deleted`, 'info');
  // Refresh stats
  renderAdminUsers();
}

// ─── THEME ────────────────────────────────────
function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? '' : 'light');
  localStorage.setItem('vof_theme', isLight ? 'dark' : 'light');
  $('#theme-toggle-icon').textContent = isLight ? '☀️' : '🌙';
}

// ─── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const savedTheme = localStorage.getItem('vof_theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    $('#theme-toggle-icon').textContent = '🌙';
  }

  initAuth();

  // Check for existing Supabase session
  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    const profile = await fetchProfile(session.user.id);
    App.currentUser = {
      id: session.user.id,
      email: session.user.email,
      name: profile?.name || session.user.email,
      isLocked: profile?.is_locked || false,
      isAdmin: profile?.is_admin || false,
    };
    enterApp();
  } else {
    showNav(false);
    showPage('auth');
  }

  // Listen for auth state changes (e.g. password reset redirect)
  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      openModal('modal-new-password');
      return;
    }
    if (event === 'SIGNED_IN' && session && !App.currentUser) {
      const profile = await fetchProfile(session.user.id);
      App.currentUser = {
        id: session.user.id,
        email: session.user.email,
        name: profile?.name || session.user.email,
        isLocked: profile?.is_locked || false,
        isAdmin: profile?.is_admin || false,
      };
      enterApp();
    }
    if (event === 'SIGNED_OUT') {
      App.currentUser = null;
      App.profileData = null;
      App.savedLogoUrl = null;
      App.logoBase64 = null;
      showNav(false);
      showPage('auth');
    }
  });

  $$('.nav-link[data-page]').forEach(link => {
    link.addEventListener('click', () => navigateTo(link.dataset.page));
  });

  $('#btn-logout').addEventListener('click', handleLogout);
  $('#theme-toggle').addEventListener('click', toggleTheme);
  $('#nav-hamburger').addEventListener('click', () => $('#nav-links').classList.toggle('open'));

  $$('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.modal-overlay')?.classList.remove('open'));
  });

  $$('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  });
});