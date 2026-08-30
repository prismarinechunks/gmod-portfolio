// XeroChunks - Garry's Mod Developer Portfolio
// Interactive features and animations

// ===== SMOOTH SCROLL BEHAVIOR =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    
    // Add active state to navigation links based on scroll position
    updateNavActiveState();
    window.addEventListener('scroll', updateNavActiveState);
});

function updateNavActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ===== BUTTON INTERACTIONS =====
document.addEventListener('click', function(e) {
    // Add click animation to buttons
    if (e.target.classList.contains('btn') || e.target.classList.contains('link-btn')) {
        e.target.style.transform = 'scale(0.98)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 150);
    }
});

// ===== LAZY IMAGE LOADING =====
// This script is ready for when you add real images
// Images can be added by replacing .image-placeholder divs with <img> tags

function addImagePlaceholder(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        if (el.tagName === 'IMG') {
            el.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            el.addEventListener('error', function() {
                this.style.display = 'none';
            });
        }
    });
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and achievement cards
document.querySelectorAll('.project-card, .achievement-card, .repo-card, .link-card').forEach(el => {
    observer.observe(el);
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // Close any open dropdowns/modals with Escape key
    if (e.key === 'Escape') {
        console.log('Escape key pressed');
    }
});

// ===== UTILITY: UPDATE PORTFOLIO EASILY =====

/**
 * Helper function to update project links
 * Usage: updateProjectLinks('project-id', { github: 'url', workshop: 'url', docs: 'url' })
 */
function updateProjectLinks(projectName, links) {
    // This is a template for easy updates
    console.log(`Updated links for ${projectName}:`, links);
}

/**
 * Helper function to add new projects
 * You can use this to dynamically add new project cards
 */
function addProject(data) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <div class="project-image">
            <div class="image-placeholder">
                SCREENSHOT
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${data.title}</h3>
            <p class="project-description">${data.description}</p>
            <div class="project-links">
                ${data.github ? `<a href="${data.github}" class="link-btn" target="_blank">GitHub</a>` : ''}
                ${data.workshop ? `<a href="${data.workshop}" class="link-btn" target="_blank">Workshop</a>` : ''}
                ${data.docs ? `<a href="${data.docs}" class="link-btn" target="_blank">Docs</a>` : ''}
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
    observer.observe(projectCard);
}

/**
 * Add custom CSS animation
 */
const style = document.createElement('style');
style.textContent = `
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
    
    .nav-link.active {
        color: #00bcd4;
        border-bottom-color: #00bcd4;
    }
`;
document.head.appendChild(style);

// ===== CONSOLE EASTER EGG =====
console.log('%cXeroChunks Portfolio', 'color: #00bcd4; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00bcd4;');
console.log('%cGarry\'s Mod Developer', 'color: #4dd0e1; font-size: 14px; font-weight: bold;');
console.log('%cBuilt with HTML5, CSS3, and vanilla JavaScript', 'color: #b0b0b0; font-size: 12px;');