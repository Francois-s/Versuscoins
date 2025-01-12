document.addEventListener('DOMContentLoaded', function () {
    function updateImageSource() {
        const image = document.getElementById('footer-background');
        if (window.innerWidth < 768) {
            image.src = './pictures/backgoung-ring2.png';
        } else {
            image.src = './pictures/backgoung-ring.png';
        }
    }

    updateImageSource();

    window.addEventListener('resize', updateImageSource);
});
