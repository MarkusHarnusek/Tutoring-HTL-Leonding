// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll configuration
    gsap.config({
        nullTargetWarn: false,
    });

    // Hero animations - stagger fade in
    gsap.from('.hero-title', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });

    gsap.from('.hero-text', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 0.6
    });

    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2
    });

    // Parallax effect on hero section
    gsap.to('.hero-section', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
        },
        opacity: 0.7,
        scale: 0.95,
        ease: 'none'
    });

    // About intro animation
    gsap.to('.about-intro', {
        scrollTrigger: {
            trigger: '.about-intro',
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
            // markers: true // Uncomment for debugging
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Subjects title animation
    gsap.to('.subjects-title', {
        scrollTrigger: {
            trigger: '.subjects-title',
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Subject cards animation
    gsap.utils.toArray('.subject-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
        });
    });

    // Navbar background change on scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 'max',
        toggleClass: {
            targets: '.floating-nav',
            className: 'scrolled'
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    // Add parallax to subject icons on hover
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
        const icon = card.querySelector('.subject-icon');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.2,
                rotation: 5,
                duration: 0.4,
                ease: 'back.out(1.7)'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

});