# Aditya Pratap Singh - Portfolio Website

A modern, responsive, and dynamic portfolio website showcasing the work and skills of Aditya Pratap Singh, a Software Developer and AI enthusiast.

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser to view the portfolio.

### Option 2: Local Server (Recommended)
For the best experience with all features:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Deployment Options

The portfolio is deployed and can be accessed at: [Portfolio Website](https://portfolio-3hns.onrender.com)

### Render Deployment (Recommended)

#### Static Site Deployment
1. **Fork or Clone** this repository to your GitHub account
2. **Go to [Render.com](https://render.com)** and sign up/login
3. **Click "New"** and select "Static Site"
4. **Connect your GitHub** account and select this repository
5. **Configure the deployment:**
   - **Name**: `your-portfolio-name`
   - **Branch**: `main` or `master`
   - **Build Command**: Leave empty (static site)
   - **Publish Directory**: `.` (root directory)
6. **Click "Create Static Site"**

#### Web Service Deployment (for dynamic features)
If you want to add backend functionality:

1. **Create a `render.yaml` file** in your repository root:
```yaml
services:
  - type: web
    name: portfolio-app
    env: static
    buildCommand: echo "No build step needed for static site"
    staticPublishPath: .
    routes:
      - type: rewrite
        source: /.*
        destination: /index.html
```

2. **Deploy as Web Service** instead of Static Site in Render

#### Environment Variables (if needed)
Add any environment variables in the Render dashboard under "Environment" section.

### Other Deployment Options

#### Netlify
1. **Go to [Netlify.com](https://netlify.com)**
2. **Drag and drop** the folder containing your files
3. **Your site will be live** with a netlify.app URL

#### Vercel
1. **Go to [Vercel.com](https://vercel.com)**
2. **Connect your GitHub** repository
3. **Deploy** - it will automatically detect it's a static site
4. **Your site will be live** with a vercel.app URL

#### GitHub Pages
1. **Go to repository Settings** → Pages
2. **Select "Deploy from a branch"**
3. **Choose your main branch**
4. **Your site will be available** at `https://username.github.io/repository-name`

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles and animations
├── script.js               # JavaScript functionality
└── README.md               # This documentation file
```

### File Descriptions

- **`index.html`** - Main portfolio page with all sections (Hero, About, Skills, Projects, Contact)
- **`styles.css`** - Complete styling including:
  - CSS variables for theming
  - Responsive design breakpoints
  - Animations and transitions
  - Glassmorphism effects
  - Mobile-first approach
- **`script.js`** - Interactive functionality including:
  - Smooth scrolling navigation
  - Fade-in animations on scroll
  - Mobile hamburger menu
  - Contact form validation
  - Theme toggle features
- **`README.md`** - Comprehensive documentation with deployment guides

## 📋 Deployment Checklist

- [ ] Repository is public (for free hosting)
- [ ] All files are committed to Git
- [ ] `index.html` is in the root directory
- [ ] No build process required (static site)
- [ ] Images and assets are optimized
- [ ] All links are working correctly

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📱 Features

### Design & UI
- Dark theme with gradient accents
- Smooth animations and transitions
- Glassmorphism effects
- Responsive design for all devices
- Mobile-first approach

### Functionality
- Smooth scrolling navigation
- Fade-in animations on scroll
- Mobile-friendly hamburger menu
- Interactive project cards with hover effects
- Contact form with validation
- Theme toggle functionality

### Sections
1. **Hero Section** - Introduction with animated elements
2. **About** - Personal information and highlights
3. **Skills** - Technical skills and technologies
4. **Projects** - GitHub projects with live demo links
5. **Contact** - Contact form and social links

## 🎯 GitHub Projects Featured

The portfolio showcases the following projects:

1. **Fake News Detection** - ML model for news classification
   - 🔗 [GitHub](https://github.com/aps4934/Fake-News-Detection)
   - 🌐 [Live Demo](https://fake-news-detection-1-vgdh.onrender.com/)

2. **Sign Language Detection** - Computer vision application
   - 🔗 [GitHub](https://github.com/aps4934/Sign-Language-Detection)
   - 🌐 [Live Demo](https://sign-language-detection-1-1u9g.onrender.com)

3. **Movie Recommendation System** - Data science project
   - 🔗 [GitHub](https://github.com/aps4934/Movie-Recommendation)

4. **Netflix Clone** - Full-stack web application
   - 🔗 [GitHub](https://github.com/aps4934/netflix-clone)

5. **Amazon Clone** - E-commerce platform
   - 🔗 [GitHub](https://github.com/aps4934/amazon-clone)

6. **AI Code Generator** - AI-powered development tool
   - 🔗 [GitHub](https://github.com/aps4934/AI_powered_code_generator)

7. **URL Shortener** - Web utility application
   - 🔗 [GitHub](https://github.com/aps4934/url-shortener)
   - 🌐 [Live Demo](https://url-shortener-2-6f21.onrender.com/)

8. **Academic Project** - Comprehensive development project
   - 🔗 [GitHub](https://github.com/aps4934/2201641530013)

## 🛠 Customization Guide

### Adding New Projects
Edit the `projects` section in `index.html`:

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-your-icon"></i>
        </div>
        <div class="project-links">
            <a href="your-github-link" target="_blank" class="project-link" rel="noopener">
                <i class="fab fa-github"></i>
            </a>
            <a href="your-deployed-link" target="_blank" class="project-link deployed-link" rel="noopener">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Project description...</p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
</div>
```

### Updating Information
- **Personal Info**: Edit hero and about sections in `index.html`
- **Skills**: Update the skills grid in the skills section
- **Contact**: Modify contact information and links

### Styling Customization
- Colors can be customized in the CSS variables section of `styles.css`
- Animations can be modified in `script.js`
- Responsive breakpoints are defined in media queries

## 📊 Performance Features

- Lazy loading for images
- Optimized animations
- Efficient event handling
- Minimal external dependencies
- Fast loading times
- SEO-friendly structure

## 🌐 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 📞 Contact Information

**Aditya Pratap Singh**
- 📍 Kanpur, India
- 🔗 [GitHub](https://github.com/aps4934)
- 💼 [LinkedIn](http://www.linkedin.com/in/aps4934g)
- 🧪 [LeetCode](https://leetcode.com/u/aps4934g/)
- 🆔 [ORCID](https://orcid.org/0009-0005-8433-0107)
- 🛜 [Portfolio](https://portfolio-3hns.onrender.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ using modern web technologies*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

### Version 1.0.0
- Initial portfolio website release
- Responsive design implementation
- Project showcase integration
- Contact form functionality
- Deployment configurations

---

**Need help with deployment?** Check out the [Render Documentation](https://render.com/docs) or create an issue in this repository!
