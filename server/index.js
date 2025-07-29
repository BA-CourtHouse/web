import express from 'express';
import cors from 'cors';
import assessmentRoutes from './routes/assessmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import subscribeRoutes from "./routes/subscribeRoutes.js";

 
import mongoose from 'mongoose';


import dotenv from 'dotenv';
dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use('/api/assessment', assessmentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));
  

  app.use(cors({
    origin: 'https://ba-court-house.onrender.com',
    credentials: true
  }));
