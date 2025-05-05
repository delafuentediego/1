document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.add-to-cart').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault();
      fetch('cart.php?action=add',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({tripId:btn.dataset.tripId})
      })
      .then(r=>r.json())
      .then(res=>{
        const msg=document.createElement('div');
        msg.textContent=res.success?'✅ Voyage ajouté':'❌ Erreur';
        msg.style.position='fixed';
        msg.style.bottom='1rem';
        msg.style.left='50%';
        msg.style.transform='translateX(-50%)';
        msg.style.background='#000a';
        msg.style.color='white';
        msg.style.padding='0.5rem 1rem';
        msg.style.borderRadius='4px';
        document.body.appendChild(msg);
        setTimeout(()=>msg.remove(),2000);
      });
    });
  });
});
