// js/theme-toggle.js
;(function(){
  const LINK_ID = 'theme-css'
  const LIGHT = 'css/style-light.css'
  const DARK  = 'css/style-dark.css'
  const STORAGE_KEY = 'theme'

  // récupère le <link> existant
  const link = document.getElementById(LINK_ID)
  if (!link) return console.error('Impossible de trouver #theme-css')

  // crée/ajoute le bouton de toggle
  const btn = document.createElement('button')
  btn.id = 'toggle-theme'
  btn.style.cssText = `
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: .5rem;
    font-size: 1.2rem;
    border: none;
    background: rgba(0,0,0,0.3);
    color: white;
    border-radius: 4px;
    cursor: pointer;
  `
  document.body.appendChild(btn)

  // fonction pour appliquer un thème
  function apply(theme) {
    link.href = (theme === 'dark') ? DARK : LIGHT
    btn.textContent = (theme === 'dark') ? '☀️' : '🌙'
    localStorage.setItem(STORAGE_KEY, theme)
  }

  // init au chargement
  const saved = localStorage.getItem(STORAGE_KEY) 
  apply(saved === 'dark' ? 'dark' : 'light')

  // click → toggle
  btn.addEventListener('click', () => {
    const next = link.getAttribute('href') === LIGHT ? 'dark' : 'light'
    apply(next)
  })
})()
