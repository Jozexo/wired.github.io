document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('identity-term');
  if (!root) return;
  const items = root.querySelectorAll('.reveal');

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
  }, { threshold: 0.1 });

  items.forEach(el => io.observe(el));
});
