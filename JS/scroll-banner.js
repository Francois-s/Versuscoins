// Infinite scrolling for the scroll-banner
window.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-text');

    // Clone the content to create a seamless loop
    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML += content;
    const scrollSpeed = 1; // Adjust speed here (higher = faster)

    function scroll() {
        scrollAmount -= scrollSpeed;

        scrollContainer.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
});
