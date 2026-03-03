const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create User
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User Registered", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;