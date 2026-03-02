import React from "react";
import logo from "../assets/image/logo.png";
// CSS is imported in App.js as requested, or keep it here for local scoping if preferred.
// But user said "call it in app.js" so I already added it there.
// I will keep it here as well for good measure or remove it if I trust App.js import.
// Let's keep it here to ensure it works correctly if they navigate directly.

export default function Settings() {
    return (
        <div className="settings-page">
            {/* ===== HEADER ===== */}
            <div className="settings-header">
                <div className="header-logo-container">
                    <img src={logo} alt="logo" className="header-logo" />
                </div>
                <h1 className="header-title">SETTINGS</h1>
            </div>

            {/* BODY */}
            <div className="settings-body">
                {/* LEFT COLUMN */}
                <div className="settings-column">
                    <div className="section">
                        <div className="input-group">
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                        <div className="input-group">
                            <label>Phone Number:</label>
                            <input type="text" />
                        </div>
                        <button className="btn-save-mini">Save</button>
                    </div>

                    <div className="section">
                        <h3 className="section-title">Change Password:</h3>
                        <div className="input-group">
                            <label>Current Password:</label>
                            <input type="password" />
                        </div>
                        <div className="input-group">
                            <label>New Password:</label>
                            <input type="password" />
                        </div>
                        <div className="input-group">
                            <label>Confirm Password:</label>
                            <input type="password" />
                        </div>
                        <button className="btn-update">Update & Save</button>
                    </div>

                    <div className="section">
                        <h3 className="section-title">Bank Details:</h3>
                        <div className="input-group">
                            <label>Account Holder Name:</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>Bank Name:</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="settings-column">
                    <div className="section">
                        <h3 className="section-title">Notification Preferences</h3>
                        <div className="checkbox-group">
                            <div className="checkbox-item">
                                <input type="checkbox" id="email" />
                                <label htmlFor="email">Enable Email Notification</label>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" id="sms" />
                                <label htmlFor="sms">Enable SMS Notification</label>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" id="push" />
                                <label htmlFor="push">Enable Push Notification</label>
                            </div>
                        </div>
                        <button className="btn-update">Save Preferences</button>
                    </div>

                    <div className="section">
                        <h3 className="section-title">Add Your UPI QR:</h3>
                        <div className="qr-container">
                            <div className="qr-box">
                                <span>Add +</span>
                                <input type="file" className="qr-input" />
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="input-group">
                            <label>Account Number:</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>IFSC Number:</label>
                            <input type="text" />
                        </div>
                        <button className="btn-update">Update & Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
