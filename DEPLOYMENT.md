# 🚀 Deployment Guide

This guide will help you deploy your Creative Studio website to production.

## Table of Contents

1. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
2. [Netlify Deployment](#netlify-deployment)
3. [Self-Hosted Deployment](#self-hosted-deployment)
4. [Docker Deployment](#docker-deployment)
5. [Domain Configuration](#domain-configuration)
6. [Performance Optimization](#performance-optimization)

---

## Vercel Deployment (Recommended)

### Why Vercel?
- **Official Next.js Host**: Built by the creators of Next.js
- **Zero Configuration**: Automatic detection and optimization
- **Edge Functions**: Deploy serverless functions globally
- **Preview URLs**: Each PR gets a preview deployment
- **Analytics**: Built-in performance monitoring

### Step-by-Step Guide

#### 1. Prepare Your Project
```bash
# Ensure everything works locally
npm run build
npm start

# Commit your changes to Git
git add .
git commit -m "Prepare for deployment"
git push
```

#### 2. Create Vercel Account
- Visit [vercel.com](https://vercel.com)
- Sign up with GitHub, GitLab, or Bitbucket
- Authorize Vercel to access your repositories

#### 3. Import Project
- Click "New Project" on Vercel dashboard
- Select your GitHub repository (`creative-studio`)
- Vercel will automatically detect Next.js configuration

#### 4. Configure Environment Variables
```
Project Settings → Environment Variables → Add

NEXT_PUBLIC_SITE_NAME = Creative Studio
NEXT_PUBLIC_SITE_URL = https://your-domain.com
```

#### 5. Deploy
- Click "Deploy"
- Vercel builds and deploys automatically
- Your site is live at `*.vercel.app`

#### 6. Connect Custom Domain
```
Project Settings → Domains
Add your domain (e.g., creativestudio.com)
Follow DNS configuration instructions
```

### Environment Variables in Vercel

Add variables in **Settings → Environment Variables**:

```
NEXT_PUBLIC_SITE_NAME: Creative Studio
NEXT_PUBLIC_SITE_URL: https://creativestudio.com
```

Check the `.env.local.example` file for all available variables.

### Automatic Preview Deployments

Every time you push to a branch or create a PR:
1. Vercel automatically builds a preview
2. Get a unique preview URL (e.g., `creative-studio-pr-123.vercel.app`)
3. Perfect for testing before merging

### Production Deployment

For main branch deployments:
1. Push to `main/master` branch
2. Automatic production build and deployment
3. Traffic automatically routed to new version (zero downtime)

---

## Netlify Deployment

### Prerequisites
- Netlify account (free at [netlify.com](https://netlify.com))
- GitHub repository

### Quick Deploy Steps

1. **Connect Repository**
   - New site → Import an existing project
   - Select GitHub
   - Choose your repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Add Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add NEXT_PUBLIC_SITE_NAME and NEXT_PUBLIC_SITE_URL

4. **Deploy**
   - Click "Deploy site"
   - Your site is live!

### Custom Domain
- Domain settings → Custom domain
- Follow DNS configuration

---

## Self-Hosted Deployment

### Option 1: Linux Server (using PM2)

#### 1. SSH into your server
```bash
ssh user@your-server.com
```

#### 2. Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs npm
```

#### 3. Clone and Setup
```bash
git clone https://github.com/your-username/creative-studio.git
cd creative-studio
npm install
npm run build
```

#### 4. Install and Configure PM2
```bash
sudo npm install -g pm2
pm2 start npm --name "creative-studio" -- start
pm2 startup
pm2 save
```

#### 5. Setup Nginx as Reverse Proxy
```bash
sudo apt-get install nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/creative-studio
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable configuration:
```bash
sudo ln -s /etc/nginx/sites-available/creative-studio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 6. SSL Certificate (Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Option 2: DigitalOcean App Platform

1. **Connect Repository**
   - Create new app → Select repository

2. **Configure**
   - Build command: `npm run build`
   - Run command: `npm start`
   - HTTP port: 3000

3. **Deploy**
   - DigitalOcean handles everything!

---

## Docker Deployment

### Create Dockerfile

#### 1. Build Docker Image
```dockerfile
# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV production

# Start application
CMD ["npm", "start"]
```

#### 2. Create .dockerignore
```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.env.local
.next
out
public/static
.DS_Store
```

#### 3. Build Image
```bash
docker build -t creative-studio:1.0 .
```

#### 4. Run Container
```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_NAME="Creative Studio" \
  -e NEXT_PUBLIC_SITE_URL="https://your-domain.com" \
  creative-studio:1.0
```

### Deploy to Docker Hub
```bash
# Login
docker login

# Tag image
docker tag creative-studio:1.0 username/creative-studio:1.0

# Push
docker push username/creative-studio:1.0
```

### Deploy to Container Services

**AWS ECS**, **Google Cloud Run**, **Azure Container Instances**:
1. Push Docker image to registry
2. Create container service
3. Reference your image
4. Configure environment variables
5. Deploy!

---

## Domain Configuration

### DNS Setup

#### For Vercel/Netlify
- Add CNAME record pointing to their servers
- Instructions provided in their dashboard

#### For Self-Hosted
- A Record pointing to your server IP:
  ```
  Type: A
  Name: @
  Value: your-server-ip
  ```

- CNAME for www:
  ```
  Type: CNAME
  Name: www
  Value: your-domain.com
  ```

#### Add SSL Certificate
- **Vercel/Netlify**: Automatic with Let's Encrypt
- **Self-hosted**: Use Certbot and Let's Encrypt
- **Docker**: Use nginx-proxy for SSL handling

---

## Performance Optimization

### 1. Build Optimization
```bash
# Analyze bundle size
npm install -D @next/bundle-analyzer

# Check performance
npm run build
```

### 2. Image Optimization
- All portfolio images use Next.js `Image` component
- Automatic WebP conversion
- Responsive image serving

### 3. Caching Strategy
- Set cache headers in `next.config.js`
- Browser caching for static assets
- CDN caching for images

### 4. Monitoring

**Vercel Analytics**:
```typescript
// Already integrated in vercel.json
```

**Google Analytics** (optional):
```bash
npm install next-google-analytics
```

### 5. Performance Checklist

- [ ] Configure custom domain
- [ ] Add SSL certificate
- [ ] Enable image optimization
- [ ] Add analytics
- [ ] Configure CDN
- [ ] Set up monitoring
- [ ] Configure backups
- [ ] Test on real devices

---

## Troubleshooting

### Build Fails
```bash
# Check Node version
node --version  # Should be 18+

# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### High Memory Usage
- Increase server RAM
- Use production mode
- Enable caching

### Slow Loading
- Check image sizes
- Enable gzip compression
- Use CDN
- Optimize database queries

### Environment Variables Not Loading
- Ensure `.env.local` has correct format
- Restart development server
- Check Vercel environment settings

---

## Monitoring & Maintenance

### Production Checklist
- [ ] Enable error tracking (Sentry)
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure email notifications
- [ ] Regular backups
- [ ] Update dependencies monthly
- [ ] Monitor performance metrics
- [ ] Track user analytics

### Regular Updates
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update Next.js
npm install next@latest
```

---

## Support

For deployment issues:
- Check [Next.js Documentation](https://nextjs.org/docs/deployment)
- Visit [Vercel Status](https://status.vercel.com)
- Review [Netlify Support](https://docs.netlify.com)

---

**Happy Deploying! 🚀**
