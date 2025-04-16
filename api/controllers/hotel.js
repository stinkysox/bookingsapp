import Hotel from "../models/Hotel.js";

export const createhotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel); // 201 is more semantically correct for creation
  } catch (error) {
    console.error("Error saving hotel:", error.message);
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedHotel) {
      return next(createError(404, "Hotel not found"));
    }
    res.status(200).json(updatedHotel);
  } catch (error) {
    console.error("Error updating hotel:", error.message);
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (error) {
    console.error("Error deleting hotel:", error.message);
    next(error);
  }
};

export const getallhotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error.message);
    next(error);
  }
};
