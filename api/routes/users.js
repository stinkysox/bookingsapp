import express from "express";
import { deleteUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// ✅ Check authentication
router.get("/checkauthentication", verifyToken, (req, res) => {
  res.send(
    `Hello user with ID: ${req.user.id}, you are logged in and can delete your account.`
  );
});

// ✅ Check if specific user is logged in or admin
router.get("/checkuser/:id", verifyToken, verifyUser, (req, res) => {
  res.send(
    `Hello ${req.user.id}, you are logged in and authorized to delete your account.`
  );
});

// ✅ Check if admin is logged in
router.get("/checkadmin/:id", verifyToken, verifyAdmin, (req, res) => {
  res.send("Hello admin, you are logged in and can delete accounts.");
});

// ✅ Update user (same user or admin)
router.put("/:id", verifyToken, verifyUser, updateUser);

// ✅ Delete user (same user or admin)
router.delete("/:id", verifyToken, verifyUser, deleteUser);

// ✅ Get all users (admin only)
router.get("/", verifyToken, verifyAdmin, getUsers);

export default router;
