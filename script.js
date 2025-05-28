
let projectsContainer, projectModal, modalContent, modalBackdrop, projectCardTemplate, modalContentTemplate, modalClose;

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

function createTechBadge(tech) {
    const fragment = document.createDocumentFragment();

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

    fragment.appendChild(badge);
    return fragment;
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

function renderProjects() {
    if (!projectsContainer) return;

    const fragment = document.createDocumentFragment();

    if (!projectsData || !Array.isArray(projectsData)) {
        console.error('Projects data not found or invalid');
        return;
    }

    projectsData.forEach((project, index) => {
        try {
            const projectCard = projectCardTemplate.content.cloneNode(true);
            const card = projectCard.querySelector('.project-card');
            card.setAttribute('data-project-id', project.id);
            const img = projectCard.querySelector('.project-img');
            if (img) {
                img.src = project.image;
                img.alt = project.title;
                img.loading = 'lazy';
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

            const delay = index * 0.1;
            if (card) {
                card.style.animationDelay = `${delay}s`;
                card.classList.add('animate-fade-in');
            }

            fragment.appendChild(projectCard);
        } catch (err) {
            console.error('Error rendering project:', err);
        }
    });

    requestAnimationFrame(() => {
        projectsContainer.innerHTML = '';
        projectsContainer.appendChild(fragment);
    });
}

function openProjectModal(projectId) {
    if (!modalContentTemplate || !modalContent || !projectModal) return;

    if (!projectsData || !Array.isArray(projectsData)) {
        console.error('Project data not found or invalid');
        return;
    }

    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    try {

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
                img.src = imgUrl;
                img.alt = `${project.title} screenshot`;
                img.className = 'w-full h-48 object-cover';
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

        requestAnimationFrame(() => {
            modalContent.innerHTML = '';
            modalContent.appendChild(fragment);
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
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

    let delay = 0;
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        setTimeout(() => {
            observer.observe(element);
        }, delay);
        delay += 10;
    });
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
    window.addEventListener('scroll', handleNavbarScroll);

    const seeMoreButton = document.querySelector('button span.gradient-text');
    if (seeMoreButton && seeMoreButton.textContent.includes('See More Projects')) {
        const button = seeMoreButton.closest('button');
        if (button) {
            button.addEventListener('click', () => {
                alert('More projects coming soon!');
            });
        }
    }

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
        }, { passive: false });
    });
}

let lastScrollY = window.scrollY;
let ticking = false;

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    lastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
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

function init() {
    if (!isDOMLoaded()) {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }
    if (!initDOMElements()) {
        console.error('Failed to initialize DOM elements');
        return;
    }

    setupImageErrorHandling();

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            renderProjects();
            initScrollReveal();
        });
    } else {
        setTimeout(() => {
            renderProjects();
            initScrollReveal();
        }, 0);
    }

    setupEventListeners();
    handleNavbarScroll();
}
init();