document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

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
        duration: 0.5,
        opacity: 1,
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

document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".hero h1", { 
        opacity: 0, 
        y: 20, 
        duration: 1, 
        ease: "power2.out" 
    });

    gsap.from(".hero p", { 
        opacity: 0, 
        y: 20, 
        duration: 1, 
        delay: 0.3, 
        ease: "power2.out" 
    });

    gsap.from(".hero a", { 
        opacity: 0, 
        scale: 0.8, 
        duration: 1, 
        delay: 0.6, 
        ease: "elastic.out(1, 0.5)" 
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     document.body.style.overflowY = "scroll"; // Ensures scrolling
//     document.body.style.scrollbarWidth = "none"; // Firefox
//     document.body.style.msOverflowStyle = "none"; // IE & Edge
// });
