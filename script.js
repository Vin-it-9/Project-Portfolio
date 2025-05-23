
// DOM Elements
let projectsContainer, projectModal, modalContent, modalBackdrop, projectCardTemplate, modalContentTemplate, modalClose;

// Utility function to check if the document is loaded
function isDOMLoaded() {
    return document.readyState === 'complete' || document.readyState === 'interactive';
}

// Initialize DOM elements once document is ready
function initDOMElements() {
    projectsContainer = document.getElementById('projects-container');
    projectModal = document.getElementById('project-modal');
    modalContent = document.getElementById('modal-content');
    modalBackdrop = document.getElementById('modal-backdrop');
    projectCardTemplate = document.getElementById('project-card-template');
    modalContentTemplate = document.getElementById('modal-content-template');
    modalClose = document.getElementById('modal-close');

    // Make sure all elements are found
    if (!projectsContainer || !projectModal || !modalContent ||
        !modalBackdrop || !projectCardTemplate || !modalContentTemplate || !modalClose) {
        console.error('Some DOM elements could not be found');
        return false;
    }

    return true;
}

// Function to create tech badge elements
function createTechBadge(tech) {
    const badge = document.createElement('span');
    badge.className = 'px-2 py-1 text-xs rounded-full glass-card border border-github-border/30 flex items-center gap-1.5';
    badge.style.zIndex = '20';
    badge.innerHTML = `
        <i class="${tech.icon}" style="color: ${tech.color};"></i>
        <span>${tech.name}</span>
    `;
    return badge;
}

// Function to create tech icon elements for modal
function createTechIcon(tech) {
    const techEl = document.createElement('div');
    techEl.className = 'flex flex-col items-center glass-card p-3 rounded-lg transition-all duration-300';
    techEl.innerHTML = `
        <i class="${tech.icon}" style="color: ${tech.color}; font-size: 2rem; margin-bottom: 0.5rem;"></i>
        <span class="text-xs">${tech.name}</span>
    `;
    return techEl;
}

// Function to generate project cards
function renderProjects() {
    if (!projectsContainer) return;

    projectsContainer.innerHTML = ''; // Clear container

    projectsData.forEach((project, index) => {
        try {
            // Clone the template
            const projectCard = projectCardTemplate.content.cloneNode(true);
            const card = projectCard.querySelector('.project-card');

            // Set project data
            card.setAttribute('data-project-id', project.id);

            const img = projectCard.querySelector('.project-img');
            img.src = project.image;
            img.alt = project.title;

            projectCard.querySelector('.project-title').textContent = project.title;
            projectCard.querySelector('.project-summary').textContent = project.summary;

            // Show "New" badge if project is new
            const newBadge = projectCard.querySelector('.new-badge');
            if (project.isNew && newBadge) {
                newBadge.classList.remove('hidden');
            }

            // Add tech badges
            const techContainer = projectCard.querySelector('.project-tech');
            if (techContainer) {
                project.technologies.slice(0, 3).forEach(tech => {
                    techContainer.appendChild(createTechBadge(tech));
                });
            }

            // Set links
            const githubLink = projectCard.querySelector('.project-github-link');
            if (githubLink) githubLink.href = project.links.github;

            const liveLink = projectCard.querySelector('.project-live-link');
            if (liveLink) liveLink.href = project.links.live;

            // Add event listeners
            const openBtn = projectCard.querySelector('.project-open-btn');
            if (openBtn) {
                openBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openProjectModal(project.id);
                });
            }

            // Make the whole card clickable (except links)
            if (card) {
                card.addEventListener('click', (e) => {
                    // Only open modal if click wasn't on a link or button
                    if (!e.target.closest('a') && !e.target.closest('button')) {
                        openProjectModal(project.id);
                    }
                });
            }

            // Add animation delay based on index
            const delay = index * 0.1;
            if (card) {
                card.style.animationDelay = `${delay}s`;
                card.classList.add('animate-fade-in');
            }

            // Add to container
            projectsContainer.appendChild(projectCard);
        } catch (err) {
            console.error('Error rendering project:', err);
        }
    });
}

// Function to open project modal
function openProjectModal(projectId) {
    if (!modalContentTemplate || !modalContent || !projectModal) return;

    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    try {
        // Clone the template
        const content = modalContentTemplate.content.cloneNode(true);

        // Set project data
        const modalImg = content.querySelector('.modal-img');
        if (modalImg) {
            modalImg.src = project.image;
            modalImg.alt = project.title;
        }

        const modalTitle = content.querySelector('.modal-title');
        if (modalTitle) modalTitle.textContent = project.title;

        const modalDescription = content.querySelector('.modal-description');
        if (modalDescription) modalDescription.textContent = project.description;

        // Add tech tags to the header
        const techTagsContainer = content.querySelector('.modal-tech-tags');
        if (techTagsContainer) {
            techTagsContainer.innerHTML = '';

            project.technologies.slice(0, 4).forEach(tech => {
                techTagsContainer.appendChild(createTechBadge(tech));
            });
        }

        // Add tech stack icons
        const techIcons = content.querySelector('.modal-tech-icons');
        if (techIcons) {
            techIcons.innerHTML = '';

            project.technologies.forEach(tech => {
                techIcons.appendChild(createTechIcon(tech));
            });
        }

        // Set links
        const githubLink = content.querySelector('.modal-github-link');
        if (githubLink) githubLink.href = project.links.github;

        const liveLink = content.querySelector('.modal-live-link');
        if (liveLink) liveLink.href = project.links.live;

        // Add gallery images
        const galleryContainer = content.querySelector('.modal-images');
        if (galleryContainer) {
            galleryContainer.innerHTML = '';

            project.gallery.forEach(imgUrl => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'rounded-lg overflow-hidden border border-github-border/30 glass-card transition-all duration-300';

                const img = document.createElement('img');
                img.src = imgUrl;
                img.alt = `${project.title} screenshot`;
                img.className = 'w-full h-48 object-cover';

                imgContainer.appendChild(img);
                galleryContainer.appendChild(imgContainer);
            });
        }

        // Add features list
        const featuresContainer = content.querySelector('.modal-features');
        if (featuresContainer) {
            featuresContainer.innerHTML = '';

            project.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.className = 'flex items-start gap-3';
                featureItem.innerHTML = `
                    <span class="text-github-accent mt-1">
                        <i class="fas fa-check-circle"></i>
                    </span>
                    <span>${feature}</span>
                `;
                featuresContainer.appendChild(featureItem);
            });
        }

        // Clear and add new content
        modalContent.innerHTML = '';
        modalContent.appendChild(content);

        // Show the modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling

    } catch (err) {
        console.error('Error opening modal:', err);
    }
}

// Function to close project modal
function closeProjectModal() {
    if (!projectModal) return;

    projectModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Initialize scroll reveal animations for elements with .animate-fade-in class
function initScrollReveal() {
    // Choose the elements that should be observed
    const elements = document.querySelectorAll('.fade-in, .animate-fade-in');
    if (!elements.length) return;

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If element is in view
            if (entry.isIntersecting) {
                // Add class to start animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Stop observing the element
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    });

    // Start observing each element
    elements.forEach(element => {
        // Set initial styles to ensure the animation works
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        observer.observe(element);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking X button
    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            closeProjectModal();
        });
    }

    // Close modal when clicking backdrop
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            closeProjectModal();
        });
    }

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    // Stop propagation for modal content (to prevent closing when clicking inside)
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Handle navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);

    // Setup "See More Projects" button
    const seeMoreButton = document.querySelector('button span.gradient-text');
    if (seeMoreButton && seeMoreButton.textContent.includes('See More Projects')) {
        const button = seeMoreButton.closest('button');
        if (button) {
            button.addEventListener('click', () => {
                alert('More projects coming soon!');
            });
        }
    }

    // Setup smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.remove('navbar-top');
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.add('navbar-top');
        navbar.classList.remove('navbar-scrolled');
    }
}

// Check for images that fail to load and replace with placeholders
function setupImageErrorHandling() {
    document.addEventListener('error', function(e) {
        if (e.target.tagName.toLowerCase() === 'img') {

        }
    }, true);
}

// Main initialization function
function init() {
    // Wait for DOM to be fully loaded
    if (!isDOMLoaded()) {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }

    // Initialize DOM elements
    if (!initDOMElements()) {
        console.error('Failed to initialize DOM elements');
        return;
    }

    // Setup image error handling
    setupImageErrorHandling();

    // Render projects
    renderProjects();

    // Setup event listeners
    setupEventListeners();

    // Initialize scroll reveal animations
    initScrollReveal();

    // Check initial scroll position for navbar
    handleNavbarScroll();
}

// Start initialization
init();