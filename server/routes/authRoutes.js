const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// SIGNUP API
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    console.log("Signup request received:", { username, email });

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      return res.json({ success: false, message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.json({ success: false, message: "Passwords do not match" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({ 
      name: username, 
      email, 
      password: hashedPassword 
    });
    await user.save();

    console.log("User created successfully:", email);
    res.json({ success: true, message: "Account created successfully!" });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: error.message || "Server error" });
  }
});

// LOGIN API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login request received:", { email });

    // Validation
    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }

    // Success
    console.log("Login successful:", email);
    res.json({ success: true, message: "Login successful", user: { name: user.name, email: user.email } });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: error.message || "Server error" });
  }
});

module.exports = router;