document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('wired-uptime');
  if (!el) return;
  const start = Date.now();
  const fmt = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    if (h) return `${h}h ${m}m ${s}s`;
    if (m) return `${m}m ${s}s`;
    return `${s}s`;
  };
  setInterval(() => {
    const diff = Math.floor((Date.now() - start) / 1000);
    el.textContent = fmt(diff);
  }, 1000);
});
