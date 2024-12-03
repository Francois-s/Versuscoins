// Gestion du clic pour changer les images
document.querySelectorAll('.cards .card').forEach(card => {
    card.addEventListener('click', () => {
      const parent = card.closest('.character');
      const image = parent.querySelector('img');
      const newImageSrc = card.getAttribute('data-image');
      
      // Changer l'image de la section correspondante
      image.src = newImageSrc;
  
      // Effet visuel pour indiquer la sélection
      parent.querySelectorAll('.card').forEach(c => c.style.transform = 'scale(1)');
      card.style.transform = 'scale(1.1)';
    });
  });
  