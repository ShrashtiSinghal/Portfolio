# Shrashti Singhal - AI Engineer Portfolio 🚀

A stunning, futuristic portfolio website showcasing AI engineering expertise with cutting-edge design elements.

## 🎨 Design Features

- **Dark Mode with Neon Accents** - Black background with vibrant orange (#FF6600) & teal (#17C3B2) neon glows
- **Glass Morphism** - Translucent cards with backdrop blur effects creating premium depth
- **Neo-Brutalism** - Bold typography, strong geometric elements, and striking visual hierarchy  
- **3D Isometric UI** - Floating stats, rotating elements, and perspective transforms
- **AR/Motion Effects** - Hover animations, floating icons, and gradient animations
- **Responsive Design** - Mobile-friendly with consistent futuristic aesthetic

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Components**: Shadcn/ui, Radix UI, Lucide React
- **Animations**: Custom CSS animations, transforms, and transitions
- **Deployment**: GitHub Pages with custom domain
- **Build Tool**: Create React App with Craco

## 🚀 Deployment

This portfolio is automatically deployed to [shrashti.com](https://shrashti.com) using GitHub Actions.

### Manual Deployment Steps:

1. **Push to GitHub**: Code is automatically built and deployed via GitHub Actions
2. **Domain Setup**: CNAME file points to shrashti.com
3. **DNS Configuration**: Point your domain to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

### Local Development:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   └── CNAME              # Custom domain configuration
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Hero.js       # Hero section with 3D effects
│   │   ├── About.js      # About section with glass morphism
│   │   ├── Skills.js     # Skills with neo-brutalism cards
│   │   ├── Experience.js # Experience timeline
│   │   ├── Projects.js   # Interactive project showcase
│   │   ├── Contact.js    # Contact form with animations
│   │   ├── Header.js     # Navigation with glass blur
│   │   └── Footer.js     # Footer with social links
│   ├── data/
│   │   └── mockProjects.js # Project data
│   ├── pages/
│   │   └── Portfolio.js   # Main portfolio page
│   ├── App.js            # App entry point
│   └── index.css         # Global styles & animations
├── .github/workflows/
│   └── deploy.yml        # GitHub Actions deployment
└── package.json          # Dependencies & scripts
```

## 🎯 Key Sections

1. **Hero** - Animated introduction with floating elements and professional photo
2. **About** - Professional story with glass morphism cards
3. **Skills** - Technical expertise with interactive skill categories
4. **Experience** - Career timeline with company highlights
5. **Projects** - 15+ AI/ML projects with detailed modals
6. **Contact** - Professional contact form and social links

## 🌟 Highlights

- **12+ Years Experience** in AI/ML, cybersecurity, and healthcare
- **15+ Major Projects** including Night Hawk, ThreatPrism, DermaAI
- **Multiple Startups** founded with successful exits
- **Academic Collaborations** with Yale University and other institutions
- **Technical Expertise** in LLMs, RAG, cybersecurity, and cloud technologies

## 📱 SEO & Performance

- Optimized meta tags for social sharing
- Fast loading with code splitting
- Mobile-responsive design
- Custom domain with HTTPS
- Search engine optimized content

## 🤝 Contributing

This is a personal portfolio website. For any suggestions or improvements, feel free to open an issue.

## 📄 License

© 2025 Shrashti Singhal. All rights reserved.

---

**Built with ❤️ using [Emergent](https://emergent.sh) - The AI-powered development platform**