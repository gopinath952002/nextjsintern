# 📦 Installation & Setup Guide

Complete step-by-step guide to get your Creative Studio website up and running.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Detailed Setup](#detailed-setup)
4. [Development](#development)
5. [Troubleshooting](#troubleshooting)
6. [Next Steps](#next-steps)

---

## Prerequisites

Before you begin, make sure you have:

- **Node.js**: Version 18.17 or later
- **npm**: Comes with Node.js (version 9 or later)
- **Git**: For version control (optional but recommended)
- **Code Editor**: VS Code, WebStorm, or your favorite editor

### Check Your Setup

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version (should be 9+)
npm --version

# Check Git (optional)
git --version
```

If you need to install Node.js, download it from [nodejs.org](https://nodejs.org)

---

## Quick Start

Get up and running in 5 minutes!

### 1. Install Dependencies
```bash
cd creative-studio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

**That's it!** Your site is now running locally. 🎉

---

## Detailed Setup

### Step 1: Download/Clone the Project

#### Option A: Using Git
```bash
git clone https://github.com/your-username/creative-studio.git
cd creative-studio
```

#### Option B: Download ZIP
1. Download the project ZIP file
2. Extract it to your desired location
3. Open terminal/command prompt in the project folder

### Step 2: Verify Project Structure

```bash
# List the files
ls -la

# You should see:
# - src/
# - public/
# - package.json
# - tsconfig.json
# - tailwind.config.ts
# - next.config.js
```

### Step 3: Install Node.js Dependencies

```bash
# Install all required packages
npm install
```

This will:
- Download Next.js 14
- Install React 18
- Add Tailwind CSS
- Install Framer Motion
- Add all other dependencies
- Create `node_modules/` folder

**Time**: Usually 2-5 minutes depending on internet speed

### Step 4: Create Environment File

```bash
# Copy the example file
cp .env.local.example .env.local
```

Or create `.env.local` manually with:
```
NEXT_PUBLIC_SITE_NAME=Creative Studio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 5: Start Development Server

```bash
npm run dev
```

You'll see output like:
```
> creative-studio@0.1.0 dev
> next dev

  ▲ Next.js 14.2.0
  - local:        http://localhost:3000
  - environments: .env.local

✓ Ready in 2.1s
```

### Step 6: Open in Browser

Visit [http://localhost:3000](http://localhost:3000) - your website is live!

### Step 7: Make Changes & See Live Updates

Edit any file in the `src/` folder and see changes instantly thanks to Next.js Fast Refresh!

---

## Development

### Project Structure Explained

```
creative-studio/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root HTML layout
│   │   ├── page.tsx            # Home page content
│   │   └── globals.css         # Global styles
│   │
│   └── components/
│       ├── Navbar.tsx          # Navigation bar
│       ├── ThemeToggle.tsx      # Dark mode button
│       ├── HeroSection.tsx      # Top hero section
│       ├── ServicesSection.tsx  # Services showcase
│       ├── PortfolioSection.tsx # Project portfolio
│       ├── ContactSection.tsx   # Contact form
│       └── Footer.tsx           # Footer
│
├── public/                      # Static files (images, icons)
├── package.json                # Dependencies list
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind CSS config
├── postcss.config.js          # PostCSS config
├── next.config.js             # Next.js config
└── README.md                  # Documentation
```

### Development Commands

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check code quality
npm run lint
```

### Hot Reload Development

**Next.js Fast Refresh** means changes appear instantly:

1. Edit `src/components/Navbar.tsx`
2. Save the file
3. Browser updates automatically (no page reload!)
4. Component state is preserved

### File Editing Tips

**Don't need to restart server when editing:**
- Component files in `src/components/`
- Page files in `src/app/`
- CSS files
- Config files (tailwind.config.ts, etc.)

**Do need to restart for:**
- `.env.local` changes - restart to apply new env vars
- `next.config.js` changes - requires rebuild

```bash
# Restart (press Ctrl+C then):
npm run dev
```

---

## Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',      // Change primary color
      secondary: '#your-color',    // Change secondary color
    },
  },
}
```

Then restart the dev server.

### Update Content

Edit component files directly:

**Hero Section Title**: `src/components/HeroSection.tsx`
```typescript
// Find and change:
<span className="gradient-text">Creative Digital</span>
```

**Services**: `src/components/ServicesSection.tsx`
```typescript
// Edit the services array
const services = [
  {
    title: 'Your Service Name',
    description: 'Your description',
    // ...
  },
]
```

**Portfolio Projects**: `src/components/PortfolioSection.tsx`
```typescript
// Edit projects array
const projects = [
  {
    title: 'Your Project',
    category: 'Your Category',
    // ...
  },
]
```

### Add Custom Fonts

In `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your-Font:wght@400;600;700&display=swap');

body {
  font-family: 'Your-Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Add Images

1. Place images in `public/` folder
2. Use in components:

```typescript
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={400}
  height={300}
/>
```

---

## Building for Production

### 1. Create Production Build

```bash
npm run build
```

Output:
```
> next build

✓ Compiled successfully
✓ Linted successfully
✓ Collected page data
✓ Generating optimized production build

Route (pages)                              Size      First Load JS
┌ λ /                                      0 B        87.2 kB
```

### 2. Test Production Build Locally

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to test

### 3. Version Your Code

```bash
git add .
git commit -m "Version X.X.X - Description of changes"
git push origin main
```

### 4. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

## Troubleshooting

### Issue: Port 3000 Already in Use

```bash
# Solution 1: Use different port
npm run dev -- -p 3001
# Then visit http://localhost:3001

# Solution 2: Kill process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue: Dependencies Won't Install

```bash
# Clear npm cache
npm cache clean --force

# Remove package-lock.json
rm package-lock.json

# Fresh install
npm install
```

### Issue: Styles Not Showing

```bash
# Rebuild Tailwind CSS
npm run build

# Then restart dev server
npm run dev
```

### Issue: "Cannot find module" Error

```bash
# This usually means missing node_modules
npm install

# Or if specific package is missing:
npm install framer-motion next-themes react-icons
```

### Issue: Environment Variables Not Working

1. Make sure `.env.local` file exists
2. Restart dev server:
   ```bash
   # Press Ctrl+C to stop
   npm run dev  # Restart
   ```
3. Check `.env.local` has correct format:
   ```
   NEXT_PUBLIC_SITE_NAME=Creative Studio
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Issue: Dark Mode Not Working

1. Ensure ThemeProvider is in layout.tsx
2. Check HTML tag has `suppressHydrationWarning`
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Form Not Submitting

1. Check browser console (F12) for errors
2. Ensure validation passes:
   - Name: not empty
   - Email: valid email format
   - Message: at least 10 characters

---

## Performance Tips

### 1. Optimize Images
```typescript
// Always use Next.js Image component
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  priority  // For above-the-fold images
/>
```

### 2. Check Build Size
```bash
npm run build
```

Look at the output to see which pages/components are largest.

### 3. Monitor Performance
- Open DevTools (F12)
- Go to Lighthouse tab
- Run audit
- Check performance scores

---

## Next Steps

### 1. Customize Your Site
- [ ] Change company name
- [ ] Update services
- [ ] Add portfolio projects
- [ ] Customize colors
- [ ] Add your logo
- [ ] Update contact info

### 2. Add Features
- [ ] Newsletter signup
- [ ] Blog section
- [ ] Testimonials
- [ ] Team page
- [ ] FAQ section
- [ ] Integration with backend API

### 3. Publishing
- [ ] Set up custom domain
- [ ] Deploy to Vercel/Netlify
- [ ] Set up email notifications
- [ ] Add analytics
- [ ] Enable SEO

### 4. Maintenance
- [ ] Regular backups
- [ ] Update dependencies
- [ ] Monitor performance
- [ ] Track user analytics
- [ ] Update content

---

## Useful Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

### Learning
- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Tutorials](https://www.youtube.com/results?search_query=tailwind+css+tutorial)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tools
- [VS Code](https://code.visualstudio.com/) - Free code editor
- [Figma](https://www.figma.com/) - Design tool
- [Color Picker](https://htmlcolorcodes.com/) - Color selection
- [Image Compressor](https://www.tinypng.com/) - Optimize images

---

## Getting Help

### If Something Goes Wrong

1. **Check the error message** - It usually tells you what's wrong
2. **Read the documentation** - Most questions are answered there
3. **Search online** - Google the error message
4. **Check GitHub Issues** - See if others had the same problem
5. **Ask for help** - Create an issue in the repository

### Common Solutions

- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`
- Restart server: Stop current server and run `npm run dev`
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

---

## Congratulations! 🎉

You've successfully set up Creative Studio!

**Next**: Check out [DEPLOYMENT.md](./DEPLOYMENT.md) to deploy your site to the world!

---

**Questions? Issues? Check the [README.md](./README.md) for more information.**
