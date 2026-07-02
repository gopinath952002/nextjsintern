# 🎯 START HERE - Installation & Getting Started

## ⚡ Get Running in 3 Commands

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📋 Prerequisites

Before you start, make sure you have:

✅ **Node.js 18+** installed
- Check: `node --version`
- Download: [nodejs.org](https://nodejs.org)

✅ **npm 9+** included with Node.js
- Check: `npm --version`

✅ **A code editor** (VS Code recommended)
- Download: [code.visualstudio.com](https://code.visualstudio.com)

---

## 🚀 Installation Steps

### Step 1: Open Terminal/Command Prompt
- Navigate to your `creative-studio` directory
- Or open the project folder in VS Code terminal

### Step 2: Install Dependencies
```bash
npm install
```

This downloads:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- React Icons
- And all other packages

**Time**: 2-5 minutes

### Step 3: Start Development Server
```bash
npm run dev
```

You should see:
```
✓ Compiled successfully
✓ Ready in 1.5s
- Local: http://localhost:3000
```

### Step 4: Open in Browser
Visit: **http://localhost:3000**

**Congratulations!** Your website is running! 🎉

---

## 💻 What You See

### Local Development
- **URL**: http://localhost:3000
- **Auto-reload**: Changes appear instantly
- **Dev tools**: Full debugging capabilities

### Sections On Page
1. **Navigation** - Top navbar with menu & dark mode
2. **Hero** - Large welcome section with CTA buttons
3. **Services** - 4 service cards
4. **Portfolio** - 6 project showcase
5. **Contact** - Contact form with validation
6. **Footer** - Social links & info

---

## 🎨 Try These First

### Test Dark Mode
- Click the moon/sun icon in top-right
- Watch dark mode toggle

### Test Mobile View
- Press F12 (or Cmd+Option+I on Mac)
- Click mobile icon to see responsive design

### Test Form
- Scroll to Contact section
- Try submitting with empty fields (see validation)
- Fill all fields correctly and submit
- See success message

### Try Animations
- Hover over service cards
- Hover over portfolio projects
- Scroll down slowly to see fade-in effects

---

## 📝 Edit Content

### Change Company Name

**In Navbar** - `src/components/Navbar.tsx` line ~30:
```typescript
<div>Creative Studio</div>  // Change this to your name
```

**In Title** - `src/app/layout.tsx` line ~6:
```typescript
title: 'Creative Studio - Modern Design Agency',
// Change first part
```

Save and see changes instantly!

### Change Colors

**In** `tailwind.config.ts` line ~13:
```typescript
colors: {
  primary: '#6366f1',     // Change this
  secondary: '#ec4899',   // And this
}
```

Stop server and restart: `npm run dev`

### Update Hero Section Text

**In** `src/components/HeroSection.tsx` line ~104:
```typescript
<p>We design digital experiences that grow businesses.</p>
// Change this paragraph
```

Change appears instantly!

### Add Portfolio Project

**In** `src/components/PortfolioSection.tsx` line ~13:
```typescript
const projects = [
  // ... existing projects ...
  {
    id: 7,
    title: 'My New Project',
    category: 'UI/UX Design',
    image: 'https://via.placeholder.com/400x300',
  },
]
```

See your project appear on the page!

---

## 🛠️ Available Commands

```bash
# Start development (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check code quality
npm run lint

# Clear npm cache (if you have issues)
npm cache clean --force
```

---

## 📱 Mobile Testing

### Built-in Mobile View
1. Press **F12** or **Cmd+Option+I** (Mac)
2. Click mobile device icon
3. Select device to test

### Responsive Breakpoints
- Mobile: 0-768px
- Tablet: 768px-1024px
- Desktop: 1024px+

All components work perfectly on each size!

---

## 🌙 Dark Mode Features

### Automatic Detection
- First visit: Uses your system preference
- Subsequent visits: Remembers your choice

### How to Toggle
- Click sun/moon icon in navbar
- Choice saves to browser

### Testing
- Light mode: Clean white design
- Dark mode: Professional dark design
- All text remains readable

---

## 🔧 Troubleshooting

### "npm command not found"
```bash
# Reinstall Node.js from nodejs.org
# Then restart your terminal
```

### "Port 3000 already in use"
```bash
# Use different port
npm run dev -- -p 3001
# Visit http://localhost:3001
```

### "Module not found" error
```bash
# Reinstall dependencies
npm install
npm run dev
```

### "Changes not showing"
```bash
# Press Ctrl+C to stop
npm run dev    # Restart server
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### "npm install takes forever"
```bash
# Try clearing cache
npm cache clean --force
# Then retry
npm install
```

More help: See [SETUP.md](SETUP.md#troubleshooting)

---

## 📚 Full Documentation

| Document | What's Inside |
|----------|---------------|
| [README.md](README.md) | Features, usage, tech stack |
| [QUICK_START.md](QUICK_START.md) | 30-second quick start |
| [SETUP.md](SETUP.md) | Detailed setup & troubleshooting |
| [COMPONENTS.md](COMPONENTS.md) | Each component explained |
| [DEPLOYMENT.md](DEPLOYMENT.md) | How to deploy online |
| [PROJECT_COMPLETE.md](PROJECT_COMPLETE.md) | What's included & next steps |

---

## 🚀 Next: Customization

### Quick Changes (5 minutes)
- [ ] Update company name (2 places)
- [ ] Change colors in tailwind.config.ts
- [ ] Update hero section text
- [ ] Update contact information

### Content Changes (15 minutes)
- [ ] Add your portfolio projects
- [ ] Update service descriptions
- [ ] Add your images
- [ ] Update contact info

### Build & Test (5 minutes)
```bash
npm run build
npm start
# Test at http://localhost:3000
```

### Deploy (5 minutes)
```bash
git push
# Go to vercel.com and deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for full deployment guide.

---

## 📊 Project Stats

| Item | Details |
|------|---------|
| **Framework** | Next.js 14 |
| **Components** | 7 (all ready to use) |
| **Cool Features** | Dark mode, animations, form validation |
| **Setup Time** | ~5 minutes |
| **Build Size** | ~2MB (optimized) |
| **Mobile Ready** | Yes ✅ |
| **Deployment** | Vercel, Netlify, or self-hosted |

---

## ✅ Checklist

- [ ] Node.js installed (version 18+)
- [ ] Ran `npm install` successfully
- [ ] Started dev server with `npm run dev`
- [ ] Opened http://localhost:3000
- [ ] Can see the website
- [ ] Tested dark mode toggle
- [ ] Tested mobile view
- [ ] Tested contact form
- [ ] Planning customizations

---

## 🎉 You're Ready!

Your Creative Studio website is:
- ✅ Fully functional
- ✅ Beautifully designed
- ✅ Mobile responsive
- ✅ Production-ready
- ✅ Ready to customize

### Start Now:
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Questions?
Check the documentation files - everything is covered!

---

## 🤝 Support

### Common Questions

**Q: How do I change the colors?**
A: Edit `tailwind.config.ts` line 13

**Q: How do I add my portfolio projects?**
A: Edit the projects array in `PortfolioSection.tsx`

**Q: How do I deploy?**
A: See [DEPLOYMENT.md](DEPLOYMENT.md)

**Q: Can I use commercial images?**
A: Yes, use your own or royalty-free images

**Q: Will this work on mobile?**
A: Yes! It's fully responsive and mobile-first

**Q: How do I add a blog?**
A: Create new folder in `src/app/blog/` and add pages

See [README.md](README.md) for more FAQs.

---

## 🚀 Ready? Let's Go!

```bash
npm install && npm run dev
# http://localhost:3000
```

---

**Congratulations! You now have a professional Design Agency website! 🎊**

**Next Step**: Read [QUICK_START.md](QUICK_START.md) for customization tips.

---

*Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion*
