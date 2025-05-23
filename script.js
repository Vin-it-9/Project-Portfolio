// Project data array with sample projects
const projectsData = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        summary: "A comprehensive dashboard for e-commerce businesses with real-time analytics and inventory management.",
        description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking. Features include customizable widgets, dark/light theme support, and responsive design. The dashboard provides actionable insights through interactive charts and graphs, allowing business owners to make data-driven decisions. The application includes user authentication with role-based access control and connects to various payment gateways for seamless financial operations.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "fullstack",
        isNew: true,
        technologies: [
            { name: "React", icon: "fab fa-react", color: "#61DAFB" },
            { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
            { name: "MongoDB", icon: "fas fa-database", color: "#4DB33D" },
            { name: "Express", icon: "fab fa-node", color: "#ffffff" },
            { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "#38B2AC" }
        ],
        links: {
            github: "https://github.com/username/ecommerce-dashboard",
            live: "https://ecommerce-dashboard-demo.netlify.app"
        },
        gallery: [
            "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        features: [
            "Real-time analytics dashboard with customizable widgets",
            "Inventory management system with low stock alerts",
            "Sales tracking with revenue forecasting",
            "Customer relationship management (CRM) integration",
            "Multi-currency support with automatic exchange rates",
            "Dark/light theme with customizable color schemes"
        ]
    },
    {
        id: 2,
        title: "Weather Forecast App",
        summary: "A modern weather application with accurate forecasts, animated conditions, and location-based updates.",
        description: "A modern weather application that provides accurate forecasts for any location worldwide. Built with React and powered by the OpenWeatherMap API, this app features a clean UI with animated weather conditions, 7-day forecasts, and location-based automatic updates. Users can save their favorite locations, receive severe weather alerts, and view detailed meteorological data including humidity, wind speed, and UV index. The app also includes a historical weather data viewer for comparing patterns over time.",
        image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "frontend",
        isNew: false,
        technologies: [
            { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
            { name: "CSS3", icon: "fab fa-css3", color: "#1572B6" },
            { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
            { name: "React", icon: "fab fa-react", color: "#61DAFB" },
            { name: "API Integration", icon: "fas fa-cloud-download-alt", color: "#FF6384" }
        ],
        links: {
            github: "https://github.com/username/weather-forecast-app",
            live: "https://weather-forecast-demo.vercel.app"
        },
        gallery: [
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1590055531695-874f720d2c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        features: [
            "Real-time weather data from OpenWeatherMap API",
            "7-day forecast with hourly breakdowns",
            "Geolocation for automatic local weather",
            "Animated weather conditions and backgrounds",
            "Saved locations with quick access",
            "Severe weather alerts and notifications"
        ]
    },
    {
        id: 3,
        title: "Portfolio Website Builder",
        summary: "A drag-and-drop portfolio builder for creatives to showcase their work with customizable templates.",
        description: "A user-friendly portfolio website builder designed specifically for creative professionals. This platform enables users to create stunning portfolio websites with a simple drag-and-drop interface, pre-designed templates, and customizable sections. The builder includes features like image optimization, SEO tools, and mobile responsiveness checks. Users can easily showcase their projects with attractive galleries, add client testimonials, and integrate contact forms, all without writing a single line of code.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "fullstack",
        isNew: true,
        technologies: [
            { name: "Vue.js", icon: "fab fa-vuejs", color: "#41B883" },
            { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
            { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
            { name: "SASS", icon: "fab fa-sass", color: "#CC6699" },
            { name: "Webpack", icon: "fas fa-cube", color: "#8DD6F9" }
        ],
        links: {
            github: "https://github.com/username/portfolio-builder",
            live: "https://portfolio-builder-demo.web.app"
        },
        gallery: [
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        features: [
            "Intuitive drag-and-drop interface for easy customization",
            "Responsive templates optimized for all device sizes",
            "Custom domain connection and hosting options",
            "Built-in SEO tools and analytics dashboard",
            "Form builder for contact and client inquiry forms",
            "Image optimization and gallery showcase features"
        ]
    },
    {
        id: 4,
        title: "Social Media Dashboard",
        summary: "An all-in-one dashboard for managing and analyzing multiple social media accounts with scheduling tools.",
        description: "A powerful social media management dashboard that allows users to monitor, analyze, and schedule content across multiple social media platforms from a single interface. The dashboard provides comprehensive analytics, engagement metrics, and competitor analysis. Users can schedule posts, respond to comments and messages, and track the performance of their social media campaigns. The tool also includes AI-powered content suggestions and optimal posting time recommendations based on audience engagement patterns.",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3267567c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "frontend",
        isNew: false,
        technologies: [
            { name: "React", icon: "fab fa-react", color: "#61DAFB" },
            { name: "Redux", icon: "fas fa-code-branch", color: "#764ABC" },
            { name: "TypeScript", icon: "fab fa-js", color: "#3178C6" },
            { name: "Material UI", icon: "fas fa-palette", color: "#0081CB" },
            { name: "Chart.js", icon: "fas fa-chart-bar", color: "#FF6384" }
        ],
        links: {
            github: "https://github.com/username/social-media-dashboard",
            live: "https://social-dashboard-demo.netlify.app"
        },
        gallery: [
            "https://images.unsplash.com/photo-1565339119519-c8eee1a592a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ],
        features: [
            "Multi-platform support (Facebook, Instagram, Twitter, LinkedIn)",
            "Content scheduling and publishing queue",
            "Analytics dashboard with customizable metrics",
            "Audience insights and engagement tracking",
            "AI-powered content recommendations",
            "Team collaboration with role-based permissions"
        ]
    }
];

// DOM Elements
const projectsContainer = document.getElementById('projects-container');
const projectModal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const projectCardTemplate = document.getElementById('project-card-template');
const modalContentTemplate = document.getElementById('modal-content-template');

// Function to create tech badge elements
function createTechBadge(tech) {
    const badge = document.createElement('span');
    badge.className = 'px-2 py-1 text-xs rounded-full glass-card border border-github-border/30 flex items-center gap-1.5';
    badge.innerHTML = `
        <i class="${tech.icon}" style="color: ${tech.color};"></i>
        <span>${tech.name}</span>
    `;
    return badge;
}

// Function to create tech icon elements for modal
function createTechIcon(tech) {
    const techEl = document.createElement('div');
    techEl.className = 'flex flex-col items-center glass-card p-3 rounded-lg transition-all duration-300 tech-pill';
    techEl.innerHTML = `
        <i class="${tech.icon}" style="color: ${tech.color}; font-size: 2rem; margin-bottom: 0.5rem;"></i>
        <span class="text-xs">${tech.name}</span>
    `;
    return techEl;
}

// Function to generate project cards
function renderProjects(filter = 'all') {
    projectsContainer.innerHTML = ''; // Clear container

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    filteredProjects.forEach((project, index) => {
        // Clone the template
        const projectCard = projectCardTemplate.content.cloneNode(true);

        // Set project data
        const img = projectCard.querySelector('.project-img');
        img.src = project.image;
        img.alt = project.title;

        projectCard.querySelector('.project-title').textContent = project.title;
        projectCard.querySelector('.project-summary').textContent = project.summary;

        // Show "New" badge if project is new
        const newBadge = projectCard.querySelector('.new-badge');
        if (project.isNew) {
            newBadge.classList.remove('hidden');
        }

        // Add tech badges
        const techContainer = projectCard.querySelector('.project-tech');
        project.technologies.slice(0, 3).forEach(tech => {
            techContainer.appendChild(createTechBadge(tech));
        });

        // Set links
        const githubLink = projectCard.querySelector('.project-github-link');
        githubLink.href = project.links.github;

        const liveLink = projectCard.querySelector('.project-live-link');
        liveLink.href = project.links.live;

        const openBtn = projectCard.querySelector('.project-open-btn');

        // Add event listeners
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openProjectModal(project.id);
        });

        // Make the whole card clickable (except links)
        const card = projectCard.querySelector('.project-card');
        card.addEventListener('click', (e) => {
            // Only open modal if click wasn't on a link
            if (!e.target.closest('a')) {
                openProjectModal(project.id);
            }
        });

        // Add animation delay based on index
        const delay = index * 0.1;
        card.style.transitionDelay = `${delay}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        // Add to container
        projectsContainer.appendChild(projectCard);

        // Trigger animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Function to open project modal
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    // Clone the template
    const content = modalContentTemplate.content.cloneNode(true);

    // Set project data
    const modalImg = content.querySelector('.modal-img');
    modalImg.src = project.image;
    modalImg.alt = project.title;

    content.querySelector('.modal-title').textContent = project.title;
    content.querySelector('.modal-description').textContent = project.description;

    // Add tech tags to the header
    const techTagsContainer = content.querySelector('.modal-tech-tags');
    techTagsContainer.innerHTML = '';

    project.technologies.slice(0, 4).forEach(tech => {
        techTagsContainer.appendChild(createTechBadge(tech));
    });

    // Add tech stack icons
    const techIcons = content.querySelector('.modal-tech-icons');
    techIcons.innerHTML = '';

    project.technologies.forEach(tech => {
        techIcons.appendChild(createTechIcon(tech));
    });

    // Set links
    const githubLink = content.querySelector('.modal-github-link');
    githubLink.href = project.links.github;

    const liveLink = content.querySelector('.modal-live-link');
    liveLink.href = project.links.live;

    // Add gallery images
    const galleryContainer = content.querySelector('.modal-images');
    galleryContainer.innerHTML = '';

    project.gallery.forEach(imgUrl => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'rounded-lg overflow-hidden border border-github-border/30 glass-card hover:scale-[1.02] transition-all duration-300';

        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = `${project.title} screenshot`;
        img.className = 'w-full h-48 object-cover';

        imgContainer.appendChild(img);
        galleryContainer.appendChild(imgContainer);
    });

    // Add features list
    const featuresContainer = content.querySelector('.modal-features');
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

    // Clear and add new content
    modalContent.innerHTML = '';
    modalContent.appendChild(content);

    // Show the modal - FIX: Correctly interact with Alpine.js
    if (typeof Alpine !== 'undefined') {
        // Wait for Alpine to be fully loaded
        setTimeout(() => {
            // Get the Alpine instance for the modal
            const modalComponent = Alpine.$data(projectModal);
            if (modalComponent) {
                // Set isOpen to true
                modalComponent.isOpen = true;
            } else {
                // Fallback to direct manipulation
                projectModal.classList.remove('hidden');
                projectModal.style.display = 'flex';
            }
        }, 10);
    } else {
        // Direct DOM manipulation fallback
        projectModal.classList.remove('hidden');
        projectModal.style.display = 'flex';
    }

    // Animate modal content elements
    setTimeout(() => {
        const fadeElements = modalContent.querySelectorAll('.fade-in');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('appear');
            }, index * 150);
        });
    }, 300);

    document.body.classList.add('overflow-hidden'); // Prevent scrolling
}

// Function to close project modal
function closeProjectModal() {
    if (typeof Alpine !== 'undefined') {
        // Wait for Alpine to be fully loaded
        setTimeout(() => {
            // Get the Alpine instance for the modal
            const modalComponent = Alpine.$data(projectModal);
            if (modalComponent) {
                // Set isOpen to false
                modalComponent.isOpen = false;
            } else {
                // Fallback to direct manipulation
                projectModal.classList.add('hidden');
                projectModal.style.display = 'none';
            }
        }, 10);
    } else {
        // Direct DOM manipulation fallback
        projectModal.classList.add('hidden');
        projectModal.style.display = 'none';
    }

    document.body.classList.remove('overflow-hidden');
}

// Event listeners for modal close
if (modalClose) {
    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeProjectModal();
    });
}

if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
        closeProjectModal();
    });
}

// Close modal when Escape key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
        closeProjectModal();
    }
});

// Stop propagation for modal content (to prevent closing when clicking inside)
if (modalContent) {
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.classList.add('appear');
                } else {
                    entry.target.classList.add('animate-fadeIn');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Also handle fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Also handle slide-in elements
    const slideElements = document.querySelectorAll('.slide-in');
    slideElements.forEach(element => {
        observer.observe(element);
    });
}

// Function to initialize filter buttons
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('[data-filter]');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-github-accent', 'text-white', 'shadow-lg');
                btn.classList.add('text-github-text', 'hover:text-github-accent');
            });

            button.classList.add('bg-github-accent', 'text-white', 'shadow-lg');
            button.classList.remove('text-github-text', 'hover:text-github-accent');

            renderProjects(filter);
        });
    });
}

// Fix for Alpine.js modal control
function setupAlpineModalHandlers() {
    // Wait for Alpine to be fully loaded
    document.addEventListener('alpine:initialized', () => {
        // Set up click handlers for all View Details buttons that will trigger the modal
        document.querySelectorAll('.project-open-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                // Get the project ID from the closest project card
                const projectCard = this.closest('.project-card');
                if (projectCard) {
                    const projectId = parseInt(projectCard.dataset.projectId);
                    if (!isNaN(projectId)) {
                        openProjectModal(projectId);
                    }
                }
            });
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize projects
    renderProjects();

    // Initialize filter buttons
    initFilterButtons();

    // Handle scroll animations
    handleScrollAnimations();

    // Set up Alpine modal handlers
    setupAlpineModalHandlers();

    // Add click handler to "See More Projects" button
    const seeMoreButton = document.querySelector('button span.gradient-text');
    if (seeMoreButton && seeMoreButton.textContent.includes('See More Projects')) {
        const button = seeMoreButton.closest('button');
        if (button) {
            button.addEventListener('click', () => {
                // You could add functionality here to load more projects or redirect to a projects page
                alert('More projects coming soon!');
            });
        }
    }

    // IMPORTANT FIX: Add a manual click handler for the modal close button
    document.getElementById('modal-close')?.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeProjectModal();
    });
});

// Make Alpine.js modal work without relying solely on x-data binding
function fixAlpineModal() {
    // Wait a bit to ensure Alpine is initialized
    setTimeout(() => {
        // Manual Alpine.js integration for the modal
        if (typeof Alpine !== 'undefined' && projectModal) {
            // Create a global access point for the modal
            window.portfolioModal = {
                open: (id) => openProjectModal(id),
                close: () => closeProjectModal()
            };
        }
    }, 500);
}

// Call this function to ensure Alpine modal works
fixAlpineModal();

// Expose functions to global scope for debugging and manual control
window.portfolioApp = {
    renderProjects,
    openProjectModal,
    closeProjectModal,
    projectsData
};