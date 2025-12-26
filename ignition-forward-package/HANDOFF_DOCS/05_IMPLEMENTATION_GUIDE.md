# Ignition Forward Implementation Guide

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Author:** Manus AI

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [Development Workflow](#development-workflow)
5. [Key Dependencies](#key-dependencies)
6. [Environment Configuration](#environment-configuration)
7. [Deployment Guide](#deployment-guide)
8. [Code Standards](#code-standards)

---

## Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI framework |
| TypeScript | 5.x | Type safety |
| Vite | 5.x | Build tool & dev server |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 11.x | Animations |
| Wouter | 3.x | Client-side routing |
| Lucide React | Latest | Icon library |
| React Hook Form | 7.x | Form handling |
| Zod | 3.x | Schema validation |

### Development Tools

| Tool | Purpose |
|------|---------|
| pnpm | Package manager |
| ESLint | Code linting |
| Prettier | Code formatting |
| TypeScript | Type checking |

---

## Project Structure

```
ignition-forward/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   │   ├── images/          # Image assets
│   │   │   ├── hero-*.png   # Hero section images
│   │   │   ├── maguire-*.png # Maguire case study images
│   │   │   └── ...
│   │   ├── favicon.ico
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── ui/          # shadcn/ui base components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   └── ...
│   │   │   ├── Header.tsx   # Site header
│   │   │   ├── Footer.tsx   # Site footer
│   │   │   ├── CometCTA.tsx # Animated CTA link
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   └── SEO.tsx
│   │   │
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Edge.tsx
│   │   │   ├── FractionalAI.tsx
│   │   │   ├── ForwardDeployed.tsx
│   │   │   ├── ProfessionalServices.tsx
│   │   │   ├── FounderLed.tsx
│   │   │   ├── FundManagers.tsx
│   │   │   ├── PEPortfolio.tsx
│   │   │   ├── Maguire.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Segments.tsx
│   │   │
│   │   ├── hooks/           # Custom React hooks
│   │   │   ├── useScrollPosition.ts
│   │   │   └── useMediaQuery.ts
│   │   │
│   │   ├── lib/             # Utility functions
│   │   │   ├── utils.ts     # General utilities
│   │   │   └── cn.ts        # Class name merger
│   │   │
│   │   ├── contexts/        # React contexts
│   │   │   └── ThemeContext.tsx
│   │   │
│   │   ├── App.tsx          # Root component with routes
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles & Tailwind
│   │
│   └── index.html           # HTML template
│
├── HANDOFF_DOCS/            # Documentation
│   ├── 01_DESIGN_SYSTEM.md
│   ├── 02_COMPONENT_LIBRARY.md
│   ├── 03_PAGE_SPECIFICATIONS.md
│   ├── 04_CUSTOMER_JOURNEYS.md
│   └── 05_IMPLEMENTATION_GUIDE.md
│
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- Node.js 18.x or higher
- pnpm 8.x or higher

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd ignition-forward

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The development server will start at `http://localhost:3000`.

### Environment Variables

Create a `.env` file in the root directory:

```env
# Application
VITE_APP_TITLE=Ignition Forward
VITE_APP_URL=https://ignitionforward.com

# Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact Form (if using external service)
VITE_FORM_ENDPOINT=https://api.example.com/contact
```

---

## Development Workflow

### Branch Strategy

```
main           # Production-ready code
├── develop    # Integration branch
│   ├── feature/page-name    # New pages
│   ├── feature/component-name    # New components
│   ├── fix/issue-description    # Bug fixes
│   └── refactor/area    # Code improvements
```

### Commit Convention

Use conventional commits:

```
feat: add new testimonial section to homepage
fix: correct mobile navigation z-index
style: update button hover states
refactor: extract card component from homepage
docs: update component documentation
```

### Development Commands

```bash
# Start development server
pnpm dev

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Format code
pnpm format

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## Key Dependencies

### Core Dependencies

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "wouter": "^3.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "react-hook-form": "^7.50.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "react-helmet-async": "^2.0.0"
  }
}
```

### Development Dependencies

```json
{
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.56.0",
    "prettier": "^3.2.0"
  }
}
```

### Adding shadcn/ui Components

```bash
# Initialize shadcn/ui (if not already done)
pnpm dlx shadcn-ui@latest init

# Add specific components
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add card
pnpm dlx shadcn-ui@latest add dialog
```

---

## Environment Configuration

### Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ['./client/index.html', './client/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2332',
          light: '#2A3545',
        },
        gold: {
          DEFAULT: '#C9A962',
          dark: '#B8944D',
        },
        'off-white': '#F8F7F4',
        teal: '#4A9B9B',
        'grey-body': '#A8B2C1',
        'grey-muted': '#6B7280',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'comet-1': 'comet-1 0.6s ease-out forwards',
        'comet-2': 'comet-2 0.5s ease-out 0.1s forwards',
        'shine': 'shine 1s ease-in-out',
      },
      keyframes: {
        'comet-1': {
          '0%': { left: '0', opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
        'comet-2': {
          '0%': { left: '0', opacity: '0.7' },
          '100%': { left: '90%', opacity: '0' },
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
};
```

### Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"]
    }
  },
  "include": ["client/src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## Deployment Guide

### Build Process

```bash
# Create production build
pnpm build

# Output will be in /dist directory
```

### Static Hosting (Recommended)

The site is a static React application and can be deployed to:

**Vercel:**
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

**Netlify:**
```bash
# Install Netlify CLI
pnpm add -g netlify-cli

# Deploy
netlify deploy --prod
```

**AWS S3 + CloudFront:**
```bash
# Sync to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Environment-Specific Builds

```bash
# Development
pnpm dev

# Staging
VITE_APP_URL=https://staging.ignitionforward.com pnpm build

# Production
VITE_APP_URL=https://ignitionforward.com pnpm build
```

### Performance Optimization Checklist

Before deployment, ensure:

- [ ] Images are optimized (WebP format, appropriate sizes)
- [ ] Fonts are preloaded in index.html
- [ ] Code splitting is working (check bundle size)
- [ ] Lighthouse score > 90 for Performance, Accessibility, Best Practices
- [ ] All console errors resolved
- [ ] Forms tested end-to-end
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing complete (Chrome, Safari, Firefox, Edge)

---

## Code Standards

### Component Structure

```tsx
// Standard component structure
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Types at the top
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

// Component function
export default function ComponentName({ title, description, onAction }: ComponentProps) {
  // Hooks first
  const [state, setState] = useState(false);
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // Event handlers
  const handleClick = () => {
    onAction?.();
  };
  
  // Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ServiceCard.tsx` |
| Hooks | camelCase with `use` prefix | `useScrollPosition.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_ITEMS` |
| CSS classes | kebab-case | `service-card` |
| Event handlers | camelCase with `handle` prefix | `handleSubmit` |

### Import Order

```tsx
// 1. React and core libraries
import { useState, useEffect } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { Link } from 'wouter';

// 3. Internal components
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

// 4. Hooks and utilities
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

// 5. Types
import type { ServiceCardProps } from '@/types';

// 6. Styles (if any)
import './styles.css';
```

### CSS/Tailwind Guidelines

```tsx
// Prefer Tailwind utilities
<div className="flex items-center gap-4 p-6 bg-navy rounded-xl">

// Use cn() for conditional classes
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "primary-classes"
)}>

// Extract repeated patterns to CSS
// In index.css:
.btn-gold {
  @apply inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg transition-all hover:bg-gold-dark;
}
```

### Performance Best Practices

```tsx
// Memoize expensive computations
const expensiveValue = useMemo(() => computeExpensiveValue(data), [data]);

// Memoize callbacks passed to children
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);

// Lazy load pages
const About = lazy(() => import('@/pages/About'));

// Use proper image loading
<img 
  src="/images/hero.webp" 
  alt="Description"
  loading="lazy"
  width={800}
  height={600}
/>
```

---

## Troubleshooting

### Common Issues

**Issue: Styles not applying**
- Check that Tailwind is processing the file (check content paths in config)
- Verify class names are spelled correctly
- Check for CSS specificity conflicts

**Issue: Animations not working**
- Verify Framer Motion is imported
- Check that `whileInView` has `viewport={{ once: true }}`
- Ensure parent has `overflow: hidden` if needed

**Issue: Routes not working**
- Verify route is defined in App.tsx
- Check for typos in Link href
- Ensure wouter is imported correctly

**Issue: Build fails**
- Run `pnpm typecheck` to find type errors
- Check for unused imports/variables
- Verify all dependencies are installed

---

## Support & Resources

### Documentation Links

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Wouter Documentation](https://github.com/molefrog/wouter)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Project-Specific Resources

- Design System: `HANDOFF_DOCS/01_DESIGN_SYSTEM.md`
- Component Library: `HANDOFF_DOCS/02_COMPONENT_LIBRARY.md`
- Page Specifications: `HANDOFF_DOCS/03_PAGE_SPECIFICATIONS.md`
- Customer Journeys: `HANDOFF_DOCS/04_CUSTOMER_JOURNEYS.md`

---

*This implementation guide should be kept up-to-date as the project evolves.*
