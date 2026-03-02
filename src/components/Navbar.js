import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


import logo from "../assets/image/logo.png";
import dashboard from "../assets/image/dashboard-img.jpg";





const Navbar = ({ setOpen }) => {
  return (

    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">

        <img src={logo} alt="logo" className="logo"/>

        <img
          src={dashboard}
          alt="menu"
          className="dash-icon"
          onClick={() => setOpen(true)}
        />

      </div>

      {/* RIGHT */}
      <div className="nav-right">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>

      </div>

    </nav>
  );
};

export default Navbar;
