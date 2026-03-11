# Syre Diamond Autos - Static Website

Luxury car dealership website for **Syre Diamond Autos** - built for deployment on Netlify via GitHub.

## 🚀 Quick Deploy

### Option 1: Deploy to Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   cd /home/moltbot/.openclaw/workspace/syre-diamond-autos-static
   git init
   git add .
   git commit -m "Initial commit - Syre Diamond Autos"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/syre-diamond-autos.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub
   - Choose your `syre-diamond-autos` repository
   - Click "Deploy site"

3. **Configure Domain** (optional):
   - In Netlify dashboard: Domain settings → Add custom domain
   - Enter: `syrediamondautos.com`
   - Follow DNS configuration instructions

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 📁 File Structure

```
syre-diamond-autos-static/
├── index.html          # Homepage
├── vehicles.html       # Vehicle listings
├── vehicle-detail.html # Single vehicle page (template)
├── css/
│   ├── style.css       # Main styles (black & white luxury theme)
│   └── dark-mode.css   # Dark mode styles
├── js/
│   ├── main.js         # Main JavaScript
│   ├── loan-calculator.js
│   └── vehicles.js     # Vehicle data & rendering
├── images/             # Static images
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## ✨ Features

### Implemented
- ✅ Luxury black & white design
- ✅ Responsive (mobile-first)
- ✅ Vehicle search & filtering
- ✅ Loan calculator
- ✅ Sell Your Car form (Netlify Forms)
- ✅ WhatsApp chat integration
- ✅ Contact section
- ✅ Dark mode support

### Netlify Forms
Forms are configured to work with Netlify Forms automatically:
- Sell Your Car submissions
- Contact enquiries

Form submissions appear in your Netlify dashboard under "Forms".

## 🎨 Customization

### Update Vehicle Data
Edit `js/vehicles.js` to add/modify vehicles:

```javascript
const vehicles = [
  {
    id: 1,
    title: 'Your Car Model',
    price: 1500000,
    // ... more fields
  }
];
```

### Change Contact Info
Update in `index.html`:
- Phone: `+254 700 000 000`
- Email: `info@syrediamondautos.com`
- WhatsApp: `254700000000`

### Colors
Edit CSS variables in `css/style.css`:

```css
:root {
  --color-primary: #000000;
  --color-secondary: #1a1a1a;
  /* ... */
}
```

## 🔧 Adding More Pages

### Vehicle Detail Page
Create `vehicle-detail.html` using the template structure. Use URL parameters to load specific vehicle:

```javascript
const urlParams = new URLSearchParams(window.location.search);
const vehicleId = urlParams.get('id');
const vehicle = SyreVehicles.getById(vehicleId);
```

### Blog/News
Create `blog.html` and add to navigation.

## 📊 Analytics

Add Google Analytics in `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Security

- HTTPS enforced via Netlify
- Security headers configured in `netlify.toml`
- Form spam protection via Netlify honeypot

## 📝 Forms

All forms use Netlify Forms - no backend required:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- form fields -->
</form>
```

Submissions appear in Netlify dashboard → Forms.

## 🚗 Next Steps

1. **Add real vehicle photos** - Replace placeholder images
2. **Update contact information** - Phone, email, address
3. **Configure domain** - Connect syrediamondautos.com
4. **Add more vehicles** - Edit vehicles.js
5. **Set up form notifications** - Configure email alerts in Netlify

---

**Built with 🐉 by Eragon for SUPREME LORD & LEADER**

Version: 1.0.0 | Syre Diamond Autos
