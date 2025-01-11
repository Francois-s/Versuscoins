document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.pop');
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.querySelector('.popup');

    // Function to add impressive animation
    function showPopup() {
        popupOverlay.style.display = 'flex';
        popup.style.opacity = '0';
        popup.style.transform = 'scale(0.5) rotate(-40deg)';

        setTimeout(() => {
            popup.style.transition = 'transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 1s';
            popup.style.transform = 'scale(1) rotate(0deg)';
            popup.style.opacity = '1';
        }, 10);
    }

    // Function to hide popup with an exit animation
    function hidePopup() {
        popup.style.transition = 'transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 1s';
        popup.style.transform = 'scale(0.5) rotate(40deg)';
        popup.style.opacity = '0';

        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 1200); // Match the transition duration
    }

    buyButtons.forEach(button => {
        button.addEventListener('click', showPopup);
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            hidePopup();
        }
    });

    // Bonus: Add keypress to close popup
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hidePopup();
        }
    });
});