// Run synchronously in the guide's head, before its styles. Studio owns the
// saved settings; a guide reads only the theme and never writes to storage.
(() => {
  const system = window.matchMedia?.('(prefers-color-scheme: dark)');
  const apply = () => {
    let choice = 'dark';
    try {
      const saved = JSON.parse(localStorage.getItem('settings') || '{}')?.theme;
      if (['dark', 'light', 'system'].includes(saved)) choice = saved;
    } catch { /* Storage can be unavailable or contain an incomplete value. */ }
    const resolved = choice === 'system' ? (system?.matches ? 'dark' : 'light') : choice;
    document.documentElement.setAttribute('data-theme', resolved);
  };

  apply();
  system?.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key === null || event.key === 'settings') apply();
  });
  window.addEventListener('pageshow', apply);
})();
