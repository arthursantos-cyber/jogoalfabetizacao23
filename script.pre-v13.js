'use strict';

// =========================================================
// CONTEÚDO ORIGINAL DO JOGO
// =========================================================
const databaseFase1 = [
  { word: 'CASA', syllables: ['CA', 'SA'], emoji: '🏠' },
  { word: 'BOLA', syllables: ['BO', 'LA'], emoji: '⚽' },
  { word: 'GATO', syllables: ['GA', 'TO'], emoji: '🐱' },
  { word: 'SAPO', syllables: ['SA', 'PO'], emoji: '🐸' },
  { word: 'DADO', syllables: ['DA', 'DO'], emoji: '🎲' },
  { word: 'MACACO', syllables: ['MA', 'CA', 'CO'], emoji: '🐒' },
  { word: 'BANANA', syllables: ['BA', 'NA', 'NA'], emoji: '🍌' },
  { word: 'CANETA', syllables: ['CA', 'NE', 'TA'], emoji: '🖊️' },
  { word: 'PIPOCA', syllables: ['PI', 'PO', 'CA'], emoji: '🍿' },
  { word: 'ESCORPIÃO', syllables: ['ES', 'COR', 'PI', 'ÃO'], emoji: '🦂' }
];

const databaseFase2 = [
  { word: 'CACHORRO', options: ['CADEIRA', 'CARRO', 'CACHORRO'], emoji: '🐶' },
  { word: 'MAÇÃ', options: ['MESA', 'MAÇÃ', 'MACACO'], emoji: '🍎' },
  { word: 'SOL', options: ['SAL', 'SOL', 'SOPA'], emoji: '☀️' },
  { word: 'BALÃO', options: ['BALÃO', 'BALEIA', 'BALA'], emoji: '🎈' },
  { word: 'CARRO', options: ['CARTA', 'COPO', 'CARRO'], emoji: '🚗' },
  { word: 'BANANA', options: ['BATATA', 'BANANA', 'BACIA'], emoji: '🍌' },
  { word: 'LEITE', options: ['LEITE', 'LEÃO', 'LIVRO'], emoji: '🥛' },
  { word: 'LUA', options: ['LATA', 'LUVA', 'LUA'], emoji: '🌙' },
  { word: 'TÊNIS', options: ['TELHADO', 'TÊNIS', 'TAPETE'], emoji: '👟' },
  { word: 'GELO', options: ['GELO', 'GATO', 'GOLA'], emoji: '🧊' }
];

const databaseFase3 = [
  { correct: ['O', 'SOL', 'BRILHA'], shuffle: ['BRILHA', 'SOL', 'O'], emoji: '☀️' },
  { correct: ['A', 'BOLA', 'CAIU'], shuffle: ['CAIU', 'A', 'BOLA'], emoji: '⚽' },
  { correct: ['EU', 'GOSTO', 'DE', 'DOCE'], shuffle: ['DE', 'EU', 'DOCE', 'GOSTO'], emoji: '🍭' },
  { correct: ['O', 'GATO', 'É', 'FOFO'], shuffle: ['É', 'GATO', 'FOFO', 'O'], emoji: '🐱' },
  { correct: ['MAMÃE', 'FAZ', 'BOLO', 'BOM'], shuffle: ['BOM', 'MAMÃE', 'BOLO', 'FAZ'], emoji: '🎂' },
  { correct: ['O', 'CÃO', 'CORRE', 'NO', 'PARQUE'], shuffle: ['NO', 'CORRE', 'O', 'PARQUE', 'CÃO'], emoji: '🛝' },
  { correct: ['JOÃO', 'JOGA', 'BOLA', 'NA', 'RUA'], shuffle: ['RUA', 'JOGA', 'NA', 'BOLA', 'JOÃO'], emoji: '🏃' },
  { correct: ['A', 'MENINA', 'LÊ', 'UM', 'LIVRO'], shuffle: ['LIVRO', 'A', 'UM', 'MENINA', 'LÊ'], emoji: '📚' },
  { correct: ['O', 'PASSARINHO', 'CANTA', 'NA', 'ÁRVORE'], shuffle: ['ÁRVORE', 'O', 'NA', 'CANTA', 'PASSARINHO'], emoji: '🐦' },
  { correct: ['EU', 'AMO', 'JOGAR', 'MEU', 'JOGO'], shuffle: ['MEU', 'AMO', 'JOGAR', 'JOGO', 'EU'], emoji: '🎮' }
];

const databaseFase4 = [
  { word: 'CASA', missing: ['A'], level: 1 },
  { word: 'BOLA', missing: ['O'], level: 1 },
  { word: 'GATO', missing: ['A', 'O'], level: 2 },
  { word: 'SAPO', missing: ['S', 'P'], level: 2 },
  { word: 'DADO', missing: ['D', 'D'], level: 2 },
  { word: 'BONECA', missing: ['O', 'E', 'A'], level: 3 },
  { word: 'PIPOCA', missing: ['I', 'O', 'A'], level: 3 },
  { word: 'CAVALO', missing: ['A', 'A', 'O'], level: 3 },
  { word: 'PANELA', missing: ['A', 'E', 'A'], level: 3 },
  { word: 'ESCORPIÃO', missing: ['E', 'P', 'ÃO'], level: 3 },
  { word: 'JANELA', missing: ['J', 'L'], level: 2 },
  { word: 'LIVRO', missing: ['I', 'R'], level: 2 },
  { word: 'CEBOLA', missing: ['E', 'O', 'A'], level: 3 },
  { word: 'XÍCARA', missing: ['Í', 'A', 'A'], level: 3 },
  { word: 'GIRAFA', missing: ['I', 'A', 'A'], level: 3 },
  { word: 'TOMATE', missing: ['O', 'A', 'E'], level: 3 },
  { word: 'SAPATO', missing: ['S', 'P', 'T'], level: 3 },
  { word: 'FOGUETE', missing: ['O', 'U', 'E'], level: 3 },
  { word: 'MACARRÃO', missing: ['A', 'R', 'ÃO'], level: 3 },
  { word: 'ESTRELA', missing: ['E', 'R', 'A'], level: 3 }
];

const alphabetData = [
  // Exemplos curtos e familiares facilitam a compreensão e a pronúncia da voz-guia.
  { letter: 'A', emoji: '🐝', word: 'Abelha', color: '#ff5252' },
  { letter: 'B', emoji: '⚽', word: 'Bola', color: '#448aff' },
  { letter: 'C', emoji: '🏠', word: 'Casa', color: '#4caf50' },
  { letter: 'D', emoji: '🎲', word: 'Dado', color: '#ff9800' },
  { letter: 'E', emoji: '⭐', word: 'Estrela', color: '#9c27b0' },
  { letter: 'F', emoji: '🔥', word: 'Fogo', color: '#ff5722' },
  { letter: 'G', emoji: '🐱', word: 'Gato', color: '#795548' },
  { letter: 'H', emoji: '⏰', word: 'Hora', color: '#607d8b' },
  { letter: 'I', emoji: '🏝️', word: 'Ilha', color: '#e91e63' },
  { letter: 'J', emoji: '🎮', word: 'Jogo', color: '#00bcd4' },
  { letter: 'K', emoji: '🥝', word: 'Kiwi', color: '#8bc34a' },
  { letter: 'L', emoji: '🌙', word: 'Lua', color: '#3f51b5' },
  { letter: 'M', emoji: '✋', word: 'Mão', color: '#fb8c00' },
  { letter: 'N', emoji: '☁️', word: 'Nuvem', color: '#03a9f4' },
  { letter: 'O', emoji: '🥚', word: 'Ovo', color: '#ffc107' },
  { letter: 'P', emoji: '🦆', word: 'Pato', color: '#e91e63' },
  { letter: 'Q', emoji: '🧀', word: 'Queijo', color: '#cddc39' },
  { letter: 'R', emoji: '🐭', word: 'Rato', color: '#f44336' },
  { letter: 'S', emoji: '🐸', word: 'Sapo', color: '#4caf50' },
  { letter: 'T', emoji: '🦔', word: 'Tatu', color: '#009688' },
  { letter: 'U', emoji: '🍇', word: 'Uva', color: '#673ab7' },
  { letter: 'V', emoji: '🕯️', word: 'Vela', color: '#ff5722' },
  { letter: 'W', emoji: '👦', word: 'William', color: '#795548' },
  { letter: 'X', emoji: '☕', word: 'Xícara', color: '#9e9e9e' },
  { letter: 'Y', emoji: '👦', word: 'Yuri', color: '#00bcd4' },
  { letter: 'Z', emoji: '🦓', word: 'Zebra', color: '#455a64' }
];

const vowelsData = [
  { letter: 'A', emoji: '🐝', word: 'Abelha', color: '#ff5252' },
  { letter: 'E', emoji: '🐘', word: 'Elefante', color: '#448aff' },
  { letter: 'I', emoji: '🏝️', word: 'Ilha', color: '#4caf50' },
  { letter: 'O', emoji: '🐑', word: 'Ovelha', color: '#ff9800' },
  { letter: 'U', emoji: '🍇', word: 'Uva', color: '#9c27b0' }
];

const databaseFase6 = [
  'ABACAXI', 'BOLA', 'CASA', 'DADO', 'ELEFANTE', 'GATO', 'JANELA', 'MACACO', 'SAPO', 'TARTARUGA',
  'GIRAFA', 'CAVALO', 'COMPUTADOR', 'ESCOVA', 'PALHAÇO', 'GARRAFA', 'MENINO', 'PANELA', 'SACOLA', 'VACINA'
];


const rhymeData = [
  { word: 'GATO', answer: 'PATO', options: ['PATO', 'CASA', 'SOL'], emoji: '🐱' },
  { word: 'BOLA', answer: 'COLA', options: ['MESA', 'COLA', 'LUA'], emoji: '⚽' },
  { word: 'MÃO', answer: 'PÃO', options: ['PÃO', 'GATO', 'FLOR'], emoji: '✋' },
  { word: 'FADA', answer: 'NADA', options: ['BOLA', 'NADA', 'SOL'], emoji: '🧚' },
  { word: 'BALÃO', answer: 'CORAÇÃO', options: ['CORAÇÃO', 'CASA', 'LIVRO'], emoji: '🎈' },
  { word: 'PANELA', answer: 'JANELA', options: ['SAPO', 'JANELA', 'DADO'], emoji: '🍲' },
  { word: 'SAPATO', answer: 'GATO', options: ['GATO', 'MESA', 'BOLA'], emoji: '👟' },
  { word: 'LEÃO', answer: 'AVIÃO', options: ['AVIÃO', 'CASA', 'PATO'], emoji: '🦁' }
];


// Palavras curtas e familiares usadas nas novas atividades de digitação, fala e escuta.
// Evitam termos estrangeiros e pronúncias ambíguas para o público em alfabetização.
const easyWordData = [
  { word: 'CASA', emoji: '🏠', syllables: ['CA', 'SA'] },
  { word: 'BOLA', emoji: '⚽', syllables: ['BO', 'LA'] },
  { word: 'GATO', emoji: '🐱', syllables: ['GA', 'TO'] },
  { word: 'SAPO', emoji: '🐸', syllables: ['SA', 'PO'] },
  { word: 'DADO', emoji: '🎲', syllables: ['DA', 'DO'] },
  { word: 'PATO', emoji: '🦆', syllables: ['PA', 'TO'] },
  { word: 'LUA', emoji: '🌙', syllables: ['LU', 'A'] },
  { word: 'SOL', emoji: '☀️', syllables: ['SOL'] },
  { word: 'CARRO', emoji: '🚗', syllables: ['CAR', 'RO'] },
  { word: 'BANANA', emoji: '🍌', syllables: ['BA', 'NA', 'NA'] },
  { word: 'PIPOCA', emoji: '🍿', syllables: ['PI', 'PO', 'CA'] },
  { word: 'LEITE', emoji: '🥛', syllables: ['LEI', 'TE'] }
];

// =========================================================
// UTILITÁRIOS
// =========================================================
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function randomItem(array) { return array[Math.floor(Math.random() * array.length)]; }
function isVowel(letter) { return 'AEIOUÁÀÂÃÉÊÍÓÔÕÚ'.includes(letter.normalize('NFC')); }
function vibrate(pattern) { if (navigator.vibrate) navigator.vibrate(pattern); }

function normalizeAnswer(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

function markChallengeComplete(shell, label = 'ACERTOU!') {
  if (!shell || shell.dataset.completed === 'true') return;
  shell.dataset.completed = 'true';
  shell.classList.add('challenge-complete');
  const badge = element('div', 'challenge-complete-badge', `✓ ${label}`);
  shell.appendChild(badge);
  shell.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(1.018)' },
    { transform: 'scale(1)' }
  ], { duration: 420, easing: 'ease-out' });

  // O acerto é apenas temporário. Após 5 segundos, a mesma fase volta
  // totalmente ao estado inicial para poder ser refeita quantas vezes quiser.
  window.clearTimeout(shell.__restartTimer);
  shell.__restartTimer = window.setTimeout(() => {
    const card = shell.closest('.feed-card');
    if (!card || !card.isConnected) return;
    FeedManager.restartCard?.(card);
  }, 5000);
}

function disableShellButtons(shell, except = []) {
  const allowed = new Set(except);
  $$('button', shell).forEach((button) => {
    if (!allowed.has(button)) button.disabled = true;
  });
}

const SafeStorage = {
  get(key, fallback = null) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : value;
    } catch (_) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch (_) { /* armazenamento indisponível */ }
  },
  getJSON(key, fallback) {
    try { return JSON.parse(this.get(key, JSON.stringify(fallback))); } catch (_) { return fallback; }
  },
  setJSON(key, value) { this.set(key, JSON.stringify(value)); }
};

// =========================================================
// MÚSICA DE FUNDO + EFEITOS GERADOS NO NAVEGADOR
// =========================================================
const AudioEngine = (() => {
  let context = null;
  let unlocked = false;
  let musicEnabled = SafeStorage.get('feed-music', 'true') !== 'false';
  let effectsEnabled = SafeStorage.get('feed-effects', 'true') !== 'false';
  let music = null;

  function ensureContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!context) context = new AudioContextClass();
    return context;
  }

  function ensureMusic() {
    if (!music) {
      music = $('#background-music');
      if (music) {
        music.loop = true;
        music.volume = .18;
        music.preload = 'auto';
      }
    }
    return music;
  }

  function tone(frequency, duration, type, volume, delay = 0) {
    const ctx = ensureContext();
    if (!ctx) return;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, volume), ctx.currentTime + delay + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(ctx.currentTime + delay);
    oscillator.stop(ctx.currentTime + delay + duration + 0.03);
  }

  function startMusic() {
    if (!unlocked || !musicEnabled) return;
    const audio = ensureMusic();
    if (!audio) return;
    const promise = audio.play();
    Promise.resolve(promise).catch(() => {});
  }

  function stopMusic() {
    const audio = ensureMusic();
    if (audio) audio.pause();
  }

  function unlock() {
    const ctx = ensureContext();
    const finish = () => {
      if (ctx && ctx.state !== 'running') return;
      unlocked = true;
      startMusic();
    };
    if (!ctx || ctx.state === 'running') { finish(); return; }
    const resume = ctx.resume();
    if (ctx.state === 'running') finish();
    Promise.resolve(resume).then(finish).catch(() => {});
  }

  function sfx(name) {
    if (!effectsEnabled || !unlocked) return;
    if (name === 'click') tone(440, .06, 'sine', .026);
    if (name === 'correct') {
      tone(523.25, .11, 'triangle', .07);
      tone(659.25, .13, 'triangle', .07, .075);
      tone(783.99, .17, 'triangle', .07, .15);
    }
    if (name === 'wrong') {
      tone(190, .14, 'sawtooth', .035);
      tone(145, .17, 'sawtooth', .03, .09);
    }
    if (name === 'like') {
      tone(660, .07, 'sine', .035);
      tone(880, .09, 'sine', .04, .045);
    }
    if (name === 'complete') [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, .2, 'triangle', .07, i * .09));
  }

  function setMusic(value) {
    musicEnabled = value;
    SafeStorage.set('feed-music', String(value));
    if (value) startMusic(); else stopMusic();
  }
  function setEffects(value) {
    effectsEnabled = value;
    SafeStorage.set('feed-effects', String(value));
  }

  // Já deixa o arquivo da música pronto para o primeiro toque do jogador.
  ensureMusic()?.load?.();

  return {
    unlock, sfx, setMusic, setEffects, startMusic, stopMusic,
    get musicEnabled() { return musicEnabled; },
    get effectsEnabled() { return effectsEnabled; },
    get unlocked() { return unlocked; }
  };
})();

// =========================================================
// VOZ-GUIA
// =========================================================
const VoiceGuide = (() => {
  let enabled = SafeStorage.get('feed-voice', 'true') !== 'false';
  let voice = null;
  let timer = null;
  let generation = 0;

  function chooseVoice() {
    if (!('speechSynthesis' in window)) return;
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return;
    const pt = voices.filter((item) => /^pt[-_]/i.test(item.lang));
    const preferred = ['Francisca', 'Google português do Brasil', 'Luciana', 'Felipe', 'Antonio'];
    voice = preferred.map((name) => pt.find((item) => item.name.toLowerCase().includes(name.toLowerCase()))).find(Boolean)
      || pt.find((item) => /brasil|brazil/i.test(`${item.name} ${item.lang}`)) || pt[0] || voices[0];
  }

  function cancel() {
    generation += 1;
    window.clearTimeout(timer);
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }

  function speak(text, options = {}) {
    if (!enabled || !text || !('speechSynthesis' in window) || !AudioEngine.unlocked) return;
    cancel();
    chooseVoice();
    const currentGeneration = generation;
    timer = window.setTimeout(() => {
      if (!enabled || currentGeneration !== generation) return;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voice?.lang || 'pt-BR';
      utterance.voice = voice;
      utterance.rate = options.rate ?? .93;
      utterance.pitch = options.pitch ?? 1.05;
      utterance.volume = .96;
      speechSynthesis.speak(utterance);
    }, options.delay ?? 110);
  }

  function setEnabled(value) {
    enabled = value;
    SafeStorage.set('feed-voice', String(value));
    if (!value) cancel();
  }

  if ('speechSynthesis' in window) {
    chooseVoice();
    speechSynthesis.addEventListener?.('voiceschanged', chooseVoice);
  }

  return { speak, cancel, setEnabled, get enabled() { return enabled; } };
})();

// =========================================================
// FEEDBACK VISUAL
// =========================================================
function confetti(amount = 22) {
  const colors = ['#4ade80', '#facc15', '#38bdf8', '#fb7185', '#a78bfa'];
  for (let i = 0; i < amount; i += 1) {
    const particle = document.createElement('i');
    particle.className = 'confetti';
    particle.style.left = `${45 + Math.random() * 10}%`;
    particle.style.top = `${45 + Math.random() * 8}%`;
    particle.style.background = randomItem(colors);
    particle.style.setProperty('--x', `${(Math.random() - .5) * 440}px`);
    particle.style.setProperty('--y', `${-70 + Math.random() * 350}px`);
    $('#feedback-layer').appendChild(particle);
    window.setTimeout(() => particle.remove(), 950);
  }
}

function feedback(type, text, voiceText = '') {
  const layer = $('#feedback-layer');
  const toast = document.createElement('div');
  toast.className = `feedback-toast ${type}`;
  toast.textContent = text;
  layer.appendChild(toast);
  window.setTimeout(() => toast.remove(), 850);
  if (type === 'correct') {
    AudioEngine.sfx('correct');
    vibrate(35);
    confetti();
  } else {
    AudioEngine.sfx('wrong');
    vibrate([45, 35, 45]);
  }
  if (voiceText) VoiceGuide.speak(voiceText, { delay: 90 });
}


function heartIconMarkup(filled = false, extraClass = '') {
  return `<svg class="heart-svg ${filled ? 'heart-svg-filled' : 'heart-svg-outline'} ${extraClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.2C10.9 20.1 4 15.9 2.5 10.9C1.3 6.9 3.7 3.5 7.4 3.5c2.1 0 3.7 1.2 4.6 2.6.9-1.4 2.5-2.6 4.6-2.6 3.7 0 6.1 3.4 4.9 7.4C20 15.9 13.1 20.1 12 21.2Z"/></svg>`;
}

function likeBurst(card, sourceButton) {
  if (!card) return;
  const heart = element('div', 'like-burst-heart');
  heart.innerHTML = heartIconMarkup(true, 'heart-svg-burst');
  card.appendChild(heart);
  const sourceRect = sourceButton?.getBoundingClientRect?.();
  const cardRect = card.getBoundingClientRect();
  const originX = sourceRect ? sourceRect.left + sourceRect.width / 2 - cardRect.left : cardRect.width * .82;
  const originY = sourceRect ? sourceRect.top + sourceRect.height / 2 - cardRect.top : cardRect.height * .5;
  for (let i = 0; i < 10; i += 1) {
    const spark = element('i', 'like-spark');
    const angle = (Math.PI * 2 * i) / 10 + Math.random() * .22;
    const distance = 40 + Math.random() * 48;
    spark.style.left = `${originX}px`;
    spark.style.top = `${originY}px`;
    spark.style.setProperty('--lx', `${Math.cos(angle) * distance}px`);
    spark.style.setProperty('--ly', `${Math.sin(angle) * distance}px`);
    card.appendChild(spark);
    window.setTimeout(() => spark.remove(), 700);
  }
  window.setTimeout(() => heart.remove(), 760);
}

// =========================================================
// CURTIDAS
// =========================================================
const Likes = (() => {
  const keys = new Set(SafeStorage.getJSON('feed-liked-games', []));
  function save() { SafeStorage.setJSON('feed-liked-games', [...keys]); }
  function has(key) { return keys.has(key); }
  function toggle(key) {
    if (keys.has(key)) keys.delete(key); else keys.add(key);
    save();
    $$(`.like-button[data-like-key="${CSS.escape(key)}"]`).forEach((button) => {
      button.classList.toggle('liked', keys.has(key));
      $('.action-icon', button).innerHTML = heartIconMarkup(keys.has(key));
      $('span:last-child', button).textContent = keys.has(key) ? 'CURTIDO' : 'Curtir';
    });
    return keys.has(key);
  }
  return { has, toggle, values: () => [...keys] };
})();

// =========================================================
// ESTRUTURA DOS CARTÕES
// =========================================================
function element(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function progressBar() {
  const root = element('div', 'progress');
  root.appendChild(element('span'));
  return root;
}

function setProgress(root, current, total) {
  const fill = $('.progress > span', root);
  if (fill) fill.style.width = `${Math.max(0, Math.min(100, (current / Math.max(1, total)) * 100))}%`;
}

function makeFeedCard(spec, shell, controller) {
  const card = element('section', 'feed-card');
  card.dataset.key = spec.key;
  card.dataset.title = spec.title;
  card.appendChild(shell);

  const meta = element('div', 'card-meta');
  meta.innerHTML = `<strong>${spec.title}</strong><p>${spec.description}</p>`;
  card.appendChild(meta);

  const rail = element('div', 'action-rail');
  const like = element('button', `action-button like-button${Likes.has(spec.key) ? ' liked' : ''}`);
  like.type = 'button';
  like.dataset.likeKey = spec.key;
  like.innerHTML = `<span class="action-icon">${heartIconMarkup(Likes.has(spec.key))}</span><span>${Likes.has(spec.key) ? 'CURTIDO' : 'Curtir'}</span>`;
  like.addEventListener('click', (event) => {
    event.stopPropagation();
    AudioEngine.unlock();
    // Curtir é um gesto silencioso: nenhuma fala da voz-guia é disparada.
    const liked = Likes.toggle(spec.key);
    if (liked) {
      AudioEngine.sfx('like');
      vibrate(22);
      likeBurst(card, like);
    } else {
      AudioEngine.sfx('click');
    }
  });

  const repeat = element('button', 'action-button');
  repeat.type = 'button';
  repeat.innerHTML = '<span class="action-icon">🔊</span><span>Ouvir</span>';
  repeat.addEventListener('click', (event) => {
    event.stopPropagation();
    AudioEngine.unlock();
    controller.repeat?.();
  });
  rail.append(like, repeat);
  card.appendChild(rail);
  card.__controller = controller;
  card.__spec = spec;
  return card;
}

function makeShell(title, subtitle = '') {
  const shell = element('div', 'game-shell');
  shell.appendChild(element('div', 'game-title', title));
  if (subtitle) shell.appendChild(element('p', 'game-subtitle', subtitle));
  return shell;
}

// =========================================================
// CARTÕES INDIVIDUAIS: LETRAS, VOGAIS E SÍLABAS
// =========================================================
function createLearningCard(spec) {
  const shell = makeShell(spec.label, spec.prompt);
  shell.classList.add('learning-card');
  const orb = element('button', `learning-orb ${spec.kind === 'syllable' ? 'syllable-orb' : ''}`);
  orb.type = 'button';
  orb.style.setProperty('--item-color', spec.color);
  orb.innerHTML = `<span class="learning-letter">${spec.symbol}</span><span class="learning-emoji">${spec.emoji}</span>`;
  shell.appendChild(orb);
  shell.appendChild(element('div', 'learning-word', spec.word));
  shell.appendChild(element('div', 'tap-hint', 'Toque para ouvir'));

  const sayContent = () => {
    AudioEngine.unlock();
    AudioEngine.sfx('click');
    orb.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.07)' }, { transform: 'scale(1)' }], { duration: 330 });
    VoiceGuide.speak(spec.speech, { rate: .86, delay: 50 });
  };
  orb.addEventListener('click', sayContent);

  const controller = {
    enter() { VoiceGuide.speak(spec.enterSpeech, { delay: 380 }); },
    leave() { VoiceGuide.cancel(); },
    repeat: sayContent
  };
  return makeFeedCard(spec, shell, controller);
}

// =========================================================
// MINIJOGO 1: FORMAR PALAVRA COM SÍLABAS
// =========================================================
function createWordBuilderCard(spec) {
  const item = spec.item;
  const shell = makeShell('FORME A PALAVRA', 'Toque nas sílabas na ordem correta.');
  const emoji = element('div', 'emoji-main', item.emoji);
  const slots = element('div', 'word-display');
  const grid = element('div', 'grid-buttons');
  shell.append(emoji, slots, grid);

  let syllableIndex = 0;
  let locked = false;
  const allSyllables = [...new Set(databaseFase1.flatMap((entry) => entry.syllables))];
  const instruction = () => `Monte a palavra ${item.word.toLowerCase()}.`;

  slots.replaceChildren(...item.syllables.map(() => element('span', 'word-slot', '_')));
  const choices = [...item.syllables];
  while (choices.length < Math.min(9, Math.max(6, item.syllables.length + 4))) choices.push(randomItem(allSyllables));
  shuffle(choices).forEach((syllable) => {
    const button = element('button', 'game-button', syllable);
    button.type = 'button';
    button.addEventListener('click', async () => {
      if (locked) return;
      AudioEngine.unlock();
      const expected = item.syllables[syllableIndex];
      if (syllable !== expected) {
        button.classList.add('wrong');
        feedback('wrong', 'Tente outra!', 'Tente outra.');
        await wait(420);
        button.classList.remove('wrong');
        return;
      }
      const slot = $$('.word-slot', slots)[syllableIndex];
      slot.textContent = syllable;
      slot.classList.add('filled');
      syllableIndex += 1;
      if (syllableIndex < item.syllables.length) {
        VoiceGuide.speak(syllable, { rate: .82, delay: 25 });
        return;
      }
      locked = true;
      button.classList.add('correct');
      feedback('correct', `${item.word}!`, item.word.toLowerCase());
      disableShellButtons(shell);
      markChallengeComplete(shell);
    });
    grid.appendChild(button);
  });

  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak(instruction(), { delay: 360 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? item.word.toLowerCase() : instruction()); }
  });
}

// =========================================================
// MINIJOGO 2: ESCOLHER O NOME DA FIGURA
// =========================================================
function createPictureChoiceCard(spec) {
  const item = spec.item;
  const shell = makeShell('QUAL É A PALAVRA?', 'Observe a figura e escolha o nome correto.');
  const emoji = element('div', 'emoji-main', item.emoji);
  const list = element('div', 'choice-list');
  shell.append(emoji, list);
  let locked = false;

  shuffle(item.options).forEach((option) => {
    const button = element('button', 'game-button', option);
    button.type = 'button';
    button.addEventListener('click', async () => {
      if (locked) return;
      AudioEngine.unlock();
      if (option !== item.word) {
        button.classList.add('wrong');
        feedback('wrong', 'Não é essa!', 'Tente outra.');
        await wait(420);
        button.classList.remove('wrong');
        return;
      }
      locked = true;
      button.classList.add('correct');
      feedback('correct', `${item.word}!`, item.word.toLowerCase());
      disableShellButtons(shell);
      markChallengeComplete(shell);
    });
    list.appendChild(button);
  });

  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak('Escolha o nome da figura.', { delay: 360 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? item.word.toLowerCase() : 'Escolha o nome da figura.'); }
  });
}

// =========================================================
// MINIJOGO 3: ORGANIZAR FRASE
// =========================================================
function createSentenceCard(spec) {
  const item = spec.item;
  const shell = makeShell('ORGANIZE A FRASE', 'Toque nas palavras na ordem correta.');
  const emoji = element('div', 'emoji-main', item.emoji);
  const sentence = element('div', 'sentence-box');
  const bank = element('div', 'word-bank');
  const clear = element('button', 'small-action', 'LIMPAR');
  clear.type = 'button';
  shell.append(emoji, sentence, bank, clear);
  let selected = [];
  let locked = false;

  function render() {
    selected = [];
    sentence.replaceChildren();
    bank.replaceChildren();
    shuffle(item.shuffle.map((word, itemIndex) => ({ word, itemIndex }))).forEach((entry) => {
      const button = element('button', 'game-button', entry.word);
      button.type = 'button';
      button.addEventListener('click', () => selectWord(entry, button));
      bank.appendChild(button);
    });
  }

  async function selectWord(entry, button) {
    if (locked || button.disabled) return;
    AudioEngine.unlock();
    button.classList.add('selected');
    button.disabled = true;
    selected.push({ ...entry, button });
    sentence.appendChild(element('span', 'game-button selected', entry.word));
    VoiceGuide.speak(entry.word.toLowerCase(), { rate: .88, delay: 20 });
    if (selected.length !== item.correct.length) return;
    const answer = selected.map((entryItem) => entryItem.word);
    const correct = item.correct.every((word, position) => word === answer[position]);
    if (!correct) {
      feedback('wrong', 'A ordem mudou!', 'Tente de novo.');
      await wait(720);
      render();
      return;
    }
    locked = true;
    const phrase = item.correct.join(' ');
    feedback('correct', 'Frase correta!', phrase.toLowerCase());
    disableShellButtons(shell);
    markChallengeComplete(shell);
  }

  clear.addEventListener('click', () => { if (!locked) { AudioEngine.unlock(); render(); } });
  render();
  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak('Organize a frase.', { delay: 360 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? item.correct.join(' ').toLowerCase() : 'Toque nas palavras na ordem certa.'); }
  });
}

// =========================================================
// MINIJOGO 4: COMPLETAR PALAVRA
// =========================================================
function createMissingLettersCard(spec) {
  const item = spec.item;
  const shell = makeShell('COMPLETE A PALAVRA', 'Escolha as letras que estão faltando.');
  const word = element('div', 'missing-word');
  const choices = element('div', 'grid-buttons');
  shell.append(word, choices);
  let missingIndex = 0;
  let locked = false;

  function buildSegments() {
    const segments = [];
    let cursor = 0;
    item.missing.forEach((token, tokenIndex) => {
      const position = item.word.indexOf(token, cursor);
      if (position < 0) return;
      if (position > cursor) segments.push({ type: 'fixed', value: item.word.slice(cursor, position) });
      segments.push({ type: 'slot', value: token, tokenIndex });
      cursor = position + token.length;
    });
    if (cursor < item.word.length) segments.push({ type: 'fixed', value: item.word.slice(cursor) });
    return segments;
  }

  word.classList.toggle('long-word', item.word.length >= 8);
  buildSegments().forEach((segment) => {
    if (segment.type === 'fixed') {
      [...segment.value].forEach((char) => {
        const fixed = element('span', 'fixed-char', char);
        fixed.setAttribute('aria-hidden', 'true');
        word.appendChild(fixed);
      });
    } else {
      const slot = element('span', 'missing-slot', '');
      slot.dataset.tokenIndex = String(segment.tokenIndex);
      slot.dataset.placeholder = segment.value;
      slot.style.setProperty('--slot-chars', String(Math.max(1, [...segment.value].length)));
      slot.setAttribute('aria-label', `Letra faltando ${segment.tokenIndex + 1}`);
      word.appendChild(slot);
    }
  });
  const optionPool = [...new Set(item.missing)];
  for (const value of shuffle(['A','E','I','O','U','B','C','D','M','P','R','S','T','ÃO'])) {
    if (optionPool.length >= 9) break;
    if (!optionPool.includes(value)) optionPool.push(value);
  }
  shuffle(optionPool).forEach((value) => {
    const button = element('button', 'game-button', value);
    button.type = 'button';
    button.addEventListener('click', async () => {
      if (locked) return;
      const expected = item.missing[missingIndex];
      if (value !== expected) {
        button.classList.add('wrong');
        feedback('wrong', 'Letra errada!', 'Tente outra.');
        await wait(420);
        button.classList.remove('wrong');
        return;
      }
      const slot = $(`.missing-slot[data-token-index="${missingIndex}"]`, word);
      slot.textContent = value;
      slot.classList.add('filled');
      missingIndex += 1;
      if (missingIndex < item.missing.length) {
        VoiceGuide.speak(value.toLowerCase(), { rate: .82, delay: 20 });
        return;
      }
      locked = true;
      feedback('correct', `${item.word}!`, item.word.toLowerCase());
      disableShellButtons(shell);
      markChallengeComplete(shell);
    });
    choices.appendChild(button);
  });

  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak('Complete a palavra.', { delay: 360 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? item.word.toLowerCase() : 'Escolha as letras que faltam.'); }
  });
}

// =========================================================
// MINIJOGO 5: CARRINHO DAS LETRAS
// =========================================================
function createCarGameCard(spec) {
  const target = spec.target;
  const shell = makeShell('CORRIDA DAS LETRAS', 'Pegue a letra indicada com o carrinho.');
  shell.classList.add('car-shell');

  const hud = element('div', 'car-hud');
  const timerBox = element('div', 'timer-box', 'TEMPO: 14');
  const targetBox = element('div', 'target-box', `PEGUE: ${target}`);
  const scoreBox = element('div', 'score-box', '⭐ 0');
  hud.append(timerBox, targetBox, scoreBox);
  const timerBar = element('div', 'timer-bar');
  timerBar.appendChild(element('span'));

  const track = element('div', 'car-track');
  track.innerHTML = `
    <span class="cloud">☁️</span><span class="cloud two">☁️</span>
    <span class="road-side left"></span><span class="road-side right"></span>
    <span class="lane-divider lane-one"></span><span class="lane-divider lane-two"></span>`;
  const car = element('div', 'car', '🏎️');
  const controls = element('div', 'car-controls');
  const left = element('button', 'car-control', '◀');
  const right = element('button', 'car-control', '▶');
  left.type = right.type = 'button';
  controls.append(left, right);
  const hint = element('div', 'car-track-hint', 'Use ◀ ▶ ou toque em uma pista');
  const gameOver = element('div', 'game-over');
  const overTitle = element('h2', '', 'TENTE DE NOVO!');
  const overScore = element('p', 'game-subtitle', `Encontre a letra ${target}.`);
  const retry = element('button', 'game-button', 'TENTAR NOVAMENTE');
  retry.type = 'button';
  gameOver.append(overTitle, overScore, retry);
  track.append(car, controls, hint, gameOver);
  shell.append(hud, timerBar, track);

  let active = false;
  let completed = false;
  let ended = false;
  let lane = 1;
  let timeLeft = 14;
  let bubbles = [];
  let raf = 0;
  let previousTime = 0;
  let spawnElapsed = .45;
  let spawnCount = 0;
  let pointerStart = null;
  const lanes = [16.7, 50, 83.3];
  const letters = alphabetData.map((entry) => entry.letter);

  function updateHud() {
    timerBox.textContent = `TEMPO: ${Math.max(0, Math.ceil(timeLeft))}`;
    targetBox.textContent = `PEGUE: ${target}`;
    scoreBox.textContent = completed ? '⭐ 1' : '⭐ 0';
    $('span', timerBar).style.width = `${Math.max(0, timeLeft / 14 * 100)}%`;
    car.style.left = `${lanes[lane]}%`;
  }

  function removeBubble(bubble) {
    if (!bubble || bubble.removed) return;
    bubble.removed = true;
    bubble.node.remove();
    bubbles = bubbles.filter((entry) => entry !== bubble);
  }

  function spawnBubble() {
    if (!active || ended || completed) return;
    const bubbleLane = randomItem([0,1,2]);
    const targetVisible = bubbles.some((bubble) => !bubble.removed && bubble.letter === target);
    const letter = (!targetVisible || spawnCount % 3 === 0 || Math.random() < .38)
      ? target
      : randomItem(letters.filter((entry) => entry !== target));
    spawnCount += 1;
    const node = element('button', `falling-letter${letter === target ? ' target-letter' : ''}`, letter);
    node.type = 'button';
    node.style.left = `${lanes[bubbleLane]}%`;
    node.style.transform = 'translate(-50%, -72px)';
    track.insertBefore(node, car);
    const bubble = { node, lane: bubbleLane, letter, y: -72, speed: 112 + Math.random() * 28, removed: false };
    node.addEventListener('click', (event) => { event.stopPropagation(); if (active && !ended) catchBubble(bubble); });
    bubbles.push(bubble);
  }

  function touchesCar(bubble) {
    if (bubble.removed || bubble.lane !== lane) return false;
    const br = bubble.node.getBoundingClientRect();
    const cr = car.getBoundingClientRect();
    return br.right > cr.left + 10 && br.left < cr.right - 10 && br.bottom > cr.top + 8 && br.top < cr.bottom - 6;
  }

  function finishSuccess() {
    completed = true;
    ended = true;
    cancelAnimationFrame(raf);
    bubbles.forEach(removeBubble);
    car.classList.add('car-win');
    feedback('correct', `Letra ${target}!`, `Letra ${target}.`);
    updateHud();
    markChallengeComplete(shell);
  }

  function catchBubble(bubble) {
    if (!bubble || bubble.removed || ended || completed) return;
    const correct = bubble.letter === target;
    removeBubble(bubble);
    if (correct) {
      finishSuccess();
    } else {
      car.classList.remove('car-hit'); void car.offsetWidth; car.classList.add('car-hit');
      feedback('wrong', 'Letra errada!', 'Tente outra.');
      window.setTimeout(() => car.classList.remove('car-hit'), 380);
    }
  }

  function frame(timestamp) {
    if (!active || ended || completed) return;
    if (!previousTime) previousTime = timestamp;
    const dt = Math.min(.04, (timestamp - previousTime) / 1000);
    previousTime = timestamp;
    timeLeft -= dt;
    spawnElapsed += dt;
    if (spawnElapsed >= .95) { spawnElapsed = 0; spawnBubble(); }
    const trackHeight = track.clientHeight;
    [...bubbles].forEach((bubble) => {
      bubble.y += bubble.speed * dt;
      bubble.node.style.transform = `translate(-50%, ${bubble.y}px)`;
      if (touchesCar(bubble)) catchBubble(bubble);
      else if (bubble.y > trackHeight + 80) removeBubble(bubble);
    });
    updateHud();
    if (timeLeft <= 0) {
      timeLeft = 0; ended = true; bubbles.forEach(removeBubble); gameOver.classList.add('open');
      feedback('wrong', 'Tempo esgotado!', 'Tente novamente.'); updateHud(); return;
    }
    raf = requestAnimationFrame(frame);
  }

  function reset() {
    bubbles.forEach(removeBubble); bubbles = []; lane = 1; timeLeft = 14; spawnElapsed = .45; spawnCount = 0; ended = false;
    gameOver.classList.remove('open'); updateHud(); previousTime = 0;
  }
  function start() {
    if (!active || completed) return;
    if (ended) reset();
    cancelAnimationFrame(raf); previousTime = 0; raf = requestAnimationFrame(frame);
    VoiceGuide.speak(`Pegue a letra ${target}.`, { rate: .88, delay: 240 });
  }
  function setLane(next) {
    if (!active || ended || completed) return;
    lane = Math.max(0, Math.min(2, next)); updateHud();
  }
  left.addEventListener('click', (event) => { event.stopPropagation(); setLane(lane - 1); });
  right.addEventListener('click', (event) => { event.stopPropagation(); setLane(lane + 1); });
  retry.addEventListener('click', (event) => { event.stopPropagation(); reset(); start(); });
  track.addEventListener('pointerdown', (event) => {
    if (event.target.closest('.car-control,.falling-letter,.game-over')) return;
    pointerStart = { x:event.clientX, y:event.clientY };
  });
  track.addEventListener('pointerup', (event) => {
    if (!pointerStart) return;
    const dx = event.clientX - pointerStart.x, dy = event.clientY - pointerStart.y;
    const startPoint = pointerStart; pointerStart = null;
    if (Math.abs(dx) > 38 && Math.abs(dx) > Math.abs(dy) * 1.25) setLane(lane + (dx > 0 ? 1 : -1));
    else if (Math.abs(event.clientX - startPoint.x) < 18 && Math.abs(event.clientY - startPoint.y) < 18) {
      const rect = track.getBoundingClientRect(); const ratio = (event.clientX - rect.left) / rect.width;
      setLane(ratio < 1/3 ? 0 : ratio > 2/3 ? 2 : 1);
    }
  });
  updateHud();
  return makeFeedCard(spec, shell, {
    enter() { active = true; if (!completed) { if (ended) reset(); start(); } },
    leave() { active = false; cancelAnimationFrame(raf); VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(completed ? `Letra ${target}.` : `Pegue a letra ${target}.`, { rate:.88 }); }
  });
}

// =========================================================
// MINIJOGO 6: DETETIVE DAS PALAVRAS
// =========================================================
function createDetectiveCard(spec) {
  const word = spec.word;
  const stage = spec.stage;
  const labels = ['LETRA INICIAL','LETRA FINAL','VOGAIS','CONSOANTES'];
  const speech = ['Ache a primeira letra.','Ache a última letra.','Ache as vogais.','Ache as consoantes.'];
  const shell = makeShell('DETETIVE DAS PALAVRAS', labels[stage]);
  const wordRoot = element('div', 'detective-word');
  const clue = element('div', 'challenge-hero');
  clue.innerHTML = `<div class="hero-word">${word}</div><div class="hero-prompt">${labels[stage]}</div>`;
  shell.append(clue, wordRoot);
  let selected = new Set();
  let locked = false;
  const chars = [...word];
  const expected = stage === 0 ? [0] : stage === 1 ? [chars.length - 1]
    : chars.map((char,i) => (stage === 2 ? isVowel(char) : !isVowel(char)) ? i : -1).filter((i) => i >= 0);

  chars.forEach((char, index) => {
    const button = element('button', 'detective-letter', char);
    button.type = 'button';
    button.addEventListener('click', async () => {
      if (locked) return;
      if (!expected.includes(index) || selected.has(index)) {
        button.classList.add('wrong'); feedback('wrong','Pista errada!','Tente outra.');
        await wait(390); button.classList.remove('wrong'); return;
      }
      selected.add(index); button.classList.add('marked');
      if (!expected.every((position) => selected.has(position))) return;
      locked = true; feedback('correct','Pista encontrada!','Acertou!');
      disableShellButtons(shell); markChallengeComplete(shell);
    });
    wordRoot.appendChild(button);
  });

  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak(`${word.toLowerCase()}. ${speech[stage]}`, { delay:360 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? word.toLowerCase() : speech[stage]); }
  });
}

// =========================================================
// LÁPIS MÁGICO
// =========================================================
function createMagicPencilCard(spec) {
  const shell = makeShell('LÁPIS MÁGICO', 'Passe o dedo acompanhando toda a letra.');
  shell.classList.add('magic-shell');
  const target = element('div', 'magic-target', 'A');
  const wrap = element('div', 'canvas-wrap');
  const guideCanvas = element('canvas', 'magic-guide-canvas');
  const canvas = element('canvas', 'magic-canvas');
  wrap.append(guideCanvas, canvas);
  const actions = element('div', 'magic-actions');
  const clear = element('button', 'game-button', '✨ LIMPAR');
  const check = element('button', 'game-button', '🌟 CONFERIR');
  clear.type = check.type = 'button';
  actions.append(clear, check);
  shell.append(target, wrap, actions);

  const letters = ['A', 'E', 'I', 'O', 'U', 'B', 'C', 'D', 'M', 'P'];
  const letter = spec.letter || randomItem(letters);
  let completed = false;
  let ctx = null;
  let guideCtx = null;
  let maskCtx = null;
  let maskCanvas = null;
  let maskData = null;
  let maskWidth = 0;
  let maskHeight = 0;
  let guideBounds = null;
  let drawing = false;
  let points = [];
  let strokes = [];
  let currentStroke = null;
  let initializedWidth = 0;
  let initializedHeight = 0;

  function fittedFontSize(context, width, height) {
    let low = 40;
    let high = Math.max(60, Math.floor(height * .88));
    let best = low;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      context.font = `900 ${mid}px "Segoe UI", Arial, sans-serif`;
      const metrics = context.measureText(letter);
      const glyphHeight = (metrics.actualBoundingBoxAscent || mid * .72) + (metrics.actualBoundingBoxDescent || mid * .18);
      if (metrics.width <= width * .72 && glyphHeight <= height * .74) { best = mid; low = mid + 1; }
      else high = mid - 1;
    }
    return best;
  }

  function drawCenteredLetter(context, width, height, fontSize, color) {
    context.clearRect(0, 0, width, height);
    context.font = `900 ${fontSize}px "Segoe UI", Arial, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'alphabetic';
    context.fillStyle = color;
    const metrics = context.measureText(letter);
    const ascent = metrics.actualBoundingBoxAscent || fontSize * .72;
    const descent = metrics.actualBoundingBoxDescent || fontSize * .18;
    const y = (height - (ascent + descent)) / 2 + ascent;
    context.fillText(letter, width / 2, y);
  }

  function buildMask(width, height, fontSize) {
    maskCanvas = document.createElement('canvas');
    maskWidth = Math.max(1, Math.round(width));
    maskHeight = Math.max(1, Math.round(height));
    maskCanvas.width = maskWidth;
    maskCanvas.height = maskHeight;
    maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
    drawCenteredLetter(maskCtx, maskWidth, maskHeight, fontSize, '#fff');
    maskData = maskCtx.getImageData(0, 0, maskWidth, maskHeight).data;

    let minX = maskWidth, minY = maskHeight, maxX = 0, maxY = 0, found = false;
    for (let y = 0; y < maskHeight; y += 2) {
      for (let x = 0; x < maskWidth; x += 2) {
        if (maskData[(y * maskWidth + x) * 4 + 3] > 24) {
          found = true;
          minX = Math.min(minX, x); minY = Math.min(minY, y);
          maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
        }
      }
    }
    guideBounds = found ? { minX, minY, maxX, maxY, width:maxX-minX, height:maxY-minY } : null;
  }

  function initCanvas() {
    const rect = wrap.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const ratio = Math.min(2, window.devicePixelRatio || 1);
    initializedWidth = rect.width;
    initializedHeight = rect.height;

    [guideCanvas, canvas].forEach((node) => {
      node.width = Math.round(rect.width * ratio);
      node.height = Math.round(rect.height * ratio);
      node.style.width = `${rect.width}px`;
      node.style.height = `${rect.height}px`;
    });

    guideCtx = guideCanvas.getContext('2d');
    guideCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const fontSize = fittedFontSize(guideCtx, rect.width, rect.height);
    drawCenteredLetter(guideCtx, rect.width, rect.height, fontSize, 'rgba(99,102,241,.18)');
    buildMask(rect.width, rect.height, fontSize);

    ctx = canvas.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.strokeStyle = '#fb7185';
    ctx.lineWidth = Math.max(13, Math.min(19, rect.width * .035));
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    points = [];
    strokes = [];
    currentStroke = null;
  }

  function pointFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  canvas.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    AudioEngine.unlock();
    if (!ctx) initCanvas();
    drawing = true;
    canvas.setPointerCapture?.(event.pointerId);
    const point = pointFromEvent(event);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    currentStroke = [point];
    strokes.push(currentStroke);
    points.push(point);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!drawing || !ctx) return;
    event.preventDefault();
    const point = pointFromEvent(event);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    points.push(point);
    currentStroke?.push(point);
  });
  const finish = () => { drawing = false; currentStroke = null; ctx?.beginPath(); };
  canvas.addEventListener('pointerup', finish);
  canvas.addEventListener('pointercancel', finish);
  canvas.addEventListener('pointerleave', finish);

  function clearCanvas(withSound = true) {
    if (!ctx) initCanvas();
    ctx?.clearRect(0, 0, initializedWidth, initializedHeight);
    points = [];
    strokes = [];
    currentStroke = null;
    if (withSound) AudioEngine.sfx('click');
  }

  function alphaAt(x, y) {
    if (!maskData) return 0;
    const ix = Math.max(0, Math.min(maskWidth - 1, Math.round(x)));
    const iy = Math.max(0, Math.min(maskHeight - 1, Math.round(y)));
    return maskData[(iy * maskWidth + ix) * 4 + 3];
  }

  function nearGuide(x, y, radius) {
    if (!maskData) return false;
    const r = Math.ceil(radius);
    const step = radius > 12 ? 3 : 2;
    for (let dy = -r; dy <= r; dy += step) {
      for (let dx = -r; dx <= r; dx += step) {
        if (dx * dx + dy * dy > radius * radius) continue;
        if (alphaAt(x + dx, y + dy) > 22) return true;
      }
    }
    return false;
  }

  function strokeLength(strokeList) {
    return strokeList.reduce((total, stroke) => total + stroke.slice(1).reduce((sum, point, index) => {
      const prev = stroke[index];
      return sum + Math.hypot(point.x - prev.x, point.y - prev.y);
    }, 0), 0);
  }

  function evaluateTrace() {
    if (points.length < 16 || !guideBounds) return { ok:false, reason:'short' };
    const scale = Math.min(initializedWidth, initializedHeight);
    const tolerance = Math.max(16, Math.min(26, scale * .065));
    const sampled = points.filter((_, index) => index % Math.max(1, Math.floor(points.length / 360)) === 0);
    const nearPoints = sampled.filter((point) => nearGuide(point.x, point.y, tolerance));
    const precision = nearPoints.length / Math.max(1, sampled.length);
    if (nearPoints.length < 10) return { ok:false, reason:'far', precision };

    const xs = nearPoints.map((p) => p.x);
    const ys = nearPoints.map((p) => p.y);
    const userBounds = { minX:Math.min(...xs), maxX:Math.max(...xs), minY:Math.min(...ys), maxY:Math.max(...ys) };
    const widthCoverage = (userBounds.maxX - userBounds.minX) / Math.max(1, guideBounds.width);
    const heightCoverage = (userBounds.maxY - userBounds.minY) / Math.max(1, guideBounds.height);

    const cols = 4, rows = 5;
    const guideZones = new Set();
    const hitZones = new Set();
    for (let y = guideBounds.minY; y <= guideBounds.maxY; y += 4) {
      for (let x = guideBounds.minX; x <= guideBounds.maxX; x += 4) {
        if (alphaAt(x,y) <= 22) continue;
        const col = Math.min(cols-1, Math.floor(((x-guideBounds.minX)/Math.max(1,guideBounds.width))*cols));
        const row = Math.min(rows-1, Math.floor(((y-guideBounds.minY)/Math.max(1,guideBounds.height))*rows));
        guideZones.add(`${col}-${row}`);
      }
    }
    nearPoints.forEach((p) => {
      const col = Math.min(cols-1, Math.max(0, Math.floor(((p.x-guideBounds.minX)/Math.max(1,guideBounds.width))*cols)));
      const row = Math.min(rows-1, Math.max(0, Math.floor(((p.y-guideBounds.minY)/Math.max(1,guideBounds.height))*rows)));
      const key = `${col}-${row}`;
      if (guideZones.has(key)) hitZones.add(key);
    });
    const zoneCoverage = hitZones.size / Math.max(1, guideZones.size);
    const length = strokeLength(strokes);
    const minLength = Math.max(90, guideBounds.height * 1.15);
    const narrowLetter = guideBounds.width < initializedWidth * .22;

    const ok = precision >= .70 &&
      heightCoverage >= .68 &&
      (narrowLetter || widthCoverage >= .56) &&
      zoneCoverage >= .52 &&
      length >= minLength;

    return { ok, precision, widthCoverage, heightCoverage, zoneCoverage, length };
  }

  async function verify() {
    AudioEngine.unlock();
    const result = evaluateTrace();
    if (!result.ok) {
      wrap.animate([
        { transform:'translateX(0)' },
        { transform:'translateX(-7px)' },
        { transform:'translateX(7px)' },
        { transform:'translateX(0)' }
      ], { duration:330 });
      if (result.reason === 'short') feedback('wrong', 'Faça a letra inteira!', 'Faça a letra inteira.');
      else if ((result.precision || 0) < .70) feedback('wrong', 'Passe por cima da letra!', 'Passe por cima da letra.');
      else feedback('wrong', 'Complete mais a letra!', 'Complete mais a letra.');
      return;
    }
    completed = true;
    feedback('correct', `Letra ${letter}!`, `Letra ${letter}.`);
    disableShellButtons(shell);
    markChallengeComplete(shell);
  }

  clear.addEventListener('click', () => clearCanvas(true));
  check.addEventListener('click', verify);
  target.textContent = letter;

  const controller = {
    enter() {
      window.setTimeout(() => {
        if (!ctx || Math.abs(wrap.clientWidth - initializedWidth) > 2 || Math.abs(wrap.clientHeight - initializedHeight) > 2) initCanvas();
        if (!completed) VoiceGuide.speak(`Desenhe ${letter}.`, { delay:280 });
      }, 140);
    },
    leave() { drawing = false; VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(completed ? `Letra ${letter}.` : `Desenhe ${letter}.`); }
  };
  return makeFeedCard(spec, shell, controller);
}

// =========================================================
// MINIJOGO 8: CAÇA-LETRA
// =========================================================
function createLetterHuntCard(spec) {
  const target = spec.target;
  const shell = makeShell('CAÇA-LETRA', 'Encontre a letra pedida.');
  const hero = element('div', 'challenge-hero');
  hero.innerHTML = `<div class="hero-word">ACHE A LETRA ${target}</div><div class="hero-prompt">Toque na letra correta.</div>`;
  const grid = element('div', 'letter-hunt-grid');
  shell.append(hero, grid);
  let locked = false;
  const letters = alphabetData.map((item) => item.letter);
  const options = shuffle([target, ...shuffle(letters.filter((letter) => letter !== target)).slice(0,8)]);
  options.forEach((letter) => {
    const button = element('button', 'hunt-tile', letter); button.type = 'button';
    button.addEventListener('click', async () => {
      if (locked) return;
      if (letter !== target) { button.classList.add('wrong'); feedback('wrong','Tente outra!','Tente outra.'); await wait(420); button.classList.remove('wrong'); return; }
      locked = true; button.classList.add('correct'); feedback('correct','Encontrou!','Acertou!'); disableShellButtons(shell); markChallengeComplete(shell);
    });
    grid.appendChild(button);
  });
  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak(`Ache a letra ${target}.`, { delay:320 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? `Letra ${target}.` : `Ache a letra ${target}.`); }
  });
}

// =========================================================
// MINIJOGO 9: SOM INICIAL
// =========================================================
function createInitialSoundCard(spec) {
  const item = spec.item;
  const shell = makeShell('SOM INICIAL', 'Qual letra começa a palavra?');
  const hero = element('div', 'challenge-hero');
  hero.innerHTML = `<div class="hero-emoji">${item.emoji}</div><div class="hero-word">${item.word.toUpperCase()}</div><div class="hero-prompt">Escolha a primeira letra.</div>`;
  const optionsRoot = element('div', 'initial-options');
  shell.append(hero, optionsRoot);
  let locked = false;
  const letters = alphabetData.map((entry) => entry.letter);
  const distractors = shuffle(letters.filter((letter) => letter !== item.letter)).slice(0,2);
  shuffle([item.letter, ...distractors]).forEach((letter) => {
    const button = element('button', 'game-button big-letter-choice', letter); button.type = 'button';
    button.addEventListener('click', async () => {
      if (locked) return;
      if (letter !== item.letter) { button.classList.add('wrong'); feedback('wrong','Outra letra!','Tente outra.'); await wait(420); button.classList.remove('wrong'); return; }
      locked = true; button.classList.add('correct'); feedback('correct',`${item.letter} de ${item.word}!`,'Acertou!'); disableShellButtons(shell); markChallengeComplete(shell);
    });
    optionsRoot.appendChild(button);
  });
  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak(`${item.word}. Qual é a primeira letra?`, { delay:320 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? `${item.letter} de ${item.word}.` : `${item.word}. Começa com qual letra?`); }
  });
}

// =========================================================
// MINIJOGO 10: CONTE AS SÍLABAS
// =========================================================
function createSyllableCountCard(spec) {
  const item = spec.item;
  const answer = item.syllables.length;
  const shell = makeShell('CONTE AS SÍLABAS', 'Quantas partes tem a palavra?');
  const hero = element('div', 'challenge-hero');
  hero.innerHTML = `<div class="hero-emoji">${item.emoji}</div><div class="hero-word">${item.word}</div><div class="hero-prompt">Fale devagar e conte as sílabas.</div>`;
  const optionsRoot = element('div', 'syllable-count-options');
  shell.append(hero, optionsRoot);
  let locked = false;
  let options = [...new Set([answer, Math.max(1,answer-1), Math.min(4,answer+1)])];
  while (options.length < 3) { const candidate = 1 + Math.floor(Math.random()*4); if (!options.includes(candidate)) options.push(candidate); }
  shuffle(options.slice(0,3)).forEach((value) => {
    const button = element('button','game-button big-letter-choice',String(value)); button.type='button';
    button.addEventListener('click', async () => {
      if (locked) return;
      if (value !== answer) { button.classList.add('wrong'); feedback('wrong','Conte de novo!','Tente outra.'); await wait(420); button.classList.remove('wrong'); return; }
      locked = true; button.classList.add('correct'); feedback('correct',`${answer} sílabas!`,'Acertou!'); disableShellButtons(shell); markChallengeComplete(shell);
    });
    optionsRoot.appendChild(button);
  });
  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak(`${item.word}. Quantas sílabas?`, { delay:320, rate:.86 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? `${item.word}. ${answer} sílabas.` : `${item.word}. Quantas sílabas?`, { rate:.84 }); }
  });
}

// =========================================================
// MINIJOGO 11: MEMÓRIA — FIGURA E PALAVRA
// =========================================================
function createMemoryMatchCard(spec) {
  const shell = makeShell('MEMÓRIA', 'Junte cada figura com sua palavra.');
  const status = element('div', 'game-subtitle', 'Encontre os 3 pares.');
  const grid = element('div', 'memory-grid');
  shell.append(status, grid);
  const pairs = spec.items.map((item,index) => ({ ...item, pairId:`${spec.key}-${index}` }));
  let selected = null, matched = 0, locked = false;
  const cards = [];
  pairs.forEach((item) => {
    cards.push({ pairId:item.pairId, kind:'emoji', value:item.emoji, speech:item.word });
    cards.push({ pairId:item.pairId, kind:'word', value:item.word, speech:item.word });
  });
  shuffle(cards).forEach((data) => {
    const button = element('button', `memory-card ${data.kind === 'emoji' ? 'emoji-card' : ''}`, data.value); button.type='button';
    button.addEventListener('click', () => {
      if (locked || button.classList.contains('matched')) return;
      VoiceGuide.speak(data.speech.toLowerCase(), { delay:20, rate:.88 });
      if (!selected) { selected = { button, data }; button.classList.add('selected'); return; }
      if (selected.button === button) { button.classList.remove('selected'); selected = null; return; }
      const first = selected; selected = null; first.button.classList.remove('selected');
      if (first.data.pairId === data.pairId && first.data.kind !== data.kind) {
        first.button.classList.add('matched'); button.classList.add('matched'); matched += 1; feedback('correct','Par encontrado!','Acertou!');
        if (matched === pairs.length) { locked = true; status.textContent='Todos os pares!'; disableShellButtons(shell); markChallengeComplete(shell); }
      } else {
        button.classList.add('wrong'); feedback('wrong','Não combina!','Tente outra.'); window.setTimeout(() => button.classList.remove('wrong'),420);
      }
    });
    grid.appendChild(button);
  });
  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak('Junte a figura com a palavra.', { delay:320 }); },
    leave() { selected = null; VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? 'Memória concluída.' : 'Junte a figura com a palavra.'); }
  });
}

// =========================================================
// MINIJOGO 12: RIMA DIVERTIDA
// =========================================================
function createRhymeCard(spec) {
  const item = spec.item;
  const shell = makeShell('RIMA DIVERTIDA', 'Qual palavra tem um final parecido?');
  const hero = element('div','challenge-hero');
  hero.innerHTML = `<div class="hero-emoji">${item.emoji}</div><div class="hero-word">${item.word}</div><div class="hero-prompt">Escute e escolha a rima.</div>`;
  const optionsRoot = element('div','rhyme-options'); shell.append(hero, optionsRoot);
  let locked = false;
  shuffle(item.options).forEach((option) => {
    const button=element('button','game-button',option); button.type='button';
    button.addEventListener('click', async () => {
      if (locked) return;
      VoiceGuide.speak(option.toLowerCase(), { delay:10, rate:.88 });
      if (option !== item.answer) { button.classList.add('wrong'); feedback('wrong','Não rima!','Tente outra.'); await wait(420); button.classList.remove('wrong'); return; }
      locked = true; button.classList.add('correct'); feedback('correct',`${item.word} rima com ${item.answer}!`,'Acertou!'); disableShellButtons(shell); markChallengeComplete(shell);
    }); optionsRoot.appendChild(button);
  });
  return makeFeedCard(spec, shell, {
    enter() { if (!locked) VoiceGuide.speak(`Qual palavra rima com ${item.word}?`, { delay:320, rate:.86 }); },
    leave() { VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? `${item.word} rima com ${item.answer}.` : `Qual palavra rima com ${item.word}?`, { rate:.86 }); }
  });
}

// =========================================================
// NOVOS MINIJOGOS: DIGITAÇÃO, FALA, ESCUTA, SÍLABA INICIAL E LETRAS EM ORDEM
// =========================================================
function createTypingCard(spec) {
  const item = spec.item;
  const shell = makeShell('DIGITE A PALAVRA', 'Escreva o nome da figura.');
  const hero = element('div','challenge-hero');
  hero.innerHTML = `<div class="hero-emoji">${item.emoji}</div><div class="hero-prompt">Qual é o nome desta figura?</div>`;
  const form = element('form','typing-form');
  const input = element('input','typing-input');
  input.type='text'; input.autocomplete='off'; input.autocapitalize='characters'; input.spellcheck=false; input.placeholder='Digite aqui'; input.setAttribute('aria-label','Digite a resposta');
  const submit=element('button','game-button typing-submit','CONFIRMAR'); submit.type='submit';
  form.append(input,submit); shell.append(hero,form);
  let locked=false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); if (locked) return;
    const answer=normalizeAnswer(input.value);
    if (!answer) { input.focus(); return; }
    if (answer !== normalizeAnswer(item.word)) {
      input.classList.add('wrong'); feedback('wrong','Tente outra!','Tente outra.'); await wait(430); input.classList.remove('wrong'); input.select(); return;
    }
    locked=true; input.classList.add('correct'); feedback('correct',`${item.word}!`,item.word.toLowerCase()); disableShellButtons(shell); input.disabled=true; markChallengeComplete(shell);
  });
  return makeFeedCard(spec,shell,{
    enter() { if (!locked) VoiceGuide.speak('Digite o nome da figura.', { delay:340 }); },
    leave() { input.blur(); VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? item.word.toLowerCase() : 'Digite o nome da figura.'); }
  });
}

function createSpeakingCard(spec) {
  const item=spec.item;
  const shell=makeShell('FALE A PALAVRA','Toque no microfone e diga o nome da figura.');
  const hero=element('div','challenge-hero');
  hero.innerHTML=`<div class="hero-emoji">${item.emoji}</div><div class="hero-prompt">Fale o nome da figura.</div>`;
  const mic=element('button','speak-button','🎙'); mic.type='button'; mic.setAttribute('aria-label','Iniciar reconhecimento de voz');
  const status=element('div','speech-status','Toque no microfone para falar.');
  shell.append(hero,mic,status);
  let recognition=null, listening=false, locked=false;
  const Recognition=window.SpeechRecognition || window.webkitSpeechRecognition;

  function stopRecognition() { try { recognition?.stop(); } catch (_) {} listening=false; mic.classList.remove('listening'); }
  mic.addEventListener('click', () => {
    if (locked || listening) return;
    AudioEngine.unlock(); VoiceGuide.cancel();
    if (!Recognition) {
      status.textContent='Reconhecimento de voz não disponível neste navegador.';
      status.classList.add('speech-unavailable');
      return;
    }
    recognition=new Recognition(); recognition.lang='pt-BR'; recognition.interimResults=false; recognition.maxAlternatives=4; recognition.continuous=false;
    recognition.onstart=()=>{ listening=true; mic.classList.add('listening'); status.textContent='Ouvindo... fale agora!'; };
    recognition.onresult=(event)=>{
      const alternatives=[];
      for (let i=0;i<event.results[0].length;i+=1) alternatives.push(normalizeAnswer(event.results[0][i].transcript));
      const expected=normalizeAnswer(item.word);
      const correct=alternatives.some((value)=>value===expected || value.split(' ').includes(expected));
      if (correct) {
        locked=true; status.textContent=`Muito bem: ${item.word}!`; feedback('correct',`${item.word}!`,'Acertou!'); mic.disabled=true; markChallengeComplete(shell);
      } else {
        status.textContent=alternatives[0] ? `Ouvi “${event.results[0][0].transcript}”. Tente outra vez.` : 'Não entendi. Tente outra vez.';
        feedback('wrong','Tente falar de novo!','Tente outra.');
      }
    };
    recognition.onerror=(event)=>{ status.textContent=event.error==='not-allowed' ? 'Permita o uso do microfone para jogar.' : 'Não consegui ouvir. Tente novamente.'; };
    recognition.onend=()=>{ listening=false; mic.classList.remove('listening'); };
    try { recognition.start(); } catch (_) { status.textContent='Não foi possível iniciar o microfone.'; }
  });
  return makeFeedCard(spec,shell,{
    enter() { if (!locked) VoiceGuide.speak('Toque no microfone e fale o nome da figura.', { delay:340 }); },
    leave() { stopRecognition(); VoiceGuide.cancel(); },
    repeat() { VoiceGuide.speak(locked ? item.word.toLowerCase() : 'Toque no microfone e fale o nome da figura.'); }
  });
}

function createListenChoiceCard(spec) {
  const item=spec.item;
  const shell=makeShell('OUÇA E ESCOLHA','Escute com atenção e escolha a palavra.');
  const speaker=element('button','listen-orb','🔊'); speaker.type='button';
  const hint=element('div','game-subtitle','Toque no alto-falante quando quiser ouvir novamente.');
  const list=element('div','choice-list'); shell.append(speaker,hint,list);
  let locked=false;
  const others=shuffle(easyWordData.filter((entry)=>entry.word!==item.word)).slice(0,2).map((entry)=>entry.word);
  shuffle([item.word,...others]).forEach((option)=>{
    const button=element('button','game-button',option); button.type='button';
    button.addEventListener('click',async()=>{
      if (locked) return;
      if (option!==item.word) { button.classList.add('wrong'); feedback('wrong','Escute outra vez!','Tente outra.'); await wait(420); button.classList.remove('wrong'); return; }
      locked=true; button.classList.add('correct'); feedback('correct',`${item.word}!`,item.word.toLowerCase()); disableShellButtons(shell,[speaker]); markChallengeComplete(shell);
    }); list.appendChild(button);
  });
  const say=()=>VoiceGuide.speak(item.word.toLowerCase(),{rate:.82,delay:20}); speaker.addEventListener('click',say);
  return makeFeedCard(spec,shell,{ enter(){ if(!locked) VoiceGuide.speak(`Escute. ${item.word.toLowerCase()}.`,{delay:340,rate:.82}); }, leave(){VoiceGuide.cancel();}, repeat:say });
}

function createFirstSyllableCard(spec) {
  const item=spec.item, answer=item.syllables[0];
  const shell=makeShell('SÍLABA INICIAL','Qual é a primeira parte da palavra?');
  const hero=element('div','challenge-hero'); hero.innerHTML=`<div class="hero-emoji">${item.emoji}</div><div class="hero-word">${item.word}</div><div class="hero-prompt">Escolha a primeira sílaba.</div>`;
  const grid=element('div','initial-options'); shell.append(hero,grid); let locked=false;
  const pool=[...new Set(databaseFase1.flatMap((entry)=>entry.syllables))]; const distractors=shuffle(pool.filter((value)=>value!==answer)).slice(0,2);
  shuffle([answer,...distractors]).forEach((value)=>{ const button=element('button','game-button big-letter-choice',value); button.type='button'; button.addEventListener('click',async()=>{
    if(locked)return; if(value!==answer){button.classList.add('wrong');feedback('wrong','Outra sílaba!','Tente outra.');await wait(420);button.classList.remove('wrong');return;} locked=true;button.classList.add('correct');feedback('correct',`${answer} de ${item.word}!`,'Acertou!');disableShellButtons(shell);markChallengeComplete(shell);
  });grid.appendChild(button);});
  return makeFeedCard(spec,shell,{enter(){if(!locked)VoiceGuide.speak(`${item.word}. Qual é a primeira sílaba?`,{delay:330,rate:.86});},leave(){VoiceGuide.cancel();},repeat(){VoiceGuide.speak(locked?`${answer}. ${item.word}.`:`${item.word}. Qual é a primeira sílaba?`,{rate:.86});}});
}

function createLetterOrderCard(spec) {
  const item=spec.item;
  const shell=makeShell('ORDEM DAS LETRAS','Monte a palavra tocando nas letras.');
  const hero=element('div','challenge-hero'); hero.innerHTML=`<div class="hero-emoji">${item.emoji}</div><div class="hero-prompt">Monte o nome da figura.</div>`;
  const answerBox=element('div','letter-order-answer');
  const bank=element('div','letter-order-bank');
  const clear=element('button','small-action','LIMPAR'); clear.type='button'; shell.append(hero,answerBox,bank,clear);
  let picked=[],locked=false;
  function renderAnswer(){ answerBox.textContent=picked.map((entry)=>entry.letter).join('') || '＿'; }
  shuffle([...item.word].map((letter,index)=>({letter,index}))).forEach((entry)=>{
    const button=element('button','letter-order-tile',entry.letter);button.type='button';
    button.addEventListener('click',()=>{if(locked||button.disabled)return;button.disabled=true;button.classList.add('selected');picked.push({...entry,button});renderAnswer();if(picked.length===[...item.word].length)check();}); bank.appendChild(button);
  });
  async function check(){ const answer=picked.map((entry)=>entry.letter).join(''); if(answer!==item.word){feedback('wrong','Ordem errada!','Tente de novo.');await wait(650);picked.forEach((entry)=>{entry.button.disabled=false;entry.button.classList.remove('selected');});picked=[];renderAnswer();return;} locked=true;feedback('correct',`${item.word}!`,item.word.toLowerCase());disableShellButtons(shell);markChallengeComplete(shell); }
  clear.addEventListener('click',()=>{if(locked)return;picked.forEach((entry)=>{entry.button.disabled=false;entry.button.classList.remove('selected');});picked=[];renderAnswer();}); renderAnswer();
  return makeFeedCard(spec,shell,{enter(){if(!locked)VoiceGuide.speak(`Monte a palavra ${item.word.toLowerCase()}.`,{delay:340});},leave(){VoiceGuide.cancel();},repeat(){VoiceGuide.speak(locked?item.word.toLowerCase():`Monte a palavra ${item.word.toLowerCase()}.`);}});
}


// =========================================================
// ARCADE EDUCATIVO — NOVOS MINIJOGOS DINÂMICOS
// =========================================================
function createSnakeLettersCard(spec) {
  const item = spec.item;
  const shell = makeShell('COBRINHA DAS LETRAS', `Forme ${item.word} pegando as letras na ordem.`);
  shell.classList.add('arcade-shell','snake-shell');
  const status = element('div','arcade-status');
  const wordLine = element('div','arcade-word-progress');
  const board = element('div','snake-board');
  const controls = element('div','dpad');
  const up = element('button','dpad-btn up','▲');
  const left = element('button','dpad-btn left','◀');
  const down = element('button','dpad-btn down','▼');
  const right = element('button','dpad-btn right','▶');
  [up,left,down,right].forEach((b)=>b.type='button');
  controls.append(up,left,down,right);
  shell.append(status,wordLine,board,controls);

  const size = 7;
  const chars = [...item.word];
  let snake = [{x:3,y:3},{x:2,y:3}];
  let direction = {x:1,y:0};
  let pending = direction;
  let targetIndex = 0;
  let tokens = [];
  let timer = 0;
  let active = false;
  let completed = false;
  let lockedTurn = false;
  const letterPool = alphabetData.map((entry)=>entry.letter);

  function coordKey(x,y){ return `${x},${y}`; }
  function freeCell() {
    const occupied = new Set(snake.map((p)=>coordKey(p.x,p.y)).concat(tokens.map((t)=>coordKey(t.x,t.y))));
    const choices=[];
    for(let y=0;y<size;y+=1) for(let x=0;x<size;x+=1) if(!occupied.has(coordKey(x,y))) choices.push({x,y});
    return randomItem(choices.length ? choices : [{x:0,y:0}]);
  }
  function seedTokens() {
    tokens=[];
    const wanted=chars[targetIndex];
    const wantedCell=freeCell();
    tokens.push({...wantedCell,letter:wanted,correct:true});
    const distractors=shuffle(letterPool.filter((l)=>l!==wanted)).slice(0,3);
    distractors.forEach((letter)=>{ const cell=freeCell(); tokens.push({...cell,letter,correct:false}); });
  }
  function updateStatus(){
    status.innerHTML=`<span>PRÓXIMA: <strong>${chars[targetIndex] ?? '✓'}</strong></span><span>${targetIndex}/${chars.length}</span>`;
    wordLine.innerHTML=chars.map((letter,index)=>`<span class="${index<targetIndex?'done':index===targetIndex?'current':''}">${index<targetIndex?letter:'_'}</span>`).join('');
  }
  function render(){
    board.replaceChildren();
    for(let y=0;y<size;y+=1) for(let x=0;x<size;x+=1){ const tile=element('i','snake-grid-cell'); tile.style.left=`${x/size*100}%`; tile.style.top=`${y/size*100}%`; board.appendChild(tile); }
    tokens.forEach((token)=>{
      const node=element('div',`snake-token${token.correct?' wanted':''}`,token.letter);
      node.style.left=`${(token.x+.5)/size*100}%`; node.style.top=`${(token.y+.5)/size*100}%`; board.appendChild(node);
    });
    snake.forEach((part,index)=>{
      const node=element('div',`snake-piece${index===0?' head':''}`,index===0?'🙂':'');
      node.style.left=`${(part.x+.5)/size*100}%`; node.style.top=`${(part.y+.5)/size*100}%`; board.appendChild(node);
    });
    updateStatus();
  }
  function setDirection(dx,dy){
    if(completed) return;
    if(dx===-direction.x && dy===-direction.y) return;
    pending={x:dx,y:dy}; lockedTurn=true;
  }
  function finish(){
    completed=true; stop();
    feedback('correct',`${item.word}!`,item.word.toLowerCase());
    markChallengeComplete(shell);
  }
  function step(){
    if(!active||completed) return;
    direction=pending; lockedTurn=false;
    const head=snake[0];
    const next={x:(head.x+direction.x+size)%size,y:(head.y+direction.y+size)%size};
    snake.unshift(next);
    const tokenIndex=tokens.findIndex((token)=>token.x===next.x&&token.y===next.y);
    let grew=false;
    if(tokenIndex>=0){
      const token=tokens[tokenIndex];
      if(token.letter===chars[targetIndex]){
        targetIndex+=1; grew=true;
        AudioEngine.sfx('correct'); vibrate(18);
        if(targetIndex>=chars.length){ render(); finish(); return; }
        seedTokens();
      } else {
        feedback('wrong','Letra errada!','Tente outra.');
        tokens.splice(tokenIndex,1);
        const cell=freeCell(); tokens.push({...cell,letter:randomItem(letterPool.filter((l)=>l!==chars[targetIndex])),correct:false});
      }
    }
    if(!grew) snake.pop();
    render();
  }
  function start(){ if(timer||completed) return; timer=window.setInterval(step,470); }
  function stop(){ if(timer){window.clearInterval(timer);timer=0;} }
  up.addEventListener('click',()=>setDirection(0,-1));
  down.addEventListener('click',()=>setDirection(0,1));
  left.addEventListener('click',()=>setDirection(-1,0));
  right.addEventListener('click',()=>setDirection(1,0));
  seedTokens(); render();
  return makeFeedCard(spec,shell,{
    enter(){ active=true; start(); if(!completed)VoiceGuide.speak(`Forme ${item.word.toLowerCase()}. Pegue as letras na ordem.`,{delay:320}); },
    leave(){ active=false; stop(); VoiceGuide.cancel(); },
    repeat(){ VoiceGuide.speak(completed?item.word.toLowerCase():`Pegue primeiro a letra ${chars[targetIndex]}.`); }
  });
}

function createDinoLettersCard(spec) {
  const item=spec.item;
  const answer=[...item.word][0];
  const shell=makeShell('CORRIDA DAS PALAVRAS',`Não pule a letra que completa ${item.word.slice(1)}.`);
  shell.classList.add('arcade-shell','dino-shell');
  const prompt=element('div','dino-prompt',`_${item.word.slice(1)}  •  PEGUE ${answer}`);
  const hud=element('div','dino-hud','TEMPO: 20');
  const track=element('div','dino-track');
  const ground=element('div','dino-ground');
  const player=element('div','dino-player','🦖');
  const jump=element('button','game-button dino-jump','PULAR'); jump.type='button';
  track.append(ground,player); shell.append(prompt,hud,track,jump);
  let active=false,completed=false,ended=false,raf=0,last=0,spawnClock=.3,timeLeft=20;
  let y=0,vy=0; const gravity=780, jumpPower=350; let obstacles=[]; let spawnCount=0;
  const letters=alphabetData.map((e)=>e.letter);
  function doJump(){ if(!active||completed||ended)return; if(y<4){vy=jumpPower;AudioEngine.sfx('click');} }
  function removeObstacle(o){ if(!o||o.removed)return;o.removed=true;o.node.remove();obstacles=obstacles.filter((x)=>x!==o); }
  function spawn(){
    const width=track.clientWidth||500;
    const correct=spawnCount%3===2||Math.random()<.28;
    const letter=correct?answer:randomItem(letters.filter((l)=>l!==answer)); spawnCount+=1;
    const node=element('div',`dino-letter${correct?' target-letter':''}`,letter); track.appendChild(node);
    obstacles.push({node,letter,x:width+34,removed:false,checked:false});
  }
  function collide(o){
    const pr=player.getBoundingClientRect(),or=o.node.getBoundingClientRect();
    return pr.right>or.left+5&&pr.left<or.right-5&&pr.bottom>or.top+7&&pr.top<or.bottom-5;
  }
  function success(){ completed=true;cancelAnimationFrame(raf);obstacles.forEach(removeObstacle);feedback('correct',`${item.word}!`,item.word.toLowerCase());markChallengeComplete(shell); }
  function frame(t){
    if(!active||completed||ended)return;
    if(!last)last=t;const dt=Math.min(.04,(t-last)/1000);last=t;
    timeLeft-=dt;hud.textContent=`TEMPO: ${Math.max(0,Math.ceil(timeLeft))}`;
    spawnClock+=dt;if(spawnClock>=1.25){spawnClock=0;spawn();}
    vy-=gravity*dt;y=Math.max(0,y+vy*dt);if(y===0&&vy<0)vy=0;player.style.transform=`translateY(${-y}px)`;
    const speed=Math.max(125,(track.clientWidth||500)*.31);
    [...obstacles].forEach((o)=>{
      o.x-=speed*dt;o.node.style.transform=`translateX(${o.x}px)`;
      if(collide(o)){
        if(o.letter===answer){removeObstacle(o);success();return;}
        removeObstacle(o);feedback('wrong','Pule as letras erradas!','Tente outra.');
      } else if(o.x<-70) removeObstacle(o);
    });
    if(timeLeft<=0){ended=true;feedback('wrong','Tempo esgotado!','Tente novamente.');hud.textContent='TOQUE EM PULAR PARA RECOMEÇAR';}
    if(!ended&&!completed)raf=requestAnimationFrame(frame);
  }
  function reset(){obstacles.forEach(removeObstacle);obstacles=[];timeLeft=20;spawnClock=.3;spawnCount=0;y=0;vy=0;ended=false;last=0;}
  function start(){if(!active||completed)return;if(ended)reset();cancelAnimationFrame(raf);last=0;raf=requestAnimationFrame(frame);}
  jump.addEventListener('click',()=>{if(ended){reset();start();return;}doJump();});
  track.addEventListener('click',(e)=>{if(e.target.closest('.dino-letter'))return;doJump();});
  return makeFeedCard(spec,shell,{
    enter(){active=true;start();if(!completed)VoiceGuide.speak(`Complete ${item.word.toLowerCase()}. Pule as letras erradas e pegue ${answer}.`,{delay:320});},
    leave(){active=false;cancelAnimationFrame(raf);VoiceGuide.cancel();},
    repeat(){VoiceGuide.speak(completed?item.word.toLowerCase():`Pegue a letra ${answer}.`);}
  });
}

function createMazeLettersCard(spec) {
  const item=spec.item;
  const chars=[...item.word];
  const shell=makeShell('LABIRINTO DAS LETRAS',`Encontre ${item.word} na ordem.`);
  shell.classList.add('arcade-shell','maze-shell');
  const status=element('div','arcade-status');
  const board=element('div','maze-board');
  const controls=element('div','dpad maze-dpad');
  const up=element('button','dpad-btn up','▲'),left=element('button','dpad-btn left','◀'),down=element('button','dpad-btn down','▼'),right=element('button','dpad-btn right','▶');
  [up,left,down,right].forEach((b)=>b.type='button');controls.append(up,left,down,right);shell.append(status,board,controls);
  const map=['#######','#.....#','#.###.#','#.....#','#.#.#.#','#.....#','#######'];
  const open=[];map.forEach((row,y)=>[...row].forEach((cell,x)=>{if(cell==='.')open.push({x,y});}));
  let pos={x:1,y:1},index=0,completed=false;let tokens=[];
  function seed(){
    const spots=shuffle(open.filter((c)=>!(c.x===pos.x&&c.y===pos.y)));
    tokens=chars.map((letter,i)=>({...spots[i],letter,order:i}));
    const distractors=shuffle(alphabetData.map((e)=>e.letter).filter((l)=>!chars.includes(l))).slice(0,4);
    distractors.forEach((letter,i)=>tokens.push({...spots[chars.length+i],letter,order:-1}));
  }
  function render(){
    board.replaceChildren();
    map.forEach((row,y)=>[...row].forEach((cell,x)=>{const tile=element('div',cell==='#'?'maze-wall':'maze-floor');tile.style.gridColumn=x+1;tile.style.gridRow=y+1;board.appendChild(tile);}));
    tokens.forEach((token)=>{const node=element('div',`maze-token${token.order===index?' wanted':''}`,token.letter);node.style.gridColumn=token.x+1;node.style.gridRow=token.y+1;board.appendChild(node);});
    const player=element('div','maze-player','🟡');player.style.gridColumn=pos.x+1;player.style.gridRow=pos.y+1;board.appendChild(player);
    status.innerHTML=`<span>PROCURE: <strong>${chars[index]??'✓'}</strong></span><span>${index}/${chars.length}</span>`;
  }
  function move(dx,dy){
    if(completed)return;const nx=pos.x+dx,ny=pos.y+dy;if(!map[ny]||map[ny][nx]==='#')return;pos={x:nx,y:ny};
    const hit=tokens.find((t)=>t.x===nx&&t.y===ny);
    if(hit){
      if(hit.order===index){tokens=tokens.filter((t)=>t!==hit);index+=1;AudioEngine.sfx('correct');vibrate(16);if(index>=chars.length){render();completed=true;feedback('correct',`${item.word}!`,item.word.toLowerCase());markChallengeComplete(shell);return;}}
      else if(hit.order<0){tokens=tokens.filter((t)=>t!==hit);feedback('wrong',`Procure ${chars[index]}!`,'Tente outra.');}
      else feedback('wrong',`Primeiro ${chars[index]}!`,'Tente outra.');
    }
    render();
  }
  up.addEventListener('click',()=>move(0,-1));down.addEventListener('click',()=>move(0,1));left.addEventListener('click',()=>move(-1,0));right.addEventListener('click',()=>move(1,0));
  seed();render();
  return makeFeedCard(spec,shell,{enter(){if(!completed)VoiceGuide.speak(`Encontre as letras de ${item.word.toLowerCase()} na ordem.`,{delay:320});},leave(){VoiceGuide.cancel();},repeat(){VoiceGuide.speak(completed?item.word.toLowerCase():`Agora procure ${chars[index]}.`);}});
}

function createPlatformSyllablesCard(spec) {
  const item=spec.item;
  const shell=makeShell('PULO DAS SÍLABAS',`Acerte os blocos para formar ${item.word}.`);
  shell.classList.add('arcade-shell','platform-shell');
  const progress=element('div','platform-progress');
  const arena=element('div','platform-arena');
  const blocks=element('div','platform-blocks');
  const player=element('div','platform-player','🧑');
  const ground=element('div','platform-ground');
  const controls=element('div','platform-controls');
  const left=element('button','car-control','◀'),jump=element('button','game-button platform-jump','PULAR'),right=element('button','car-control','▶');
  left.type=jump.type=right.type='button';controls.append(left,jump,right);arena.append(blocks,player,ground);shell.append(progress,arena,controls);
  const syllablePool=[...new Set(databaseFase1.flatMap((entry)=>entry.syllables))];
  let lane=1,index=0,locked=false,jumping=false,current=[];
  function buildRound(){
    const answer=item.syllables[index];const wrong=shuffle(syllablePool.filter((s)=>s!==answer)).slice(0,2);current=shuffle([answer,...wrong]);
    blocks.replaceChildren();current.forEach((syllable,i)=>{const b=element('div','platform-block',syllable);b.dataset.lane=String(i);blocks.appendChild(b);});
    progress.innerHTML=item.syllables.map((s,i)=>`<span class="${i<index?'done':i===index?'current':''}">${i<index?s:'_'}</span>`).join('');
    player.style.left=`${[16.7,50,83.3][lane]}%`;
  }
  function move(delta){if(locked||jumping)return;lane=Math.max(0,Math.min(2,lane+delta));player.style.left=`${[16.7,50,83.3][lane]}%`;}
  async function doJump(){
    if(locked||jumping)return;jumping=true;player.classList.add('jumping');await wait(360);const chosen=current[lane];const block=$(`.platform-block[data-lane="${lane}"]`,blocks);
    if(chosen===item.syllables[index]){
      block?.classList.add('hit-correct');index+=1;AudioEngine.sfx('correct');vibrate(18);
      if(index>=item.syllables.length){locked=true;progress.innerHTML=item.syllables.map((s)=>`<span class="done">${s}</span>`).join('');feedback('correct',`${item.word}!`,item.word.toLowerCase());markChallengeComplete(shell);}
      else {await wait(180);buildRound();}
    } else {block?.classList.add('hit-wrong');feedback('wrong','Bloco errado!','Tente outra.');await wait(260);block?.classList.remove('hit-wrong');}
    player.classList.remove('jumping');jumping=false;
  }
  left.addEventListener('click',()=>move(-1));right.addEventListener('click',()=>move(1));jump.addEventListener('click',doJump);buildRound();
  return makeFeedCard(spec,shell,{enter(){if(!locked)VoiceGuide.speak(`Forme ${item.word.toLowerCase()}. Pule no bloco certo.`,{delay:320});},leave(){VoiceGuide.cancel();},repeat(){VoiceGuide.speak(locked?item.word.toLowerCase():`Procure ${item.syllables[index]}.`);}});
}

function createTimingLettersCard(spec) {
  const item=spec.item;
  const answer=[...item.word][0];
  const shell=makeShell('ACERTE NO TEMPO',`Toque quando a seta estiver sobre ${answer}.`);
  shell.classList.add('arcade-shell','timing-shell');
  const hero=element('div','timing-hero');hero.innerHTML=`<span>${item.emoji}</span><strong>${item.word}</strong>`;
  const track=element('div','timing-track');
  const needle=element('div','timing-needle','▼');
  const zones=element('div','timing-zones');
  const distractors=shuffle(alphabetData.map((e)=>e.letter).filter((l)=>l!==answer)).slice(0,2);const options=shuffle([answer,...distractors]);
  options.forEach((letter)=>zones.appendChild(element('div',`timing-zone${letter===answer?' target':''}`,letter)));
  track.append(needle,zones);
  const hit=element('button','game-button timing-hit','AGORA!');hit.type='button';shell.append(hero,track,hit);
  let active=false,completed=false,raf=0,startTime=0,progress=0;
  function frame(t){if(!active||completed)return;if(!startTime)startTime=t;const elapsed=(t-startTime)/1000;progress=(Math.sin(elapsed*2.9-Math.PI/2)+1)/2;needle.style.left=`${4+progress*92}%`;raf=requestAnimationFrame(frame);}
  function tryHit(){
    if(!active||completed)return;const index=Math.max(0,Math.min(2,Math.floor(progress*3)));const picked=options[index];
    const zone=zones.children[index];
    if(picked===answer){completed=true;cancelAnimationFrame(raf);zone.classList.add('hit-correct');feedback('correct',`${answer} de ${item.word}!`,'Acertou!');markChallengeComplete(shell);}
    else {zone.classList.add('hit-wrong');feedback('wrong',`Essa é ${picked}!`,'Tente outra.');window.setTimeout(()=>zone.classList.remove('hit-wrong'),380);}
  }
  hit.addEventListener('click',tryHit);track.addEventListener('click',tryHit);
  return makeFeedCard(spec,shell,{enter(){active=true;if(!completed){cancelAnimationFrame(raf);startTime=0;raf=requestAnimationFrame(frame);VoiceGuide.speak(`Acerte a letra ${answer}.`,{delay:320});}},leave(){active=false;cancelAnimationFrame(raf);VoiceGuide.cancel();},repeat(){VoiceGuide.speak(completed?`${answer} de ${item.word}.`:`Toque quando a seta estiver sobre ${answer}.`);}});
}

// =========================================================
// CRIAÇÃO DO BARALHO DE FASES
// =========================================================
function buildSyllableData() {
  const map = new Map();
  const colors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#8b5cf6', '#ef4444'];
  databaseFase1.forEach((item) => {
    item.syllables.forEach((syllable) => {
      if (!map.has(syllable)) map.set(syllable, {
        syllable,
        word: item.word[0] + item.word.slice(1).toLowerCase(),
        emoji: item.emoji,
        color: colors[map.size % colors.length]
      });
    });
  });
  return [...map.values()];
}

function createSpecs() {
  const specs = [];
  const add = (spec) => specs.push(spec);

  alphabetData.forEach((item) => add({
    key:`letter-${item.letter}`, type:'learning', kind:'letter', label:'ALFABETO', title:`Letra ${item.letter}`,
    description:`${item.letter} de ${item.word}. Toque para ouvir.`, prompt:'Uma letra por tela.', symbol:item.letter, emoji:item.emoji, word:item.word, color:item.color,
    speech:`${item.letter} de ${item.word}.`, enterSpeech:`Toque na letra ${item.letter}.`, icon:item.letter
  }));
  buildSyllableData().forEach((item) => add({
    key:`syllable-${item.syllable}`, type:'learning', kind:'syllable', label:'SÍLABAS', title:`Sílaba ${item.syllable}`,
    description:`${item.syllable} aparece em ${item.word}.`, prompt:'Uma sílaba por tela.', symbol:item.syllable, emoji:item.emoji, word:item.word, color:item.color,
    speech:`${item.syllable}.`, enterSpeech:`Toque na sílaba ${item.syllable}.`, icon:item.syllable
  }));
  vowelsData.forEach((item) => add({
    key:`vowel-${item.letter}`, type:'learning', kind:'vowel', label:'VOGAIS', title:`Vogal ${item.letter}`,
    description:`${item.letter} de ${item.word}.`, prompt:'Conheça as vogais.', symbol:item.letter, emoji:item.emoji, word:item.word, color:item.color,
    speech:`${item.letter} de ${item.word}.`, enterSpeech:`Toque na vogal ${item.letter}.`, icon:item.letter
  }));

  // Cada pergunta/desafio possui sua própria chave e sua própria tela.
  databaseFase1.forEach((item,index)=>add({key:`word-builder-${index}-${item.word}`,type:'word-builder',title:`Forme: ${item.word}`,description:`Monte ${item.word} com sílabas.`,icon:'CA',item}));
  databaseFase2.forEach((item,index)=>add({key:`picture-${index}-${item.word}`,type:'picture-choice',title:`Figura: ${item.word}`,description:'Observe a figura e escolha o nome correto.',icon:'🖼️',item}));
  databaseFase3.forEach((item,index)=>add({key:`sentence-${index}`,type:'sentence',title:'Organize a frase',description:`Organize: ${item.correct.join(' ')}.`,icon:'💬',item}));
  databaseFase4.forEach((item,index)=>add({key:`missing-${index}-${item.word}`,type:'missing',title:`Complete: ${item.word}`,description:`Complete as letras de ${item.word}.`,icon:'＿',item}));

  ['A','B','C','D','E','G','M','P','S','T'].forEach((target)=>add({key:`car-${target}`,type:'car',title:`Corrida: letra ${target}`,description:`Capture somente a letra ${target}.`,icon:'🏎️',target}));
  const detectiveWords = ['BOLA','CASA','DADO','GATO','JANELA','MACACO','SAPO','GIRAFA','CAVALO','PANELA'];
  detectiveWords.forEach((word)=>[0,1,2,3].forEach((stage)=>add({key:`detective-${word}-${stage}`,type:'detective',title:'Detetive das palavras',description:`Investigue a palavra ${word}.`,icon:'🕵️',word,stage})));
  ['A','E','I','O','U','B','C','D','M','P'].forEach((letter)=>add({key:`magic-${letter}`,type:'magic',title:`Lápis Mágico: ${letter}`,description:`Desenhe a letra ${letter} seguindo a guia.`,icon:'✏️',letter}));
  alphabetData.forEach((item)=>add({key:`hunt-${item.letter}`,type:'letter-hunt',title:`Caça-letra ${item.letter}`,description:`Encontre a letra ${item.letter}.`,icon:'🔎',target:item.letter}));

  const initialItems = alphabetData.filter((item)=>!['K','W','Y'].includes(item.letter));
  initialItems.forEach((item)=>add({key:`initial-${item.letter}`,type:'initial-sound',title:`Som inicial: ${item.word}`,description:`Descubra a primeira letra de ${item.word}.`,icon:'🔤',item}));
  databaseFase1.slice(0,9).forEach((item,index)=>add({key:`count-${index}-${item.word}`,type:'syllable-count',title:`Sílabas: ${item.word}`,description:`Conte as sílabas de ${item.word}.`,icon:'👏',item}));

  for (let i=0;i<databaseFase2.length;i+=3) {
    const items=databaseFase2.slice(i,i+3); if(items.length===3) add({key:`memory-${i/3}`,type:'memory-match',title:'Memória',description:'Combine três figuras com suas palavras.',icon:'🧠',items});
  }
  rhymeData.forEach((item,index)=>add({key:`rhyme-${index}-${item.word}`,type:'rhyme',title:`Rima: ${item.word}`,description:`Encontre uma palavra que rima com ${item.word}.`,icon:'🎵',item}));

  // Novas mecânicas inspiradas em atividades rápidas de alfabetização.
  easyWordData.forEach((item,index)=>add({key:`typing-${index}-${item.word}`,type:'typing',title:`Digite: ${item.word}`,description:'Use o teclado para escrever o nome da figura.',icon:'⌨️',item}));
  easyWordData.slice(0,10).forEach((item,index)=>add({key:`speaking-${index}-${item.word}`,type:'speaking',title:`Fale: ${item.word}`,description:'Use o microfone para falar o nome da figura.',icon:'🎙️',item}));
  easyWordData.forEach((item,index)=>add({key:`listen-${index}-${item.word}`,type:'listen-choice',title:'Ouça e escolha',description:'Escute a palavra e encontre sua escrita.',icon:'👂',item}));
  databaseFase1.slice(0,9).forEach((item,index)=>add({key:`first-syllable-${index}-${item.word}`,type:'first-syllable',title:`Primeira sílaba: ${item.word}`,description:'Escolha a primeira sílaba da palavra.',icon:'🔡',item}));
  easyWordData.filter((item)=>item.word.length<=5).forEach((item,index)=>add({key:`letter-order-${index}-${item.word}`,type:'letter-order',title:`Letras: ${item.word}`,description:'Coloque as letras na ordem correta.',icon:'🔠',item}));

  // Arcade educativo mantido nesta versão: apenas as duas mecânicas mais simples e estáveis.
  databaseFase1.slice(0,8).forEach((item,index)=>add({key:`platform-${index}-${item.word}`,type:'platform-syllables',title:`Pulo: ${item.word}`,description:`Acerte os blocos de sílabas.`,icon:'🧱',item}));
  easyWordData.slice(0,9).forEach((item,index)=>add({key:`timing-${index}-${item.word}`,type:'timing-letters',title:`No tempo: ${item.word}`,description:`Acerte a letra no momento certo.`,icon:'🎯',item}));

  return specs;
}

const allSpecs = createSpecs();
const specMap = new Map(allSpecs.map((spec) => [spec.key, spec]));

function createCardFromSpec(spec) {
  if (spec.type === 'learning') return createLearningCard(spec);
  if (spec.type === 'word-builder') return createWordBuilderCard(spec);
  if (spec.type === 'picture-choice') return createPictureChoiceCard(spec);
  if (spec.type === 'sentence') return createSentenceCard(spec);
  if (spec.type === 'missing') return createMissingLettersCard(spec);
  if (spec.type === 'car') return createCarGameCard(spec);
  if (spec.type === 'detective') return createDetectiveCard(spec);
  if (spec.type === 'magic') return createMagicPencilCard(spec);
  if (spec.type === 'letter-hunt') return createLetterHuntCard(spec);
  if (spec.type === 'initial-sound') return createInitialSoundCard(spec);
  if (spec.type === 'syllable-count') return createSyllableCountCard(spec);
  if (spec.type === 'memory-match') return createMemoryMatchCard(spec);
  if (spec.type === 'rhyme') return createRhymeCard(spec);
  if (spec.type === 'typing') return createTypingCard(spec);
  if (spec.type === 'speaking') return createSpeakingCard(spec);
  if (spec.type === 'listen-choice') return createListenChoiceCard(spec);
  if (spec.type === 'first-syllable') return createFirstSyllableCard(spec);
  if (spec.type === 'letter-order') return createLetterOrderCard(spec);
  if (spec.type === 'platform-syllables') return createPlatformSyllablesCard(spec);
  if (spec.type === 'timing-letters') return createTimingLettersCard(spec);
  throw new Error(`Tipo de fase desconhecido: ${spec.type}`);
}

// =========================================================
// FASE ESPECIAL DE ABERTURA: ENCONTRE A LETRA
// Aparece uma única vez, sempre como a primeira tela do feed.
// =========================================================
function createOpeningLetterSearchCard() {
  const card = element('section', 'feed-card special-letter-card');
  card.dataset.key = 'special-opening-letter';
  const letters = ['A','B','C','D','E','F','G','H','I','L','M','N','O','P','R','S','T','U','V'];
  const targetLetter = randomItem(['A','E','I','O','U','B','C','M','P','S','T','L']);
  let solved = false;
  let pointerStartY = null;

  const target = element('div', 'special-letter-target');
  target.innerHTML = `<span>${targetLetter}</span>`;
  const field = element('div', 'special-letter-field');
  const guide = element('div', 'special-next-guide');
  guide.setAttribute('aria-hidden','true');
  guide.innerHTML = '<span class="guide-finger">👇</span><span class="guide-line"></span><span class="guide-finger guide-finger-two">👇</span>';
  card.append(target, field, guide);

  const palette = ['#f472b6','#60a5fa','#facc15','#fb7185','#a78bfa','#22d3ee','#f97316','#e879f9','#93c5fd','#fde047'];
  const count = window.matchMedia('(min-width:700px)').matches ? 24 : 18;
  const decoys = [];
  while (decoys.length < count - 1) {
    const value = randomItem(letters.filter((letter) => letter !== targetLetter));
    decoys.push(value);
  }
  const items = shuffle([...decoys.map((letter) => ({letter, correct:false})), {letter:targetLetter, correct:true}]);

  items.forEach((item,index) => {
    const button = element('button', `floating-letter${item.correct ? ' correct-target' : ''}`, item.letter);
    button.type='button';
    button.setAttribute('aria-label', item.correct ? `Letra ${targetLetter}` : `Letra ${item.letter}`);
    const x = 7 + Math.random()*84;
    const y = 18 + Math.random()*70;
    const driftX = (Math.random()>.5 ? 1 : -1) * (18 + Math.random()*55);
    const driftY = (Math.random()>.5 ? 1 : -1) * (14 + Math.random()*44);
    button.style.setProperty('--x', `${x}%`);
    button.style.setProperty('--y', `${y}%`);
    button.style.setProperty('--dx', `${driftX}px`);
    button.style.setProperty('--dy', `${driftY}px`);
    button.style.setProperty('--dur', `${5.2 + Math.random()*5.3}s`);
    button.style.setProperty('--delay', `${-Math.random()*7}s`);
    button.style.setProperty('--rot', `${180 + Math.round(Math.random()*720)}deg`);
    button.style.setProperty('--float-color', item.correct ? '#4ade80' : palette[index % palette.length]);

    button.addEventListener('click', (event) => {
      event.stopPropagation();
      if (solved) return;
      AudioEngine.unlock();
      if (!item.correct) {
        AudioEngine.sfx('wrong');
        button.classList.remove('wrong-pick');
        void button.offsetWidth;
        button.classList.add('wrong-pick');
        window.setTimeout(() => button.classList.remove('wrong-pick'), 430);
        return;
      }
      solved = true;
      AudioEngine.sfx('correct');
      vibrate(25);
      button.classList.add('found');
      card.classList.add('solved');
      $$('.floating-letter', field).forEach((node) => { node.disabled = true; });
      guide.classList.add('show');
      feedback('correct', `Letra ${targetLetter}!`, 'Acertou!');
    });
    field.appendChild(button);
  });

  card.addEventListener('pointerdown', (event) => {
    if (!solved || event.pointerType === 'mouse') return;
    pointerStartY = event.clientY;
  });
  card.addEventListener('pointerup', (event) => {
    if (!solved || pointerStartY === null) return;
    const delta = event.clientY - pointerStartY;
    pointerStartY = null;
    if (delta > 55) card.nextElementSibling?.scrollIntoView({ behavior:'smooth', block:'start' });
  });

  card.__controller = {
    enter() {
      document.body.classList.add('special-letter-active');
      if (!solved) VoiceGuide.speak(`Encontre a letra ${targetLetter}.`, { delay:320 });
    },
    leave() {
      document.body.classList.remove('special-letter-active');
      VoiceGuide.cancel();
    },
    repeat() {}
  };
  return card;
}

// =========================================================
// FEED INFINITO, RANDOMIZAÇÃO E CICLO DE VIDA
// =========================================================
const FeedManager = (() => {
  const feed = $('#feed');
  let activeCard = null;
  let scrollFrame = 0;
  let appending = false;
  let cycles = 0;
  const gameSpecs = allSpecs.filter((spec) => spec.type !== 'learning');
  const learningSpecs = allSpecs.filter((spec) => spec.type === 'learning');
  let gameQueue = [];
  let learningQueue = [];
  let lastType = '';
  let lastKey = '';

  function refill(queueName) {
    if (queueName === 'game') gameQueue = shuffle(gameSpecs);
    else learningQueue = shuffle(learningSpecs);
  }
  function nextFrom(queueName, avoidType = '') {
    let queue = queueName === 'game' ? gameQueue : learningQueue;
    if (!queue.length) { refill(queueName); queue = queueName === 'game' ? gameQueue : learningQueue; }
    let index = queue.findIndex((spec) => spec.key !== lastKey && (!avoidType || spec.type !== avoidType));
    if (index < 0) index = queue.findIndex((spec) => spec.key !== lastKey);
    if (index < 0) index = 0;
    const [next] = queue.splice(index,1);
    lastKey = next.key; lastType = next.type;
    return next;
  }

  function randomizedDeck(size = 30) {
    const deck = [];
    let gamesSinceLearning = 0;
    while (deck.length < size) {
      // Cartões de letras/sílabas continuam presentes, mas nunca dominam o feed.
      const useLearning = gamesSinceLearning >= 3 + Math.floor(Math.random()*2);
      const next = useLearning ? nextFrom('learning', lastType) : nextFrom('game', lastType);
      deck.push(next);
      gamesSinceLearning = useLearning ? 0 : gamesSinceLearning + 1;
    }
    return deck;
  }

  function appendCycle() {
    if (appending) return;
    appending = true;
    const fragment = document.createDocumentFragment();
    randomizedDeck().forEach((spec) => fragment.appendChild(createCardFromSpec(spec)));
    feed.appendChild(fragment);
    cycles += 1;
    appending = false;
  }

  function activate(card) {
    if (!card || card === activeCard) return;
    if (activeCard) { activeCard.classList.remove('active'); activeCard.__controller?.leave?.(); }
    activeCard = card; activeCard.classList.add('active');
    document.body.classList.toggle('special-letter-active', activeCard.classList.contains('special-letter-card'));
    activeCard.__controller?.enter?.();
  }
  function updateActive() {
    scrollFrame = 0;
    const height = Math.max(1, feed.clientHeight);
    const index = Math.max(0, Math.min(feed.children.length - 1, Math.round(feed.scrollTop / height)));
    activate(feed.children[index]);
    if (feed.scrollTop + height * 5 > feed.scrollHeight) appendCycle();
  }
  function onScroll() { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateActive); }
  function openKey(key) {
    let target = $(`.feed-card[data-key="${CSS.escape(key)}"]`, feed);
    const spec = specMap.get(key);
    if (!spec) return;
    // Se a fase ainda estiver nos 5 segundos de comemoração, abre uma nova tentativa.
    if (!target || $('.game-shell[data-completed="true"]', target)) {
      target = createCardFromSpec(spec);
      feed.appendChild(target);
    }
    closeModal('saved-modal');
    target.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function restartCard(card) {
    if (!card || !card.isConnected) return;
    const spec = card.__spec || specMap.get(card.dataset.key);
    if (!spec) return;
    const wasActive = card === activeCard || card.classList.contains('active');
    card.__controller?.leave?.();
    const freshCard = createCardFromSpec(spec);
    if (wasActive) freshCard.classList.add('active');
    card.replaceWith(freshCard);
    if (wasActive) {
      activeCard = freshCard;
      freshCard.__controller?.enter?.();
    }
  }
  function repeatActive(){activeCard?.__controller?.repeat?.();}
  function appendEvaluationSequence(){
    // Os dois minigames arcade aprovados aparecem primeiro para facilitar a avaliação.
    // Depois deles, o feed volta ao embaralhamento normal.
    const evaluationTypes = [
      'platform-syllables',
      'timing-letters'
    ];
    const fragment = document.createDocumentFragment();
    evaluationTypes.forEach((type) => {
      const spec = allSpecs.find((entry) => entry.type === type);
      if (spec) fragment.appendChild(createCardFromSpec(spec));
    });
    feed.appendChild(fragment);
  }

  function initialize(){
    // A fase especial ocupa sempre a primeira tela e não entra novamente nos ciclos aleatórios.
    feed.appendChild(createOpeningLetterSearchCard());
    appendEvaluationSequence();
    appendCycle();
    feed.addEventListener('scroll',onScroll,{passive:true}); requestAnimationFrame(updateActive);
  }
  return {initialize,openKey,restartCard,repeatActive,get activeCard(){return activeCard;},get cycles(){return cycles;}};
})();

// =========================================================
// MODAIS E CONFIGURAÇÕES
// =========================================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function refreshSettings() {
  const modal = $('#settings-modal');
  $('[data-setting="music"] strong', modal).textContent = AudioEngine.musicEnabled ? 'LIGADA' : 'DESLIGADA';
  $('[data-setting="effects"] strong', modal).textContent = AudioEngine.effectsEnabled ? 'LIGADOS' : 'DESLIGADOS';
  $('[data-setting="voice"] strong', modal).textContent = VoiceGuide.enabled ? 'LIGADA' : 'DESLIGADA';
}

function renderSavedList() {
  const list = $('#saved-list');
  const liked = Likes.values().map((key) => specMap.get(key)).filter(Boolean);
  list.replaceChildren();
  if (!liked.length) {
    list.appendChild(element('p', 'saved-empty', 'Você ainda não curtiu nenhuma fase. Toque no coração durante o jogo.'));
    return;
  }
  liked.forEach((spec) => {
    const button = element('button', 'saved-item');
    button.type = 'button';
    button.innerHTML = `<span class="saved-item-icon">${spec.icon || '★'}</span><span><strong>${spec.title}</strong><small>${spec.description}</small></span>`;
    button.addEventListener('click', () => FeedManager.openKey(spec.key));
    list.appendChild(button);
  });
}

function setupControls() {
  $('#settings-button').addEventListener('click', () => {
    AudioEngine.unlock();
    refreshSettings();
    openModal('settings-modal');
  });
  $('#saved-button').addEventListener('click', () => {
    AudioEngine.unlock();
    renderSavedList();
    openModal('saved-modal');
  });
  $$('[data-close-modal]').forEach((button) => button.addEventListener('click', () => closeModal(button.dataset.closeModal)));
  $$('.modal').forEach((modal) => modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(modal.id); }));

  $('[data-setting="music"]').addEventListener('click', () => { AudioEngine.setMusic(!AudioEngine.musicEnabled); AudioEngine.sfx('click'); refreshSettings(); });
  $('[data-setting="effects"]').addEventListener('click', () => { AudioEngine.setEffects(!AudioEngine.effectsEnabled); AudioEngine.sfx('click'); refreshSettings(); });
  $('[data-setting="voice"]').addEventListener('click', () => {
    VoiceGuide.setEnabled(!VoiceGuide.enabled);
    AudioEngine.sfx('click');
    refreshSettings();
    if (VoiceGuide.enabled) VoiceGuide.speak('Voz ativada.');
  });
}

// =========================================================
// INICIALIZAÇÃO
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  setupControls();
  refreshSettings();

  const app = $('#app');
  const startScreen = $('#start-screen');
  const loadingScreen = $('#loading-screen');
  const startButton = $('#start-game-button');
  let bootStarted = false;
  let feedInitialized = false;

  function finishBoot() {
    if (!feedInitialized) {
      FeedManager.initialize();
      feedInitialized = true;
    }
    loadingScreen?.classList.remove('running');
    loadingScreen?.classList.remove('visible');
    loadingScreen?.classList.add('hidden');
    app?.classList.remove('app-hidden');
    document.body.classList.remove('boot-active');
  }

  function beginBoot() {
    if (bootStarted) return;
    bootStarted = true;

    // Este primeiro toque libera áudio nos navegadores móveis.
    AudioEngine.unlock();

    startScreen?.classList.add('hidden');
    loadingScreen?.setAttribute('aria-hidden', 'false');
    loadingScreen?.classList.add('visible');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => loadingScreen?.classList.add('running'));
    });

    window.setTimeout(finishBoot, 12000);
  }

  startButton?.addEventListener('click', beginBoot);

  document.addEventListener('click', (event) => {
    if (event.target.closest('button') && !event.target.closest('#start-game-button')) AudioEngine.sfx('click');
  });

  document.addEventListener('visibilitychange', () => {
    if (!AudioEngine.unlocked) return;
    if (document.hidden) AudioEngine.stopMusic();
    else if (AudioEngine.musicEnabled) AudioEngine.startMusic();
  });

  window.addEventListener('beforeunload', () => VoiceGuide.cancel());
});
