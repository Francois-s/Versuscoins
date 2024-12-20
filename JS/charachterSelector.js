function toggleMenu(element) {
  const menuButton = element.querySelector('.menu');
  menuButton.classList.toggle('opened');
  menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'));
}

function toggleMenu(element) {
  element.classList.toggle('opened');
}

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

document.addEventListener('DOMContentLoaded', () => {
  const leftImage = document.getElementById('blue-image');
  const rightImage = document.getElementById('red-image');

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const leftImageRect = leftImage.getBoundingClientRect();
    const rightImageRect = rightImage.getBoundingClientRect();

    if (window.matchMedia('(min-width: 769px)').matches) {
      // Desktop: Apply animations when in view
      if (leftImageRect.top < windowHeight && leftImageRect.bottom > 0) {
        leftImage.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        leftImage.style.transform = 'translateX(0)';
        leftImage.style.opacity = '1';
      } else {
        leftImage.style.transform = 'translateX(-100%)';
        leftImage.style.opacity = '0';
      }

      if (rightImageRect.top < windowHeight && rightImageRect.bottom > 0) {
        rightImage.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        rightImage.style.transform = 'translateX(0)';
        rightImage.style.opacity = '1';
      } else {
        rightImage.style.transform = 'translateX(100%)';
        rightImage.style.opacity = '0';
      }
    } else {
      // Mobile: Apply animations when in view
      if (leftImageRect.top < windowHeight && leftImageRect.bottom > 0) {
        leftImage.style.transition = 'opacity 0.6s ease-in';
        leftImage.style.opacity = '1';
      } else {
        leftImage.style.opacity = '0';
      }

      if (rightImageRect.top < windowHeight && rightImageRect.bottom > 0) {
        rightImage.style.transition = 'opacity 0.6s ease-in';
        rightImage.style.opacity = '1';
      } else {
        rightImage.style.opacity = '0';
      }
    }
  };

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check
  handleScroll();
});
