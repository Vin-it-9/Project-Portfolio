# Project Portfolio


A high-performance project portfolio showcase with glassmorphism design, built using modern JavaScript and Tailwind CSS. This portfolio features a responsive grid layout, smooth animations, and detailed project modals without any heavy frameworks.

## 🔗 Live Demo

Check out the live demo: [Project Portfolio](https://vin-it-9.github.io/Project-Portfolio/)

## ✨ Features

- **Dynamic Project Showcase** - Displays projects from external JSON data
- **Modern Glassmorphism Design** - Sleek, modern UI with glass-effect cards and modals
- **Responsive Layout** - Perfect viewing experience on all devices
- **Fast Performance** - Optimized for speed with lazy loading and minimal DOM manipulation
- **Project Filtering** - Filter projects by category (fullstack, frontend, backend, mobile)
- **Detailed Project Modals** - View comprehensive project information
- **Smooth Animations** - Pleasant user experience with smooth transitions
- **Image Lazy Loading** - Improves page load time and performance

## 🛠️ Built With

- **HTML5** - Structure and semantic markup
- **Tailwind CSS** - Utility-first styling
- **JavaScript** - Dynamic content and interactions
- **FontAwesome** - Icons and visual elements
- **Intersection Observer API** - Lazy loading and scroll animations
- **JSON** - External data storage

```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Vin-it-9/Project-Portfolio.git
```

2. Navigate to the project directory:

```bash
cd Project-Portfolio
```

3. Open the project:
   - For local development, use a local server like Live Server in VS Code
   - Or simply open `index.html` in your browser

### Customization

#### Modifying Project Data

Edit the `data.json` file to add, update, or remove projects. Each project follows this structure:

```json
{
  "id": 1,
  "title": "Project Title",
  "summary": "Short project description",
  "description": "Detailed project description",
  "image": "path/to/main/image.jpg",
  "category": "fullstack",
  "isNew": true,
  "technologies": [
    { "name": "Tech Name", "icon": "fab fa-icon", "color": "#hexcolor" }
  ],
  "links": {
    "github": "https://github.com/username/repo",
    "live": "https://demo-link.com"
  },
  "gallery": [
    "path/to/image1.jpg",
    "path/to/image2.jpg"
  ],
  "features": [
    "Feature 1",
    "Feature 2"
  ]
}
```

## ⚙️ How It Works

1. **Data Loading**: Projects are loaded from an external JSON file
2. **Rendering**: Projects are rendered using string templates for optimal performance
3. **Event Handling**: Click events on projects open detailed modals
4. **Filtering**: Category buttons filter the displayed projects
5. **Lazy Loading**: Images are loaded only when they enter the viewport
6. **Animations**: Smooth animations are triggered as elements scroll into view

## 🔍 Performance Optimizations

This portfolio achieves high performance through several key optimizations:

1. **String Templates**: Uses string interpolation instead of heavy DOM manipulation
2. **Minimal DOM References**: Keeps DOM element references to a minimum
3. **Event Delegation**: Uses efficient event handling patterns
4. **Lazy Loading**: Only loads images when needed
5. **Content Caching**: Caches modal content for faster reopening
6. **Debounced Scroll Handling**: Improves scroll performance
7. **Minimal CSS**: Uses Tailwind utilities with minimal custom CSS
8. **Optimized Animations**: Ensures smooth transitions without layout thrashing

## 📷 Screenshots

### Home Page
![Home Page](https://user-images.githubusercontent.com/YOUR_GITHUB_ID/YOUR_REPO/assets/home-screenshot.png)

### Project Modal
![Project Modal](https://user-images.githubusercontent.com/YOUR_GITHUB_ID/YOUR_REPO/assets/modal-screenshot.png)

### Mobile View
![Mobile View](https://user-images.githubusercontent.com/YOUR_GITHUB_ID/YOUR_REPO/assets/mobile-screenshot.png)

## 📱 Responsive Design

The portfolio is fully responsive with these breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔮 Future Improvements

- [ ] Dark theme
- [ ] Contact form integration
- [ ] Integration with GitHub API for real-time project data


<p align="center">
  Made with ❤️ by Vinit
  <br>
  Last updated: 2025-05-31
</p>
