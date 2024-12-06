document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container-roadmap');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Observer to handle animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });

    // Observe each timeline item
    timelineItems.forEach((item) => observer.observe(item));
});
