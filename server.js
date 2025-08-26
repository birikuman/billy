// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
import registerRoute from './src/routes/Register.js';
import loginRoute from './src/routes/login.js';
import uploadresearchRoutes from './src/routes/uploadresearch.js'; // ✅ Make sure this path matches the actual file location

// API routes
app.use('/api', registerRoute);
app.use('/api', loginRoute);
app.use('/api/uploadresearch', uploadresearchRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
