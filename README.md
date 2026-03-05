# NextHire Landing Page

A modern, responsive landing page for NextHire - helping college students and fresh graduates master job interviews through realistic mock interviews, personalized feedback, and practical guidance.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animated Sections**: Smooth animations using Framer Motion
- **Modern UI**: Gradient backgrounds, smooth transitions, and professional styling
- **Multiple Sections**:
  - Hero section with call-to-action
  - Features showcase (6 core features)
  - Benefits highlights (4 key benefits)
  - Student testimonials (4 success stories)
  - Tiered pricing plans (3 pricing tiers)
  - Final CTA section
  - Professional footer with links

## 📋 Pages & Components

### Pages
- **Home (/)** - Main landing page with all sections

### Components
- **Header** - Navigation bar with logo and CTA buttons
- **Hero** - Welcome section with main value proposition and animated elements
- **Features** - 6 key features of NextHire with icons
- **Benefits** - Why students choose NextHire with statistics
- **Testimonials** - Success stories from students with 5-star ratings
- **Pricing** - Three-tier pricing plans (Starter, Professional, Elite)
- **CTA** - Final call-to-action section with button animations
- **Footer** - Links, social media, and copyright info

## 🛠️ Tech Stack

- **Next.js 16+** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety throughout the project
- **Tailwind CSS 4** - Utility-first CSS styling
- **Framer Motion** - Animation library for smooth interactions
- **ESLint** - Code quality and consistency

## 📦 Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\Aditya\OneDrive\Documents\nexthire-app"
```

2. Dependencies are already installed. If you need to reinstall:
```bash
npm install
```

## 🏃 Running the Project

### Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
nexthire-app/
├── app/
│   ├── favicon.ico              # Website icon
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main landing page
├── components/                  # Reusable React components
│   ├── Header.tsx               # Navigation bar
│   ├── Hero.tsx                 # Hero section (animated)
│   ├── Features.tsx             # 6 features showcase
│   ├── Benefits.tsx             # 4 benefits section
│   ├── Testimonials.tsx         # Student testimonials
│   ├── Pricing.tsx              # 3-tier pricing plans
│   ├── CTA.tsx                  # Final call-to-action
│   └── Footer.tsx               # Footer with links
├── public/                      # Static assets (images, icons, etc.)
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
└── eslint.config.mjs            # ESLint configuration
```

## 🎨 Customization

### Colors & Theme
The site uses a blue-purple gradient theme:
- Primary gradient: `from-blue-600 to-purple-600`
- Modify Tailwind classes in components to change colors

### Content Updates
Edit these files to update content:
- **Hero section**: `components/Hero.tsx`
- **Features**: `components/Features.tsx`
- **Benefits**: `components/Benefits.tsx`
- **Testimonials**: `components/Testimonials.tsx`
- **Pricing**: `components/Pricing.tsx`
- **CTA**: `components/CTA.tsx`

### Images & Assets
1. Add images to the `public/` folder
2. Reference using Next.js Image component for optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Automatic deployment on each commit

### Other Platforms
Build for production:
```bash
npm run build
npm start
```
Deploy the `.next` and `node_modules` folders along with `public`, `package.json`, and other config files.

## 📝 SEO & Metadata

- Title: "NextHire - Master Job Interviews"
- Description: "Practice realistic mock interviews, get personalized feedback, and build the confidence to land your dream job."
- Located in `app/layout.tsx`

## 🔧 Development Tips

1. **Hot Reload**: Dev server supports fast refresh for instant feedback
2. **TypeScript**: Full type safety across all components
3. **Responsive Testing**: Use browser dev tools to test mobile breakpoints
4. **Performance**: Next.js handles image optimization and code splitting automatically
5. **Animations**: Framer Motion animations trigger on scroll with `whileInView`

## 📞 Support & Resources

- [Next.js Documentation](https://nextjs.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## 📄 License

This project is proprietary to NextHire.

---

**Built with ❤️ for NextHire - Helping Students Master Interviews**

Last updated: March 5, 2026
