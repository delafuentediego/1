// js/profile-inline-edit.js
document.addEventListener('DOMContentLoaded', ()=> {
  const container = document.querySelector('.profile-container');
  if (!container) return;

  container.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.previousElementSibling.id;
      const input = document.getElementById(id);
      input.readOnly = false;
      input.classList.add('editing');
      input.focus();

      // créer ✓ et ✕ si pas déjà
      if (!container.querySelector(`.save-${id}`)) {
        const save = document.createElement('button');
        save.textContent = '✓';
        save.className = `save-${id}`;
        save.style.marginLeft = '5px';
        btn.after(save);

        const cancel = document.createElement('button');
        cancel.textContent = '✕';
        cancel.className = `cancel-${id}`;
        cancel.style.marginLeft = '2px';
        btn.after(cancel);

        const old = input.value;
        save.addEventListener('click', ()=> {
          input.readOnly = true;
          input.classList.remove('editing');
          save.remove(); cancel.remove();
          checkAnyChanged();
        });
        cancel.addEventListener('click', ()=> {
          input.value = old;
          input.readOnly = true;
          input.classList.remove('editing');
          save.remove(); cancel.remove();
        });
      }
    });
  });

  function checkAnyChanged() {
    const formBtn = container.querySelector('.btn');
    // active si un champ a data-changed
    if (!container.querySelector('.save-')) return;
    formBtn.disabled = false;
  }
});
