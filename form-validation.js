// js/form-validation.js
document.addEventListener('DOMContentLoaded', ()=> {
  document.querySelectorAll('form').forEach(form => {
    // compteur de caractères sur inputs avec data-maxlength
    form.querySelectorAll('input[data-maxlength]').forEach(input => {
      const max = parseInt(input.dataset.maxlength,10);
      const info = document.createElement('small');
      input.after(info);
      const update = ()=> info.textContent = `${input.value.length}/${max}`;
      input.addEventListener('input', update);
      update();
    });

    // toggle œil pour mot de passe
    form.querySelectorAll('input[type="password"]').forEach(pw => {
      const eye = document.createElement('span');
      eye.textContent = '👁️';
      eye.style.cursor = 'pointer';
      pw.after(eye);
      eye.addEventListener('click', ()=> {
        pw.type = pw.type==='password'?'text':'password';
      });
    });

    // validation à la soumission
    form.addEventListener('submit', e => {
      let ok = true;
      form.querySelectorAll('[required]').forEach(el => {
        el.classList.remove('invalid');
        if (!el.value.trim()) {
          ok = false;
          el.classList.add('invalid');
          if (!el.nextElementSibling || el.nextElementSibling.tagName!=='SMALL') {
            const msg = document.createElement('small');
            msg.textContent = 'Champ requis';
            msg.style.color = 'red';
            el.after(msg);
          }
        }
      });
      // mot de passe = confirmation
      const pw = form.querySelector('input[name="password"]');
      const cpw = form.querySelector('input[name="confirm-password"]');
      if (pw && cpw && pw.value !== cpw.value) {
        ok = false;
        cpw.classList.add('invalid');
        const msg = document.createElement('small');
        msg.textContent = 'Les mots de passe ne correspondent pas';
        msg.style.color = 'red';
        cpw.after(msg);
      }
      if (!ok) e.preventDefault();
    });
  });
});
