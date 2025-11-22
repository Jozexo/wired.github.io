document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quick-msg') as HTMLFormElement | null;
  if (!form) return;

  const emailTarget = (form.dataset?.email || 'jozehernandez@proton.me').trim();
  const ta = document.getElementById('mensaje') as HTMLTextAreaElement | null;
  const count = document.getElementById('msg-count') as HTMLElement | null;
  const status = document.getElementById('msg-status') as HTMLElement | null;
  const fromEmail = document.getElementById('fromEmail') as HTMLInputElement | null;

  if (ta && count) {
    const update = () => { count.textContent = String(ta.value.length); };
    ta.addEventListener('input', update);
    update();
  }

  if (!ta || !status || !fromEmail) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!fromEmail.reportValidity()) return;
    if (ta.value.length === 0) {
      status.textContent = 'El mensaje no puede estar vacío.';
      status.setAttribute('style', 'color: var(--accent-pink)');
      return;
    }
    const subject = encodeURIComponent('Contacto desde wired');
    const body = encodeURIComponent(`De: ${fromEmail.value}\n\n${ta.value}`);
    const mailtoUrl = `mailto:${emailTarget}?subject=${subject}&body=${body}`;
    status.textContent = 'Abriendo tu cliente de correo…';
    status.setAttribute('style', 'color: var(--accent-phosphor)');
    setTimeout(() => { window.location.href = mailtoUrl; }, 100);
    setTimeout(() => {
      status.textContent = 'Si el cliente se abrió, revisa y envía el correo. ✅';
      status.setAttribute('style', 'color: var(--accent-pink)');
    }, 1200);
  });
});
