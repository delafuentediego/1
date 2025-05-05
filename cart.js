// js/cart.js
document.addEventListener('DOMContentLoaded', ()=> {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const vid = btn.dataset.tripId;
      fetch('cart.php?action=add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ tripId: vid })
      })
      .then(r=>r.json())
      .then(res => {
        const msg = document.createElement('div');
        msg.textContent = res.success ? 'Voyage ajouté !' : 'Erreur…';
        msg.className = res.success ? 'cart-ok' : 'cart-error';
        btn.after(msg);
        setTimeout(()=> msg.remove(), 3000);
      });
    });
  });
});
