document.addEventListener("DOMContentLoaded", function() {
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: ".horizontal-scroll-section",
        triggerHook: 0,
        duration: "300%"
    })
    .setPin(".horizontal-scroll-section")
    .setTween(gsap.to(".horizontal-content", { x: "-300vw", ease: "none" }))
    .addTo(controller);
});
