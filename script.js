(function() {
    let projectsContainer, projectModal, modalContent, modalBackdrop, modalClose;
    let projectsData = [];
    let activeFilter = 'all';
    let isLoading = true;

    document.addEventListener('DOMContentLoaded', init);

    async function init() {
        projectsContainer = document.getElementById('projects-container');
        projectModal = document.getElementById('project-modal');
        modalContent = document.getElementById('modal-content');
        modalBackdrop = document.getElementById('modal-backdrop');
        modalClose = document.getElementById('modal-close');

        if (!projectsContainer) {
            console.error('Projects container not found');
            return;
        }
        setupEventListeners();
        renderLoadingState();
        try {
            await fetchProjectsData();
            renderProjects(activeFilter);
            initLazyLoading();
            initializeTiltEffect();
            animateCounters();
        } catch (err) {
            console.error('Error loading projects:', err);
            showError('Failed to load projects data. Please try again later.');
        }
    }

    function renderLoadingState() {
        const skeletonCount = window.innerWidth < 768 ? 2 :
            window.innerWidth < 1024 ? 4 : 6;

        let skeletonHTML = '';

        for (let i = 0; i < skeletonCount; i++) {
            const delay = i * 0.1;
            skeletonHTML += `
                <div class="animate-pulse" aria-hidden="true" style="animation-delay: ${delay}s">
                    <div class="h-64 bg-github-dark-secondary/60 rounded-xl mb-4"></div>
                    <div class="h-6 bg-github-dark-secondary/60 rounded mb-3 w-3/4"></div>
                    <div class="h-4 bg-github-dark-secondary/60 rounded mb-2"></div>
                    <div class="h-4 bg-github-dark-secondary/60 rounded mb-2 w-5/6"></div>
                    <div class="h-4 bg-github-dark-secondary/60 rounded w-4/6"></div>
                </div>
            `;
        }

        projectsContainer.innerHTML = skeletonHTML;
    }

    async function fetchProjectsData() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                const githubResponse = await fetch('https://vin-it-9.github.io/Project-Portfolio/data.json');
                if (!githubResponse.ok) throw new Error(`HTTP error ${githubResponse.status}`);
                projectsData = await githubResponse.json();
                return projectsData;
            }
            projectsData = await response.json();
            return projectsData;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        } finally {
            isLoading = false;
        }
    }

    function renderProjects(filter = 'all') {
        if (!projectsContainer) return;

        const filteredProjects = filter === 'all'
            ? projectsData
            : projectsData.filter(project => project.category === filter);

        if (filteredProjects.length === 0) {
            projectsContainer.innerHTML = `
                <div class="col-span-3 text-center py-16">
                    <i class="fas fa-filter text-3xl text-github-accent mb-4"></i>
                    <h3 class="text-xl">No projects match the selected filter</h3>
                    <button class="mt-4 px-4 py-2 bg-github-accent text-white rounded" data-filter="all">
                        Show all projects
                    </button>
                </div>
            `;
            return;
        }

        let projectsHTML = '';

        filteredProjects.forEach((project) => {
            const newBadgeHTML = project.isNew
                ? `<div class="new-badge absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] sm:text-xs font-medium rounded-full shadow-lg shadow-blue-500/20 flex items-center gap-1">
                    <span class="inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    <span>New</span>
                  </div>`
                : '';

            const techBadgesHTML = project.technologies.slice(0, 3).map(tech => `
                <span class="px-2 py-1 text-xs rounded-full glass-card border border-github-border/30 flex items-center gap-1.5">
                    <i class="${tech.icon}" style="color: ${tech.color};"></i>
                    <span>${tech.name}</span>
                </span>
            `).join('');

            projectsHTML += `
                <div class="project-card glass-card rounded-lg overflow-hidden cursor-pointer transition-all duration-500 border border-github-border/30 hover:shadow-lg hover:border-github-accent/30" 
                    data-project-id="${project.id}">
                    <div class="relative group">
                        <div class="project-img-container h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
                            <img class="project-img w-full h-full object-cover transition-all duration-700 group-hover:scale-105 lazy-image" 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E"
                                data-src="${project.image}" 
                                alt="${project.title}" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-github-dark via-github-dark/70 to-transparent opacity-90"></div>
                        <div class="absolute inset-0 opacity-20 bg-pattern pointer-events-none"></div>
                        ${newBadgeHTML}
                        <div class="absolute bottom-0 left-0 p-4 sm:p-5 w-full">
                            <h2 class="project-title text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white group-hover:text-blue-300 transition-all duration-300">
                                ${project.title}
                            </h2>
                            <div class="project-tech flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                                ${techBadgesHTML}
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-4 sm:p-5 bg-gradient-to-b from-github-dark-secondary/50 to-github-dark-secondary/70">
                        <p class="project-summary text-github-text/80 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">${project.summary}</p>
                        <div class="flex justify-between items-center">
                            <div class="flex gap-3 sm:gap-4">
                                <a href="${project.links.github}" 
                                    class="project-github-link h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-full bg-github-dark-secondary/50 border border-github-border/20 hover:border-github-accent/50 hover:bg-github-dark transition-all duration-300"
                                    target="_blank" 
                                    title="View Source Code">
                                    <i class="fab fa-github text-github-text hover:text-github-accent transition-colors duration-300"></i>
                                </a>
                                ${project.links.live ? `
                                <a href="${project.links.live}" 
                                    class="project-live-link h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-full bg-github-dark-secondary/50 border border-github-border/20 hover:border-blue-500/50 hover:bg-github-dark transition-all duration-300"
                                    target="_blank" 
                                    title="View Live Demo">
                                    <i class="fas fa-external-link-alt text-github-text hover:text-blue-400 transition-colors duration-300"></i>
                                </a>` : ''}
                            </div>
                            <button class="project-open-btn glass-button text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-600 hover:to-purple-600 text-white group">
                                <span>View Details</span>
                                <i class="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1 text-[10px] sm:text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        projectsContainer.style.opacity = "0";
        projectsContainer.innerHTML = projectsHTML;
        setTimeout(() => {
            projectsContainer.style.transition = "opacity 0.5s ease";
            projectsContainer.style.opacity = "1";
        }, 100);

        setupProjectClickHandlers();
    }

    const modalCache = new Map();

    function setupProjectClickHandlers() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a') && !e.target.closest('button')) {
                    const projectId = parseInt(card.dataset.projectId);
                    if (!isNaN(projectId)) openProjectModal(projectId);
                }
            });
        });

        document.querySelectorAll('.project-open-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const projectId = parseInt(e.target.closest('.project-card').dataset.projectId);
                if (!isNaN(projectId)) openProjectModal(projectId);
            });
        });
    }

    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        if (modalCache.has(projectId)) {
            modalContent.innerHTML = modalCache.get(projectId);
        } else {
            const techBadgesHTML = project.technologies.slice(0, 4).map(tech => `
                <span class="px-2 py-1 text-xs rounded-full glass-card border border-github-border/30 flex items-center gap-1.5">
                    <i class="${tech.icon}" style="color: ${tech.color};"></i>
                    <span>${tech.name}</span>
                </span>
            `).join('');

            const techIconsHTML = project.technologies.map(tech => `
                <div class="flex flex-col items-center glass-card p-3 rounded-lg transition-all duration-300">
                    <i class="${tech.icon}" style="color: ${tech.color}; font-size: 2rem; margin-bottom: 0.5rem;"></i>
                    <span class="text-xs">${tech.name}</span>
                </div>
            `).join('');

            const featuresHTML = project.features.map(feature => `
                <li class="flex items-start gap-3">
                    <span class="text-github-accent mt-1">
                        <i class="fas fa-check-circle"></i>
                    </span>
                    <span>${feature}</span>
                </li>
            `).join('');

            const galleryHTML = project.gallery && project.gallery.length > 0 ?
                project.gallery.map(imgUrl => `
                    <div class="rounded-lg overflow-hidden border border-github-border/30 glass-card transition-all duration-300">
                        <img class="lazy-image w-full h-48 object-cover" 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E" 
                            data-src="${imgUrl}" 
                            alt="${project.title} screenshot" 
                            loading="lazy">
                    </div>
                `).join('') : '';

            const modalHTML = `
                <div class="modal-header">
                    <div class="relative modal-img-container rounded-lg overflow-hidden mb-8 shadow-lg">
                        <img class="modal-img w-full h-80 object-cover transition-all duration-700" 
                            src="${project.image}" 
                            alt="${project.title}">
                        <div class="absolute inset-0 bg-gradient-to-t from-github-dark via-github-dark/80 to-transparent"></div>
                        <div class="absolute inset-0 opacity-20 bg-pattern pointer-events-none"></div>
                        <div class="absolute bottom-0 left-0 p-8 w-full">
                            <h2 class="modal-title text-3xl md:text-4xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-300">
                                ${project.title}
                            </h2>
                            <div class="modal-tech-tags flex flex-wrap gap-2 mb-2">
                                ${techBadgesHTML}
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-body space-y-12">
                        <div class="animate-fade-in">
                            <h3 class="text-xl font-semibold mb-5 flex items-center gap-3 text-github-text">
                                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <i class="fas fa-info-circle text-blue-400"></i>
                                </div>
                                About This Project
                            </h3>
                            <div class="modal-description text-github-text/90 leading-relaxed glass-card p-6 rounded-lg border border-github-border/30 shadow-inner">
                                ${project.description}
                            </div>
                        </div>

                        <div class="animate-fade-in" style="animation-delay: 0.1s">
                            <h3 class="text-xl font-semibold mb-5 flex items-center gap-3 text-github-text">
                                <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                    <i class="fas fa-tools text-purple-400"></i>
                                </div>
                                Technology Stack
                            </h3>
                            <div class="modal-tech-icons grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                                ${techIconsHTML}
                            </div>
                        </div>

                        <div class="animate-fade-in" style="animation-delay: 0.2s">
                            <h3 class="text-xl font-semibold mb-5 flex items-center gap-3 text-github-text">
                                <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                                    <i class="fas fa-lightbulb text-green-400"></i>
                                </div>
                                Key Features
                            </h3>
                            <ul class="modal-features space-y-4 glass-card p-6 rounded-lg border border-github-border/30">
                                ${featuresHTML}
                            </ul>
                        </div>

                        ${project.gallery && project.gallery.length > 0 ? `
                        <div class="animate-fade-in" style="animation-delay: 0.3s">
                            <h3 class="text-xl font-semibold mb-5 flex items-center gap-3 text-github-text">
                                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <i class="fas fa-images text-blue-400"></i>
                                </div>
                                Project Gallery
                            </h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 modal-images">
                                ${galleryHTML}
                            </div>
                        </div>
                        ` : ''}

                        <div class="animate-fade-in" style="animation-delay: 0.4s">
                            <h3 class="text-xl font-semibold mb-5 flex items-center gap-3 text-github-text">
                                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <i class="fas fa-link text-blue-400"></i>
                                </div>
                                Project Links
                            </h3>
                            <div class="modal-links flex flex-wrap gap-4">
                                <a href="${project.links.github}" class="modal-github-link glass-card px-6 py-4 rounded-lg flex items-center gap-3 text-github-text hover:text-github-accent transition-all duration-300 group">
                                    <div class="h-10 w-10 rounded-full bg-github-dark-secondary/60 flex items-center justify-center">
                                        <i class="fab fa-github text-xl group-hover:text-github-accent transition-all duration-300"></i>
                                    </div>
                                    <div>
                                        <span class="font-medium block">Source Code</span>
                                        <span class="text-xs text-github-text/60">View on GitHub</span>
                                    </div>
                                </a>
                                ${project.links.live ? `
                                <a href="${project.links.live}" class="modal-live-link bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-4 rounded-lg flex items-center gap-3 text-white group">
                                    <div class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <i class="fas fa-external-link-alt text-xl"></i>
                                    </div>
                                    <div>
                                        <span class="font-medium block">Live Demo</span>
                                        <span class="text-xs text-white/80">Use the application</span>
                                    </div>
                                </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;

            modalCache.set(projectId, modalHTML);
            modalContent.innerHTML = modalHTML;
        }

        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        initLazyLoading();
    }

    function closeProjectModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('.lazy-image');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;

                        if (src) {
                            img.src = src;
                            img.classList.remove('lazy-image');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px 0px'
            });

            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            lazyImages.forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        }
    }

    function setupEventListeners() {
        modalClose?.addEventListener('click', (e) => {
            e.preventDefault();
            closeProjectModal();
        });

        modalBackdrop?.addEventListener('click', closeProjectModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal?.classList.contains('active')) {
                closeProjectModal();
            }
        });
        document.querySelectorAll('[data-filter]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = button.getAttribute('data-filter') || 'all';
                activeFilter = filter;
                document.querySelectorAll('[data-filter]').forEach(btn => {
                    btn.classList.remove('bg-github-accent', 'text-white', 'shadow-lg');
                    btn.classList.add('text-github-text', 'hover:text-github-accent');
                });
                button.classList.add('bg-github-accent', 'text-white', 'shadow-lg');
                button.classList.remove('text-github-text', 'hover:text-github-accent');

                renderProjects(filter);
            });
        });

        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', debounce(() => {
                if (window.scrollY > 50) {
                    navbar.classList.remove('navbar-top');
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.add('navbar-top');
                    navbar.classList.remove('navbar-scrolled');
                }
            }, 10));
        }
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        const viewProjectsBtn = document.querySelector('button[onclick*="project"]');
        if (viewProjectsBtn) {
            viewProjectsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('project').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
        window.addEventListener('resize', debounce(() => {
            if (!isLoading) {
                renderProjects(activeFilter);
            }
        }, 250));
    }

    function showError(message) {
        if (projectsContainer) {
            projectsContainer.innerHTML = `
                <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16">
                    <i class="fas fa-exclamation-triangle text-3xl text-yellow-500 mb-4"></i>
                    <h3 class="text-xl mb-4">${message}</h3>
                    <button id="retry-btn" class="px-4 py-2 bg-github-accent text-white rounded">Retry</button>
                </div>
            `;

            document.getElementById('retry-btn')?.addEventListener('click', init);
        }
    }

    function debounce(func, wait = 10) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 50;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / speed;
            let currentCount = 0;

            const updateCounter = () => {
                currentCount += increment;
                if (currentCount < target) {
                    counter.innerText = Math.floor(currentCount);
                    setTimeout(updateCounter, 25);
                } else {
                    counter.innerText = target;
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(updateCounter, 500);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    }

    function initializeTiltEffect() {
        const tiltCard = document.getElementById('tilt-card');
        if (!tiltCard) return;
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(tiltCard, {
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
                gyroscope: true,
                scale: 1.05
            });
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            if (isTouchDevice) {
                tiltCard.classList.add('is-touch-device');

                tiltCard.addEventListener('touchstart', () => {
                    tiltCard.classList.add('is-touch-active');
                });

                tiltCard.addEventListener('touchend', () => {
                    setTimeout(() => {
                        tiltCard.classList.remove('is-touch-active');
                    }, 200);
                });
            }
        }
    }

    const ensureModalStyles = () => {
        if (!document.getElementById('modal-styles')) {
            const modalStyle = document.createElement('style');
            modalStyle.id = 'modal-styles';
            modalStyle.textContent = `
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 50;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    visibility: hidden;
                    opacity: 0;
                    transition: visibility 0s linear 0.3s, opacity 0.3s ease;
                }

                .modal.active {
                    visibility: visible;
                    opacity: 1;
                    transition-delay: 0s;
                }

                .modal-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }

                .modal-container {
                    position: relative;
                    width: 100%;
                    max-width: 64rem;
                    max-height: 90vh;
                    background: rgba(22, 27, 34, 0.75);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(88, 166, 255, 0.2);
                    box-shadow: 
                        0 10px 25px rgba(0, 0, 0, 0.3),
                        0 0 40px rgba(88, 166, 255, 0.15);
                    transform: scale(0.95);
                    transition: transform 0.3s ease;
                    overflow: hidden;
                }

                .modal.active .modal-container {
                    transform: scale(1);
                }

                .animate-fade-in {
                    animation: fadeIn 0.5s ease forwards;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .bg-pattern {
                    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                
                /* Fix for scroll behavior on touch devices */
                @media (max-width: 768px) {
                    .modal-content {
                        -webkit-overflow-scrolling: touch;
                    }
                    
                    .smoothscroll {
                        scroll-behavior: smooth;
                    }
                }
            `;
            document.head.appendChild(modalStyle);
        }
    };
    ensureModalStyles();
})();