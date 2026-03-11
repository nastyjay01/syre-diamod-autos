# 🚗 Add Your Vehicles - Simple Guide

**Time: 5-10 minutes per vehicle**

---

## METHOD 1: Edit JSON File (Easiest for Static Site)

### Step 1: Open the File

Open: `js/vehicles.js`

Find the `const vehicles = [` section.

---

### Step 2: Add a Vehicle

Copy this template and paste it inside the array:

```javascript
{
    id: 1,  // Unique number (1, 2, 3, etc.)
    title: 'Mercedes-Benz C-Class 2022',
    price: 6500000,
    currency: 'KSh',
    year: 2022,
    mileage: 15000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    brand: 'mercedes',
    image: 'images/mercedes-c-class.jpg',
    badge: 'Premium'
},
```

---

### Step 3: Add Your Photo

1. Take photos of your vehicle
2. Rename to something simple: `mercedes-c-class.jpg`
3. Put in the `images/` folder
4. Update the `image:` field to match

---

### Step 4: Save & Deploy

1. Save `vehicles.js`
2. Commit to GitHub
3. Netlify auto-deploys in ~1 minute

---

## 📋 Vehicle Template (Copy & Paste)

```javascript
{
    id: YOUR_NUMBER,
    title: 'Year Make Model',
    price: 0000000,
    currency: 'KSh',
    year: 2020,
    mileage: 00000,
    transmission: 'Automatic',  // or Manual, CVT
    fuel: 'Petrol',  // or Diesel, Hybrid, Electric
    brand: 'toyota',  // lowercase, no spaces
    image: 'images/your-photo.jpg',
    badge: 'In Stock'  // or Premium, AWD, Hybrid, New Arrival
},
```

---

## 🎯 Example: 5 Vehicles

Here's a ready-to-use example with 5 vehicles:

```javascript
const vehicles = [
    {
        id: 1,
        title: 'Toyota Demio 2020',
        price: 1250000,
        currency: 'KSh',
        year: 2020,
        mileage: 45000,
        transmission: 'Automatic',
        fuel: 'Petrol',
        brand: 'toyota',
        image: 'images/demio-2020.jpg',
        badge: 'In Stock'
    },
    {
        id: 2,
        title: 'Mercedes-Benz C200 2021',
        price: 5800000,
        currency: 'KSh',
        year: 2021,
        mileage: 28000,
        transmission: 'Automatic',
        fuel: 'Petrol',
        brand: 'mercedes',
        image: 'images/mercedes-c200.jpg',
        badge: 'Premium'
    },
    {
        id: 3,
        title: 'Mazda CX-5 2019',
        price: 2900000,
        currency: 'KSh',
        year: 2019,
        mileage: 62000,
        transmission: 'Automatic',
        fuel: 'Diesel',
        brand: 'mazda',
        image: 'images/cx5-2019.jpg',
        badge: 'AWD'
    },
    {
        id: 4,
        title: 'BMW X3 2020',
        price: 5200000,
        currency: 'KSh',
        year: 2020,
        mileage: 35000,
        transmission: 'Automatic',
        fuel: 'Diesel',
        brand: 'bmw',
        image: 'images/bmw-x3.jpg',
        badge: 'Premium'
    },
    {
        id: 5,
        title: 'Nissan X-Trail 2018',
        price: 2200000,
        currency: 'KSh',
        year: 2018,
        mileage: 78000,
        transmission: 'Automatic',
        fuel: 'Petrol',
        brand: 'nissan',
        image: 'images/xtrail-2018.jpg',
        badge: 'In Stock'
    }
];
```

---

## 📸 Photo Tips

**Best practices:**

1. **Size:** 1200x800 pixels (or similar ratio)
2. **Format:** JPG (smaller file size)
3. **Quality:** Clear, well-lit photos
4. **Angles:** Front, side, interior, engine
5. **File names:** Simple, lowercase, no spaces
   - ✅ `demio-2020-front.jpg`
   - ❌ `Demio 2020 (Front View).JPG`

---

## 🎨 Badge Ideas

Use badges to highlight vehicles:

| Badge | Use For |
|-------|---------|
| `In Stock` | Available now in Kenya |
| `Premium` | Luxury/high-end vehicles |
| `New Arrival` | Just added (last 7 days) |
| `AWD` | All-wheel drive |
| `Hybrid` | Hybrid vehicles |
| `Low Mileage` | Under 30,000 km |
| `One Owner` | Single previous owner |

---

## 🔄 Update a Vehicle

To update price or details:

1. Find the vehicle in `vehicles.js`
2. Change the values
3. Save and commit
4. Netlify updates automatically

---

## ❌ Remove a Vehicle

1. Delete that vehicle's entry from the array
2. Make sure to remove the comma from the previous entry
3. Save and commit

---

## 📊 How Many Vehicles?

**Recommendations:**

| Stage | Vehicles | Time to Add |
|-------|----------|-------------|
| Launch | 5-10 | 30-60 min |
| Growing | 20-30 | 2-3 hrs |
| Established | 50+ | Ongoing |

**Start with 5-10 for launch!**

---

## 🛠️ Tools to Make It Easier

### VS Code (Free):
- Syntax highlighting
- Auto-complete
- Find & replace

### Google Sheets Method:
1. List all vehicles in a spreadsheet
2. Use formula to generate JSON
3. Copy-paste into `vehicles.js`

---

## ✅ Checklist

For each vehicle:

- [ ] Photo taken and saved to `images/` folder
- [ ] Entry added to `vehicles.js`
- [ ] ID is unique
- [ ] Price is correct
- [ ] Mileage is accurate
- [ ] Badge added (optional but recommended)
- [ ] Saved and committed to GitHub

---

## 🚀 After Adding Vehicles

1. **Test on Netlify** - Visit your live site
2. **Check all vehicles display** - Scroll through
3. **Test filters** - Try brand, price filters
4. **Test vehicle detail** - Click on a vehicle
5. **Share with friends** - Get feedback

---

**Your showroom is ready, SUPREME LORD & LEADER!** 🐉🚗
