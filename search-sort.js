// js/search-sort.js
document.addEventListener('DOMContentLoaded', ()=> {
  const list = document.querySelector('.results-list');
  const sel = document.getElementById('sort-by');
  if (!list || !sel) return;

  sel.addEventListener('change', ()=> {
    const items = Array.from(list.children);
    const criterion = sel.value;
    items.sort((a,b) => {
      const va = a.dataset[criterion];
      const vb = b.dataset[criterion];
      return !isNaN(va) ? va - vb : va.localeCompare(vb);
    });
    list.innerHTML = '';
    items.forEach(i=>list.appendChild(i));
  });
});
