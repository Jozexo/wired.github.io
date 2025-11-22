document.addEventListener('DOMContentLoaded', () => {
  const h = document.querySelector('header');
  if (!h) return;
  const items = h.querySelectorAll('.reveal');

  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0 });

  items.forEach(el => io.observe(el));
});
