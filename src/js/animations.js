// Animation effects for HealthTracker Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        .animate-delay-1 { animation-delay: 0.1s; }
        .animate-delay-2 { animation-delay: 0.2s; }
        .animate-delay-3 { animation-delay: 0.3s; }
        .animate-delay-4 { animation-delay: 0.4s; }
        .animate-delay-5 { animation-delay: 0.5s; }
        .animate-delay-6 { animation-delay: 0.6s; }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes scaleIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
        
        .pulse-animation {
            animation: pulse 2s infinite;
        }
        
        .slide-in-left {
            animation: slideInLeft 0.8s ease forwards;
        }
        
        .slide-in-right {
            animation: slideInRight 0.8s ease forwards;
        }
        
        .scale-in {
            animation: scaleIn 0.6s ease forwards;
        }
        
        /* Initial state for elements that will animate */
        .feature-card,
        .testimonial-card,
        .pricing-card {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .hero-content {
            opacity: 0;
            transform: translateX(-50px);
        }
        
        .hero-image {
            opacity: 0;
            transform: translateX(50px);
        }
    `;
    document.head.appendChild(style);

    // Initialize hero animations
    initHeroAnimations();
    
    // Initialize staggered animations for feature cards
    initStaggeredAnimations();
    
    // Initialize scroll-triggered animations
    initScrollAnimations();
    
    // Initialize interactive animations
    initInteractiveAnimations();
    
    // Initialize number counter animations
    initCounterAnimations();
});

function initHeroAnimations() {
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.classList.add('slide-in-left');
        }
        
        if (heroImage) {
            setTimeout(() => {
                heroImage.classList.add('slide-in-right');
            }, 200);
        }
    }, 500);
}

function initStaggeredAnimations() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add(`animate-delay-${Math.min(index + 1, 6)}`);
    });
    
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.classList.add(`animate-delay-${Math.min(index + 1, 3)}`);
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add appropriate animation class based on element type
                if (element.classList.contains('section-title')) {
                    element.classList.add('scale-in');
                } else if (element.classList.contains('pricing-card')) {
                    // Special animation for featured pricing card
                    if (element.classList.contains('featured')) {
                        setTimeout(() => {
                            element.classList.add('pulse-animation');
                        }, 800);
                    }
                    element.classList.add('animate-in');
                } else {
                    element.classList.add('animate-in');
                }
                
                scrollObserver.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(`
        .section-title,
        .feature-card,
        .testimonial-card,
        .pricing-card,
        .contact-info,
        .contact-form
    `);
    
    animatableElements.forEach(el => {
        scrollObserver.observe(el);
    });
}

function initInteractiveAnimations() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });

    // Form input focus animations
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Navigation menu animation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function initCounterAnimations() {
    // Create some stats if they don't exist
    const statsData = [
        { label: 'アクティブユーザー', value: 10000, suffix: '+' },
        { label: '記録されたワークアウト', value: 50000, suffix: '+' },
        { label: '平均満足度', value: 4.8, suffix: '/5' },
        { label: 'サポート言語', value: 12, suffix: '' }
    ];

    // Add stats section if it doesn't exist
    let statsSection = document.querySelector('.stats-section');
    if (!statsSection) {
        // We won't create the section since it's not in the original HTML
        // But we'll prepare the counter function for any numbers that might exist
    }

    // Counter animation function
    function animateCounter(element, start, end, duration, suffix = '') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value.toLocaleString() + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Observe any elements with data-counter attribute
    const counterElements = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const endValue = parseInt(element.dataset.counter);
                const suffix = element.dataset.suffix || '';
                animateCounter(element, 0, endValue, 2000, suffix);
                counterObserver.unobserve(element);
            }
        });
    });

    counterElements.forEach(el => counterObserver.observe(el));
}

// Utility function for creating custom animations
function createCustomAnimation(element, keyframes, options = {}) {
    if (element && element.animate) {
        return element.animate(keyframes, {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards',
            ...options
        });
    }
}

// Parallax effect for hero section
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');
    const heroIllustration = document.querySelector('.hero-illustration');
    
    if (heroSection && heroIllustration) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < heroSection.offsetHeight) {
                heroIllustration.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Initialize parallax effect
initParallaxEffect();

// Smooth reveal animation for sections
function revealSection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
        }
    });
}

// Add CSS for section reveals
const sectionStyle = document.createElement('style');
sectionStyle.textContent = `
    .section-hidden {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    .section-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(sectionStyle);

// Apply section reveal to all main sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

sections.forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
});