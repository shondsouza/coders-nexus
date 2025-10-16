# Coders Nexus SDIT

![Coders Nexus SDIT](public/images/hero-bg.webp)

Official website for **Coders Nexus SDIT** - A student-led tech community fostering innovation, collaboration, and technical excellence.

## 🌟 Features

- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 🎨 **Modern Design** - Tailwind CSS with dark mode support
- 📱 **Fully Responsive** - Works perfectly on all devices
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and sitemap
- 📝 **Content Management** - Easy event and content updates
- 🎯 **Type Safe** - TypeScript for robust development

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/coders-nexus-sdit/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` 🎉

## 📁 Project Structure

```
coders-nexus-sdit/
├── public/
│   ├── content/events/      # Event images
│   ├── images/              # Static images
│   └── favicon.ico
├── src/
│   ├── components/          # Reusable components
│   ├── content/
│   │   ├── events/          # Event markdown files
│   │   └── config.ts        # Content schema
│   ├── data/                # JSON data files
│   ├── layouts/             # Page layouts
│   ├── pages/               # Routes
│   ├── styles/              # Global styles
│   └── utils/               # Helper functions
├── scripts/
│   └── add-event.js         # Event creation tool
└── package.json
```

## 🛠️ Development

### Available Commands

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Create new event (interactive)
npm run add-event
```

### Adding Content

#### Create a New Event

```bash
npm run add-event
```

Follow the prompts to create a new event. The script will:
- Generate markdown file with frontmatter
- Create image directory
- Provide URL and next steps

#### Manual Event Creation

Create a new folder in `src/content/events/`:

```markdown
---
title: "Your Event Title"
description: "Brief description"
date: 2024-12-31
location: "Event Location"
coverImage: "/content/events/your-event/cover.webp"
featured: false
tags: ["Tag1", "Tag2"]
organizers: ["Coders Nexus SDIT"]
published: true
---

Your event content here...
```

#### Update Team Members

Edit `src/data/team.json`:

```json
{
  "leadership": [
    {
      "name": "Your Name",
      "role": "Position",
      "image": "/images/team/your-photo.webp",
      "bio": "Short bio",
      "social": {
        "github": "username",
        "linkedin": "username"
      }
    }
  ]
}
```

#### Update Projects

Edit `src/data/projects.json` to add your community projects.

## 🎨 Customization

### Colors

Update `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color shades
      }
    }
  }
}
```

### Content

- **Home Page**: `src/pages/index.astro`
- **About Page**: `src/pages/about.astro`
- **Social Links**: `src/data/social.json`

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# Output will be in dist/ folder
```

### Performance Optimization

The build includes:
- ✅ HTML minification
- ✅ CSS purging and minification
- ✅ JavaScript bundling and minification
- ✅ Image optimization (use .webp format)
- ✅ Automatic prefetching

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will auto-detect Astro and use optimal settings.

### Deploy to Netlify

1. Push to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to GitHub Pages

```bash
# Update astro.config.mjs
site: 'https://coders-nexus-sdit.github.io'

# Build and deploy
npm run build
# Use gh-pages or GitHub Actions
```

### Environment Variables

For production, update:
- Email address in `src/pages/contact.astro`
- Social media links in `src/data/social.json`
- Site URL in `astro.config.mjs`

## 📊 Performance

Expected Lighthouse scores:
- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow existing code patterns
- Write meaningful commit messages
- Test responsive design on multiple devices

## 📝 Content Guidelines

### Event Content

- Use descriptive titles
- Add clear descriptions
- Include schedule and agenda
- Add registration details
- Use high-quality images (1200x630px for covers)

### Images

- **Format**: WebP for photos, SVG for logos/icons
- **Optimization**: Compress before uploading
- **Naming**: Use kebab-case (event-name.webp)
- **Alt Text**: Always add descriptive alt text

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
npm install
npm run build
```

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3000
```

### Images Not Loading

- Check file paths are correct
- Ensure images are in `public/` directory
- Verify image file extensions match

## 📚 Tech Stack

- **Framework**: [Astro](https://astro.build) v4.16+
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v3.4+
- **Icons**: SVG icons (no icon library needed)
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Vercel / Netlify

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Inspired by [SOSC](https://sosc.org.in)
- Built with ❤️ by Coders Nexus SDIT Team
- Special thanks to all contributors

## 📞 Contact

- **Email**: contact@codersnexus-sdit.org
- **GitHub**: [@coders-nexus-sdit](https://github.com/coders-nexus-sdit)
- **Instagram**: [@codersnexus.sdit](https://instagram.com/codersnexus.sdit)
- **LinkedIn**: [Coders Nexus SDIT](https://linkedin.com/company/coders-nexus-sdit)

---

**Made with 💙 by Coders Nexus SDIT**

[Visit Website](https://codersnexus-sdit.vercel.app) • [Report Bug](https://github.com/coders-nexus-sdit/website/issues) • [Request Feature](https://github.com/coders-nexus-sdit/website/issues)