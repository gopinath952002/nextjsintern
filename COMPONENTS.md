# 📚 Components Documentation

Detailed documentation for all components in the Creative Studio project.

## Table of Contents

1. [Navbar Component](#navbar-component)
2. [ThemeToggle Component](#themetoggle-component)
3. [HeroSection Component](#herosection-component)
4. [ServicesSection Component](#servicessection-component)
5. [PortfolioSection Component](#portfoliosection-component)
6. [ContactSection Component](#contactsection-component)
7. [Footer Component](#footer-component)

---

## Navbar Component

**File**: `src/components/Navbar.tsx`

### Features
- Fixed navigation bar that stays at top of page
- Logo/brand name
- Navigation links (Home, Services, Portfolio, Contact)
- Dark mode toggle button
- Mobile hamburger menu
- Smooth scroll behavior
- Sticky background on scroll

### Props
The component doesn't accept props - it renders all content directly.

### Usage
```typescript
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* other content */}
    </>
  )
}
```

### Customization

**Change Logo Text**:
```typescript
// Line ~30 in Navbar.tsx
<motion.div className="text-2xl font-bold gradient-text">
  Creative Studio  {/* Change this */}
</motion.div>
```

**Change Navigation Links**:
```typescript
// Line ~37
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
  // Add more links here
]
```

**Change Colors**:
```typescript
// Find className with bg-white and text-gray-700
// Change to your preferred colors
```

### Behavior
- **Desktop**: Shows all links in horizontal menu
- **Mobile**: Shows hamburger icon, links collapse in dropdown
- **Scroll**: Background becomes visible on scroll
- **Dark Mode**: Compatible with light and dark themes

---

## ThemeToggle Component

**File**: `src/components/ThemeToggle.tsx`

### Features
- Dark/Light theme toggle
- Animated button with sun/moon icons
- Uses next-themes for theme management
- Automatically detects system preference
- Persists user choice in localStorage

### Props
The component accepts no props.

### Usage
```typescript
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  return (
    <div>
      <ThemeToggle />
    </div>
  )
}
```

### How It Works

1. **First Load**: Detects system preference (dark/light mode)
2. **User Click**: Toggles between dark and light theme
3. **Storage**: Saves preference to localStorage
4. **Next Visit**: Applies saved preference automatically

### Icons Used
- ☀️ Sun icon (HiSun) - Shows when in dark mode
- 🌙 Moon icon (HiMoon) - Shows when in light mode

### Styling
Apply theme classes in your components:
```typescript
<div className="bg-white dark:bg-gray-900">
  This changes based on theme
</div>
```

---

## HeroSection Component

**File**: `src/components/HeroSection.tsx`

### Features
- Full-width hero section at page top
- Gradient animated background
- Animated floating shapes
- Hero text with gradient styling
- Call-to-action buttons
- Statistics counter
- Responsive design
- Framer Motion animations

### Content Sections

**1. Text Content**
- Main heading: "Creative Digital Experiences"
- Tagline: "We design digital experiences that grow businesses"
- Call-to-action buttons
- Statistics (50+ Projects, 100+ Clients, 8+ Years)

**2. Visual Elements**
- Gradient background with animations
- Grid pattern background
- Floating blob animations
- Hero section with emoji illustration

### Customization

**Change Heading**:
```typescript
// Line ~96
<span className="gradient-text">Creative Digital</span>
<span className="text-gray-900">Experiences</span>
```

**Change Tagline**:
```typescript
// Line ~104
<p className="text-lg md:text-xl">
  We design digital... {/* Change this */}
</p>
```

**Change CTA Button Text**:
```typescript
// Line ~113
<button>Get Started</button>
<a href="#portfolio">View Portfolio</a>
```

**Update Statistics**:
```typescript
// Line ~133
{[
  { number: '50+', label: 'Projects' },
  { number: '100+', label: 'Happy Clients' },
  { number: '8+', label: 'Years' },
]}
```

**Change Button Colors**:
```typescript
// Modify className "btn-primary" or "btn-secondary"
// in globals.css
```

### Animations
- Text slides in from bottom
- Items stagger in sequence
- CTA buttons have scale effect on hover
- Floating shapes animate continuously
- Image container has floating animation

---

## ServicesSection Component

**File**: `src/components/ServicesSection.tsx`

### Features
- 4 service cards in responsive grid
- Icon with gradient background
- Service title and description
- Hover animations and effects
- Arrow animation on hover
- Responsive layout (1 col mobile, 2 cols tablet, 4 cols desktop)

### Services Included

1. **UI/UX Design**
   - Icon: Pencil icon
   - Color: Blue to Cyan gradient

2. **Web Development**
   - Icon: Code icon
   - Color: Purple to Pink gradient

3. **Branding**
   - Icon: Sparkles icon
   - Color: Orange to Red gradient

4. **Digital Marketing**
   - Icon: Trending Up icon
   - Color: Green to Teal gradient

### Customization

**Add More Services**:
```typescript
// In the services array (line ~18)
{
  icon: HiYourIcon,           // Import icon from react-icons
  title: 'Your Service',
  description: 'Your description here',
  color: 'from-color-500 to-color-600',  // Tailwind gradients
},
```

**Change Service Details**:
```typescript
// Edit the services array
services.map(service => ({
  ...service,
  title: 'New Title',
  description: 'New description',
}))
```

**Change Colors**:
```typescript
// In each service object, modify the 'color' property
// Format: 'from-[color]-500 to-[color]-600'
// Examples:
// 'from-blue-500 to-cyan-500'
// 'from-purple-500 to-pink-500'
// 'from-orange-500 to-red-500'
```

### Hover Effects
- Card lifts up (translateY)
- Shadow increases
- Icon scales and rotates
- Arrow becomes visible
- Text color changes

---

## PortfolioSection Component

**File**: `src/components/PortfolioSection.tsx`

### Features
- Responsive grid layout (1/2/3 columns)
- 6 project showcase cards
- Image zoom effect on hover
- Category badges
- Info overlay animation
- Next.js Image optimization
- Responsive images

### Project Structure

Each project object contains:
```typescript
{
  id: 1,
  title: 'Project Name',
  category: 'UI/UX Design',
  image: 'https://via.placeholder.com/400x300',
}
```

### Customization

**Add Projects**:
```typescript
// In the projects array (line ~13)
const projects = [
  // ... existing projects ...
  {
    id: 7,
    title: 'Your New Project',
    category: 'Your Category',
    image: 'https://your-image-url.jpg',
  },
]
```

**Change Project Image**:
```typescript
// Replace placeholder with your image
image: 'https://your-domain.com/images/project.jpg'
```

**Modify Grid Layout**:
```typescript
// In the grid className (line ~64)
// Current: lg:grid-cols-3 (3 columns on large screens)
// Options:
// - lg:grid-cols-2 (2 columns)
// - lg:grid-cols-4 (4 columns)
```

### Image Zoom Effect
- Images scale to 1.15x on hover
- 0.6s smooth transition
- Overlay darkens and blurs
- Title and category appear

### View All Projects Button
- "View All Projects" CTA button
- Positioned below grid
- Uses primary button styling

---

## ContactSection Component

**File**: `src/components/ContactSection.tsx`

### Features
- 2-column layout (info + form)
- Complete form validation
- Error messages with icons
- Success state with checkmark
- Loading state on submit
- Email format validation
- Required field validation

### Form Fields

**1. Name Field**
```
- Type: Text input
- Validation: Required
- Error message: "Name is required"
```

**2. Email Field**
```
- Type: Email input
- Validation: Required + Email format
- Error message: "Please enter a valid email"
- Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

**3. Message Field**
```
- Type: Textarea (5 rows)
- Validation: Required + Min 10 characters
- Error message: "Message must be at least 10 characters"
```

### Validation Logic

```typescript
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Validates on form submit
if (!validateForm()) return  // Stop if validation fails
```

### Contact Information

**Left Column** displays:
- Heading
- Description
- Contact details (Email, Phone, Address)
- Animated hover effects on items

### Customization

**Change Contact Email**:
```typescript
// Line ~145 in ContactSection
{ label: 'Email', value: 'your-email@example.com' }
```

**Change Contact Phone**:
```typescript
{ label: 'Phone', value: '+1 (555) 123-4567' }
```

**Change Contact Address**:
```typescript
{ label: 'Address', value: 'Your address here' }
```

**Modify Form Validation**:
```typescript
// In validateForm() function
// Add custom validation rules:
if (formData.name.length < 2) {
  newErrors.name = 'Name must be at least 2 characters'
}
```

**Change Success Message**:
```typescript
// Search for "Thank you!" in component
<h3>Your Custom Message</h3>
<p>Your custom description</p>
```

### Form Behavior

**User Flow**:
1. User fills form
2. Clicks "Send Message"
3. Validation runs
4. If valid:
   - Button shows "Sending..."
   - API call (simulated)
   - Success screen shows for 5 seconds
   - Form resets
5. If invalid:
   - Error messages appear
   - User can correct and resubmit

### Error States
- Errors shown with red border
- Icons (HiExclamationCircle) next to errors
- Errors clear when user starts typing
- Helpful error messages

---

## Footer Component

**File**: `src/components/Footer.tsx`

### Features
- 4-column layout (Brand, Links, Services, Newsletter)
- Social media links (Facebook, Twitter, Instagram, LinkedIn)
- Newsletter subscription form
- Scroll-to-top button
- Copyright information
- Animated background
- Responsive design

### Footer Sections

**1. Brand**
- Company name
- Brand description
- Company overview

**2. Quick Links**
- Home
- Services
- Portfolio
- Contact

**3. Services**
- UI/UX Design
- Web Development
- Branding
- Digital Marketing

**4. Newsletter**
- Email input
- Subscribe button
- Subscription description

### Customization

**Change Brand Description**:
```typescript
// Line ~70
<p className="text-gray-400">
  Your new description... {/* Change this */}
</p>
```

**Add More Quick Links**:
```typescript
// footerLinks array (line ~46)
const footerLinks = [
  { label: 'Home', href: '#home' },
  // Add more links:
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
]
```

**Change Social Links**:
```typescript
// socialLinks array (line ~35)
// Add more social platforms
{ icon: HiYoutube, href: '#youtube', label: 'YouTube' }
```

**Update Copyright Year**:
```typescript
// Already automatic using:
const currentYear = new Date().getFullYear()
// Displays: © 2024 Creative Studio (automatically updates)
```

### Social Media Icons
- Facebook
- Twitter
- Instagram
- LinkedIn

Each has hover animation (scale + rotate) and hover color change.

### Scroll to Top
- Button at bottom right
- Smooth scroll animation
- Hover effects

### Newsletter Form
- Email input
- Subscribe button
- Currently doesn't submit (can add backend integration)

---

## Common Patterns

### Animations

All components use Framer Motion for animations:

```typescript
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Hover effects
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Responsive Design

```typescript
// Mobile-first approach
className="
  text-sm md:text-lg lg:text-xl
  px-4 md:px-8
  grid md:grid-cols-2 lg:grid-cols-4
"
```

### Dark Mode

```typescript
className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
  hover:bg-gray-100 dark:hover:bg-gray-800
"
```

---

## Tips & Best Practices

### 1. **Performance**
- Components use lazy loading
- Images optimized with Next.js Image
- Animations use GPU acceleration
- Code splitting handled by Next.js

### 2. **Accessibility**
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance

### 3. **Customization**
- Modify props to change behavior
- Edit tailwind classes for styling
- Update content in arrays
- Keep component structure intact

### 4. **Testing Changes**
- Make one change at a time
- Test on mobile and desktop
- Check dark mode compatibility
- Verify animations are smooth

---

## Next Steps

- ✅ Understand component structure
- 🎨 Customize components to your brand
- 📸 Add your own images
- 🚀 Deploy to production

For more details, see [README.md](./README.md) and [SETUP.md](./SETUP.md)

---

**Happy Customizing! 🎨**
