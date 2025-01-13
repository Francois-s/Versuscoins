document.addEventListener('DOMContentLoaded', function () {
    function updateImageSource() {
        const image = document.getElementById('about-background');
        if (window.innerWidth < 768) {
            image.src = './pictures/about-mobil.png';
        } else {
            image.src = './pictures/about.png';
        }
    }

    updateImageSource();

    window.addEventListener('resize', updateImageSource);
});
