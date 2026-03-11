# 📧 Formspree Setup Guide (2 Minutes!)

Formspree handles your form submissions - **FREE forever** for basic use.

---

## STEP 1: Create Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Click **Get Started** or **Sign Up**
3. Use your email (same as Netlify)
4. Verify your email

---

## STEP 2: Create Your First Form

1. After login, click **+ New Form**
2. Form name: `Sell Your Car`
3. Email to receive submissions: your email
4. Click **Create Form**

---

## STEP 3: Get Your Form ID

1. After creating, you'll see:
   ```
   https://formspree.io/f/xvndbzqo
   ```
2. Copy the ID part: `xvndbzqo` (yours will be different)

---

## STEP 4: Update Your Website

### Edit `index.html` (2 places):

**Find and replace** (use Ctrl+F or Cmd+F):

```
YOUR_FORMSPREE_ID
```

**Replace with** your actual Formspree ID.

### Two locations to update:

1. **Sell Your Car form** (line ~180)
2. **Contact form** (line ~220)

Example:
```html
<!-- BEFORE -->
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID"

<!-- AFTER -->
<form action="https://formspree.io/f/xvndbzqo"
```

---

## STEP 5: Test Your Forms

1. Deploy to Netlify (or test locally)
2. Fill out the Sell Your Car form
3. Submit
4. Check your email - you should receive the submission!

---

## 📊 Formspree Free Plan Includes:

- ✅ 50 submissions/month (plenty for testing)
- ✅ Email notifications
- ✅ Spam filtering
- ✅ Auto-responder
- ✅ Export to CSV

---

## 🎯 Upgrade Later (If Needed):

When you get more than 50 submissions/month:
- **Basic:** $12/mo → 500 submissions
- **Pro:** $36/mo → 2000 submissions

**Most small dealerships stay on free plan!**

---

## 🔔 Pro Tips:

1. **Test before going live** - submit a test enquiry
2. **Check spam folder** - first submission might go there
3. **Add your email** to contacts so Formspree emails don't go to spam
4. **Create separate forms** for Sell Car vs Contact (optional, for organization)

---

## ❓ Troubleshooting

**Forms not sending:**
- Check Formspree ID is correct
- Make sure form is deployed to Netlify
- Check Formspree dashboard for errors

**Not receiving emails:**
- Check spam folder
- Verify email in Formspree settings
- Check Formspree dashboard for submission history

---

**That's it! Your forms are ready!** 🎉
