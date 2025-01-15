document.addEventListener('DOMContentLoaded', function() {
    const scrollBanner = document.querySelector('.scroll-text');
    const scrollTextTemplate = `
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
                        <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
            <span class="scroll-item">
                <img src="pictures/logo-vs-black.png" alt="Logo VS">
                VERSUS COINS
            </span>
    `;
    scrollBanner.innerHTML += scrollTextTemplate;
});
