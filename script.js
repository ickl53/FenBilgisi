// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.course-card, .feature-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        grade: document.getElementById('grade').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.grade) {
        showMessage('Lütfen tüm zorunlu alanları doldurun.', 'error');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Lütfen geçerli bir e-posta adresi girin.', 'error');
        return;
    }

    // Validate phone (Turkish phone format)
    const phoneRegex = /^[0-9]{10,11}$/;
    const cleanPhone = formData.phone.replace(/[^\d]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        showMessage('Lütfen geçerli bir telefon numarası girin.', 'error');
        return;
    }

    // In a real implementation, you would send this data to a server
    // For now, we'll simulate a successful submission
    try {
        // Simulate API call
        await simulateFormSubmission(formData);

        showMessage('Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğim.', 'success');
        contactForm.reset();

        // Log to console (in production, this would be sent to a server)
        console.log('Form submitted:', formData);

    } catch (error) {
        showMessage('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.', 'error');
    }
});

// Simulate form submission (replace with actual API call in production)
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // In production, send to your backend/email service
            // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
            resolve();
        }, 1000);
    });
}

// Show form message
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Add animation to stats on scroll
const statsSection = document.querySelector('.hero-stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            animateStats();
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const isPercentage = text.includes('%');
        const isPlusSign = text.includes('+');
        const number = parseInt(text.replace(/[^\d]/g, ''));

        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }

            let displayValue = Math.floor(current);
            if (isPlusSign) displayValue += '+';
            if (isPercentage) displayValue = '%' + displayValue;

            stat.textContent = displayValue;
        }, 30);
    });
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = '#6366f1';
            } else {
                navLink.style.color = '#1f2937';
            }
        }
    });
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Email Protection - Decode emails to prevent spam bots
document.addEventListener('DOMContentLoaded', function() {
    // Handle email links
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(link => {
        const user = link.getAttribute('data-user');
        const domain = link.getAttribute('data-domain');
        if (user && domain) {
            const email = user + '@' + domain;
            link.href = 'mailto:' + email;
            link.textContent = email;
        }
    });

    // Handle email text spans
    const emailTexts = document.querySelectorAll('.email-text');
    emailTexts.forEach(span => {
        const user = span.getAttribute('data-user');
        const domain = span.getAttribute('data-domain');
        if (user && domain) {
            const email = user + '@' + domain;
            span.textContent = email;
        }
    });
});
