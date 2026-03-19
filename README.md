# Xceller IT Company Website

Production-ready React + Tailwind frontend with an Express + MongoDB contact API.

## Structure

- `frontend/` - Vite, React Router, Tailwind CSS, Framer Motion
- `backend/` - Express API, MongoDB model, validation, CORS

## Local setup

1. Install root and app dependencies:
   - `npm install`
   - `npm run install:all`
2. Add environment files:
   - `backend/.env`
   - `frontend/.env`
3. Run development:
   - `npm run dev`

## Environment variables

Backend (`backend/.env`)

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/xceller
CLIENT_URL=http://localhost:5173
```

Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000/api
```

## Deployment

- Frontend: deploy `frontend/` to Vercel, Netlify, or any static host.
- Backend: deploy `backend/` to Railway or another Node host.
- Set `CLIENT_URL` and `VITE_API_URL` to production URLs.

### Vercel + Railway

Use this split for the cleanest production setup:

1. Deploy `backend/` logic through the existing Railway-ready root app.
2. Deploy only `frontend/` to Vercel.

Vercel settings:

- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable:
  - `VITE_API_URL=https://your-railway-domain.up.railway.app/api`

Railway settings:

- `NODE_ENV=production`
- `MONGODB_URI=your_mongodb_connection_string`
- `CLIENT_URL=https://your-vercel-domain.vercel.app`

The `frontend/vercel.json` file is included so React Router routes work correctly on direct refresh in Vercel.
