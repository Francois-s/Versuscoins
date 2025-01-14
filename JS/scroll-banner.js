window.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-text');

    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML += content;
    const scrollSpeed = 1;

    function scroll() {
        scrollAmount -= scrollSpeed;

        scrollContainer.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
});
