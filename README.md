# Creative Studio - Modern Design Agency Website

A stunning, modern design agency homepage built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features a responsive design, dark mode support, smooth animations, and a contact form with validation.

## 🚀 Features

- ✨ **Modern Design** - Beautiful, creative UI with gradient backgrounds and smooth animations
- 🎨 **Dark Mode Support** - Built-in dark/light theme toggle using `next-themes`
- 📱 **Fully Responsive** - Mobile-first design that works perfectly on all devices
- ⚡ **Performance Optimized** - Next.js 14 App Router with optimized images
- 🎭 **Smooth Animations** - Framer Motion animations for engaging interactions
- 📝 **Contact Form** - Complete form with client-side validation and success feedback
- ♿ **Accessibility** - WCAG compliant with proper ARIA labels and semantic HTML
- 📊 **SEO Optimized** - Metadata configuration for better search engine visibility

## 📋 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 10.17
- **Icons**: React Icons 5.2
- **Theme**: next-themes 0.3
- **Language**: TypeScript 5.4
- **Linting**: ESLint

## 📁 Project Structure

```
creative-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar with mobile menu
│   │   ├── ThemeToggle.tsx       # Dark mode toggle button
│   │   ├── HeroSection.tsx       # Hero section with CTA
│   │   ├── ServicesSection.tsx   # 4 Services showcase
│   │   ├── PortfolioSection.tsx  # Portfolio grid with hover effects
│   │   ├── ContactSection.tsx    # Contact form with validation
│   │   └── Footer.tsx            # Footer with social links
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.js                # Next.js config
├── tailwind.config.ts            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
├── .eslintrc.json                # ESLint config
└── README.md                     # This file
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Setup Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd creative-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables** (optional)
   ```bash
   cp .env.local.example .env.local
   ```
   
   Or create a `.env.local` file:
   ```
   NEXT_PUBLIC_SITE_NAME=Creative Studio
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Component Overview

### Navbar
- Fixed navigation bar with smooth scroll behavior
- Mobile hamburger menu
- Dark mode toggle
- Active scroll detection for background color change

### Hero Section
- Full-width gradient background with animations
- Agency name and tagline
- Two CTA buttons (Get Started, View Portfolio)
- Statistics counter
- Floating animated shapes
- Responsive layout

### Services Section
- 4 service cards in responsive grid
- Icons with gradient backgrounds
- Hover animations and transitions
- Icon scale and color changes on hover

### Portfolio Section
- 6 project showcase cards
- Responsive grid layout (1 column mobile, 2 tablets, 3 desktop)
- Image zoom effect on hover
- Category badges
- Info overlay on hover

### Contact Section
- Contact form with three fields (Name, Email, Message)
- **Validation Features**:
  - Required field validation
  - Email format validation (regex pattern)
  - Minimum message length (10 characters)
  - Real-time error clearing as user types
  - Error messages with icons
  
- **Success State**:
  - Success checkmark animation
  - Thank you message
  - Auto-hide after 5 seconds
  - Form reset after submission

- Contact information display
- Dark background with white text

### Footer
- Multi-column layout with links
- Newsletter subscription form
- Social media links with hover effects
- Copyright information
- Scroll to top button
- Responsive grid layout

## 🌙 Dark Mode

The site includes built-in dark mode support using `next-themes`:

- Toggle button in navbar
- Automatic persistence in localStorage
- System preference detection
- Smooth transitions between themes
- All components styled for both light and dark modes

## 📞 Contact Form Validation

The contact form includes robust client-side validation:

```typescript
// Name field
- Required field validation

// Email field
- Required field validation
- Email format validation using regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Message field
- Required field validation
- Minimum 10 characters validation
```

**Validation Features**:
- Real-time error clearing as user types
- Visual error indicators
- Helpful error messages
- Success feedback with checkmark animation
- Loading state during submission

## 🎯 SEO Optimization

The project includes comprehensive SEO setup:

- **Meta Tags**: Title, description, keywords, author
- **Open Graph**: Social media sharing preview
- **Viewport**: Responsive design meta tag
- **Icons**: Favicon configuration
- **Structured Data**: Ready for JSON-LD implementation

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Proper heading hierarchy
- Keyboard navigation support
- Color contrast compliance
- Focus states for keyboard users

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/creative-studio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Environment Variables (if using .env.local)**
   - Go to Project Settings → Environment Variables
   - Add your environment variables
   - Redeploy

### Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Deploy the .next folder
```

**AWS Amplify**:
```bash
# Follow AWS Amplify Next.js deployment guide
```

**Docker**:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📦 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',
      secondary: '#ec4899',
    },
  },
}
```

### Content
- Update component text directly in component files
- Modify portfolio projects in `PortfolioSection.tsx`
- Edit services in `ServicesSection.tsx`
- Update contact information in `ContactSection.tsx`

### Fonts
Add custom fonts in `src/app/globals.css` or via Tailwind config

### Images
Replace placeholder images with your own:
- Portfolio images in `PortfolioSection.tsx`
- Hero section illustration (currently uses emoji)

## 🤝 Contributing

Feel free to fork and customize this template for your own agency website!

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)

## 📞 Support

For questions or issues, please create an issue in the repository.

---

**Built with ❤️ by Creative Studio**
