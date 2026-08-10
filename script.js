const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('wr-theme');
if (saved) root.dataset.theme = saved;

themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('wr-theme', next);
  themeToggle.setAttribute('aria-label', next === 'dark' ? 'ライトモードに切り替える' : 'ダークモードに切り替える');
});

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.textContent = open ? '×' : '☰';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('[data-placeholder-link]').forEach(card => {
  card.addEventListener('click', (e) => {
    if (card.getAttribute('href') === '#') {
      e.preventDefault();
      alert('デザインサンプルページは準備中です。完成後、このカードのリンク先を差し替えてください。');
    }
  });
});

document.getElementById('lineButton').addEventListener('click', (e) => {
  if (e.currentTarget.getAttribute('href') === '#') {
    e.preventDefault();
    alert('公式LINEのURLは準備中です。完成後、index.html の # をLINE URLへ差し替えてください。');
  }
});
