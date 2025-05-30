let projectsContainer, projectModal, modalContent, modalBackdrop, projectCardTemplate, modalContentTemplate, modalClose;
let projectsData = []; // Will be populated from the JSON file

function isDOMLoaded() {
    return document.readyState === 'complete' || document.readyState === 'interactive';
}

function initDOMElements() {
    projectsContainer = document.getElementById('projects-container');
    projectModal = document.getElementById('project-modal');
    modalContent = document.getElementById('modal-content');
    modalBackdrop = document.getElementById('modal-backdrop');
    projectCardTemplate = document.getElementById('project-card-template');
    modalContentTemplate = document.getElementById('modal-content-template');
    modalClose = document.getElementById('modal-close');

    if (!projectsContainer || !projectModal || !modalContent ||
        !modalBackdrop || !projectCardTemplate || !modalContentTemplate || !modalClose) {
        console.error('Some DOM elements could not be found');
        return false;
    }

    return true;
}

// Fetch projects data from JSON file
async function fetchProjectsData() {
    try {
        const response = await fetch('https://vin-it-9.github.io/Project-Portfolio/data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        projectsData = await response.json();
        return true;
    } catch (error) {
        console.error('Error fetching projects data:', error);
        // Fallback to empty array if fetch fails
        projectsData = [];
        return false;
    }
}

function createTechBadge(tech) {
    const badge = document.createElement('span');
    badge.className = 'px-2 py-1 text-xs rounded-full glass-card border border-github-border/30 flex items-center gap-1.5';
    badge.style.zIndex = '20';

    if (!tech || typeof tech !== 'object') {
        return badge;
    }

    badge.innerHTML = `
        <i class="${tech.icon}" style="color: ${tech.color};"></i>
        <span>${tech.name}</span>
    `;

    return badge;
}

function createTechIcon(tech) {
    const techEl = document.createElement('div');
    techEl.className = 'flex flex-col items-center glass-card p-3 rounded-lg transition-all duration-300';

    if (!tech || typeof tech !== 'object') {
        return techEl;
    }

    techEl.innerHTML = `
        <i class="${tech.icon}" style="color: ${tech.color}; font-size: 2rem; margin-bottom: 0.5rem;"></i>
        <span class="text-xs">${tech.name}</span>
    `;
    return techEl;
}

// Improved renderProjects function with better performance
function renderProjects(filter = 'all') {
    if (!projectsContainer) return;

    // Create a document fragment to batch DOM changes
    const fragment = document.createDocumentFragment();

    // Show loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'text-center py-12';
    loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin fa-2x text-github-accent"></i><p class="mt-4">Loading projects...</p>';
    projectsContainer.innerHTML = '';
    projectsContainer.appendChild(loadingIndicator);

    // Filter projects if needed
    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    // Process in smaller batches to avoid UI blocking
    const batchSize = 4; // Process 4 projects at a time
    let currentIndex = 0;

    function processBatch() {
        const endIndex = Math.min(currentIndex + batchSize, filteredProjects.length);
        const batch = filteredProjects.slice(currentIndex, endIndex);

        batch.forEach((project, index) => {
            try {
                const projectCard = projectCardTemplate.content.cloneNode(true);
                const card = projectCard.querySelector('.project-card');
                card.setAttribute('data-project-id', project.id);

                const img = projectCard.querySelector('.project-img');
                if (img) {
                    // Use data-src for lazy loading
                    img.setAttribute('data-src', project.image);
                    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23cccccc"%3E%3C/rect%3E%3C/svg%3E'; // Tiny placeholder
                    img.alt = project.title;
                    img.classList.add('lazy-image');
                    img.onerror = function() {
                        this.onerror = null;
                        this.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
                    };
                }

                projectCard.querySelector('.project-title').textContent = project.title;
                projectCard.querySelector('.project-summary').textContent = project.summary;

                const newBadge = projectCard.querySelector('.new-badge');
                if (project.isNew && newBadge) {
                    newBadge.classList.remove('hidden');
                }

                const techContainer = projectCard.querySelector('.project-tech');
                if (techContainer) {
                    techContainer.innerHTML = '';
                    project.technologies.slice(0, 3).forEach(tech => {
                        techContainer.appendChild(createTechBadge(tech));
                    });
                }

                const githubLink = projectCard.querySelector('.project-github-link');
                if (githubLink) githubLink.href = project.links.github;

                const liveLink = projectCard.querySelector('.project-live-link');
                if (liveLink) liveLink.href = project.links.live;

                const openBtn = projectCard.querySelector('.project-open-btn');
                if (openBtn) {
                    openBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openProjectModal(project.id);
                    });
                }

                if (card) {
                    card.addEventListener('click', (e) => {
                        if (!e.target.closest('a') && !e.target.closest('button')) {
                            openProjectModal(project.id);
                        }
                    });
                }

                const delay = (currentIndex + index) * 0.1;
                if (card) {
                    card.style.animationDelay = `${delay}s`;
                    card.classList.add('animate-fade-in');
                }

                fragment.appendChild(projectCard);
            } catch (err) {
                console.error('Error rendering project:', err);
            }
        });

        currentIndex = endIndex;

        if (currentIndex < filteredProjects.length) {
            // Schedule next batch
            setTimeout(() => {
                requestAnimationFrame(processBatch);
            }, 10); // Small delay to allow UI to breathe
        } else {
            // All batches processed, update the DOM once
            projectsContainer.innerHTML = '';
            projectsContainer.appendChild(fragment);

            // Initialize lazy loading after all items are added
            initLazyLoading();
        }
    }

    // Start processing in batches
    requestAnimationFrame(processBatch);
}

// Lazy loading implementation
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-image');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-image');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Improved modal handling with caching
const modalCache = new Map(); // Cache modal content for better performance

function openProjectModal(projectId) {
    if (!modalContentTemplate || !modalContent || !projectModal) return;

    if (!projectsData || !Array.isArray(projectsData)) {
        console.error('Project data not found or invalid');
        return;
    }

    try {
        // Check if this modal content is already in the cache
        if (modalCache.has(projectId)) {
            modalContent.innerHTML = '';
            modalContent.appendChild(modalCache.get(projectId).cloneNode(true));
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            return;
        }

        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        const fragment = document.createDocumentFragment();
        const content = modalContentTemplate.content.cloneNode(true);

        const modalImg = content.querySelector('.modal-img');
        if (modalImg) {
            modalImg.src = project.image;
            modalImg.alt = project.title;
            modalImg.onerror = function() {
                this.onerror = null;
                this.src = 'https://via.placeholder.com/400x250?text=Project+Image';
            };
        }

        const modalTitle = content.querySelector('.modal-title');
        if (modalTitle) modalTitle.textContent = project.title;

        const modalDescription = content.querySelector('.modal-description');
        if (modalDescription) modalDescription.textContent = project.description;

        const techTagsContainer = content.querySelector('.modal-tech-tags');
        if (techTagsContainer) {
            techTagsContainer.innerHTML = '';

            project.technologies.slice(0, 4).forEach(tech => {
                techTagsContainer.appendChild(createTechBadge(tech));
            });
        }

        const techIcons = content.querySelector('.modal-tech-icons');
        if (techIcons) {
            techIcons.innerHTML = '';

            project.technologies.forEach(tech => {
                techIcons.appendChild(createTechIcon(tech));
            });
        }

        const githubLink = content.querySelector('.modal-github-link');
        if (githubLink) githubLink.href = project.links.github;

        const liveLink = content.querySelector('.modal-live-link');
        if (liveLink) liveLink.href = project.links.live;

        const galleryContainer = content.querySelector('.modal-images');
        if (galleryContainer) {
            galleryContainer.innerHTML = '';

            const galleryFragment = document.createDocumentFragment();

            project.gallery.forEach(imgUrl => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'rounded-lg overflow-hidden border border-github-border/30 glass-card transition-all duration-300';

                const img = document.createElement('img');
                img.setAttribute('data-src', imgUrl);
                img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23cccccc"%3E%3C/rect%3E%3C/svg%3E'; // Tiny placeholder
                img.alt = `${project.title} screenshot`;
                img.className = 'w-full h-48 object-cover lazy-image';
                img.loading = 'lazy';

                img.onerror = function() {
                    this.onerror = null;
                    this.src = 'https://via.placeholder.com/400x250?text=Project+Screenshot';
                };

                imgContainer.appendChild(img);
                galleryFragment.appendChild(imgContainer);
            });

            galleryContainer.appendChild(galleryFragment);
        }

        const featuresContainer = content.querySelector('.modal-features');
        if (featuresContainer) {
            featuresContainer.innerHTML = '';

            const featuresFragment = document.createDocumentFragment();

            project.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.className = 'flex items-start gap-3';
                featureItem.innerHTML = `
                    <span class="text-github-accent mt-1">
                        <i class="fas fa-check-circle"></i>
                    </span>
                    <span>${feature}</span>
                `;
                featuresFragment.appendChild(featureItem);
            });

            featuresContainer.appendChild(featuresFragment);
        }

        fragment.appendChild(content);

        // Clone the content before adding to the DOM to store in cache
        const clonedContent = fragment.cloneNode(true);
        modalCache.set(projectId, clonedContent);

        requestAnimationFrame(() => {
            modalContent.innerHTML = '';
            modalContent.appendChild(fragment);
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Initialize lazy loading for gallery images
            initLazyLoading();
        });

    } catch (err) {
        console.error('Error opening modal:', err);
    }
}

function closeProjectModal() {
    if (!projectModal) return;

    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.fade-in, .animate-fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(element);
    });
}

// Debounce function to improve scroll performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function setupEventListeners() {
    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            closeProjectModal();
        });
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            closeProjectModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Use debounced scroll handler for better performance
    window.addEventListener('scroll', debounce(handleNavbarScroll, 10));

    const seeMoreButton = document.querySelector('button span.gradient-text');
    if (seeMoreButton && seeMoreButton.textContent.includes('See More Projects')) {
        const button = seeMoreButton.closest('button');
        if (button) {
            button.addEventListener('click', () => {
                alert('More projects coming soon!');
            });
        }
    }

    // Improved smooth scrolling
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

    // Filter buttons
    document.querySelectorAll('[data-filter]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = button.getAttribute('data-filter') || 'all';

            // Update active button styling
            document.querySelectorAll('[data-filter]').forEach(btn => {
                btn.classList.remove('bg-github-accent', 'text-white', 'shadow-lg');
                btn.classList.add('text-github-text', 'hover:text-github-accent');
            });

            button.classList.add('bg-github-accent', 'text-white', 'shadow-lg');
            button.classList.remove('text-github-text', 'hover:text-github-accent');

            renderProjects(filter);
        });
    });
}

let lastScrollY = window.scrollY;
let ticking = false;

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    lastScrollY = window.scrollY;

    if (!ticking) {
        requestAnimationFrame(() => {
            if (lastScrollY > 50) {
                navbar.classList.remove('navbar-top');
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.add('navbar-top');
                navbar.classList.remove('navbar-scrolled');
            }
            ticking = false;
        });

        ticking = true;
    }
}

function setupImageErrorHandling() {
    document.addEventListener('error', function(e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            e.target.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
            e.target.onerror = null; // Prevent infinite loop
        }
    }, true);
}

// Main initialization function
async function init() {
    if (!isDOMLoaded()) {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }

    if (!initDOMElements()) {
        console.error('Failed to initialize DOM elements');
        return;
    }

    setupImageErrorHandling();

    // First show loading state
    if (projectsContainer) {
        projectsContainer.innerHTML = '<div class="text-center py-20"><i class="fas fa-spinner fa-spin fa-3x text-github-accent"></i><p class="mt-4 text-xl">Loading projects...</p></div>';
    }

    // Fetch data before rendering
    const dataFetched = await fetchProjectsData();

    if (dataFetched) {
        // Initialize everything once data is available
        renderProjects();
        initScrollReveal();
        setupEventListeners();
        handleNavbarScroll();
    } else {
        // Show error message if data fetch failed
        if (projectsContainer) {
            projectsContainer.innerHTML = `
                <div class="text-center py-20">
                    <i class="fas fa-exclamation-triangle text-3xl text-yellow-500 mb-4"></i>
                    <p class="text-xl mb-4">Unable to load projects</p>
                    <button id="retry-btn" class="px-4 py-2 bg-github-accent text-white rounded">Retry</button>
                </div>
            `;
            document.getElementById('retry-btn')?.addEventListener('click', init);
        }
    }
}

init();