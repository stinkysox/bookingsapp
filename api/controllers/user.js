import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    // Update user with provided data in the body
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // Return the updated user
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err); // Pass errors to the error handler middleware
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    // Delete user by ID
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err); // Pass errors to the error handler middleware
  }
};

export const getUsers = async (req, res, next) => {
  try {
    // Get all users
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err); // Pass errors to the error handler middleware
  }
};
