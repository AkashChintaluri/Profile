# Developer Portfolio

A modern, professional developer portfolio website built with React, featuring sophisticated animations, smooth interactions, and optimal performance.

## ✨ Features

- **Modern Tech Stack**: Built with React, Tailwind CSS, and Framer Motion
- **Smooth Animations**: Performance-optimized 60fps animations using GPU acceleration
- **Fully Responsive**: Seamless experience across all devices
- **Interactive Components**: 
  - Dynamic typewriter effect in hero section
  - Animated skill bars and circular progress indicators
  - Interactive project filtering and modal views
  - Expandable experience cards with achievements
  - Animated statistics counters
- **Accessibility**: 
  - Semantic HTML
  - Keyboard navigation support
  - ARIA labels
  - Respects `prefers-reduced-motion`
- **Performance Optimized**:
  - Intersection Observer for scroll animations
  - Debounced scroll events
  - Lazy loading
  - Optimized re-renders

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Sticky navigation with smooth scroll
│   ├── Hero.jsx        # Hero section with typewriter effect
│   ├── About.jsx       # About section with stats
│   ├── Skills.jsx      # Interactive skills visualization
│   ├── Experience.jsx  # Timeline-based experience
│   ├── Projects.jsx    # Filterable projects with modals
│   ├── Education.jsx   # Education cards
│   ├── Achievements.jsx # Certifications and achievements
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── hooks/              # Custom React hooks
│   ├── useInView.js    # Intersection Observer hook
│   └── useScrollPosition.js # Scroll tracking hook
├── utils/              # Utility functions
│   ├── animations.js   # Framer Motion variants
│   └── data.js        # Portfolio content data
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Update Personal Information

Edit `src/utils/data.js` to update:
- Personal information (name, email, location, etc.)
- Skills and proficiency levels
- Work experience
- Projects
- Education
- Achievements

### Modify Color Scheme

Edit `tailwind.config.js` to change the color palette:
- `primary`: Main accent color (default: sage green)
- `accent`: Secondary accent color (default: warm amber)

### Change Animations

Edit `src/utils/animations.js` to customize animation variants used throughout the site.

## 🎯 Sections Included

1. **Hero** - Eye-catching introduction with animated background and typewriter effect
2. **About** - Bio, stats, and personal philosophy
3. **Skills** - Interactive skill visualization with multiple view modes
4. **Experience** - Professional timeline with expandable details
5. **Projects** - Filterable project showcase with modal views
6. **Education** - Academic background
7. **Achievements** - Certifications and recognitions
8. **Contact** - Contact form and social links

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## ⚡ Performance

- Lighthouse Score: 90+
- 60fps animations
- Optimized bundle size
- Lazy loading images
- Efficient re-renders

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or feedback, reach out through the contact form on the website.

---

**Built with ❤️ and React**

