const svgAnimation = `
<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" fill="blue">
    <animate 
      attributeName="fill" 
      values="blue; red; blue" 
      dur="2s" 
      repeatCount="indefinite" />
    <animate 
      attributeName="r" 
      values="10; 30; 10" 
      dur="2s" 
      repeatCount="indefinite" />
  </circle>
</svg>
`;

document.body.innerHTML += svgAnimation;
// Add scroll effect to the header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Add click animation for the cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.style.transform = 'scale(1)'); // Reset others
    card.style.transform = 'scale(1.3)';
  });
});
