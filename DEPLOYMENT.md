# Deployment Guide: Pastor-Entrepreneur Fracture Landing Page

## 🚀 PRODUCTION DEPLOYMENT (Step-by-Step)

### STEP 1: Prepare Your GitHub Repository

Choose one:
- **Option A: Create NEW repository** (Recommended for clean deployment)
- **Option B: Use existing repository** (If you have one)

#### Option A: Create NEW Repository

```bash
# Navigate to your project
cd /path/to/pastor-entrepreneur-fracture

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Pastor-Entrepreneur Fracture Authority Diagnostic landing page"

# Create repository on GitHub
# 1. Go to https://github.com/new
# 2. Name: pastor-entrepreneur-fracture
# 3. Description: Production landing page for Authority Diagnostic
# 4. Public or Private (your choice)
# 5. DO NOT initialize with README (we already have one)
# 6. Click "Create repository"

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/pastor-entrepreneur-fracture.git
git branch -M main
git push -u origin main
```

#### Option B: Use Existing Repository

```bash
cd /path/to/your/existing/repo

# Copy landing page files
cp -r /path/to/pastor-entrepreneur-fracture/* .

# Commit and push
git add .
git commit -m "Add: Pastor-Entrepreneur Fracture landing page"
git push origin main
```

---

### STEP 2: Deploy to Vercel

**Method 1: Vercel Dashboard (Easiest)**

1. Go to https://vercel.com/new
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Find and select `pastor-entrepreneur-fracture` repository
5. Keep default settings (Framework: Other, Root Directory: ./)
6. Click "Deploy"

**Wait 2-3 minutes for deployment to complete**

---

### STEP 3: Set Environment Variables

#### In Vercel Dashboard:
1. Open your project
2. Go to Settings → Environment Variables
3. Add these variables (get values from step 4 & 5):

```
GRAWT_API_KEY = (from Grawt dashboard)
AGENTMAIL_API_KEY = (from AgentMail dashboard)
```

4. Redeploy (Settings → Deployments → Redeploy → main)

---

### STEP 4: Get Your Grawt API Key

1. Go to https://grawt.io (sign in)
2. Dashboard → Settings → API Keys
3. Copy your API key
4. Add to Vercel environment variables

**Testing Grawt Integration:**
- Submit form on live site
- Check Grawt dashboard for new lead
- Should appear within 10 seconds

---

### STEP 5: Get Your AgentMail API Key

1. Go to https://agentmail.to (sign in)
2. Settings → API Keys
3. Copy your API key
4. Add to Vercel environment variables

**Testing Email Integration:**
- Submit form with your test email
- Check your inbox for welcome email
- Should arrive within 30 seconds

---

### STEP 6: Set Custom Domain (Optional but Recommended)

#### Option 1: Vercel Subdomain (Free)
- Your site gets a free `*.vercel.app` domain
- Example: `pastor-entrepreneur-fracture.vercel.app`
- No setup needed—automatically assigned

#### Option 2: Custom Domain

**If you own a domain:**

1. Vercel Dashboard → Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `fracture-diagnostic.com`)
4. Vercel shows DNS records
5. Go to your domain registrar (Namecheap, GoDaddy, etc.)
6. Update DNS to point to Vercel
7. Wait 24-48 hours for DNS propagation

**Popular registrars:**
- namecheap.com
- godaddy.com
- domain.com
- vercel.com domains

---

### STEP 7: Configure Google Analytics

1. Go to https://analytics.google.com
2. Create new property (or use existing)
3. Get your Measurement ID (looks like: `G-XXXXXXXXXX`)
4. Open `index.html` in your repo
5. Find: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>`
6. Replace `G-XXXXXXXXXX` with your actual ID
7. Also replace in the `gtag('config', 'G-XXXXXXXXXX')` line
8. Commit and push to GitHub
9. Vercel automatically redeploys

**Test Analytics:**
- Visit your live site
- Open browser DevTools → Network tab
- Scroll down page
- Check Network for gtag events firing
- Check Analytics dashboard for traffic

---

### STEP 8: Test Everything

**On Desktop:**
- [ ] Page loads quickly
- [ ] All sections visible
- [ ] Video plays
- [ ] All buttons clickable
- [ ] Form submits successfully
- [ ] Receive welcome email
- [ ] Links work (internal and external)
- [ ] Text is readable
- [ ] Images load

**On Mobile:**
- [ ] Page is responsive (no horizontal scroll)
- [ ] Touch buttons are large enough
- [ ] Form is easy to fill
- [ ] Video is watchable
- [ ] Text is readable

**Form Testing:**
```
Email: test@example.com
First Name: Test
Revenue: $25K-100K
Ready to Book: ✓

Expected:
1. Form submits
2. Success message appears
3. Email received within 30 sec
4. Lead appears in Grawt within 10 sec
```

---

### STEP 9: Monitor & Optimize

**Weekly:**
- [ ] Check Google Analytics for traffic
- [ ] Check form submissions in Grawt
- [ ] Check email opens in AgentMail
- [ ] Monitor page speed (PageSpeed Insights)

**Metrics to Track:**
- Page views
- Form submission rate (target: 15-20%)
- Email open rate (target: 30-40%)
- Booking rate (target: 20-30% of form submitters)
- Average scroll depth (target: >75%)

**Optimization:**
- A/B test CTA button text
- A/B test headlines
- Optimize form fields (less = more conversions)
- Improve page speed if <90 Lighthouse score

---

## ⚠️ TROUBLESHOOTING

### Issue: "Deployment Failed"
**Solution:** 
1. Check GitHub repo is public or Vercel has access
2. Ensure vercel.json is valid JSON
3. Check package.json has correct syntax
4. Try manual redeploy from Vercel Dashboard

### Issue: "Form Submissions Not Captured"
**Solution:**
1. Check API key in Vercel environment variables
2. Check browser console for JavaScript errors
3. Test API endpoint: `curl -X POST https://your-site.vercel.app/api/capture-lead`
4. Check Vercel logs: Project → Settings → Functions

### Issue: "Emails Not Sending"
**Solution:**
1. Verify AgentMail API key is correct
2. Check Vercel logs for error messages
3. Test manually: Submit form, check spam folder
4. Check AgentMail dashboard for failures

### Issue: "Slow Page Load"
**Solution:**
1. Compress images (use TinyPNG)
2. Use WebP format
3. Check Lighthouse in DevTools
4. Enable caching headers

### Issue: "Analytics Not Tracking"
**Solution:**
1. Verify Google Analytics ID is correct
2. Check Network tab in DevTools for gtag requests
3. Wait 24-48 hours for data to appear
4. Check GA property is set to "Reporting enabled"

---

## 📊 LAUNCH CHECKLIST

**Pre-Launch (48 hours before):**
- [ ] Copy reviewed and approved
- [ ] Design reviewed and approved
- [ ] Forms tested end-to-end
- [ ] Analytics configured
- [ ] Email sequences created
- [ ] Calendly booking link working

**Launch Day:**
- [ ] Deploy to production
- [ ] Set custom domain (if applicable)
- [ ] All integrations working
- [ ] Test form submission
- [ ] Monitor for errors
- [ ] Send to 5 test users

**Post-Launch (First Week):**
- [ ] Monitor daily traffic
- [ ] Check form conversion rate
- [ ] Monitor email deliverability
- [ ] Check Grawt for lead sync
- [ ] Fix any bugs found
- [ ] Optimize based on initial data

---

## 🎯 SUCCESS METRICS

**Target Performance:**
- Page Load Time: <3 seconds
- Lighthouse Score: 90+
- Mobile Usability: Pass Google Mobile-Friendly Test
- Form Conversion: 15-20% email capture rate
- Email Delivery: >95% inbox rate

**Business Metrics:**
- Form submissions: Target 1-5 per day
- Booking rate: 20-30% of form submitters
- Average deal size: $1,500-$2,500
- Monthly revenue potential: $1K-$2.5K

---

## 🚀 GOING LIVE

**Final Deployment:**
```bash
# Make sure everything is committed
git status  # Should be clean

# View your live site
# Your Vercel URL: https://pastor-entrepreneur-fracture.vercel.app
# OR your custom domain: https://your-domain.com

# Share with:
1. LinkedIn network
2. Email list
3. Social media
4. Partners/affiliates
```

---

## 📞 SUPPORT

**If you need help:**
- Check Vercel status: https://www.vercelstatus.com
- Check GitHub status: https://www.githubstatus.com
- Email: reyes@agentmail.to

**Common Vercel Commands:**
```bash
# View deployment logs
vercel logs

# Redeploy latest version
vercel --prod

# Check deployment status
vercel status
```

---

**Your site is now LIVE and CONVERTING LEADS.** 🎉

Next steps:
1. Monitor analytics daily
2. Optimize based on data
3. Drive traffic through your channels
4. Track conversion rates
5. Scale what works
