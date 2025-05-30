// const projectsData = [
//     {
//         id: 1,
//         title: "E-Commerce Dashboard",
//         summary: "A comprehensive dashboard for e-commerce businesses with real-time analytics and inventory management.",
//         description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking. Features include customizable widgets, dark/light theme support, and responsive design. The dashboard provides actionable insights through interactive charts and graphs, allowing business owners to make data-driven decisions. The application includes user authentication with role-based access control and connects to various payment gateways for seamless financial operations.",
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "fullstack",
//         isNew: false,
//         technologies: [
//             { name: "React", icon: "fab fa-react", color: "#61DAFB" },
//             { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
//             { name: "MongoDB", icon: "fas fa-database", color: "#4DB33D" },
//             { name: "Express", icon: "fab fa-node", color: "#ffffff" },
//             { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "#38B2AC" }
//         ],
//         links: {
//             github: "https://github.com/username/ecommerce-dashboard",
//             live: "https://ecommerce-dashboard-demo.netlify.app"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Real-time analytics dashboard with customizable widgets",
//             "Inventory management system with low stock alerts",
//             "Sales tracking with revenue forecasting",
//             "Customer relationship management (CRM) integration",
//             "Multi-currency support with automatic exchange rates",
//             "Dark/light theme with customizable color schemes"
//         ]
//     },
//     {
//         id: 2,
//         title: "Weather Forecast App",
//         summary: "A modern weather application with accurate forecasts, animated conditions, and location-based updates.",
//         description: "A modern weather application that provides accurate forecasts for any location worldwide. Built with React and powered by the OpenWeatherMap API, this app features a clean UI with animated weather conditions, 7-day forecasts, and location-based automatic updates. Users can save their favorite locations, receive severe weather alerts, and view detailed meteorological data including humidity, wind speed, and UV index. The app also includes a historical weather data viewer for comparing patterns over time.",
//         image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "frontend",
//         isNew: false,
//         technologies: [
//             { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
//             { name: "CSS3", icon: "fab fa-css3", color: "#1572B6" },
//             { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
//             { name: "React", icon: "fab fa-react", color: "#61DAFB" },
//             { name: "API Integration", icon: "fas fa-cloud-download-alt", color: "#FF6384" }
//         ],
//         links: {
//             github: "https://github.com/username/weather-forecast-app",
//             live: "https://weather-forecast-demo.vercel.app"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1590055531695-874f720d2c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Real-time weather data from OpenWeatherMap API",
//             "7-day forecast with hourly breakdowns",
//             "Geolocation for automatic local weather",
//             "Animated weather conditions and backgrounds",
//             "Saved locations with quick access",
//             "Severe weather alerts and notifications"
//         ]
//     },
//     {
//         id: 3,
//         title: "Spring Boot Microservices Platform",
//         summary: "Enterprise-grade microservices architecture built with Spring Boot for scalable business applications.",
//         description: "A robust microservices platform designed for enterprise applications using Spring Boot. This platform implements a complete microservices architecture with service discovery, API gateway, circuit breakers, and centralized configuration. The system features event-driven communication using Kafka, containerized deployment with Docker and Kubernetes, and comprehensive monitoring with Prometheus and Grafana. Authentication is handled through OAuth2 and JWT, with role-based access control for fine-grained security.",
//         image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "backend",
//         isNew: true,
//         technologies: [
//             { name: "Java", icon: "fab fa-java", color: "#007396" },
//             { name: "Spring Boot", icon: "fas fa-leaf", color: "#6DB33F" },
//             { name: "Kafka", icon: "fas fa-stream", color: "#231F20" },
//             { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
//             { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "#326CE5" }
//         ],
//         links: {
//             github: "https://github.com/username/spring-microservices",
//             live: "https://spring-microservices-demo.azurewebsites.net"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Microservices architecture with service discovery and registry",
//             "API Gateway with load balancing and circuit breakers",
//             "Event-driven communication using Apache Kafka",
//             "Containerized deployment with Docker and Kubernetes",
//             "OAuth2/JWT authentication and fine-grained access control",
//             "Centralized logging and monitoring dashboard"
//         ]
//     },
//     {
//         id: 4,
//         title: "Django E-Learning Platform",
//         summary: "A full-featured e-learning platform with video courses, quizzes, and a certificate system built with Django.",
//         description: "A comprehensive e-learning platform built with Django that enables instructors to create and sell online courses. The platform includes video streaming capabilities, interactive quizzes, discussion forums, and a certificate generation system. Students can track their progress through courses, bookmark important sections, and receive personalized course recommendations. The platform also features a robust payment system with subscription options and one-time purchases.",
//         image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "fullstack",
//         isNew: false,
//         technologies: [
//             { name: "Python", icon: "fab fa-python", color: "#3776AB" },
//             { name: "Django", icon: "fas fa-cubes", color: "#092E20" },
//             { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
//             { name: "Redis", icon: "fas fa-database", color: "#DC382D" },
//             { name: "AWS S3", icon: "fab fa-aws", color: "#FF9900" }
//         ],
//         links: {
//             github: "https://github.com/username/django-elearning",
//             live: "https://django-elearning-platform.herokuapp.com"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Course creation and management system for instructors",
//             "Video streaming with adaptive bitrate capabilities",
//             "Interactive quizzes and automated grading",
//             "Discussion forums and Q&A sections for each lesson",
//             "Certificate generation upon course completion",
//             "Subscription-based and one-time payment options"
//         ]
//     },
//     {
//         id: 5,
//         title: "React Native Fitness Tracker",
//         summary: "Cross-platform mobile fitness application built with React Native for workout tracking and health monitoring.",
//         description: "A comprehensive fitness tracking mobile application built with React Native for both iOS and Android. The app offers workout planning, progress tracking, and health monitoring capabilities. Users can choose from predefined workout routines or create custom ones, track their performance with detailed statistics and visualizations, and set personal fitness goals. The app integrates with health platforms like Google Fit and Apple HealthKit, and includes social features for connecting with friends and sharing achievements.",
//         image: "https://images.unsplash.com/photo-1510016983860-53f362d37088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "mobile",
//         isNew: true,
//         technologies: [
//             { name: "React Native", icon: "fab fa-react", color: "#61DAFB" },
//             { name: "Redux", icon: "fas fa-code-branch", color: "#764ABC" },
//             { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
//             { name: "Jest", icon: "fas fa-vial", color: "#C21325" },
//             { name: "Expo", icon: "fas fa-mobile-alt", color: "#000020" }
//         ],
//         links: {
//             github: "https://github.com/username/fitness-tracker-app",
//             live: "https://expo.io/@username/fitness-tracker"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1552508744-1696d4464960?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Customizable workout plans and routines",
//             "Real-time workout tracking with timers and rep counters",
//             "Integration with health platforms (Google Fit, Apple HealthKit)",
//             "Progress visualization with charts and statistics",
//             "Social sharing and friend competitions",
//             "Offline mode with data synchronization"
//         ]
//     },
//     {
//         id: 6,
//         title: "Angular Admin Dashboard",
//         summary: "Comprehensive admin panel built with Angular for managing business operations and analytics.",
//         description: "A feature-rich admin dashboard built with Angular for enterprise business management. This dashboard provides a comprehensive suite of tools for data visualization, user management, content moderation, and business analytics. It features role-based access control, real-time data updates with WebSockets, and a customizable widget system. The dashboard is fully responsive, adheres to accessibility standards, and supports internationalization for global businesses.",
//         image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "frontend",
//         isNew: false,
//         technologies: [
//             { name: "Angular", icon: "fab fa-angular", color: "#DD0031" },
//             { name: "TypeScript", icon: "fab fa-js", color: "#3178C6" },
//             { name: "NgRx", icon: "fas fa-code-branch", color: "#BA2BD2" },
//             { name: "Chart.js", icon: "fas fa-chart-bar", color: "#FF6384" },
//             { name: "Material Design", icon: "fas fa-palette", color: "#0081CB" }
//         ],
//         links: {
//             github: "https://github.com/username/angular-admin-dashboard",
//             live: "https://angular-admin-dashboard.vercel.app"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Comprehensive data visualization and analytics dashboards",
//             "User management system with role-based permissions",
//             "Content management and moderation tools",
//             "Real-time data updates with WebSocket integration",
//             "Customizable widget system and layout options",
//             "Internationalization support for multiple languages"
//         ]
//     },
//     {
//         id: 7,
//         title: "Hibernate ORM E-Commerce Backend",
//         summary: "Robust Java backend for e-commerce platforms using Hibernate ORM with advanced data modeling.",
//         description: "A highly optimized e-commerce backend built with Java and Hibernate ORM. This system handles product catalogs, inventory management, order processing, and customer data with an emphasis on performance and scalability. It implements advanced data modeling techniques with optimal entity relationships, caching strategies, and database optimizations. The backend exposes a comprehensive RESTful API for frontend integration and includes detailed documentation with Swagger/OpenAPI.",
//         image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "backend",
//         isNew: false,
//         technologies: [
//             { name: "Java", icon: "fab fa-java", color: "#007396" },
//             { name: "Hibernate", icon: "fas fa-database", color: "#59666C" },
//             { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
//             { name: "JUnit", icon: "fas fa-vial", color: "#25A162" },
//             { name: "Swagger", icon: "fas fa-file-code", color: "#85EA2D" }
//         ],
//         links: {
//             github: "https://github.com/username/hibernate-ecommerce",
//             live: "https://hibernate-ecommerce-api.herokuapp.com/swagger-ui.html"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Advanced entity relationship modeling with Hibernate ORM",
//             "Optimized database access with caching strategies",
//             "Comprehensive RESTful API with documentation",
//             "Transaction management and distributed locking",
//             "Batch processing for import/export operations",
//             "Extensive unit and integration testing suite"
//         ]
//     },
//     {
//         id: 8,
//         title: "Flutter Delivery App",
//         summary: "Cross-platform mobile application for food delivery services built with Flutter and Firebase.",
//         description: "A feature-rich food delivery application built with Flutter that works seamlessly on both iOS and Android platforms. The app allows users to browse restaurants, view menus, place orders, and track their delivery in real-time. It includes features such as restaurant search filters, favorite restaurants, order history, and in-app payments. The app utilizes Firebase for backend services, including authentication, real-time database, and push notifications for order status updates.",
//         image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "mobile",
//         isNew: true,
//         technologies: [
//             { name: "Flutter", icon: "fas fa-mobile-alt", color: "#02569B" },
//             { name: "Dart", icon: "fas fa-code", color: "#0175C2" },
//             { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
//             { name: "Google Maps", icon: "fas fa-map-marked-alt", color: "#4285F4" },
//             { name: "Stripe", icon: "fab fa-stripe", color: "#008CDD" }
//         ],
//         links: {
//             github: "https://github.com/username/flutter-delivery-app",
//             live: "https://play.google.com/store/apps/details?id=com.username.delivery"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1530989282183-11682c7897a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Restaurant browsing with advanced filtering options",
//             "Real-time order tracking with map integration",
//             "In-app payment processing with multiple options",
//             "Push notifications for order status updates",
//             "User reviews and ratings system",
//             "Offline mode with cached restaurant data"
//         ]
//     },
//     {
//         id: 9,
//         title: "Jakarta EE Enterprise Portal",
//         summary: "Enterprise-level web portal built with Jakarta EE for large organizations and institutions.",
//         description: "A comprehensive enterprise portal solution built with Jakarta EE (formerly Java EE) that serves as a central hub for large organizations. The portal provides integrated access to various enterprise applications, internal communication tools, document management, and workflow automation. It features single sign-on capabilities, integration with LDAP/Active Directory, and a modular architecture that allows for customization and extension. The system adheres to enterprise security standards and provides detailed audit trails.",
//         image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "fullstack",
//         isNew: false,
//         technologies: [
//             { name: "Jakarta EE", icon: "fab fa-java", color: "#F8981D" },
//             { name: "Payara Server", icon: "fas fa-server", color: "#01A2A6" },
//             { name: "JSF", icon: "fas fa-code", color: "#E76F00" },
//             { name: "Oracle DB", icon: "fas fa-database", color: "#F80000" },
//             { name: "JasperReports", icon: "fas fa-file-alt", color: "#DC0D15" }
//         ],
//         links: {
//             github: "https://github.com/username/jakarta-enterprise-portal",
//             live: "https://demo.enterpriseportal.com"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1542744173-8659b8e39abc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Centralized access to enterprise applications",
//             "Document management and version control",
//             "Workflow automation and approval processes",
//             "Enterprise search across all integrated systems",
//             "Single sign-on with LDAP/Active Directory integration",
//             "Comprehensive reporting and analytics system"
//         ]
//     },
//     {
//         id: 10,
//         title: "Vue.js SaaS Platform",
//         summary: "Modern SaaS application built with Vue.js featuring subscription management and user workspaces.",
//         description: "A full-featured SaaS (Software as a Service) platform built with Vue.js that enables businesses to manage their operations online. The platform includes subscription management, user workspaces, document collaboration, and project tracking features. It provides a customizable dashboard experience for users, with real-time updates using WebSockets. The system includes a comprehensive admin panel for managing users, subscriptions, and content. Advanced features include white-labeling options, usage analytics, and API access for integrations.",
//         image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "frontend",
//         isNew: true,
//         technologies: [
//             { name: "Vue.js", icon: "fab fa-vuejs", color: "#4FC08D" },
//             { name: "Vuetify", icon: "fas fa-paint-brush", color: "#1867C0" },
//             { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
//             { name: "Stripe", icon: "fab fa-stripe", color: "#008CDD" },
//             { name: "GraphQL", icon: "fas fa-project-diagram", color: "#E535AB" }
//         ],
//         links: {
//             github: "https://github.com/username/vuejs-saas-platform",
//             live: "https://saas-platform-demo.firebaseapp.com"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "User workspace management and organization",
//             "Subscription billing with multiple tier options",
//             "Real-time collaborative document editing",
//             "Project management and task tracking",
//             "White-labeling and customization options",
//             "Advanced analytics and reporting dashboard"
//         ]
//     },
//     {
//         id: 11,
//         title: "Machine Learning Recommendation API",
//         summary: "Python-based recommendation engine with machine learning algorithms and RESTful API integration.",
//         description: "An advanced recommendation engine built with Python that utilizes machine learning algorithms to provide personalized content and product recommendations. The system implements collaborative filtering, content-based filtering, and hybrid approaches to generate accurate recommendations. It exposes a RESTful API for easy integration with web and mobile applications. The engine includes features for A/B testing different recommendation algorithms, user behavior tracking, and continuous model improvement through feedback loops.",
//         image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "backend",
//         isNew: false,
//         technologies: [
//             { name: "Python", icon: "fab fa-python", color: "#3776AB" },
//             { name: "Flask", icon: "fas fa-flask", color: "#000000" },
//             { name: "TensorFlow", icon: "fas fa-brain", color: "#FF6F00" },
//             { name: "Scikit-learn", icon: "fas fa-cogs", color: "#F7931E" },
//             { name: "MongoDB", icon: "fas fa-database", color: "#4DB33D" }
//         ],
//         links: {
//             github: "https://github.com/username/ml-recommendation-api",
//             live: "https://recommendation-api.herokuapp.com/docs"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Multiple recommendation algorithms (collaborative, content-based, hybrid)",
//             "RESTful API for seamless integration",
//             "A/B testing framework for algorithm comparison",
//             "User behavior tracking and analysis",
//             "Real-time recommendation updates",
//             "Comprehensive documentation and client libraries"
//         ]
//     },
//     {
//         id: 12,
//         title: "Android Kotlin Music Player",
//         summary: "Feature-rich music player application built for Android using Kotlin and Jetpack libraries.",
//         description: "A modern music player application built for Android using Kotlin and Android Jetpack libraries. The app features a sleek material design interface, supports multiple audio formats, and includes advanced playback features like equalizer, crossfade, and gapless playback. It can organize music by artists, albums, genres, and playlists with customizable sorting options. The app works with both local music files and streaming services, with offline caching capabilities. It also includes features like sleep timer, audio normalization, and voice control integration.",
//         image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "mobile",
//         isNew: true,
//         technologies: [
//             { name: "Kotlin", icon: "fas fa-code", color: "#7F52FF" },
//             { name: "Android Jetpack", icon: "fab fa-android", color: "#3DDC84" },
//             { name: "Room Database", icon: "fas fa-database", color: "#2196F3" },
//             { name: "ExoPlayer", icon: "fas fa-play-circle", color: "#FF5722" },
//             { name: "Material Design", icon: "fas fa-palette", color: "#0081CB" }
//         ],
//         links: {
//             github: "https://github.com/username/android-music-player",
//             live: "https://play.google.com/store/apps/details?id=com.username.musicplayer"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Material Design UI with customizable themes",
//             "Support for multiple audio formats and playlists",
//             "Equalizer and audio enhancement tools",
//             "Integration with streaming services",
//             "Offline mode with smart caching",
//             "Voice control and Android Auto support"
//         ]
//     },
//     {
//         id: 13,
//         title: "AWS Serverless E-commerce API",
//         summary: "Scalable e-commerce backend built with AWS Lambda, API Gateway, and DynamoDB for optimal performance.",
//         description: "A highly scalable e-commerce backend built entirely on AWS serverless technologies. The system leverages Lambda functions, API Gateway, and DynamoDB to provide a robust and cost-effective solution for online stores. It includes features for product catalog management, inventory tracking, order processing, and customer management. The architecture is designed for high availability and automatic scaling during traffic spikes. It includes comprehensive logging, monitoring, and alerting through CloudWatch, and implements best practices for security and compliance.",
//         image: "https://images.unsplash.com/photo-1603695576504-b2b22b928a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "backend",
//         isNew: false,
//         technologies: [
//             { name: "AWS Lambda", icon: "fab fa-aws", color: "#FF9900" },
//             { name: "DynamoDB", icon: "fas fa-database", color: "#1A73E8" },
//             { name: "API Gateway", icon: "fas fa-network-wired", color: "#CF5300" },
//             { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
//             { name: "Terraform", icon: "fas fa-cogs", color: "#7B42BC" }
//         ],
//         links: {
//             github: "https://github.com/username/serverless-ecommerce",
//             live: "https://api.serverless-ecommerce-demo.com/docs"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1520781359717-3eb93bf36df3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Serverless architecture with automatic scaling",
//             "Comprehensive product and inventory management",
//             "Order processing and fulfillment workflows",
//             "Payment processing integration with fraud detection",
//             "Infrastructure as Code using Terraform",
//             "Monitoring and alerting through CloudWatch"
//         ]
//     },
//     {
//         id: 14,
//         title: "MEAN Stack CRM System",
//         summary: "Complete customer relationship management system built with MongoDB, Express, Angular, and Node.js.",
//         description: "A comprehensive Customer Relationship Management (CRM) system built with the MEAN stack (MongoDB, Express.js, Angular, Node.js). This system helps businesses manage customer interactions, sales pipelines, support tickets, and marketing campaigns from a unified platform. It features a responsive Angular frontend with Material Design components, RESTful API backend with Express.js, and MongoDB for data storage. The system includes role-based access control, activity logging, email integration, and customizable dashboards for different business needs.",
//         image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "fullstack",
//         isNew: false,
//         technologies: [
//             { name: "MongoDB", icon: "fas fa-database", color: "#4DB33D" },
//             { name: "Express.js", icon: "fab fa-node-js", color: "#000000" },
//             { name: "Angular", icon: "fab fa-angular", color: "#DD0031" },
//             { name: "Node.js", icon: "fab fa-node", color: "#68A063" },
//             { name: "Socket.io", icon: "fas fa-plug", color: "#010101" }
//         ],
//         links: {
//             github: "https://github.com/username/mean-crm",
//             live: "https://mean-crm-demo.herokuapp.com"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1542744173-8659b8e39abc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Contact and lead management with detailed profiles",
//             "Sales pipeline tracking and opportunity management",
//             "Support ticket system with SLA tracking",
//             "Email integration for communication tracking",
//             "Task management and calendar integration",
//             "Custom fields and workflow automation"
//         ]
//     },
//     {
//         id: 15,
//         title: "NextJS E-commerce Storefront",
//         summary: "Modern e-commerce storefront with server-side rendering, built with Next.js and GraphQL.",
//         description: "A high-performance e-commerce storefront built with Next.js that leverages server-side rendering for optimal SEO and page load performance. The application provides a seamless shopping experience with product browsing, search functionality, cart management, and checkout process. It uses GraphQL for efficient data fetching and Tailwind CSS for a responsive design. The storefront includes features like user accounts, order history, wishlist management, and product reviews. It's optimized for mobile devices and implements best practices for web accessibility.",
//         image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "frontend",
//         isNew: true,
//         technologies: [
//             { name: "Next.js", icon: "fab fa-react", color: "#000000" },
//             { name: "GraphQL", icon: "fas fa-project-diagram", color: "#E535AB" },
//             { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "#38B2AC" },
//             { name: "Vercel", icon: "fas fa-cloud", color: "#000000" },
//             { name: "Stripe", icon: "fab fa-stripe", color: "#008CDD" }
//         ],
//         links: {
//             github: "https://github.com/username/nextjs-ecommerce",
//             live: "https://nextjs-ecommerce-demo.vercel.app"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1589485322845-46e9b605ad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Server-side rendering for optimal SEO performance",
//             "Advanced product search and filtering options",
//             "Responsive design optimized for all device sizes",
//             "Secure checkout process with multiple payment options",
//             "User accounts with order history and saved addresses",
//             "Product reviews and ratings system"
//         ]
//     }
//     ,
//     {
//         id: 16,
//         title: "AI Art Generator",
//         summary: "Deep learning-powered application that creates unique artwork from text prompts and style references.",
//         description: "An innovative AI art generation platform that uses deep learning models to create unique digital artwork from text descriptions and style references. The system leverages advanced neural networks including GANs (Generative Adversarial Networks) and diffusion models to generate high-quality images. Users can describe their desired artwork through natural language prompts, upload style reference images, and fine-tune the output through various parameters. The platform also includes features for image enhancement, style transfer, and animation generation.",
//         image: "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "ai",
//         isNew: true,
//         technologies: [
//             { name: "Python", icon: "fab fa-python", color: "#3776AB" },
//             { name: "TensorFlow", icon: "fas fa-brain", color: "#FF6F00" },
//             { name: "PyTorch", icon: "fas fa-fire", color: "#EE4C2C" },
//             { name: "FastAPI", icon: "fas fa-bolt", color: "#009688" },
//             { name: "React", icon: "fab fa-react", color: "#61DAFB" }
//         ],
//         links: {
//             github: "https://github.com/username/ai-art-generator",
//             live: "https://ai-art-generator-demo.vercel.app"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Text-to-image generation with natural language processing",
//             "Style transfer capabilities from reference images",
//             "Advanced parameter controls for artistic customization",
//             "High-resolution output with upscaling capabilities",
//             "Animation and video generation from static images",
//             "Gallery and sharing features for generated artwork"
//         ]
//     },
//     {
//         id: 17,
//         title: "Advanced Password Strength Analyzer",
//         summary: "Comprehensive security tool for analyzing password strength using multiple evaluation algorithms and breach detection.",
//         description: "A sophisticated password strength analysis tool that goes beyond traditional complexity checks to provide comprehensive security evaluation. The application uses multiple algorithms to assess entropy, pattern recognition, dictionary attacks vulnerability, and password uniqueness. It provides actionable feedback to users on improving their password security, including specific recommendations. The tool also checks passwords against breached password databases to alert users if their credentials have been compromised. A browser extension allows users to verify password strength during account creation on any website.",
//         image: "https://images.unsplash.com/photo-1614064642651-485185440ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "security",
//         isNew: false,
//         technologies: [
//             { name: "TypeScript", icon: "fab fa-js", color: "#3178C6" },
//             { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
//             { name: "Express", icon: "fab fa-node", color: "#ffffff" },
//             { name: "Redis", icon: "fas fa-database", color: "#DC382D" },
//             { name: "Web Crypto API", icon: "fas fa-shield-alt", color: "#4285F4" }
//         ],
//         links: {
//             github: "https://github.com/username/password-strength-analyzer",
//             live: "https://password-analyzer-tool.netlify.app"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Multi-algorithm password strength assessment",
//             "Breached password database integration",
//             "Detailed feedback with visual strength indicators",
//             "Pattern and dictionary attack vulnerability detection",
//             "Browser extension for real-time password evaluation",
//             "Secure password generation recommendations"
//         ]
//     },
//     {
//         id: 18,
//         title: "Quarkus Real-time Event Processing Platform",
//         summary: "High-performance event streaming platform built with Quarkus and Apache Kafka for real-time data processing.",
//         description: "A cloud-native event processing platform built with Quarkus that handles millions of events per second with minimal resource usage. This microservice architecture leverages Quarkus' reactive programming model and GraalVM native image capabilities to achieve near-instant startup times and minimal memory footprint. The system processes real-time data streams using Apache Kafka, performs complex event processing with aggregations and pattern detection, and provides real-time analytics dashboards. The platform includes comprehensive monitoring with Prometheus and Grafana, and is optimized for Kubernetes deployments with automatic scaling based on event volume.",
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "backend",
//         isNew: true,
//         technologies: [
//             { name: "Quarkus", icon: "fas fa-bolt", color: "#4695EB" },
//             { name: "Apache Kafka", icon: "fas fa-stream", color: "#231F20" },
//             { name: "GraalVM", icon: "fas fa-rocket", color: "#F8981D" },
//             { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "#326CE5" },
//             { name: "Hibernate Reactive", icon: "fas fa-database", color: "#59666C" }
//         ],
//         links: {
//             github: "https://github.com/Vin-it-9/quarkus-event-platform",
//             live: "https://quarkus-event-platform-demo.cloud.example.com"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Reactive event processing with Mutiny reactive operators",
//             "Sub-second startup time with GraalVM native image compilation",
//             "Horizontal scaling with Kubernetes and event partitioning",
//             "Schema validation and evolution with Avro and Schema Registry",
//             "Real-time monitoring dashboard with time-series metrics",
//             "Comprehensive OpenAPI documentation with Swagger UI"
//         ]
//     },
//     {
//         id: 19,
//         title: "Micronaut Cloud-native Payment Gateway",
//         summary: "Secure, low-latency payment processing microservice built with Micronaut for multi-cloud environments.",
//         description: "A high-performance payment processing gateway built with the Micronaut framework, designed for deployment across multiple cloud providers. This microservice handles payment authorization, fraud detection, and transaction processing with extremely low latency. It leverages Micronaut's compile-time dependency injection and AOP for minimal startup time and memory footprint. The system implements robust security features including encryption, tokenization, and PCI DSS compliance. It uses Micronaut Data for efficient database access and includes comprehensive circuit breakers and fallbacks for resilience. The gateway supports multiple payment providers and methods, with a unified API for frontend integration.",
//         image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         category: "backend",
//         isNew: true,
//         technologies: [
//             { name: "Micronaut", icon: "fas fa-cloud", color: "#1E1E1E" },
//             { name: "AWS Lambda", icon: "fab fa-aws", color: "#FF9900" },
//             { name: "Redis", icon: "fas fa-database", color: "#DC382D" },
//             { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
//             { name: "Docker", icon: "fab fa-docker", color: "#2496ED" }
//         ],
//         links: {
//             github: "https://github.com/Vin-it-9/micronaut-payment-gateway",
//             live: "https://micronaut-payment-api.cloud.example.com/swagger"
//         },
//         gallery: [
//             "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//             "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         ],
//         features: [
//             "Multi-cloud deployment (AWS, GCP, Azure) with unified configuration",
//             "Extremely low latency transaction processing (<100ms)",
//             "Advanced fraud detection with machine learning integration",
//             "Comprehensive payment method support (cards, digital wallets, ACH)",
//             "Non-blocking reactive database access with R2DBC",
//             "Distributed tracing with Zipkin and Jaeger"
//         ]
//     }
// ];