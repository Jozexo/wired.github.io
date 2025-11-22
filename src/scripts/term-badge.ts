// Tiny typing effect for elements marked with [data-term-typing]
// Works with multiple instances per page and respects reduced motion.

const DEFAULT_COMMANDS = [
  'whoami',
  'uname -sr',
  'echo "wired"',
  'sudo apt install curiosity',
  'ls -la ~/projects'
];

function parseCommandsAttr(attr: string | null): string[] {
  if (!attr) return DEFAULT_COMMANDS;
  try {
    // Try JSON first: ["cmd1","cmd2"]
    const parsed = JSON.parse(attr);
    if (Array.isArray(parsed)) return parsed.map(String);
  } catch {}
  // Fallback CSV: cmd1, cmd2, cmd3
  return attr.split(',').map(s => s.trim()).filter(Boolean);
}

function initOne(root: Element) {
  // Avoid double init
  if ((root as any).__termInit) return;
  (root as any).__termInit = true;

  const cmdEl = root.querySelector<HTMLElement>('.term-cmd');
  if (!cmdEl) return;
  const cmd = cmdEl as HTMLElement;

  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cmds = parseCommandsAttr(root.getAttribute('data-commands'));

  let cmdIdx = 0;
  let charIdx = 0;
  let typing = true;
  let timer: number | undefined = undefined;

  // Slower pacing
  const typeSpeed = 95;
  const eraseSpeed = 55;
  const holdTime = 1400;
  const idleTime = 800;

  function tick() {
    const text = `$ ${cmds[cmdIdx]}`;

    if (prefersReduced) {
      cmd.textContent = text;
      return;
    }

    if (typing) {
      cmd.textContent = text.slice(0, charIdx++);
      if (charIdx > text.length) {
        typing = false;
        timer = window.setTimeout(() => requestAnimationFrame(tick), holdTime);
        return;
      }
      window.setTimeout(() => requestAnimationFrame(tick), typeSpeed);
    } else {
      cmd.textContent = text.slice(0, charIdx--);
      if (charIdx < 2) { // keep "$ "
        typing = true;
        cmdIdx = (cmdIdx + 1) % cmds.length;
        timer = window.setTimeout(() => requestAnimationFrame(tick), idleTime);
        return;
      }
      window.setTimeout(() => requestAnimationFrame(tick), eraseSpeed);
    }
  }

  tick();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (timer) window.clearTimeout(timer);
    } else {
      requestAnimationFrame(tick);
    }
  });
}

function initAll() {
  document.querySelectorAll('[data-term-typing]').forEach(initOne);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

// Mark file as an ES module for TS type-checking when referenced
export {};
