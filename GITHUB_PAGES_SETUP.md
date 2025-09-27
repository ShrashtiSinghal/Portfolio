# 🚀 GitHub Pages Setup Guide for shrashti.com

Your portfolio is ready! Follow these exact steps to deploy it on GitHub Pages with your custom domain.

## 📁 Repository Structure Check

Make sure your GitHub repository has this structure:
```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml          ✅ Auto-deployment workflow
├── frontend/
│   ├── public/
│   │   ├── index.html          ✅ Main HTML file  
│   │   ├── CNAME               ✅ Custom domain config
│   │   ├── 404.html            ✅ React routing support
│   │   ├── .nojekyll           ✅ Disable Jekyll
│   │   └── ...
│   ├── src/
│   │   └── ...                 ✅ All React components
│   └── package.json            ✅ Updated with homepage
└── README.md                   ✅ Documentation
```

## ⚙️ GitHub Repository Settings

### Step 1: Enable GitHub Pages

1. **Go to your repository** on GitHub.com
2. **Click Settings** → **Pages** (left sidebar)
3. **Source**: Select **"GitHub Actions"** (NOT "Deploy from branch")
4. **Custom domain**: Enter `shrashti.com` and click Save

### Step 2: Verify Domain Configuration

The CNAME file should contain only:
```
shrashti.com
```

GitHub will automatically:
- ✅ Verify domain ownership
- ✅ Generate SSL certificate
- ✅ Enable HTTPS redirect

## 🌐 Domain DNS Configuration

### Configure these DNS records with your domain provider:

**A Records** (for apex domain shrashti.com):
```
Type: A     Name: @     Value: 185.199.108.153
Type: A     Name: @     Value: 185.199.109.153  
Type: A     Name: @     Value: 185.199.110.153
Type: A     Name: @     Value: 185.199.111.153
```

**CNAME Record** (for www subdomain):
```
Type: CNAME     Name: www     Value: shrashti.com
```

**Important**: Delete any existing A records pointing to other IPs!

## 🚀 Deployment Process

### Automatic Deployment (Recommended)

1. **Push to main/master branch**:
   ```bash
   git add .
   git commit -m "🚀 Deploy AI portfolio to GitHub Pages"
   git push origin main
   ```

2. **GitHub Actions will automatically**:
   - Install dependencies
   - Build React app
   - Deploy to GitHub Pages
   - Update shrashti.com

3. **Check deployment status**:
   - Go to **Actions** tab in your repository
   - Look for "Build and Deploy to GitHub Pages" workflow
   - Wait for green checkmark ✅

### Manual Verification

After deployment, check these URLs:
- ✅ https://shrashti.com (your custom domain)
- ✅ https://yourusername.github.io/your-repo-name (GitHub Pages URL)

Both should show your portfolio!

## 🔧 Troubleshooting Common Issues

### ❌ "Your site is having problems"

**Solution**: Check GitHub Actions workflow:
1. Go to **Actions** tab
2. Click on failed workflow
3. Check error logs
4. Common fixes:
   - Ensure `yarn.lock` is committed
   - Check Node.js version compatibility
   - Verify all dependencies in package.json

### ❌ Domain not working after 24 hours

**Solution**: Check DNS propagation:
```bash
# Check DNS settings
nslookup shrashti.com

# Should return GitHub Pages IPs:
# 185.199.108.153, 185.199.109.153, etc.
```

If wrong IPs, update DNS records with your domain provider.

### ❌ CSS/JS files not loading

**Solution**: Verify homepage URL:
- Check `package.json`: `"homepage": "https://shrashti.com"`
- Rebuild and deploy

### ❌ 404 errors on page refresh

**Solution**: The 404.html file handles React routing:
- ✅ Already included in your setup
- Redirects all routes to index.html
- Maintains client-side routing

## 📊 Monitoring & Maintenance

### Check Deployment Status
- **GitHub Actions**: Repository → Actions tab
- **Domain Status**: Settings → Pages
- **SSL Certificate**: Usually ready in 1-24 hours

### Future Updates
To update your portfolio:
1. Make changes locally
2. Push to main branch: `git push origin main`  
3. GitHub Actions will auto-deploy
4. Changes live in ~3-5 minutes

## ✅ Verification Checklist

Once deployed, verify:
- [ ] **Homepage loads** at https://shrashti.com
- [ ] **All sections work** (Hero, About, Skills, Experience, Projects, Contact)
- [ ] **Navigation scrolls** smoothly between sections
- [ ] **Animations play** (floating elements, hover effects)
- [ ] **Contact form** accepts input (form submission is frontend-only)
- [ ] **Social links work** (LinkedIn, GitHub, Medium)
- [ ] **Mobile responsive** on phone/tablet
- [ ] **HTTPS enabled** (green lock icon)
- [ ] **Fast loading** (should load in < 3 seconds)

## 🎯 Performance Tips

After deployment:
1. **Test on mobile devices**
2. **Check loading speed** with Google PageSpeed Insights
3. **Verify SEO** with Google Search Console
4. **Add Google Analytics** (optional)

## 🆘 Getting Help

If you encounter issues:

1. **Check GitHub Status**: https://www.githubstatus.com/
2. **DNS Propagation**: https://dnschecker.org/
3. **Repository Actions**: Your repo → Actions tab for build logs

---

## 🎉 Success!

Once deployed successfully, your cutting-edge AI portfolio will be live at:

**🔗 https://shrashti.com**

Your futuristic portfolio with glass morphism, neon accents, and 3D effects will showcase your AI expertise beautifully!

**Built with ❤️ using Emergent AI**