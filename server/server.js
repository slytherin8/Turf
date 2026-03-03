const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api", require("./routes/authRoutes"));

// Connect MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/turf";
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log("MongoDB Connection Error:", err.message);
    console.log("\nTo fix this:");
    console.log("1. Whitelist your IP in MongoDB Atlas (https://cloud.mongodb.com/)");
    console.log("2. Or install MongoDB locally and it will connect to localhost");
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));