// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }

        lastScrollTop = scrollTop;
    });

    // Hero title fade-in effect (replacing problematic typing effect)
    const heroTitle = document.querySelector('.hero-title');
    let isVisible = false;

    // Start fade-in effect when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isVisible) {
                heroTitle.style.opacity = '0';
                heroTitle.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    heroTitle.style.transition = 'all 0.8s ease';
                    heroTitle.style.opacity = '1';
                    heroTitle.style.transform = 'translateY(0)';
                    isVisible = true;
                }, 300);
            }
        });
    }, { threshold: 0.5 });

    heroObserver.observe(document.querySelector('.hero'));

    // Counter animation for stats
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 16);
    };

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const text = statNumber.textContent;
                const number = parseInt(text.replace(/\D/g, ''));

                if (number > 0) {
                    animateCounter(statNumber, number);
                    statsObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add notification styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: '#fff',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px',
            wordWrap: 'break-word'
        });

        // Set background color based on type
        const colors = {
            success: 'linear-gradient(135deg, #10b981, #059669)',
            error: 'linear-gradient(135deg, #ef4444, #dc2626)',
            info: 'linear-gradient(135deg, #3b82f6, #2563eb)'
        };
        notification.style.background = colors[type] || colors.info;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skill item hover effects
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');

        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Enhanced dynamic background particles
    const createParticles = () => {
        const hero = document.querySelector('.hero');
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        `;

        // Create more particles for better effect
        for (let i = 0; i < 80; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 4 + 1;
            const color = Math.random();

            let particleColor;
            if (color < 0.4) {
                particleColor = '#667eea';
            } else if (color < 0.8) {
                particleColor = '#764ba2';
            } else {
                particleColor = '#8b5cf6';
            }

            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, ${particleColor}CC 0%, ${particleColor}66 100%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.6 + 0.2};
                animation: float ${Math.random() * 20 + 15}s linear infinite;
                animation-delay: ${Math.random() * -20}s;
                box-shadow: 0 0 ${size * 2}px ${particleColor}44;
            `;
            particlesContainer.appendChild(particle);
        }

        hero.appendChild(particlesContainer);
    };

    // Add floating animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize particles
    createParticles();

    // Theme toggle functionality (optional)
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        icon.className = document.body.classList.contains('light-theme') ? 'fas fa-sun' : 'fas fa-moon';
    });

    document.body.appendChild(themeToggle);

    // Add light theme styles
    const lightThemeStyles = document.createElement('style');
    lightThemeStyles.textContent = `
        .light-theme {
            background: #f8fafc;
            color: #1e293b;
        }

        .light-theme .navbar {
            background: rgba(255, 255, 255, 0.95);
        }

        .light-theme .nav-link {
            color: #1e293b;
        }

        .light-theme .hero {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%);
        }

        .light-theme .hero-title,
        .light-theme .section-title {
            color: #1e293b;
        }

        .light-theme .hero-subtitle,
        .light-theme .hero-description {
            color: #475569;
        }

        .light-theme .about,
        .light-theme .projects {
            background: #ffffff;
        }

        .light-theme .about-description,
        .light-theme .project-description {
            color: #475569;
        }

        .light-theme .project-card,
        .light-theme .skill-category,
        .light-theme .info-card,
        .light-theme .contact-form {
            background: rgba(0, 0, 0, 0.05);
            border-color: rgba(0, 0, 0, 0.1);
        }

        .light-theme .project-title,
        .light-theme .skill-title,
        .light-theme .info-card h3 {
            color: #1e293b;
        }

        .light-theme .footer {
            background: #f1f5f9;
        }
    `;
    document.head.appendChild(lightThemeStyles);

    // Performance optimization: Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Add loading states
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    console.log('🚀 Portfolio website loaded successfully!');

    // Spider Web Interactive Animation
    const spiderWeb = document.querySelector('.spider-web');
    const webLines = document.querySelectorAll('.web-line');
    const webCircles = document.querySelectorAll('.web-circle');
    const spider = document.querySelector('.spider');
    const webCenter = document.querySelector('.web-center');

    if (spiderWeb) {
        // Mouse tracking for spider web interaction
        let mouseX = 0;
        let mouseY = 0;
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight / 2;

        // Update mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Calculate distance from center
            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

            // Normalize distance (0 to 1)
            const normalizedDistance = Math.min(distance / maxDistance, 1);

            // Apply effects to web elements
            updateWebElements(normalizedDistance, deltaX, deltaY);
        });

        // Update web elements based on mouse position
        function updateWebElements(distance, deltaX, deltaY) {
            // Update web lines (radial lines)
            webLines.forEach((line, index) => {
                const angle = (index * 45) * (Math.PI / 180); // Convert to radians
                const lineLength = 200 + (distance * 100); // Dynamic length

                // Calculate new end point based on mouse influence
                const influence = distance * 50;
                const newX2 = 400 + Math.cos(angle) * (lineLength + influence);
                const newY2 = 300 + Math.sin(angle) * (lineLength + influence);

                // Apply transformation
                line.setAttribute('x2', newX2);
                line.setAttribute('y2', newY2);

                // Dynamic opacity and stroke width
                const opacity = 0.2 + (distance * 0.3);
                const strokeWidth = 1 + (distance * 2);
                line.style.strokeOpacity = opacity;
                line.style.strokeWidth = strokeWidth;
            });

            // Update connecting circles
            webCircles.forEach((circle, index) => {
                const baseRadius = 3;
                const dynamicRadius = baseRadius + (distance * 5);
                const opacity = 0.1 + (distance * 0.4);

                circle.setAttribute('r', dynamicRadius);
                circle.style.fillOpacity = opacity;

                // Add slight movement to circles
                const angle = (index * 45) * (Math.PI / 180);
                const movement = distance * 10;
                const newCx = parseFloat(circle.getAttribute('cx')) + Math.cos(angle) * movement;
                const newCy = parseFloat(circle.getAttribute('cy')) + Math.sin(angle) * movement;

                circle.setAttribute('cx', newCx);
                circle.setAttribute('cy', newCy);
            });

            // Update spider position and behavior
            if (spider) {
                const spiderSpeed = 0.1;
                const spiderX = 380 + (deltaX * spiderSpeed);
                const spiderY = 280 + (deltaY * spiderSpeed);

                spider.style.transform = `translate(${spiderX}px, ${spiderY}px) scale(${1 + distance * 0.3})`;

                // Spider rotation based on mouse direction
                const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
                spider.style.transform += ` rotate(${rotation}deg)`;
            }

            // Update web center
            if (webCenter) {
                const centerScale = 1 + (distance * 0.5);
                const centerOpacity = 0.3 + (distance * 0.4);
                webCenter.style.transform = `scale(${centerScale})`;
                webCenter.style.fillOpacity = centerOpacity;
            }

            // Update spiral web lines
            const spiralLines = document.querySelectorAll('.web-spiral-line');
            spiralLines.forEach((spiral, index) => {
                const spiralScale = 1 + (distance * 0.2);
                const spiralOpacity = 0.15 + (distance * 0.2);
                spiral.style.transform = `scale(${spiralScale})`;
                spiral.style.strokeOpacity = spiralOpacity;
            });
        }

        // Add ripple effect on click
        spiderWeb.addEventListener('click', (e) => {
            const rect = spiderWeb.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            // Create ripple effect
            const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            ripple.setAttribute('cx', clickX);
            ripple.setAttribute('cy', clickY);
            ripple.setAttribute('r', '0');
            ripple.setAttribute('fill', 'rgba(255, 255, 255, 0.3)');
            ripple.classList.add('ripple-effect');

            spiderWeb.appendChild(ripple);

            // Animate ripple
            let radius = 0;
            const animateRipple = () => {
                radius += 5;
                ripple.setAttribute('r', radius);

                if (radius < 100) {
                    requestAnimationFrame(animateRipple);
                } else {
                    ripple.remove();
                }
            };

            requestAnimationFrame(animateRipple);
        });

        // Add CSS for ripple effect
        const rippleStyles = document.createElement('style');
        rippleStyles.textContent = `
            .ripple-effect {
                animation: rippleAnimation 1s ease-out forwards;
            }

            @keyframes rippleAnimation {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyles);

        // Initialize web elements with default state
        updateWebElements(0, 0, 0);

        // Add subtle breathing animation to the entire web
        let breatheScale = 1;
        let breatheDirection = 1;

        setInterval(() => {
            breatheScale += breatheDirection * 0.01;
            if (breatheScale >= 1.05 || breatheScale <= 0.95) {
                breatheDirection *= -1;
            }

            spiderWeb.style.transform = `scale(${breatheScale})`;
        }, 100);

        console.log('🕸️ Spider web interactive animation initialized!');
    }
});
