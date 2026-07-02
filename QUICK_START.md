# 🚀 QUICK START GUIDE

Welcome to **Creative Studio** - A Modern Design Agency Website!

## ⚡ 30 Seconds to Get Started

### MacOS/Linux Users:
```bash
cd creative-studio
npm install
npm run dev
```

### Windows Users:
```powershell
cd creative-studio
npm install
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📋 Installation Commands

### 1. Install Dependencies
```bash
npm install
```

This installs:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- React Icons
- next-themes
- TypeScript

**Expected time**: 2-5 minutes

### 2. Start Development Server
```bash
npm run dev
```

**Output**:
```
✓ Compiled successfully
✓ Ready in 1.5s
- Local: http://localhost:3000
```

### 3. Open Browser
Visit: **http://localhost:3000**

---

## 📁 What's Included

### ✅ Components
- ✨ **Navbar** - Fixed navigation with dark mode toggle & mobile menu
- 🎨 **Hero Section** - Full-width gradient background with CTA buttons
- 🛠️ **Services Section** - 4 service cards with hover animations
- 📸 **Portfolio Section** - Responsive grid with image zoom effects
- 📝 **Contact Form** - Form validation with 4 fields validation
- 🔗 **Footer** - Social links, newsletter, copyright

### ✨ Features
- 🌙 Dark mode toggle (light/dark theme)
- 📱 Mobile-responsive design
- ⚡ Smooth animations with Framer Motion
- 🎯 Form validation (name, email, message)
- ♿ Accessibility compliant
- 🔍 SEO optimized metadata
- 🎨 Beautiful gradient backgrounds
- 💫 Hover effects and transitions

### 🛠️ Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- next-themes

---

## 📝 Available Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production build locally
npm start

# Run code linter
npm run lint
```

---

## 🎨 Customize Your Site

### Change Company Name
Edit **src/components/Navbar.tsx**:
```typescript
// Line ~25
<div>Creative Studio</div>  // Change this
```

### Change Colors
Edit **tailwind.config.ts**:
```typescript
colors: {
  primary: '#your-color',    // Main color
  secondary: '#your-color',  // Accent color
}
```

### Update Services
Edit **src/components/ServicesSection.tsx**:
```typescript
const services = [
  {
    title: 'Your Service',
    description: 'Your description',
    // ...
  },
]
```

### Add Portfolio Projects
Edit **src/components/PortfolioSection.tsx**:
```typescript
const projects = [
  {
    title: 'Your Project',
    category: 'Category',
    image: 'your-image-url',
    // ...
  },
]
```

---

## 🌙 Dark Mode

- **Toggle Button**: Located in top-right navbar
- **Auto-detection**: Uses system preference if not set
- **Persistence**: Saves preference in localStorage
- **All components**: Pre-styled for light and dark modes

---

## 📝 Form Validation

The contact form includes complete validation:

✅ **Name Field**
- Required field validation
- Appears when submitted empty

✅ **Email Field**
- Required field validation
- Email format validation
- Real-time validation feedback

✅ **Message Field**
- Required field validation
- Minimum 10 characters required
- Character count feedback

✅ **Submission**
- Loading state during submission
- Success checkmark animation
- Auto-hide after 5 seconds

---

## 📊 Project Structure

```
creative-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
├── public/                   # Static assets
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.ts        # Tailwind config
├── next.config.js            # Next.js config
└── README.md                 # Full documentation
```

---

## 🚀 Deployment

### Deploy to Vercel (Fastest)

1. Push to GitHub:
```bash
git add .
git commit -m "Deploy creative studio"
git push origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

**Your site is live!** 🎉

### Other Options
- **Netlify**: [Deployment Guide](./DEPLOYMENT.md#netlify-deployment)
- **Self-hosted**: [Setup Instructions](./DEPLOYMENT.md#self-hosted-deployment)
- **Docker**: [Container Guide](./DEPLOYMENT.md#docker-deployment)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## ⚠️ Troubleshooting

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
# Visit http://localhost:3001
```

### "Module not found" error
```bash
npm install
npm run dev
```

### Changes not appearing
```bash
# Press Ctrl+C to stop
npm run dev  # Restart server
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### Build errors
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
npm run build
```

---

## 📖 Full Documentation

- **Setup Guide**: See [SETUP.md](./SETUP.md)
- **Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Full README**: See [README.md](./README.md)

---

## 🆘 Getting Help

1. Check [SETUP.md](./SETUP.md) - Most setup questions answered
2. Read [README.md](./README.md) - Feature documentation
3. See [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment help
4. Check [Next.js Docs](https://nextjs.org/docs)

---

## ✅ Next Steps

1. ✅ **Run the project** - `npm install && npm run dev`
2. 🎨 **Customize** - Update company name, colors, content
3. 📸 **Add content** - Update portfolio, services, images
4. 🚀 **Deploy** - Push to GitHub and deploy to Vercel
5. 🎊 **Celebrate** - Your agency website is live!

---

## 📞 Contact

- Email: hello@creativestudio.com
- Website: https://creativestudio.com

---

**Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion**

**Ready? Type `npm run dev` and let's get started! 🚀**
