document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in projects on scroll
    gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 60%",
                scrub: true
            }
        });
    });

    // Sticky header effect
    gsap.to("header", {
        backgroundColor: "rgba(30, 30, 30, 0.9)",
        duration: 0.3,
        scrollTrigger: {
            start: "top -10px",
            end: "top -20px",
            toggleActions: "play none none reverse"
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                gsap.to(window, {
                    scrollTo: { y: targetElement, offsetY: 60 },
                    duration: 1,
                    ease: "power2.out"
                });
            }
        });
    });
});
