// js/theme-toggle.js
(function(){
  const THEME_COOKIE = 'theme';
  const btn = document.createElement('button');
  btn.id = 'toggle-theme';
  btn.textContent = '🌓';
  btn.style.position = 'fixed';
  btn.style.bottom = '10px';
  btn.style.right = '10px';
  document.body.appendChild(btn);

  function setTheme(name) {
    let link = document.getElementById('theme-css');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = 'theme-css';
      document.head.appendChild(link);
    }
    link.href = `css/style-${name}.css`;
    document.cookie = `${THEME_COOKIE}=${name};path=/;max-age=31536000`;
  }

  function getCookie(name) {
    return document.cookie.split('; ').reduce((r,v)=> {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '');
  }

  // Init
  const saved = getCookie(THEME_COOKIE) || 'light';
  setTheme(saved);

  // Toggle
  btn.addEventListener('click', ()=> {
    const next = (getCookie(THEME_COOKIE) === 'light') ? 'dark' : 'light';
    setTheme(next);
  });
})();
