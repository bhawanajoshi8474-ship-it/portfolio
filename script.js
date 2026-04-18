// Navbar Mobile Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
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

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'active');
            entry.target.classList.add('scroll-reveal', 'active');
            
            // Skills progress bars
            if (entry.target.querySelector('.skill-progress')) {
                const progresses = entry.target.querySelectorAll('.skill-progress');
                progresses.forEach(progress => {
                    const width = progress.getAttribute('data-width');
                    progress.style.width = width;
                });
            }
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.project-card, .about-text, .about-img, .contact-form').forEach(el => {
    observer.observe(el);
});

// Typewriter Effect (already handled by CSS, but JS fallback)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '|';
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Skills Slider Duplicate for Infinite Loop
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const skills = Array.from(sliderTrack.children);
    
    // Duplicate for seamless loop
    skills.forEach(skill => {
        const clone = skill.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
});

// Project View Buttons (Modal or External)
document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = e.target.closest('.project-card');
        const title = project.querySelector('h3').textContent;
        const desc = project.querySelector('p').textContent;
        alert(`Project: ${title}\n\n${desc}\n\n(Click to view live demo - placeholder)`);
        // Replace with modal or external link
    });
});

// Contact Form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Message sent successfully. (Demo)');
    e.target.reset();
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Cursor Follower (Unique Touch)
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
