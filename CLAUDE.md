# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HealthTracker LP Site - A landing page for a health management application targeting health-conscious users. The project is built with modern web technologies and focuses on responsive design.

**Repository**: https://github.com/koikeyap/claude001.git

## Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Architecture

This is a frontend-only landing page project with the following planned structure:

- **Technology Stack**: HTML5, CSS3, JavaScript ES6+, with Vite or Webpack as build tool
- **CSS Framework**: Tailwind CSS or Bootstrap
- **Animations**: GSAP or CSS Animations
- **Icons**: Heroicons or Feather Icons

## Directory Structure

```
/
├── src/
│   ├── assets/          # Images and icons
│   ├── css/             # Stylesheets (style.css, responsive.css)
│   ├── js/              # JavaScript files (main.js, animations.js)
│   └── components/      # Reusable components
├── public/              # Static files including index.html
├── docs/                # Documentation
├── tests/               # Test files
└── package.json         # Project configuration
```

## Development Guidelines

- Use ES6+ JavaScript features
- Follow semantic HTML practices
- Implement accessibility compliance (WCAG 2.1 AA)
- Mobile-first design approach
- Target Lighthouse score of 90+ for performance optimization

## Branch Strategy

- `main`: Production environment
- `develop`: Development integration branch  
- `feature/*`: Feature development branches