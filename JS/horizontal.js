document.addEventListener("DOMContentLoaded", function() {
    // Initialize ScrollMagic controller
    const controller = new ScrollMagic.Controller();

    // Create a scene for the horizontal scroll
    const scene = new ScrollMagic.Scene({
        triggerElement: ".horizontal-scroll-section",
        triggerHook: 0,
        duration: "300%" // Adjust as needed
    })
    .setPin(".horizontal-scroll-section")
    .setTween(gsap.to(".horizontal-content", { x: "-300vw", ease: "none" }))
    .addTo(controller);
});
