# 🚀 DEPLOY SYRE DIAMOND AUTOS - RIGHT NOW!

**Time to launch: ~30 minutes** ⚡

---

## STEP 1: Create GitHub Account (2 min)

1. Go to [github.com](https://github.com)
2. Click **Sign Up**
3. Enter email, create password
4. Verify email
5. Choose free plan

---

## STEP 2: Create Repository (3 min)

1. Click **+** (top right) → **New repository**
2. Repository name: `syre-diamond-autos`
3. Description: `Syre Diamond Autos - Luxury Car Dealership`
4. Keep it **Public** (free)
5. **DO NOT** initialize with README
6. Click **Create repository**

---

## STEP 3: Upload Files (5 min)

### Option A: Using GitHub Web Interface (Easiest)

1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL files from:
   ```
   /home/moltbot/.openclaw/workspace/syre-diamond-autos-static/
   ```
3. Wait for upload to complete
4. Commit message: `Initial launch - Syre Diamond Autos`
5. Click **Commit changes**

### Option B: Using Git Command Line

```bash
cd /home/moltbot/.openclaw/workspace/syre-diamond-autos-static

# Initialize git
git init
git add .
git commit -m "Initial launch - Syre Diamond Autos"
git branch -M main

# Add your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/syre-diamond-autos.git

# Push
git push -u origin main
```

---

## STEP 4: Connect to Netlify (5 min)

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign Up** → Use **GitHub** to sign up
3. After login, click **Add new site** → **Import an existing project**
4. Select **GitHub**
5. Authorize Netlify to access GitHub
6. Find and select `syre-diamond-autos` repository
7. **Build settings:**
   - Build command: (leave blank)
   - Publish directory: `.` (just a dot)
8. Click **Deploy site**

---

## STEP 5: Wait for Deploy (2-5 min)

Netlify will build and deploy your site. You'll see:
- 🟢 Building → 🟢 Published

Your site will be live at: `https://random-name-12345.netlify.app`

---

## STEP 6: Add Custom Domain (5 min)

### If You Already Own a Domain:

1. In Netlify dashboard → **Domain management**
2. Click **Add custom domain**
3. Enter: `syrediamondautos.com` (or your domain)
4. Click **Verify**
5. Netlify shows DNS settings
6. Go to your domain registrar (GoDaddy, Namecheap, etc.)
7. Update DNS records as shown by Netlify
8. Wait 15 min - 24 hrs for propagation

### If You Need to Buy a Domain:

1. Go to [namecheap.com](https://namecheap.com) or [porkbun.com](https://porkbun.com)
2. Search: `syrediamondautos.com`
3. Purchase (~$10-15/year)
4. Follow steps above to connect to Netlify

---

## STEP 7: Update Contact Info (5 min)

Edit `index.html` and update:

```html
<!-- Line ~350 - WhatsApp -->
<a href="https://wa.me/254700000000"

<!-- Line ~380 - Phone -->
<a href="tel:+254700000000">

<!-- Line ~381 - Email -->
<a href="mailto:info@syrediamondautos.com">
```

Commit changes → Netlify auto-deploys!

---

## STEP 8: Add Your Vehicles (15-30 min)

Edit `js/vehicles.js`:

```javascript
const vehicles = [
  {
    id: 1,
    title: 'Mercedes-Benz C-Class 2022',
    price: 6500000,
    currency: 'KSh',
    year: 2022,
    mileage: 15000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    brand: 'mercedes',
    image: 'images/mercedes-c-class.jpg',  // Add photo to images/ folder
    badge: 'Premium'
  },
  // Add more vehicles...
];
```

For each vehicle:
1. Add photo to `images/` folder
2. Add entry in `vehicles.js`
3. Commit and push

---

## ✅ LAUNCH CHECKLIST

- [ ] GitHub account created
- [ ] Repository created
- [ ] Files uploaded
- [ ] Netlify account created
- [ ] Site deployed
- [ ] Custom domain added (optional)
- [ ] Contact info updated
- [ ] At least 5 vehicles added
- [ ] Forms tested
- [ ] WhatsApp link tested

---

## 🎉 YOU'RE LIVE!

Your luxury car dealership is now accessible worldwide!

**Share your link:**
- WhatsApp status
- Facebook
- Instagram bio
- Business cards

---

## 📞 Need Help?

Common issues:

**Site shows 404:**
- Make sure `index.html` is in the root (not in a subfolder)

**Forms not working:**
- Check `data-netlify="true"` attribute is present
- Check Netlify dashboard → Forms

**Domain not working:**
- Wait up to 48 hrs for DNS propagation
- Check DNS settings match Netlify's instructions

---

**Built with 🐉 by Eragon for SUPREME LORD & LEADER**
