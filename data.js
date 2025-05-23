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
