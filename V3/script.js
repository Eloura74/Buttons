document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu1');

  // Ouvrir le menu contextuel
  document.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      // Positionner le menu
      menu.style.left = `${e.pageX}px`;
      menu.style.top = `${e.pageY}px`;

      // Afficher le menu
      menu.classList.remove('hidden');
      menu.style.transform = 'scale(1)';
  });

  // Fermer le menu contextuel au clic ailleurs
  document.addEventListener('click', () => {
      menu.style.transform = 'scale(0)';
      setTimeout(() => {
          menu.classList.add('hidden');
      }, 300); // Délai pour laisser la transition se terminer
  });

  // Actions des éléments du menu
  menu.addEventListener('click', (e) => {
      const action = e.target.getAttribute('data-action');
      if (action) {
          alert(`Action: ${action}`);
      }
  });
});
