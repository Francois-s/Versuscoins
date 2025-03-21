document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item .text-content');

    if (!timelineItems || timelineItems.length === 0) {
        console.error('No timeline items found.');
        return;
    }

    const handleScroll = () => {
        const windowHeight = window.innerHeight;

        timelineItems.forEach((item) => {
            const itemRect = item.getBoundingClientRect();

            if (itemRect.top < windowHeight && itemRect.bottom > 0) {
                item.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
                item.style.transform = 'translateY(0)';
                item.style.opacity = '1';
            } else {
                item.style.transform = 'translateY(50px)';
                item.style.opacity = '0';
            }
        });
    };

    timelineItems.forEach((item) => {
        item.style.transform = 'translateY(50px)';
        item.style.opacity = '0';
    });

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});
