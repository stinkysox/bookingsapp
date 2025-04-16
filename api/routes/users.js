import express from "express";
import { deleteUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user, you are logged in!");
});

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

// get all users
router.get("/", getUsers);

export default router;
