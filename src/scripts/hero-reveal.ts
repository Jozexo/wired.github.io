document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('identity');
  if (!root) return;
  const items = root.querySelectorAll('.reveal-hero');
  const nameEl = root.querySelector('.hero-name');

  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(el => io.observe(el));

  const nameObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting && nameEl) {
        nameEl.classList.add('glitch-lain');
        setTimeout(() => nameEl.classList.remove('glitch-lain'), 1200);
        obs.disconnect();
      }
    });
  }, { threshold: 0.6 });
  if (nameEl) nameObserver.observe(nameEl);
});
