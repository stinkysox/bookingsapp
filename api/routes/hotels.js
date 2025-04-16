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

// Create hotel
router.post("/", createhotel);

// update hotel
router.put("/:id", updateHotel);

//delete hotel
router.delete("/:id", deleteHotel);

// get all hotels
router.get("/", getallhotels);

export default router;
