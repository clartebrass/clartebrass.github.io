const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const reveals = document.querySelectorAll('.reveal');
if (reduced || !('IntersectionObserver' in window)) {
  reveals.forEach(el => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
}

const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const button = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
if (button && nav) {
  const close = () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'MENU';
  };
  button.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'CLOSE' : 'MENU';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
}
