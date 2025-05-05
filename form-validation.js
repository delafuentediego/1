document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('form').forEach(form=>{
    form.addEventListener('submit',e=>{
      let valid = true;
      form.querySelectorAll('[required]').forEach(el=>{
        el.classList.remove('invalid');
        if(!el.value.trim()){
          valid=false;
          el.classList.add('invalid');
          if(!el.nextElementSibling || el.nextElementSibling.tagName!=='SMALL'){
            const msg=document.createElement('small');
            msg.textContent='Champ requis';
            msg.style.color='red';
            el.after(msg);
          }
        }
      });
      const pw = form.querySelector('input[name="password"]');
      const cpw= form.querySelector('input[name="confirm-password"]');
      if(pw && cpw && pw.value!==cpw.value){
        valid=false;
        cpw.classList.add('invalid');
        const msg=document.createElement('small');
        msg.textContent='Les mots de passe ne correspondent pas';
        msg.style.color='red';
        cpw.after(msg);
      }
      if(!valid) e.preventDefault();
    });
  });
});
