import React from "react";
import "./Sidebar.css";

import closeIcon from "../assets/image/wrong-img.jpg";

const Sidebar = ({ open, setOpen }) => {
  if (!open) return null;

  return (
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
  );
};

export default Sidebar;
