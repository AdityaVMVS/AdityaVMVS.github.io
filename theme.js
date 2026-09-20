(function () {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;

  function preferredTheme() {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return 'light';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const isLight = theme === 'light';
    button.setAttribute('aria-pressed', String(isLight));
    button.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    button.title = `Switch to ${isLight ? 'dark' : 'light'} mode`;
    button.querySelector('.theme-toggle-icon').textContent = isLight ? '☾' : '☀';
    button.querySelector('.theme-toggle-label').textContent = isLight ? 'Dark' : 'Light';
  }

  applyTheme(preferredTheme());
  const header = document.querySelector('.site-header');
  if (!header) return;

  const button = document.createElement('button');
  button.className = 'theme-toggle';
  button.type = 'button';
  button.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-label"></span>';
  header.appendChild(button);
  applyTheme(root.dataset.theme);

  button.addEventListener('click', function () {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });
})();
