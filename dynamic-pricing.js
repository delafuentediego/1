// js/dynamic-pricing.js
document.addEventListener('DOMContentLoaded', ()=> {
  const totalEl = document.getElementById('total');
  if (!totalEl) return;

  function updateTotal() {
    let sum = 0;
    document.querySelectorAll('[data-price][type="checkbox"], select[data-price]').forEach(el=>{
      const price = parseFloat(el.dataset.price) || 0;
      if ((el.type==='checkbox' && el.checked) || el.tagName==='SELECT') {
        // pour select, prix = option sélectionnée
        sum += price * (el.type==='checkbox'?1:1);
      }
    });
    totalEl.textContent = sum.toFixed(2) + ' €';
  }

  document.querySelectorAll('[data-price]').forEach(el=>{
    el.addEventListener('change', updateTotal);
  });
  updateTotal();
});
