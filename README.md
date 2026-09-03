# 🚖 EcoRide DropTaxi — Full Stack Web App

**One Way Drop Taxi | Outstation Cabs | Tamil Nadu & Bangalore**
**Contact: +91 7019700584**

---

## 📁 Project Structure

```
ecoride-droptaxi/
├── backend/          ← Node.js + Express.js API
│   ├── models/       ← MongoDB Mongoose schema
│   ├── routes/       ← API route handlers
│   ├── services/     ← WhatsApp notification service
│   ├── .env.example  ← Environment variables template
│   ├── server.js     ← Express entry point
│   └── package.json
│
└── frontend/         ← Next.js React App
    ├── pages/        ← Homepage, Tariff page
    ├── components/   ← All UI components
    ├── styles/       ← Tailwind CSS global styles
    ├── next.config.js
    └── package.json
```

---

## 🚀 DEPLOYMENT GUIDE (Step by Step)

### PREREQUISITES
- Node.js v18+ → https://nodejs.org
- Git → https://git-scm.com
- Accounts (all free): GitHub, MongoDB Atlas, Vercel, Render.com

---

## STEP 1 — Set Up MongoDB Atlas (Free Database)

1. Go to **https://cloud.mongodb.com** → Sign Up (free)
2. Create a new **Project** → "EcoRide"
3. Create a **FREE cluster** (M0 Sandbox, choose closest region)
4. Under "Security" → "Database Access" → Add a user
   - Username: `ecoride_user`
   - Password: (create a strong password, save it!)
5. Under "Security" → "Network Access" → Add IP Address → `0.0.0.0/0` (allow all)
6. Click "Connect" → "Connect your application" → Copy the connection string:
   ```
   mongodb+srv://ecoride_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/ecoride?retryWrites=true&w=majority
   ```
7. **Save this string** — you'll need it in Step 4.

---

## STEP 2 — Get Google Maps API Key (for distance calculation)

1. Go to **https://console.cloud.google.com** → Sign in
2. Create a New Project → "EcoRide"
3. Search for and **ENABLE** these 3 APIs:
   - ✅ Distance Matrix API
   - ✅ Maps JavaScript API
   - ✅ Places API
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. (Optional but recommended) Restrict the key to your domain
6. **Save the API key** — starts with `AIzaSy...`

---

## STEP 3 — Activate CallMeBot WhatsApp (Free WhatsApp API)

1. Open WhatsApp on the phone with number **+91 7019700584**
2. Add this contact: **+34 644 55 99 43** (CallMeBot)
3. Send this EXACT message to that number:
   ```
   I allow callmebot to send me messages
   ```
4. You will receive a reply with your API key, like:
   ```
   API Activated for +91 7019700584. Your APIKEY is 123456
   ```
5. **Save that API key** (6-digit number)

---

## STEP 4 — Deploy Backend to Render.com (Free Hosting)

### 4a. Push backend code to GitHub
```bash
# Create a new GitHub repo named "ecoride-backend"
cd backend/
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ecoride-backend.git
git push -u origin main
```

### 4b. Deploy on Render
1. Go to **https://render.com** → Sign Up (free, use GitHub)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub → Select **ecoride-backend** repo
4. Fill in settings:
   - **Name**: `ecoride-api`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Free

5. Click **"Advanced"** → **"Add Environment Variable"** → Add ALL of these:

   | Key | Value |
   |-----|-------|
   | `MONGODB_URI` | your MongoDB Atlas connection string |
   | `GOOGLE_MAPS_KEY` | your Google Maps API key |
   | `CALLMEBOT_APIKEY` | your CallMeBot API key |
   | `WHATSAPP_NUMBER` | `917019700584` |
   | `CORS_ORIGIN` | `https://your-app.vercel.app` (update after Step 5) |
   | `NODE_ENV` | `production` |
   | `PORT` | `10000` |

6. Click **"Create Web Service"**
7. Wait ~3 minutes for deployment
8. **Copy your API URL** → `https://ecoride-api.onrender.com` ← Save this!

### 4c. Test the backend
Visit: `https://ecoride-api.onrender.com/api/health`
You should see: `{"status":"ok","service":"EcoRide DropTaxi API"}`

---

## STEP 5 — Deploy Frontend to Vercel (Free Hosting)

### 5a. Push frontend code to GitHub
```bash
# Create a new GitHub repo named "ecoride-frontend"
cd frontend/
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ecoride-frontend.git
git push -u origin main
```

### 5b. Deploy on Vercel
1. Go to **https://vercel.com** → Sign Up (use GitHub)
2. Click **"New Project"** → Import **ecoride-frontend** repo
3. Framework: Next.js (auto-detected)
4. Click **"Environment Variables"** → Add:

   | Key | Value |
   |-----|-------|
   | `NEXT_PUBLIC_API_URL` | `https://ecoride-api.onrender.com` |
   | `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | your Google Maps API key |

5. Click **"Deploy"**
6. Wait ~2 minutes
7. Your site is live at: `https://ecoride-frontend.vercel.app` 🎉

### 5c. Update CORS on Render
1. Go back to Render.com → Your ecoride-api service
2. Go to "Environment" → Update `CORS_ORIGIN` to your Vercel URL
3. Click "Save Changes" → Service redeploys automatically

---

## STEP 6 — Local Development Setup

### Run Backend Locally
```bash
cd backend/
npm install

# Create .env file from template
cp .env.example .env
# Edit .env and fill in your values

npm run dev
# API running at http://localhost:5000
```

### Run Frontend Locally
```bash
cd frontend/
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local
echo "NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here" >> .env.local

npm run dev
# Site running at http://localhost:3000
```

---

## STEP 7 — Custom Domain (Optional, ~₹900/year)

1. Buy a domain from GoDaddy / Namecheap (e.g., `ecoride-droptaxi.com`)
2. In **Vercel** dashboard → Your project → **Settings** → **Domains**
3. Add your domain → Follow the DNS instructions
4. In **Render** → Your service → **Settings** → **Custom Domains**
5. Add API subdomain (optional): `api.ecoride-droptaxi.com`
6. SSL certificates are provisioned automatically — FREE!

---

## 📱 WhatsApp Notification Flow

When a user submits a booking:

```
User submits form
    ↓
POST /api/bookings
    ↓
Google Maps calculates distance
    ↓
Fare = distance × rate + driver batta
    ↓
Booking saved to MongoDB Atlas
    ↓
WhatsApp message sent to +91 7019700584
    ↓
User sees booking confirmation with ID
```

**Sample notification you'll receive:**
```
🚖 New EcoRide Booking!

📋 Booking ID: ECO-2026-000001
👤 Name: Ramesh Kumar
📱 Mobile: 9876543210
🚗 Trip: One Way | Sedan
📍 From: Chennai
📍 To: Coimbatore
📅 Date: 15 Mar 2026 | ⏰ Time: 8:00 AM
👥 Persons: 2
📏 Distance: ~510 km
💰 Fare: ₹7,950 (approx)

Call customer to confirm booking!
```

---

## 🔧 Environment Variables Reference

### backend/.env
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecoride
GOOGLE_MAPS_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX
CALLMEBOT_APIKEY=123456
WHATSAPP_NUMBER=917019700584
PORT=5000
CORS_ORIGIN=https://your-frontend.vercel.app
NODE_ENV=production
```

### frontend/.env.local
```env
NEXT_PUBLIC_API_URL=https://ecoride-api.onrender.com
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## 📊 View All Bookings (Admin)

To see all bookings, call the API directly:
```
GET https://ecoride-api.onrender.com/api/bookings
```

Or connect MongoDB Atlas Compass (free GUI tool) to your cluster and browse the `ecoride` database → `bookings` collection.

---

## 🆓 Cost Summary

| Service | Plan | Monthly Cost |
|---------|------|-------------|
| MongoDB Atlas | M0 Free (512MB) | ₹0 |
| Vercel | Hobby (free) | ₹0 |
| Render.com | Free tier | ₹0 |
| CallMeBot WhatsApp | Free | ₹0 |
| Google Maps API | Free $200 credit/mo | ₹0 |
| Domain (optional) | .com annual | ~₹75/mo |
| **Total** | | **₹0 to ₹75/mo** |

> **Note:** Render free tier may have ~30 second cold start delay. Upgrade to Starter ($7/mo) for always-on deployment in production.

---

## 🛠️ Troubleshooting

**WhatsApp not receiving notifications?**
- Double check you sent the activation message to +34 644 55 99 43
- Verify CALLMEBOT_APIKEY in Render environment variables
- Check WHATSAPP_NUMBER is `917019700584` (no + sign)

**Distance not calculating?**
- Ensure Distance Matrix API is enabled in Google Cloud Console
- Check GOOGLE_MAPS_KEY has no extra spaces
- If no API key, fare will show 0 (booking still saves correctly)

**CORS errors on frontend?**
- Update CORS_ORIGIN in Render to match your exact Vercel URL

**MongoDB connection failed?**
- Check Network Access in Atlas allows 0.0.0.0/0
- Verify username/password in MONGODB_URI connection string

---

## 📞 Support

**EcoRide DropTaxi**
- Phone: +91 7019700584
- WhatsApp: https://wa.me/917019700584

---

*Built with ❤️ using Next.js, Express.js, MongoDB Atlas, and CallMeBot WhatsApp API*
