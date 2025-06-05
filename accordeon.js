document.querySelectorAll('.action').forEach((action) => {
  const accordeon = action.parentElement; // div.accordeon parent
  const arrow = action.querySelector('img');
  const para = accordeon.querySelector('p');

  // Initialisation au chargement
  if (accordeon.classList.contains('open')) {
    if (para) para.style.display = 'block';
    arrow.style.transform = 'rotate(0deg)'; // ouvert → icône à 0°
  } else {
    if (para) para.style.display = 'none';
    arrow.style.transform = 'rotate(180deg)'; // fermé → icône à 180°
  }
  if (!para) return; 

  // Au clic, toggle open + afficher texte + rotation icône
  action.addEventListener('click', () => {
    const isOpen = accordeon.classList.toggle('open'); // retourne true si maintenant ouvert

    if (para) para.style.display = isOpen ? 'block' : 'none';
    arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    arrow.style.transition = 'transform 0.3s ease';
  });
});
