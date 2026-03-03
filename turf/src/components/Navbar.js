import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";


import logo from "../assets/image/logo.png";
import dashboard from "../assets/image/dashboard-img.jpg";





const Navbar = ({ setOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

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

        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        
        {isLoggedIn ? (
          <>
            <Link to="/settings">Settings</Link>
            <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </>
        )}

      </div>

    </nav>
  );
};

export default Navbar;
