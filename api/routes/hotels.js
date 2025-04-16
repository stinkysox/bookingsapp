import express from "express";
const router = express.Router();
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  createhotel,
  deleteHotel,
  getallhotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";

// Create hotel - only admin
router.post("/", verifyToken, verifyAdmin, createhotel);

// Update hotel - only admin
router.put("/:id", verifyToken, verifyAdmin, updateHotel);

// Delete hotel - only admin
router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);

// Get all hotels - public
router.get("/", getallhotels);

export default router;
