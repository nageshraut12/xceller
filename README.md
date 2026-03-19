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
- Backend: deploy `backend/` to Render, Railway, or another Node host.
- Set `CLIENT_URL` and `VITE_API_URL` to production URLs.
