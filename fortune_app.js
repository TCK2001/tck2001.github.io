/* ══════════════════════════════════════════
   State
══════════════════════════════════════════ */
const state = {
  players: ['Alice', 'Bob'],
  turn: 0,
  prizes: [
    { label: 'iPhone 16 Pro',  qty: 1   },
    { label: 'AirPods Pro',    qty: 2   },
    { label: 'LOSE (Thanks!)',   qty: 999 },
  ],
  picked:    null,
  committed: false,
};

/* Scratch state */
const scratch = {
  pts:          [],
  cols:         40,
  rows:         24,
  cells:        null,   // Uint8Array
  cleared:      0,
  revealed:     false,
  slots:        [],     // { char, cx, cy, rot }
  slotsForText: null,
};

/* ══════════════════════════════════════════
   FIX: currentPlayer as plain function (not getter)
   — JS "get" keyword is only valid inside object/class literals,
     not at module/script scope. Using it at the top level causes:
     "Uncaught SyntaxError: Unexpected identifier 'currentPlayer'"
══════════════════════════════════════════ */
function currentPlayer() {
  if (!state.players.length) return '—';
  return state.players[state.turn % state.players.length];
}

function totalLeft() {
  return state.prizes.reduce((s, p) => s + Math.max(0, p.qty), 0);
}

function totalCells() { return scratch.cols * scratch.rows; }
function ratio()      { return scratch.cleared / totalCells(); }

function isLose(text) {
  if (!text) return true;
  return text.includes('LOSE')
    || text.toLowerCase().includes('lose')
    || text.toLowerCase().includes('thanks')
    || text === 'SOLD OUT';
}

/* ══════════════════════════════════════════
   Draw / Commit / Reset
══════════════════════════════════════════ */
function draw() {
  if (state.picked) return;
  const pool = state.prizes.filter(p => p.qty > 0);
  if (!pool.length) { state.picked = 'SOLD OUT'; return; }
  const total = pool.reduce((s, p) => s + p.qty, 0);
  let r = Math.floor(Math.random() * total);
  for (const p of pool) {
    r -= p.qty;
    if (r < 0) { state.picked = p.label; break; }
  }
}

function commit() {
  if (state.committed || !state.picked) return;
  state.committed = true;
  const i = state.prizes.findIndex(p => p.label === state.picked);
  if (i >= 0 && state.prizes[i].qty > 0) state.prizes[i].qty--;
  renderInventory();
  renderLeft();
}

function resetDraw() {
  state.picked    = null;
  state.committed = false;
}

/* ══════════════════════════════════════════
   Letter Slots (scattered prize chars)
══════════════════════════════════════════ */

/* Seeded RNG — mulberry32 */
function makePrng(seed) {
  let s = seed >>> 0;
  return function () {
    s += 0x6D2B79F5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

function buildSlots(text, seed) {
  const rng   = makePrng(seed);
  const chars = [...text]; // unicode-safe
  const count = chars.length;
  if (!count) return [];

  const cols     = Math.max(3, Math.ceil(count * 1.5));
  const rows     = 3;
  const totalC   = cols * rows;

  /* Fisher-Yates shuffle */
  const indices = Array.from({ length: totalC }, (_, i) => i);
  for (let i = totalC - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const chosen = indices.slice(0, count);

  return chars.map((char, i) => {
    const cell = chosen[i];
    const col  = cell % cols;
    const row  = Math.floor(cell / cols);
    const jx   = rng() * 0.5 - 0.25;
    const jy   = rng() * 0.4 - 0.2;
    let cx = 0.12 + (col / Math.max(cols - 1, 1)) * 0.76 + jx * (0.76 / cols);
    let cy = 0.25 + (row / Math.max(rows - 1, 1)) * 0.50 + jy * (0.50 / rows);
    cx = Math.min(Math.max(cx, 0.08), 0.92);
    cy = Math.min(Math.max(cy, 0.18), 0.82);
    const rot = (rng() - 0.5) * 0.45;
    return { char, cx, cy, rot };
  });
}

function ensureSlots() {
  const text = state.picked || '';
  if (text === scratch.slotsForText) return;
  scratch.slotsForText = text;
  const seed    = hashStr(text) ^ (Date.now() & 0xFFFFFFFF);
  scratch.slots = buildSlots(text, seed);
  renderLetterSlots();
}

/* ══════════════════════════════════════════
   Canvas / Foil
══════════════════════════════════════════ */
const canvas = document.getElementById('foil-canvas');
const ctx2d  = canvas.getContext('2d');

function resizeCanvas() {
  const wrap   = document.getElementById('scratch-wrap');
  canvas.width  = wrap.clientWidth;
  canvas.height = wrap.clientHeight;
  drawFoil();
}

function drawFoil() {
  const w = canvas.width;
  const h = canvas.height;
  ctx2d.clearRect(0, 0, w, h);
  if (scratch.revealed) return;

  /* Silver gradient */
  const grad = ctx2d.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0,    '#38384A');
  grad.addColorStop(0.35, '#58586E');
  grad.addColorStop(0.65, '#2C2C3C');
  grad.addColorStop(1,    '#48485C');
  ctx2d.fillStyle = grad;
  ctx2d.fillRect(0, 0, w, h);

  /* Diagonal stripe texture */
  ctx2d.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx2d.lineWidth   = 0.8;
  for (let x = -h; x < w + h; x += 10) {
    ctx2d.beginPath();
    ctx2d.moveTo(x, 0);
    ctx2d.lineTo(x + h, h);
    ctx2d.stroke();
  }

  /* Centre label */
  ctx2d.fillStyle    = 'rgba(255,255,255,0.25)';
  ctx2d.font         = '900 15px "Noto Sans KR"';
  ctx2d.textAlign    = 'center';
  ctx2d.textBaseline = 'middle';
  ctx2d.fillText('✦  SCRATCH HERE  ✦', w / 2, h / 2);

  /* Soft erase (semi-transparent, smooth edges) */
ctx2d.globalCompositeOperation = 'destination-out';
const brushR = Math.min(w, h) * 0.12;

function softErase(x, y, r) {
  const g = ctx2d.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, 'rgba(0,0,0,0.70)');   // centre strength
  g.addColorStop(0.65, 'rgba(0,0,0,0.25)');
  g.addColorStop(1, 'rgba(0,0,0,0.00)');
  ctx2d.fillStyle = g;
  ctx2d.beginPath();
  ctx2d.arc(x, y, r, 0, Math.PI * 2);
  ctx2d.fill();
}

for (const p of scratch.pts) softErase(p.x, p.y, brushR);

ctx2d.globalCompositeOperation = 'source-over';
}

function initScratchCells() {
  scratch.cells   = new Uint8Array(scratch.cols * scratch.rows);
  scratch.cleared = 0;
  scratch.pts     = [];
  scratch.last    = null;
}

function markCells(x, y) {
  const w = canvas.width;
  const h = canvas.height;
  if (!w || !h) return;
  const r = Math.min(w, h) * 0.065;
  const x0 = Math.max(0, Math.floor((x - r) / w * scratch.cols));
  const x1 = Math.min(scratch.cols - 1, Math.floor((x + r) / w * scratch.cols));
  const y0 = Math.max(0, Math.floor((y - r) / h * scratch.rows));
  const y1 = Math.min(scratch.rows - 1, Math.floor((y + r) / h * scratch.rows));
  for (let row = y0; row <= y1; row++) {
    for (let col = x0; col <= x1; col++) {
      const idx = row * scratch.cols + col;
      if (!scratch.cells[idx]) {
        scratch.cells[idx] = 1;
        scratch.cleared++;
      }
    }
  }
}

/* How visible is the letter at (cx, cy) — samples nearby cells */
function visibilityAt(cx, cy) {
  if (!scratch.cells || !scratch.cells.length) return scratch.revealed ? 1 : 0;
  const R  = 2;
  const gx = Math.round(cx * scratch.cols);
  const gy = Math.round(cy * scratch.rows);
  let total = 0, cleared = 0;
  for (let dy = -R; dy <= R; dy++) {
    for (let dx = -R; dx <= R; dx++) {
      const nx  = Math.min(Math.max(gx + dx, 0), scratch.cols - 1);
      const ny  = Math.min(Math.max(gy + dy, 0), scratch.rows - 1);
      const idx = ny * scratch.cols + nx;
      total++;
      if (scratch.cells[idx]) cleared++;
    }
  }
  return total ? Math.min(cleared / total, 1) : 0;
}

function updateLetterOpacities() {
  const slots = scratch.slots;
  const els   = document.querySelectorAll('.letter-slot');
  els.forEach((el, i) => {
    if (i >= slots.length) return;
    el.style.opacity = scratch.revealed ? 1 : visibilityAt(slots[i].cx, slots[i].cy);
  });
}

/* ══════════════════════════════════════════
   Pointer Events
══════════════════════════════════════════ */
function getXY(e) {
  const rect = canvas.getBoundingClientRect();
  if (e.touches && e.touches.length) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  }
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

function onScratch(e) {
  if (scratch.revealed) return;
  e.preventDefault();
  const { x, y } = getXY(e);

  draw();       // lazy: pick result on first touch
  ensureSlots();
  document.getElementById('hint-wrap').style.display = 'none';

const r = Math.min(canvas.width, canvas.height) * 0.065;

function addPoint(px, py) {
  scratch.pts.push({ x: px, y: py });
  markCells(px, py);
}

if (!scratch.last) {
  addPoint(x, y);
} else {
  const dx = x - scratch.last.x;
  const dy = y - scratch.last.y;
  const dist = Math.hypot(dx, dy);
  const step = Math.max(2, r * 0.35); // smaller step = smoother stroke
  const n = Math.max(1, Math.ceil(dist / step));
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    addPoint(scratch.last.x + dx * t, scratch.last.y + dy * t);
  }
}
scratch.last = { x, y };

drawFoil();
updateLetterOpacities();

  if (ratio() >= 0.75) finalize();
}

/* Attach events after DOM ready */
canvas.addEventListener('mousedown', (e) => {
  onScratch(e);
  canvas.addEventListener('mousemove', onScratch);
});
canvas.addEventListener('mouseup',    () => { canvas.removeEventListener('mousemove', onScratch); scratch.last = null; });
canvas.addEventListener('mouseleave', () => { canvas.removeEventListener('mousemove', onScratch); scratch.last = null; });
canvas.addEventListener('touchstart', onScratch, { passive: false });
canvas.addEventListener('touchmove',  onScratch, { passive: false });
canvas.addEventListener('touchend',   () => { scratch.last = null; }, { passive: true });

/* ══════════════════════════════════════════
   Reveal / Finalize
══════════════════════════════════════════ */
function finalize() {
  if (scratch.revealed) return;
  scratch.revealed = true;
  commit();

  canvas.style.display = 'none';
  updateLetterOpacities();

  /* Show result overlay inside card */
  const result = state.picked || '';
  const lose   = isLose(result);
  document.getElementById('result-emoji').textContent = lose ? '😐' : '🎉';
  const box = document.getElementById('result-box');
  box.textContent = result;
  box.className   = 'result-box ' + (lose ? 'lose' : 'win');
  document.getElementById('result-overlay').classList.add('show');

  setTimeout(showDialog, 350);
}

function revealNow() {
  draw();
  ensureSlots();
  document.getElementById('hint-wrap').style.display = 'none';
  finalize();
}

function resetScratch() {
  scratch.pts          = [];
  scratch.cleared      = 0;
  scratch.last         = null;
  scratch.revealed     = false;
  scratch.slots        = [];
  scratch.slotsForText = null;
  initScratchCells();
  resetDraw();

  canvas.style.display = 'block';
  document.getElementById('hint-wrap').style.display       = 'flex';
  document.getElementById('result-overlay').classList.remove('show');
  document.getElementById('letter-container').innerHTML    = '';

  drawFoil();
}

/* ══════════════════════════════════════════
   Turn
══════════════════════════════════════════ */
function nextTurn() {
  if (!state.players.length) return;
  state.turn = (state.turn + 1) % state.players.length;
  resetScratch();
  renderTurnBar();
}

/* ══════════════════════════════════════════
   Render helpers
══════════════════════════════════════════ */
function renderLetterSlots() {
  const container = document.getElementById('letter-container');
  container.innerHTML = '';
  const result = state.picked || '';
  const lose   = isLose(result);
  const color       = lose ? 'rgba(255,255,255,0.9)' : '#FFD060';
  const borderColor = lose ? 'rgba(255,255,255,0.1)' : 'rgba(255,208,96,0.25)';
  const bgColor     = lose ? 'rgba(255,255,255,0.04)' : 'rgba(255,208,96,0.06)';

  scratch.slots.forEach(slot => {
    const el = document.createElement('div');
    el.className = 'letter-slot';
    el.style.cssText = [
      `left: calc(${slot.cx * 100}% - 20px)`,
      `top: calc(${slot.cy * 100}% - 20px)`,
      `transform: rotate(${slot.rot}rad)`,
      'opacity: 0',
      `color: ${color}`,
      `background: ${bgColor}`,
      `border: 1px solid ${borderColor}`,
      `text-shadow: 0 0 8px ${color}80`,
    ].join(';');
    el.textContent = slot.char;
    container.appendChild(el);
  });
}

function renderTurnBar() {
  document.getElementById('turn-name').textContent = currentPlayer(); // call as function
}

function renderInventory() {
  document.getElementById('inv-tags').innerHTML = state.prizes
    .map(p => `<span class="inv-tag ${p.qty <= 0 ? 'empty' : ''}">${p.label}  ×${p.qty}</span>`)
    .join('');
}

function renderLeft() {
  document.getElementById('left-pill').textContent = `LEFT  ${totalLeft()}`;
}

function renderPlayerTags() {
  document.getElementById('player-tags').innerHTML = state.players
    .map((p, i) => `
      <div class="tag">
        ${p}
        <button class="tag-remove" onclick="removePlayer(${i})">✕</button>
      </div>`)
    .join('');
  document.getElementById('player-empty').style.display =
    state.players.length ? 'none' : 'block';
  renderReady();
}

function renderPrizeList() {
  document.getElementById('prize-list').innerHTML = state.prizes
    .map((p, i) => `
      <div class="prize-row">
        <span class="prize-label">${p.label}</span>
        <button class="icon-btn" onclick="adjustQty(${i},-1)">−</button>
        <span class="prize-qty-badge">${p.qty}</span>
        <button class="icon-btn" onclick="adjustQty(${i},1)">+</button>
        <button class="icon-btn" onclick="removePrize(${i})" title="Remove">🗑</button>
      </div>`)
    .join('');
  renderReady();
  renderLeft();
  renderInventory();
}

function renderReady() {
  const ok = totalLeft() > 0 && state.players.length > 0;
  const el = document.getElementById('ready-text');
  el.className   = 'ready-text ' + (ok ? 'ready-ok' : 'ready-no');
  el.textContent = ok
    ? '✓  Start from the PLAY tab!'
    : '✗  Check players and prize quantities.';
}

/* ══════════════════════════════════════════
   Player / Prize actions
══════════════════════════════════════════ */
function addPlayer() {
  const input = document.getElementById('player-input');
  const name  = input.value.trim();
  if (!name) return;
  state.players.push(name);
  input.value = '';
  renderPlayerTags();
}

function removePlayer(i) {
  state.players.splice(i, 1);
  state.turn = state.players.length ? state.turn % state.players.length : 0;
  renderPlayerTags();
  renderTurnBar();
}

function addPrize() {
  const nameEl = document.getElementById('prize-input');
  const qtyEl  = document.getElementById('qty-input');
  const name   = nameEl.value.trim();
  const qty    = parseInt(qtyEl.value) || 0;
  if (!name || qty <= 0) return;
  state.prizes.push({ label: name, qty });
  nameEl.value = '';
  qtyEl.value  = '1';
  renderPrizeList();
}

function removePrize(i) {
  state.prizes.splice(i, 1);
  renderPrizeList();
}

function adjustQty(i, delta) {
  state.prizes[i].qty = Math.max(0, state.prizes[i].qty + delta);
  renderPrizeList();
}

/* ══════════════════════════════════════════
   Dialog
══════════════════════════════════════════ */
function showDialog() {
  const result = state.picked || '';
  const lose   = isLose(result);

  document.getElementById('d-emoji').textContent  = lose ? '😐' : '🎉';
  document.getElementById('d-player').textContent = currentPlayer(); // call as function
  const sub = document.getElementById('d-sub');
  sub.textContent = lose ? 'No luck this time…' : 'Winner!! 🎊';
  sub.className   = 'dialog-sub ' + (lose ? 'lose' : 'win');
  const prize = document.getElementById('d-prize');
  prize.textContent = result;
  prize.className   = 'dialog-prize ' + (lose ? 'lose' : 'win');
  document.getElementById('dialog').className = 'dialog ' + (lose ? 'lose' : 'win');

  document.getElementById('dialog-overlay').classList.add('show');
}

function closeDialog(e) {
  if (e.target === document.getElementById('dialog-overlay')) closeDialogDirect();
}

function closeDialogDirect() {
  document.getElementById('dialog-overlay').classList.remove('show');
}

/* ══════════════════════════════════════════
   Tab Switching
══════════════════════════════════════════ */
function switchTab(idx) {
  document.getElementById('setup-page').classList.toggle('active', idx === 0);
  document.getElementById('play-page').classList.toggle('active',  idx === 1);
  document.getElementById('nav-setup').classList.toggle('active',  idx === 0);
  document.getElementById('nav-play').classList.toggle('active',   idx === 1);

  if (idx === 1) {
    renderTurnBar();
    renderInventory();
    requestAnimationFrame(resizeCanvas);
  }
}

/* ══════════════════════════════════════════
   Keyboard shortcuts
══════════════════════════════════════════ */
document.getElementById('player-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') addPlayer();
});
document.getElementById('prize-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') addPrize();
});

/* ══════════════════════════════════════════
   Resize Observer
══════════════════════════════════════════ */
new ResizeObserver(() => {
  if (document.getElementById('play-page').classList.contains('active')) {
    resizeCanvas();
  }
}).observe(document.getElementById('scratch-wrap'));

/* ══════════════════════════════════════════
   Init
══════════════════════════════════════════ */
initScratchCells();
renderPlayerTags();
renderPrizeList();
renderLeft();
renderTurnBar();
renderInventory();