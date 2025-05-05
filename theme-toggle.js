// bascule clair/sombre via localStorage
;(function(){
  const LINK_ID = 'theme-css';
  const LIGHT = 'css/style-light.css';
  const DARK  = 'css/style-dark.css';
  const KEY   = 'theme';

  const link = document.getElementById(LINK_ID);
  if(!link) return;

  // bouton toggle
  const btn = document.createElement('button');
  btn.id = 'toggle-theme';
  btn.style.cssText = `
    position:fixed; bottom:1rem; right:1rem;
    padding:.5rem; font-size:1.2rem;
    background:rgba(0,0,0,0.3); color:#fff;
    border:none; border-radius:4px; cursor:pointer;
  `;
  document.body.appendChild(btn);

  function setTheme(t){
    link.href = t==='dark'? DARK: LIGHT;
    btn.textContent = t==='dark'? '☀️':'🌙';
    localStorage.setItem(KEY,t);
  }

  // appli initiale
  const saved = localStorage.getItem(KEY);
  setTheme(saved==='dark'?'dark':'light');

  btn.addEventListener('click',()=>{
    const curr = link.getAttribute('href')===LIGHT?'dark':'light';
    setTheme(curr);
  });
})();
