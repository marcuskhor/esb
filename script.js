
// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuIcon.textContent = '☰';
    } else {
        mobileNav.classList.add('active');
        menuIcon.textContent = '✕';
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const header = document.querySelector('.header');
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!header.contains(e.target) && mobileNav.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.firstName || !data.lastName || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const submitBtn = newsletterForm.querySelector('button');
        const emailInput = newsletterForm.querySelector('input');
        
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        });
    }
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe service cards and other elements
    const animateElements = document.querySelectorAll('.service-card, .stat-card, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Get Quote button functionality
document.addEventListener('DOMContentLoaded', function() {
    const quoteButtons = document.querySelectorAll('.btn-orange');
    
    quoteButtons.forEach(button => {
        if (button.textContent.includes('Get Quote') || button.textContent.includes('Get Started')) {
            button.addEventListener('click', function() {
                // Scroll to contact form
                const contactSection = document.getElementById('contact');
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = contactSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Focus on first form field
                setTimeout(() => {
                    const firstInput = document.querySelector('#firstName');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 1000);
            });
        }
    });
});
