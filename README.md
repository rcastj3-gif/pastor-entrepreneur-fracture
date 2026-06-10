# The Pastor-Entrepreneur Fracture Authority Diagnostic Landing Page

Production-ready landing page for the Authority Diagnostic offer.

## Quick Start

### Local Development
```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

### Deploy to Vercel

1. **Push to GitHub** (required for Vercel integration)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Pastor-Entrepreneur Fracture landing page"
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/pastor-entrepreneur-fracture.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Select your GitHub repository
   - Keep default settings
   - Click "Deploy"

3. **Set Environment Variables** (in Vercel Dashboard)
   ```
   GRAWT_API_KEY = your_grawt_api_key
   AGENTMAIL_API_KEY = your_agentmail_api_key
   ```

4. **Your site is live!**
   - Vercel automatically assigns a URL
   - Custom domain: Add in "Settings" > "Domains"

## File Structure

```
├── index.html              # Main landing page (semantic HTML)
├── styles.css              # Complete styling (mobile-first, responsive)
├── form-handler.js         # Form submission & analytics
├── package.json            # Dependencies & scripts
├── vercel.json             # Vercel configuration
├── api/
│   └── capture-lead.js     # API endpoint for form handling
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Features

### ✓ Fully Responsive
- Mobile-first design
- Desktop, tablet, mobile optimized
- Touch-friendly buttons and forms

### ✓ Conversion Optimized
- Clear value proposition
- Multiple CTAs throughout
- Trust signals (testimonials, social proof)
- Email capture form integrated

### ✓ Analytics Ready
- Google Analytics 4 configured
- Scroll depth tracking
- CTA click tracking
- Form submission tracking

### ✓ SEO Optimized
- Semantic HTML5
- Meta tags (title, description, OG)
- Mobile-responsive meta viewport
- Canonical URL

### ✓ Fast & Accessible
- Optimized CSS
- Lazy loading ready
- WCAG 2.1 AA compliant
- Core Web Vitals optimized

### ✓ Form Integration
- Email capture form
- Grawt CRM sync (optional)
- Welcome email on signup
- Calendly booking link

## Customization

### Change Colors
Edit `styles.css`:
```css
/* Primary Gold */
--primary-gold: #c9a563;

/* Dark Gray */
--dark-gray: #1a1a1a;
```

### Update Content
Edit `index.html`:
- Headlines in `<h1>`, `<h2>`, etc.
- Body copy in `<p>` tags
- Testimonials in `.testimonial-card` sections
- Pricing in `.price-card` sections

### Update Links
- Calendly link: search for `calendly.com` in HTML
- Email: search for `reyes@agentmail.to`
- Phone: add to footer

### Add Video
Replace YouTube embed placeholder in hero section:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...></iframe>
```

## Analytics Tracking

### Google Analytics
- Setup: Edit GA ID in `<head>`
- Tracks: Pageviews, scroll depth, CTA clicks, form submissions
- View data: analytics.google.com

### Grawt Integration
- Captures leads directly to CRM
- Syncs: Name, email, revenue level, booking readiness
- API key required (in Vercel environment variables)

### Email Service
- AgentMail sends welcome email
- Customizable in `api/capture-lead.js`
- API key required

## Testing

### Before Going Live
1. ✓ Test form submission (check email received)
2. ✓ Test responsive design (mobile, tablet, desktop)
3. ✓ Test all links and buttons
4. ✓ Test video embed
5. ✓ Check Google Analytics is firing
6. ✓ Test analytics events (scroll, CTA clicks)
7. ✓ Check mobile speed (Google PageSpeed Insights)
8. ✓ Test accessibility (WAVE tool)

### Load Testing
```bash
npm run build
npm run start
```

## Performance

- **Lighthouse Scores Target**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All Green
- **Page Load**: <3s on 4G

### Optimization Tips
1. Compress images (TinyPNG)
2. Use WebP format for images
3. Minify CSS/JS (handled by Vercel)
4. Enable Brotli compression (default on Vercel)

## SEO Checklist

- [x] Title tag (unique, compelling)
- [x] Meta description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URL
- [x] Semantic HTML
- [x] Mobile-responsive
- [x] Fast page speed
- [x] No broken links

## Support

**Need help?** Contact reyes@agentmail.to

## License

Proprietary - Reyes Castillo. All rights reserved.

---

**Deployed:** [Insert your Vercel URL here]
