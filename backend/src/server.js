import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDatabase } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || '*'
  })
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/contact', contactRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    message: 'Something went wrong on the server.'
  });
});

async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
}

startServer();
