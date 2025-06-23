import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import serverless from "serverless-http";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
await connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API Working from Vercel!");
});

// ❗ Export handler for Vercel
export const handler = serverless(app);
