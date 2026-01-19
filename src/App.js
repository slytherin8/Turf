import React, { useState } from "react";
import "./App.css";

import logo from "./assets/image/logo.jpeg";
import dashboardIcon from "./assets/image/dashboard-img.jpg";
import closeIcon from "./assets/image/wrong-img.jpg";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      {/* Sidebar */}
      {open && (
        <div className="sidebar">
          <img
            src={closeIcon}
            alt="close"
            className="close-icon"
            onClick={() => setOpen(false)}
          />
          <ul>
            <li>Turf Details</li>
            <li>Settings</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}

      {/* Navbar */}
      <div className="navbar">
        {/* LEFT */}
        <div className="nav-left">
          <img
            src={dashboardIcon}
            alt="Dashboard"
            className="dashboard-icon"
            onClick={() => setOpen(true)}
          />
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <span className="nav-item">Home</span>
          <span className="nav-item">About Us</span>
          <span className="turf-id">TURF ID</span>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Hey!</h1>
        <h2>Wherever You Play, Your Health Defines Your Game.</h2>
        <p>Every match counts toward a healthier life.</p>
      </div>
    </div>
  );
}

export default App;
