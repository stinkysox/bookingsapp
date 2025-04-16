import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import auth from "./routes/auth.js";
import rooms from "./routes/rooms.js";
import users from "./routes/users.js";
import hotels from "./routes/hotels.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connect();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", auth);
app.use("/api/rooms", rooms);
app.use("/api/users", users);
app.use("/api/hotels", hotels);

// Global error handler (place after all routes)
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal Server Error";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(4000, () => {
  console.log("✅ Server running on port 4000");
});
