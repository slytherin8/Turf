import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings-container">

      <h1 className="settings-title">SETTINGS</h1>

      <div className="settings-box">

        {/* Profile Section */}
        <div className="settings-section">
          <h2>Profile Settings</h2>

          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone</label>
          <input type="text" placeholder="Enter phone number" />

        </div>


        {/* Password Section */}
        <div className="settings-section">
          <h2>Password</h2>

          <label>Current Password</label>
          <input type="password" />

          <label>New Password</label>
          <input type="password" />

          <label>Confirm Password</label>
          <input type="password" />

        </div>

      </div>

      <button className="save-btn">Save Changes</button>

    </div>
  );
};

export default Settings;
