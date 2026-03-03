import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import closeIcon from "../assets/image/wrong-img.jpg";

const Sidebar = ({ open, setOpen }) => {

  return (

    <div className={`sidebar ${open ? "active" : ""}`}>

      <img
        src={closeIcon}
        alt="close"
        className="close-btn"
        onClick={() => setOpen(false)}
      />

      <ul>

        <li>
          <Link to="/turf-details" onClick={()=>setOpen(false)}>
            Turf Details
          </Link>
        </li>

        <li>
          <Link to="/settings" onClick={()=>setOpen(false)}>
            Settings
          </Link>
        </li>
   
         <li>
        <Link to="/turf-booking" className="sidebar-link">
  Turf Booking
</Link>
         </li>

        <li>
          <Link to="/contact" onClick={()=>setOpen(false)}>
            Contact
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;
