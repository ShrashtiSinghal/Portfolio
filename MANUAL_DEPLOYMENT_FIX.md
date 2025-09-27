# 🔧 GitHub Actions Build Fix & Manual Deployment

Your build failed due to a path issue with `yarn.lock`. Here are **3 solutions** to get your portfolio deployed:

## 🚀 Solution 1: Quick Fix (Recommended)

### Update your workflow file

Replace the content of `.github/workflows/deploy.yml` with this fixed version:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          
      - name: Install and Build
        run: |
          if [ -d "frontend" ]; then
            cd frontend
            npm install
            npm run build
          else
            npm install  
            npm run build
          fi
        env:
          CI: false
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./frontend/build
          
      - name: Deploy to Pages
        uses: actions/deploy-pages@v4
        id: deployment
```

### Then commit and push:
```bash
git add .github/workflows/deploy.yml
git commit -m "🔧 Fix GitHub Actions deployment workflow"
git push origin main
```

## 🛠 Solution 2: Manual Deployment with gh-pages

If GitHub Actions keeps failing, deploy manually:

### Step 1: Install gh-pages
```bash
# Navigate to your frontend directory (if it exists)
cd frontend  # or stay in root if no frontend folder

# Install gh-pages
npm install --save-dev gh-pages
```

### Step 2: Build and Deploy
```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npx gh-pages -d build -b gh-pages
```

### Step 3: Configure GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. **Source**: Select **"Deploy from a branch"**  
3. **Branch**: Select **"gh-pages"** → **"/ (root)"**
4. **Custom domain**: Enter `shrashti.com`

## 📁 Solution 3: Direct Build Upload

### Step 1: Build locally
```bash
# In your frontend directory (or root)
npm run build
```

### Step 2: Create gh-pages branch manually
```bash
# Create and switch to gh-pages branch
git checkout --orphan gh-pages

# Remove all files except build
git rm -rf .
git clean -fxd

# Copy build files to root
cp -r build/* .

# Add CNAME for custom domain
echo "shrashti.com" > CNAME

# Commit and push
git add .
git commit -m "🚀 Deploy portfolio to GitHub Pages"
git push origin gh-pages

# Switch back to main
git checkout main
```

## 🔍 Debugging Your Repository Structure

First, let's understand your repository structure. Run this to see what you have:

```bash
# Check your repository structure
ls -la
ls -la frontend/ 2>/dev/null || echo "No frontend directory"
```

**If you see:**
- ✅ `frontend/` directory → Your code is in a subfolder
- ✅ `package.json` in root → Your code is in the root
- ✅ `yarn.lock` or `package-lock.json` → Shows which package manager

## 📋 Repository Structure Scenarios

### Scenario A: Code in `frontend/` folder
```
your-repo/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── yarn.lock
└── .github/workflows/
```
**Solution**: Use the fixed workflow above (it handles this)

### Scenario B: Code in root folder
```
your-repo/
├── src/
├── public/
├── package.json
├── yarn.lock
└── .github/workflows/
```
**Solution**: Move build path in workflow to `./build` instead of `./frontend/build`

## ✅ Final Verification

After any solution, verify:

1. **Build Success**: Check GitHub Actions → Green checkmark ✅
2. **Domain Setup**: Settings → Pages → Custom domain: `shrashti.com`  
3. **DNS Records**: Configure A records at your domain provider:
   ```
   @ → 185.199.108.153
   @ → 185.199.109.153
   @ → 185.199.110.153  
   @ → 185.199.111.153
   ```

## 🆘 If All Else Fails

**Quick Manual Fix:**
1. Build locally: `npm run build`
2. Use GitHub's web interface to upload files:
   - Create new repository or branch `gh-pages`
   - Upload all files from `build/` folder to root
   - Add `CNAME` file with content: `shrashti.com`
   - Enable Pages from Settings

**Your portfolio will be live at https://shrashti.com once DNS propagates! 🎉**

---

**Need help?** The issue is just a workflow configuration - your portfolio code is perfect!