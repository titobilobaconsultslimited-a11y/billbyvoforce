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
  currentUser: null,   // { id, email, name }
  currentReceipt: null,
  logoBase64: null,    // base64 preview for newly selected file
  logoFile: null,      // File object for upload
  logoUrl: null,       // persisted URL from Supabase Storage (loaded from profile)
  brandColor: '#e63030',
  fontStyle: 'DM Sans',
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

function computeAmounts(amount, vatEnabled, vatRate) {
  const subtotal = parseFloat(amount || 0);
  const vatAmt = vatEnabled ? subtotal * (parseFloat(vatRate || 0) / 100) : 0;
  const total = subtotal + vatAmt;
  return { subtotal, vatAmt, total };
}

function buildAmountSectionHTML(amount, currency, vatEnabled, vatRate, hex, amountPaid) {
  const amountBg = hex + '18';
  const { subtotal, vatAmt, total } = computeAmounts(amount, vatEnabled, vatRate);
  let html = '';
  if (vatEnabled) {
    html += `<div class="receipt-breakdown">
      <div class="receipt-breakdown-row"><span class="receipt-breakdown-label">Subtotal</span><span class="receipt-breakdown-val">${formatAmount(subtotal, currency)}</span></div>
      <div class="receipt-breakdown-row"><span class="receipt-breakdown-label">VAT (${vatRate}%)</span><span class="receipt-breakdown-val">${formatAmount(vatAmt, currency)}</span></div>
    </div>`;
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

function buildAccountDetailsHTML(bankName, accountNumber, accountName) {
  if (!bankName && !accountNumber && !accountName) return '';
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
  App.currentUser = { id: data.user.id, email: data.user.email, name: profile?.name || email };
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
    App.currentUser = { id: data.user.id, email, name };
    enterApp();
    toast(`Welcome, ${name}! 🎙️`, 'success');
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

function enterApp() {
  showNav(true);
  updateNavUser();
  showPage('generator');
  initGenerator();
  initDashboard();
}

async function handleLogout() {
  await sb.auth.signOut();
  App.currentUser = null;
  App.logoBase64 = null;
  App.logoFile = null;
  App.logoUrl = null;
  showNav(false);
  showPage('auth');
  $('#login-email').value = '';
  $('#login-password').value = '';
}

function updateNavUser() {
  const el = $('#nav-username');
  if (el && App.currentUser) el.textContent = App.currentUser.name;
}

// ─── GENERATOR ────────────────────────────────
function initGenerator() {
  if (App.currentUser) $('#field-artist').value = App.currentUser.name;
  $('#field-date').value = new Date().toISOString().split('T')[0];
  initColorPicker();
  initServiceQuickFill();
  loadProfileLogo();

  const logoArea = $('#logo-upload-area');
  logoArea.onclick = () => $('#logo-upload').click();
  $('#logo-upload').addEventListener('change', handleLogoUpload);

  $$('#generator-form input, #generator-form select, #generator-form textarea').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });

  $('#field-vat-toggle').addEventListener('change', () => {
    $('#vat-rate-group').style.display = $('#field-vat-toggle').checked ? 'flex' : 'none';
    updatePreview();
  });

  $$('#field-bank-name, #field-account-number, #field-account-name').forEach(el => {
    el.addEventListener('input', updatePreview);
  });

  $('#btn-save-receipt').addEventListener('click', saveReceipt);
  $('#btn-download').addEventListener('click', downloadReceipt);
  $('#btn-new-receipt').addEventListener('click', newReceipt);
  $('#btn-send-email').addEventListener('click', sendReceiptEmail);
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
      $('#field-desc').value = ''; $('#field-amount').value = '';
      $('#field-currency').value = 'NGN'; $('#field-desc').focus();
      updatePreview(); return;
    }
    const service = AVOA_SERVICES[cat]?.[parseInt(val)];
    if (!service) return;
    $('#field-desc').value = service.description || service.desc;
    $('#field-amount').value = service.amount;
    $('#field-currency').value = 'NGN';
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
  reader.onload = ev => {
    App.logoBase64 = ev.target.result;
    const area = $('#logo-upload-area');
    area.innerHTML = `<img src="${App.logoBase64}" class="logo-preview-img" alt="Logo" style="pointer-events:none">
      <div class="logo-upload-hint" style="margin-top:8px;color:var(--text3);font-size:12px">Click to change</div>
      <input type="file" id="logo-upload" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
    area.style.padding = '16px';
    $('#logo-upload').addEventListener('change', handleLogoUpload);
    updatePreview();
  };
  reader.readAsDataURL(file);
}

async function loadProfileLogo() {
  if (!App.currentUser) return;
  const { data: profile } = await sb.from('profiles').select('logo_url').eq('id', App.currentUser.id).single();
  if (profile?.logo_url) {
    App.logoUrl = profile.logo_url;
    const area = $('#logo-upload-area');
    area.innerHTML = `<img src="${App.logoUrl}" class="logo-preview-img" alt="Logo" style="pointer-events:none">
      <div class="logo-upload-hint" style="margin-top:8px;color:var(--text3);font-size:12px">Click to change</div>
      <input type="file" id="logo-upload" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
    area.style.padding = '16px';
    $('#logo-upload').addEventListener('change', handleLogoUpload);
    updatePreview();
  }
}

async function uploadLogo(file, userId) {
  if (!file) return null;
  const ext = file.name.split('.').pop();
  const path = `${userId}/logo.${ext}`;
  const { error } = await sb.storage.from('logos').upload(path, file, { upsert: true });
  if (error) { console.error('Logo upload failed:', error.message); return null; }
  const { data } = sb.storage.from('logos').getPublicUrl(path);
  const url = data.publicUrl;
  // Save to profile so it persists across sessions
  await sb.from('profiles').update({ logo_url: url }).eq('id', userId);
  App.logoUrl = url;
  return url;
}

function updatePreview() {
  const artist = $('#field-artist').value || 'Your Business';
  const client = $('#field-client').value || 'Client Name';
  const desc = $('#field-desc').value || 'Project description will appear here';
  const amount = $('#field-amount').value || '0';
  const currency = $('#field-currency').value || 'NGN';
  const date = $('#field-date').value;
  const status = $('#field-status').value || 'paid';
  const font = $('#field-font').value || 'DM Sans';
  const vatEnabled = $('#field-vat-toggle').checked;
  const vatRate = $('#field-vat-rate').value || '7.5';
  const bankName = $('#field-bank-name')?.value || '';
  const accountNumber = $('#field-account-number')?.value || '';
  const accountName = $('#field-account-name')?.value || '';

  if (!App.currentReceipt) App.currentReceipt = { receiptNum: generateReceiptNum() };
  const hex = App.brandColor;
  const logoHtml = (App.logoBase64 || App.logoUrl) ? `<img src="${App.logoBase64 || App.logoUrl}" class="receipt-logo-img" alt="Logo">` : '';
  const statusClass = status === 'paid' ? 'paid' : 'pending';
  const amountSection = buildAmountSectionHTML(amount, currency, vatEnabled, vatRate, hex, 0);
  const accountDetailsHtml = buildAccountDetailsHTML(bankName, accountNumber, accountName);

  $('#receipt-preview').style.fontFamily = font;
  $('#receipt-preview').innerHTML = `
    <div class="receipt-preview-header">
      <div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex};font-family:${font}">${escapeHTML(artist)}</div></div>
      <div class="receipt-meta"><div class="receipt-title" style="color:${hex};font-family:${font}">RECEIPT</div><div class="receipt-number">#${escapeHTML(App.currentReceipt.receiptNum)}</div></div>
    </div>
    <div class="receipt-body">
      <div class="receipt-parties">
        <div><div class="receipt-party-label">From</div><div class="receipt-party-name" style="font-family:${font}">${escapeHTML(artist)}</div></div>
        <div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name" style="font-family:${font}">${escapeHTML(client)}</div></div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-project-label">Project Description</div>
      <div class="receipt-project-desc">${escapeHTML(desc)}</div>
      ${amountSection}
    </div>
    <div class="receipt-footer">
      <div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(date)}</div></div>
      <span class="receipt-status-badge ${statusClass}">${status.toUpperCase()}</span>
    </div>
    ${accountDetailsHtml}
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
  const amount = $('#field-amount').value;
  if (!client) { toast('Please enter a client name', 'error'); return; }
  if (!amount || isNaN(amount)) { toast('Please enter a valid amount', 'error'); return; }

  const btn = $('#btn-save-receipt');
  btn.textContent = '💾 Saving…'; btn.disabled = true;

  // Upload logo if a new file was selected, otherwise reuse persisted URL
  let logoUrl = App.logoUrl || null;
  if (App.logoFile) {
    logoUrl = await uploadLogo(App.logoFile, App.currentUser.id);
  }

  const receiptStatus = $('#field-status').value;
  const vatEnabled = $('#field-vat-toggle').checked;
  const vatRate = $('#field-vat-rate').value || '7.5';
  const { total: invoiceTotal } = computeAmounts(amount, vatEnabled, vatRate);
  const receiptNum = App.currentReceipt?.receiptNum || generateReceiptNum();

  const payload = {
    user_id: App.currentUser.id,
    receipt_num: receiptNum,
    artist: $('#field-artist').value.trim(),
    client,
    client_email: $('#field-client-email').value.trim(),
    description: $('#field-desc').value.trim(),
    amount: parseFloat(amount),
    currency: $('#field-currency').value,
    vat_enabled: vatEnabled,
    vat_rate: parseFloat(vatRate),
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
  App.logoBase64 = null;
  App.logoFile = null;
  // Keep App.logoUrl so the logo persists across receipts
  $('#field-client').value = '';
  $('#field-client-email').value = '';
  $('#field-desc').value = '';
  $('#field-amount').value = '';
  $('#field-currency').value = 'NGN';
  $('#field-status').value = 'paid';
  $('#field-date').value = new Date().toISOString().split('T')[0];
  $('#field-vat-toggle').checked = false;
  $('#field-vat-rate').value = '7.5';
  $('#vat-rate-group').style.display = 'none';
  $('#field-bank-name').value = '';
  $('#field-account-number').value = '';
  $('#field-account-name').value = '';
  const area = $('#logo-upload-area');
  if (App.logoUrl) {
    area.innerHTML = `<img src="${App.logoUrl}" class="logo-preview-img" alt="Logo" style="pointer-events:none">
      <div class="logo-upload-hint" style="margin-top:8px;color:var(--text3);font-size:12px">Click to change</div>
      <input type="file" id="logo-upload" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
    area.style.padding = '16px';
  } else {
    area.innerHTML = `<div class="logo-upload-icon">📎</div><div class="logo-upload-text">Upload Your Logo</div><div class="logo-upload-hint">PNG, JPG, SVG — Max 2MB</div><input type="file" id="logo-upload" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
    area.style.padding = '24px';
  }
  area.onclick = () => $('#logo-upload').click();
  $('#logo-upload').addEventListener('change', handleLogoUpload);
  updatePreview();
  toast('New receipt started', 'info');
}

function sendReceiptEmail() {
  const clientEmail = $('#field-client-email').value.trim();
  if (!clientEmail || !clientEmail.includes('@')) { toast('Please enter a valid client email', 'error'); return; }
  const artist = $('#field-artist').value.trim() || App.currentUser?.name || '';
  const client = $('#field-client').value.trim();
  const desc = $('#field-desc').value.trim();
  const amount = $('#field-amount').value || '0';
  const currency = $('#field-currency').value;
  const date = $('#field-date').value;
  const status = $('#field-status').value;
  const vatEnabled = $('#field-vat-toggle').checked;
  const vatRate = $('#field-vat-rate').value || '7.5';
  const receiptNum = App.currentReceipt?.receiptNum || '';
  const { subtotal, vatAmt, total } = computeAmounts(amount, vatEnabled, vatRate);
  const subject = `Receipt ${receiptNum} from ${artist}`;
  const vatLine = vatEnabled ? `Subtotal:  ${formatAmount(subtotal, currency)}\nVAT (${vatRate}%): ${formatAmount(vatAmt, currency)}\n` : '';
  const body =
`Dear ${client},\n\nPlease find your receipt details below.\n\n` +
`Receipt No:  ${receiptNum}\nDate:        ${formatDate(date)}\nFrom:        ${artist}\nProject:     ${desc}\n\n` +
`${vatLine}Total:       ${formatAmount(total, currency)}\nStatus:      ${status.toUpperCase()}\n\nThank you for your business!\n\n${artist}`;
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
      const { total } = computeAmounts(r.amount, r.vat_enabled, r.vat_rate);
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
  const amountSection = buildAmountSectionHTML(r.amount, r.currency, r.vat_enabled, r.vat_rate, hex, r.amount_paid);
  const accountDetailsHtml = buildAccountDetailsHTML(r.bank_name, r.account_number, r.account_name);
  const html = `
    <div class="receipt-preview-header"><div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex};font-family:${font}">${escapeHTML(r.artist||'')}</div></div>
    <div class="receipt-meta"><div class="receipt-title" style="color:${hex};font-family:${font}">RECEIPT</div><div class="receipt-number">#${escapeHTML(r.receipt_num||'')}</div></div></div>
    <div class="receipt-body"><div class="receipt-parties">
      <div><div class="receipt-party-label">From</div><div class="receipt-party-name" style="font-family:${font}">${escapeHTML(r.artist||'')}</div></div>
      <div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name" style="font-family:${font}">${escapeHTML(r.client||'')}</div></div>
    </div><div class="receipt-divider"></div>
    <div class="receipt-project-label">Project Description</div><div class="receipt-project-desc">${escapeHTML(r.description||'—')}</div>
    ${amountSection}</div>
    <div class="receipt-footer"><div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(r.date)}</div></div>
    <span class="receipt-status-badge ${statusClass}">${r.status.toUpperCase()}</span></div>
    ${accountDetailsHtml}
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
  const amountSection = buildAmountSectionHTML(r.amount, r.currency, r.vat_enabled, r.vat_rate, hex, r.amount_paid);
  const accountDetailsHtml = buildAccountDetailsHTML(r.bank_name, r.account_number, r.account_name);
  const html = `<div class="receipt-preview-header"><div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex}">${escapeHTML(r.artist||'')}</div></div><div class="receipt-meta"><div class="receipt-title" style="color:${hex}">RECEIPT</div><div class="receipt-number">#${escapeHTML(r.receipt_num||'')}</div></div></div><div class="receipt-body"><div class="receipt-parties"><div><div class="receipt-party-label">From</div><div class="receipt-party-name">${escapeHTML(r.artist||'')}</div></div><div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name">${escapeHTML(r.client||'')}</div></div></div><div class="receipt-divider"></div><div class="receipt-project-label">Project Description</div><div class="receipt-project-desc">${escapeHTML(r.description||'—')}</div>${amountSection}</div><div class="receipt-footer"><div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(r.date)}</div></div><span class="receipt-status-badge ${statusClass}">${r.status.toUpperCase()}</span></div>${accountDetailsHtml}<div class="receipt-brand-footer"><img src="Media/logo.png" class="receipt-brand-logo" alt="VOForce"><div class="receipt-brand-name">BILL<span style="color:${hex}">BY</span>VOFORCE</div><div class="receipt-brand-slogan">Africa's First Indigenous Voice Actors Receipt</div></div>`;
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
  const { total } = computeAmounts(r.amount, r.vat_enabled, r.vat_rate);
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

  const { total } = computeAmounts(r.amount, r.vat_enabled, r.vat_rate);
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
  showPage(page);
  if (page === 'dashboard') renderDashboard();
  if (page === 'generator') updatePreview();
  $('#nav-links').classList.remove('open');
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
      name: profile?.name || session.user.email
    };
    showNav(true);
    updateNavUser();
    showPage('generator');
    initGenerator();
    initDashboard();
  } else {
    showNav(false);
    showPage('auth');
  }

  // Listen for auth state changes (e.g. password reset redirect)
  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session && !App.currentUser) {
      const profile = await fetchProfile(session.user.id);
      App.currentUser = {
        id: session.user.id,
        email: session.user.email,
        name: profile?.name || session.user.email
      };
      enterApp();
    }
    if (event === 'SIGNED_OUT') {
      App.currentUser = null;
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
