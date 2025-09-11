// Hero title emoji swap
const heroTitle = document.getElementById('hero-title');
const originalTitle = 'TrailQuest Hiking Club';
const emojiTitle = '🌲⛰️ Hiking Club';

heroTitle.addEventListener('mouseenter', () => {
  heroTitle.textContent = emojiTitle;
});
heroTitle.addEventListener('mouseleave', () => {
  heroTitle.textContent = originalTitle;
});

// Also toggle on keyboard focus for accessibility
heroTitle.addEventListener('focus', () => {
  heroTitle.textContent = emojiTitle;
});
heroTitle.addEventListener('blur', () => {
  heroTitle.textContent = originalTitle;
});

// Cheer button with click counter
const cheerBtn = document.getElementById('cheer-btn');
const cheerCountSpan = document.getElementById('cheer-count');
let cheerCount = 0;

cheerBtn.addEventListener('click', () => {
  cheerCount++;
  cheerCountSpan.textContent = cheerCount;
  cheerBtn.setAttribute('aria-pressed', 'true');
  // Optionally reset aria-pressed after short delay for toggle effect
  setTimeout(() => {
    cheerBtn.setAttribute('aria-pressed', 'false');
  }, 200);
});

// Trail Theme button colors (natural palettes)
const themeBtn = document.getElementById('theme-btn');

// Define some nature-inspired color palettes (background and text)
const palettes = [
  { background: '#f0f4dc', text: '#3b6e30', accent: '#8dbf67' }, // Light green meadow
  { background: '#dbe9e4', text: '#264653', accent: '#2a9d8f' }, // Soft teal forest
  { background: '#fff3e4', text: '#b05e27', accent: '#e9c46a' }, // Dried leaves
  { background: '#e6f0ea', text: '#1b3a4b', accent: '#74a57f' }, // Misty mountain
  { background: '#f6efe8', text: '#5e4a3c', accent: '#a27b5c' }, // Rocky trail
];

themeBtn.addEventListener('click', () => {
  // Pick a random palette different from current background
  let newPalette;
  do {
    newPalette = palettes[Math.floor(Math.random() * palettes.length)];
  } while (newPalette.background === document.body.style.backgroundColor);

  document.body.style.backgroundColor = newPalette.background;
  document.body.style.color = newPalette.text;

  // Update header/hero background and button colors for contrast
  const hero = document.querySelector('.hero');
  hero.style.backgroundColor = newPalette.accent;
  hero.style.color = newPalette.text;

  // Update buttons background and color
  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.style.backgroundColor = newPalette.background;
    btn.style.color = newPalette.text;
    btn.style.border = `1px solid ${newPalette.text}`;
  });

  // Update social link backgrounds
  const socialLinks = document.querySelectorAll('.social-links a');
  socialLinks.forEach((link) => {
    link.style.backgroundColor = newPalette.accent;
    link.style.color = newPalette.background;
  });

  // Update headings colors
  const headings = document.querySelectorAll('h2');
  headings.forEach((h) => {
    h.style.color = newPalette.accent;
    h.style.borderColor = newPalette.text;
  });

  // Reset hero title text color as well
  heroTitle.style.color = newPalette.text;
});
