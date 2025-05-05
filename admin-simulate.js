// js/admin-simulate.js
document.addEventListener('DOMContentLoaded', ()=> {
  const tbody = document.getElementById('user-table-body');
  if (!tbody) return;

  // Exemple de chargement AJAX simulé
  fetch('api/get-users.php')
    .then(r=>r.json())
    .then(users => {
      users.forEach(u=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${u.id}</td>
          <td>${u.username}</td>
          <td>${u.email}</td>
          <td><input type="checkbox" ${u.active?'checked':''}></td>
          <td><button data-id="${u.id}">Appliquer</button></td>
        `;
        tbody.appendChild(tr);
      });

      tbody.querySelectorAll('button').forEach(btn=>{
        btn.addEventListener('click', ()=> {
          const chk = btn.parentElement.previousElementSibling.querySelector('input');
          btn.disabled = true; chk.disabled = true;
          setTimeout(()=> {
            // simuler appel serveur
            fetch(`api/set-active.php?id=${btn.dataset.id}&active=${chk.checked}`);
            btn.disabled = false; chk.disabled = false;
          }, 3000);
        });
      });
    });
});
