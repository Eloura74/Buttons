document.addEventListener('click', (event) => {
  // Vérifie si le clic a eu lieu sur un bouton principal ou secondaire
  const isMenuItem = event.target.closest('.menu-item');
  const isSubMenuItem = event.target.closest('.sub-menu');

  if (!isMenuItem && !isSubMenuItem) {
    // Si le clic est à l'extérieur, fermer tous les sous-menus
    document.querySelectorAll('.sub-menu').forEach(menu => {
      menu.classList.remove('active');
    });
  }
});

function toggleSubMenu(menuNumber) {
  // Ferme tous les sous-menus sauf celui qui doit être ouvert
  document.querySelectorAll('.sub-menu').forEach(menu => {
    if (menu.dataset.attached === String(menuNumber)) {
      menu.classList.toggle('active');
    } else {
      menu.classList.remove('active');
    }
  });
}
