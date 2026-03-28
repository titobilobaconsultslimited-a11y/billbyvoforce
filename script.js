/* ════════════════════════════════════════════
   BillbyVOForce — Main Script
   ════════════════════════════════════════════ */

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
  currentUser: null,
  currentReceipt: null,
  logoBase64: null,
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

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function getUsers() { return JSON.parse(localStorage.getItem('vof_users') || '{}'); }
function saveUsers(u) { localStorage.setItem('vof_users', JSON.stringify(u)); }
function getSession() { return JSON.parse(localStorage.getItem('vof_session') || 'null'); }
function saveSession(u) { localStorage.setItem('vof_session', JSON.stringify(u)); }
function clearSession() { localStorage.removeItem('vof_session'); }

function migrateAccounts() {
  const users = getUsers();
  const hasLegacy = Object.values(users).some(u => u.password && u.password.length !== 64);
  if (hasLegacy) {
    localStorage.removeItem('vof_users');
    clearSession();
    toast('Old account data cleared for security. Please sign up again.', 'info');
  }
}

function getUserReceipts(email) {
  return JSON.parse(localStorage.getItem(`vof_receipts_${email}`) || '[]');
}

function saveUserReceipts(email, receipts) {
  localStorage.setItem(`vof_receipts_${email}`, JSON.stringify(receipts));
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
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(20px)'; t.style.transition = 'all 0.3s'; setTimeout(() => t.remove(), 300); }, 3000);
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
      document.getElementById('form-login').style.display = target === 'login' ? 'block' : 'none';
      document.getElementById('form-signup').style.display = target === 'signup' ? 'block' : 'none';
      document.getElementById('form-forgot').style.display = 'none';
      document.getElementById('auth-tabs-wrap').style.display = 'flex';
    });
  });

  $('#btn-login').addEventListener('click', handleLogin);
  $('#login-password').addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });
  $('#btn-signup').addEventListener('click', handleSignup);
  $('#signup-password').addEventListener('keydown', e => { if (e.key === 'Enter') handleSignup(); });
  $('#btn-forgot').addEventListener('click', handleForgotPassword);
  $('#forgot-confirm').addEventListener('keydown', e => { if (e.key === 'Enter') handleForgotPassword(); });

  $('#go-signup').addEventListener('click', e => { e.preventDefault(); $('[data-tab="signup"]').click(); });
  $('#go-login').addEventListener('click', e => { e.preventDefault(); $('[data-tab="login"]').click(); });
  $('#go-forgot').addEventListener('click', e => { e.preventDefault(); showForgotForm(); });
  $('#go-back-login').addEventListener('click', e => { e.preventDefault(); showLoginForm(); });
}

function showForgotForm() {
  clearErrors();
  document.getElementById('form-login').style.display = 'none';
  document.getElementById('form-signup').style.display = 'none';
  document.getElementById('form-forgot').style.display = 'block';
  document.getElementById('auth-tabs-wrap').style.display = 'none';
}

function showLoginForm() {
  clearErrors();
  document.getElementById('form-forgot').style.display = 'none';
  document.getElementById('form-signup').style.display = 'none';
  document.getElementById('form-login').style.display = 'block';
  document.getElementById('auth-tabs-wrap').style.display = 'flex';
  $$('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'login'));
}

async function handleForgotPassword() {
  const email = $('#forgot-email').value.trim().toLowerCase();
  const password = $('#forgot-password').value;
  const confirm = $('#forgot-confirm').value;
  clearErrors();
  if (!email) return showError('forgot-email', 'Email is required');
  if (!email.includes('@')) return showError('forgot-email', 'Valid email is required');
  if (password.length < 6) return showError('forgot-password', 'Password must be at least 6 characters');
  if (password !== confirm) return showError('forgot-confirm', 'Passwords do not match');
  const users = getUsers();
  if (!users[email]) return showError('forgot-email', 'No account found with this email');
  const hashed = await hashPassword(password);
  users[email].password = hashed;
  saveUsers(users);
  toast('Password reset! You can now log in.', 'success');
  showLoginForm();
  $('#login-email').value = email;
  $('#forgot-email').value = '';
  $('#forgot-password').value = '';
  $('#forgot-confirm').value = '';
}

async function handleLogin() {
  const email = $('#login-email').value.trim().toLowerCase();
  const password = $('#login-password').value;
  clearErrors();
  if (!email) return showError('login-email', 'Email is required');
  if (!password) return showError('login-password', 'Password is required');
  const users = getUsers();
  if (!users[email]) return showError('login-email', 'No account found with this email');
  const hashed = await hashPassword(password);
  if (users[email].password !== hashed) return showError('login-password', 'Incorrect password');
  App.currentUser = { email, name: users[email].name };
  saveSession(App.currentUser);
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
  const users = getUsers();
  if (users[email]) return showError('signup-email', 'An account with this email already exists');
  const hashed = await hashPassword(password);
  users[email] = { name, password: hashed };
  saveUsers(users);
  App.currentUser = { email, name };
  saveSession(App.currentUser);
  enterApp();
  toast(`Welcome, ${name}! 🎙️`, 'success');
}

function showError(fieldId, msg) {
  const field = $(`#${fieldId}`);
  if (!field) return;
  field.style.borderColor = 'var(--accent)';
  const err = document.createElement('div');
  err.className = 'form-error';
  err.textContent = msg;
  err.dataset.errFor = fieldId;
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

function handleLogout() {
  App.currentUser = null;
  App.logoBase64 = null;
  clearSession();
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
  const today = new Date().toISOString().split('T')[0];
  $('#field-date').value = today;
  initColorPicker();
  initServiceQuickFill();

  const logoArea = $('#logo-upload-area');
  logoArea.onclick = () => $('#logo-upload').click();
  $('#logo-upload').addEventListener('change', handleLogoUpload);

  $$('#generator-form input, #generator-form select, #generator-form textarea').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });

  $('#btn-save-receipt').addEventListener('click', saveReceipt);
  $('#btn-download').addEventListener('click', downloadReceipt);
  $('#btn-new-receipt').addEventListener('click', newReceipt);
  updatePreview();
}

function initServiceQuickFill() {
  const catSel = $('#service-category');
  const itemSel = $('#service-item');

  catSel.addEventListener('change', () => {
    const cat = catSel.value;
    if (!cat) {
      itemSel.innerHTML = '<option value="">— Select Category First —</option>';
      itemSel.disabled = true;
      return;
    }
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
      $('#field-desc').value = '';
      $('#field-amount').value = '';
      $('#field-currency').value = 'NGN';
      $('#field-desc').focus();
      updatePreview();
      return;
    }
    const service = AVOA_SERVICES[cat]?.[parseInt(val)];
    if (!service) return;
    $('#field-desc').value = service.desc;
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
  if (file.size > 2 * 1024 * 1024) {
    toast('Logo must be under 2MB', 'error');
    e.target.value = '';
    return;
  }
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

function updatePreview() {
  const artist = $('#field-artist').value || 'Your Business';
  const client = $('#field-client').value || 'Client Name';
  const desc = $('#field-desc').value || 'Project description will appear here';
  const amount = $('#field-amount').value || '0';
  const currency = $('#field-currency').value || 'NGN';
  const date = $('#field-date').value;
  const status = $('#field-status').value || 'paid';
  const font = $('#field-font').value || 'DM Sans';
  if (!App.currentReceipt) App.currentReceipt = { receiptNum: generateReceiptNum() };
  const receiptNum = App.currentReceipt.receiptNum;
  const hex = App.brandColor;
  const amountBg = hex + '18';
  const logoHtml = App.logoBase64 ? `<img src="${App.logoBase64}" class="receipt-logo-img" alt="Logo">` : '';
  const statusClass = status === 'paid' ? 'paid' : 'pending';
  const sArtist = escapeHTML(artist);
  const sClient = escapeHTML(client);
  const sDesc = escapeHTML(desc);
  const sReceiptNum = escapeHTML(receiptNum);

  $('#receipt-preview').style.fontFamily = font;
  $('#receipt-preview').innerHTML = `
    <div class="receipt-preview-header">
      <div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex};font-family:${font}">${sArtist}</div></div>
      <div class="receipt-meta"><div class="receipt-title" style="color:${hex};font-family:${font}">RECEIPT</div><div class="receipt-number">#${sReceiptNum}</div></div>
    </div>
    <div class="receipt-body">
      <div class="receipt-parties">
        <div><div class="receipt-party-label">From</div><div class="receipt-party-name" style="font-family:${font}">${sArtist}</div></div>
        <div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name" style="font-family:${font}">${sClient}</div></div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-project-label">Project Description</div>
      <div class="receipt-project-desc">${sDesc}</div>
      <div class="receipt-amount-row" style="background:${amountBg};border:1px solid ${hex}30">
        <div class="receipt-amount-label" style="color:${hex}">Total Amount</div>
        <div class="receipt-amount-value">${formatAmount(amount, currency)}</div>
      </div>
    </div>
    <div class="receipt-footer">
      <div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(date)}</div></div>
      <span class="receipt-status-badge ${statusClass}">${status.toUpperCase()}</span>
    </div>
    <div class="receipt-brand-footer">
      <img src="Media/logo.png" class="receipt-brand-logo" alt="VOForce">
      <div class="receipt-brand-name">BILL<span style="color:${hex}">BY</span>VOFORCE</div>
      <div class="receipt-brand-slogan">Africa's First Indigenous Voice Actors Receipt</div>
    </div>`;

function saveReceipt() {
  if (!App.currentUser) return;
  const client = $('#field-client').value.trim();
  const amount = $('#field-amount').value;
  if (!client) { toast('Please enter a client name', 'error'); return; }
  if (!amount || isNaN(amount)) { toast('Please enter a valid amount', 'error'); return; }
  const receipt = {
    id: Date.now(),
    receiptNum: App.currentReceipt?.receiptNum || generateReceiptNum(),
    artist: $('#field-artist').value.trim(),
    client, desc: $('#field-desc').value.trim(),
    amount, currency: $('#field-currency').value,
    date: $('#field-date').value, status: $('#field-status').value,
    brandColor: App.brandColor, logoBase64: App.logoBase64,
    fontStyle: $('#field-font').value, createdAt: new Date().toISOString(),
  };
  const receipts = getUserReceipts(App.currentUser.email);
  receipts.unshift(receipt);
  saveUserReceipts(App.currentUser.email, receipts);
  App.currentReceipt = receipt;
  toast('Receipt saved! 🎉', 'success');
  renderStats();
}

function newReceipt() {
  App.currentReceipt = null;
  App.logoBase64 = null;
  $('#field-client').value = '';
  $('#field-desc').value = '';
  $('#field-amount').value = '';
  $('#field-currency').value = 'NGN';
  $('#field-status').value = 'paid';
  $('#field-date').value = new Date().toISOString().split('T')[0];
  const area = $('#logo-upload-area');
  area.innerHTML = `<div class="logo-upload-icon">📎</div><div class="logo-upload-text">Upload Your Logo</div><div class="logo-upload-hint">PNG, JPG, SVG — Max 2MB</div><input type="file" id="logo-upload" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">`;
  area.style.padding = '24px';
  $('#logo-upload').addEventListener('change', handleLogoUpload);
  area.onclick = () => $('#logo-upload').click();
  updatePreview();
  toast('New receipt started', 'info');
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
    .receipt-amount-row{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-radius:10px;margin-bottom:16px}
    .receipt-amount-label{font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase}
    .receipt-amount-value{font-family:'JetBrains Mono',monospace;font-size:26px;font-weight:700;color:#111}
    .receipt-footer{padding:16px 28px 24px;display:flex;justify-content:space-between;align-items:center}
    .receipt-date-label{font-size:11px;color:#aaa;letter-spacing:1px;text-transform:uppercase;margin-bottom:2px}
    .receipt-date-value{font-size:14px;color:#333;font-weight:500}
    .receipt-status-badge{padding:6px 16px;border-radius:100px;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
    .receipt-status-badge.paid{background:#dcfce7;color:#16a34a}.receipt-status-badge.pending{background:#fef3c7;color:#d97706}
    .receipt-watermark{display:none}
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
}

function renderDashboard() { renderStats(); renderReceiptList(); }

function renderStats() {
  const receipts = getUserReceipts(App.currentUser.email);
  $('#stat-total').textContent = receipts.length;
  $('#stat-paid').textContent = receipts.filter(r => r.status === 'paid').length;
  $('#stat-pending').textContent = receipts.filter(r => r.status === 'pending').length;
}

function renderReceiptList() {
  const receipts = getUserReceipts(App.currentUser.email);
  const search = ($('#dashboard-search').value || '').toLowerCase();
  const filter = $('#dashboard-filter').value || 'all';

  const filtered = receipts.filter(r => {
    const matchSearch = !search || [r.client, r.receiptNum, r.desc].join(' ').toLowerCase().includes(search);
    const matchFilter = filter === 'all' || r.status === filter;
    return matchSearch && matchFilter;
  });

  const list = $('#receipts-list');
  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🧾</div><div class="empty-title">NO RECEIPTS YET</div><div class="empty-sub">${receipts.length === 0 ? 'Create your first receipt in the Generator.' : 'No receipts match your search.'}</div>${receipts.length === 0 ? `<button class="btn btn-primary" onclick="navigateTo('generator')">Go to Generator</button>` : ''}</div>`;
    return;
  }

  list.innerHTML = filtered.map(r => {
    const sClient = escapeHTML(r.client || '');
    const sReceiptNum = escapeHTML(r.receiptNum || '');
    return `
    <div class="table-row" onclick="previewReceiptFromDashboard('${r.id}')">
      <div class="table-cell"><div style="font-weight:600">${sClient || '—'}</div><div style="font-size:12px;color:var(--text3)">${sReceiptNum}</div></div>
      <div class="table-cell muted">${formatDate(r.date)}</div>
      <div class="table-cell mono">${formatAmount(r.amount, r.currency)}</div>
      <div class="table-cell"><span class="status-pill ${r.status}">${r.status.toUpperCase()}</span></div>
      <div class="table-cell"><div class="table-actions" onclick="event.stopPropagation()">
        <button class="btn btn-ghost btn-sm btn-icon" title="Download" onclick="downloadFromDashboard('${r.id}')">⬇</button>
        <button class="btn btn-danger btn-sm btn-icon" title="Delete" onclick="deleteReceipt('${r.id}')">✕</button>
      </div></div>
    </div>`;
  }).join('');
}

function previewReceiptFromDashboard(id) {
  const r = getUserReceipts(App.currentUser.email).find(rec => String(rec.id) === String(id));
  if (!r) return;
  const hex = r.brandColor || '#e63030';
  const font = r.fontStyle || 'DM Sans';
  const amountBg = hex + '18';
  const logoHtml = r.logoBase64 ? `<img src="${r.logoBase64}" class="receipt-logo-img" alt="Logo">` : '';
  const statusClass = r.status === 'paid' ? 'paid' : 'pending';
  const sArtist = escapeHTML(r.artist || '');
  const sClient = escapeHTML(r.client || '');
  const sDesc = escapeHTML(r.desc || '');
  const sReceiptNum = escapeHTML(r.receiptNum || '');
  const html = `
    <div class="receipt-preview-header"><div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex};font-family:${font}">${sArtist}</div></div>
    <div class="receipt-meta"><div class="receipt-title" style="color:${hex};font-family:${font}">RECEIPT</div><div class="receipt-number">#${sReceiptNum}</div></div></div>
    <div class="receipt-body"><div class="receipt-parties">
      <div><div class="receipt-party-label">From</div><div class="receipt-party-name" style="font-family:${font}">${sArtist}</div></div>
      <div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name" style="font-family:${font}">${sClient}</div></div>
    </div><div class="receipt-divider"></div>
    <div class="receipt-project-label">Project Description</div><div class="receipt-project-desc">${sDesc || '—'}</div>
    <div class="receipt-amount-row" style="background:${amountBg};border:1px solid ${hex}30"><div class="receipt-amount-label" style="color:${hex}">Total Amount</div><div class="receipt-amount-value">${formatAmount(r.amount, r.currency)}</div></div></div>
    <div class="receipt-footer"><div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(r.date)}</div></div><span class="receipt-status-badge ${statusClass}">${r.status.toUpperCase()}</span></div>
    <div class="receipt-brand-footer">
      <img src="Media/logo.png" class="receipt-brand-logo" alt="VOForce">
      <div class="receipt-brand-name">BILL<span style="color:${hex}">BY</span>VOFORCE</div>
      <div class="receipt-brand-slogan">Africa's First Indigenous Voice Actors Receipt</div>
    </div>`;
  $('#modal-receipt-preview').innerHTML = html;
  $('#modal-receipt-preview').style.fontFamily = font;
  $('#modal-download-btn').onclick = () => downloadFromDashboard(id);
  openModal('modal-view-receipt');
}

function downloadFromDashboard(id) {
  const r = getUserReceipts(App.currentUser.email).find(rec => String(rec.id) === String(id));
  if (!r) return;
  const hex = r.brandColor || '#e63030';
  const font = r.fontStyle || 'DM Sans';
  const amountBg = hex + '18';
  const logoHtml = r.logoBase64 ? `<img src="${r.logoBase64}" style="max-width:120px;max-height:50px;object-fit:contain" alt="Logo">` : '';
  const statusClass = r.status === 'paid' ? 'paid' : 'pending';
  const sArtist = escapeHTML(r.artist || '');
  const sClient = escapeHTML(r.client || '');
  const sDesc = escapeHTML(r.desc || '');
  const sReceiptNum = escapeHTML(r.receiptNum || '');
  const html = `<div class="receipt-preview-header"><div class="receipt-logo-area">${logoHtml}<div class="receipt-business-name" style="color:${hex}">${sArtist}</div></div><div class="receipt-meta"><div class="receipt-title" style="color:${hex}">RECEIPT</div><div class="receipt-number">#${sReceiptNum}</div></div></div><div class="receipt-body"><div class="receipt-parties"><div><div class="receipt-party-label">From</div><div class="receipt-party-name">${sArtist}</div></div><div><div class="receipt-party-label">Billed To</div><div class="receipt-party-name">${sClient}</div></div></div><div class="receipt-divider"></div><div class="receipt-project-label">Project Description</div><div class="receipt-project-desc">${sDesc||'—'}</div><div class="receipt-amount-row" style="background:${amountBg};border:1px solid ${hex}30"><div class="receipt-amount-label" style="color:${hex}">Total Amount</div><div class="receipt-amount-value">${formatAmount(r.amount,r.currency)}</div></div></div><div class="receipt-footer"><div><div class="receipt-date-label">Date</div><div class="receipt-date-value">${formatDate(r.date)}</div></div><span class="receipt-status-badge ${statusClass}">${r.status.toUpperCase()}</span></div><div class="receipt-brand-footer"><img src="Media/logo.png" class="receipt-brand-logo" alt="VOForce"><div class="receipt-brand-name">BILL<span style="color:${hex}">BY</span>VOFORCE</div><div class="receipt-brand-slogan">Africa's First Indigenous Voice Actors Receipt</div></div>`;
  buildPrintWindow(html, font, hex);
}

function deleteReceipt(id) {
  if (!confirm('Delete this receipt? This cannot be undone.')) return;
  const receipts = getUserReceipts(App.currentUser.email).filter(r => String(r.id) !== String(id));
  saveUserReceipts(App.currentUser.email, receipts);
  renderDashboard();
  toast('Receipt deleted', 'info');
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
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('vof_theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    $('#theme-toggle-icon').textContent = '🌙';
  }

  initAuth();

  // Clear any legacy btoa-hashed accounts (incompatible with SHA-256)
  migrateAccounts();

  const session = getSession();
  if (session) {
    App.currentUser = session;
    showNav(true);
    updateNavUser();
    showPage('generator');
    initGenerator();
    initDashboard();
  } else {
    showNav(false);
    showPage('auth');
  }

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
