import React from "react";
import "./Navbar.css";

import logo from "../assets/image/logo.jpeg";
import dashboardIcon from "../assets/image/dashboard-img.jpg";

const Navbar = ({ setOpen }) => {
  return (
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
        <span className="LOGIN">LOGIN</span>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Navbar;
