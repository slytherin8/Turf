import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/image/image.png";
import googleIcon from "../assets/image/google.png";
import eyeOpen from "../assets/image/eye-open.png";
import eyeClose from "../assets/image/eye-close.png";

import "../styles/authLayout.css";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      {/* LEFT IMAGE */}
      <div
        className="left-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* RIGHT FORM */}
      <div className="right-form">
        <div className="form-box">
          <div className="tab">Login</div>
          <h2 className="title">Welcome Back!</h2>

          {/* GOOGLE BUTTON */}
          <button className="google-btn">
            <img src={googleIcon} alt="Google" className="google-icon" />
            <span>Continue with Google</span>
          </button>

          {/* EMAIL INPUT (NO CHECK ICON) */}
          <div className="input-wrapper">
            <input className="input" type="email" placeholder="Email" />
          </div>

          {/* PASSWORD INPUT WITH EYE ICON */}
          <div className="input-wrapper">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <img
              src={showPassword ? eyeOpen : eyeClose}
              className="input-icon clickable"
              alt="toggle password"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="forgot">Forgot Password?</div>

          <button className="btn">Log in</button>

          <div className="link">
            New user?{" "}
            <span onClick={() => navigate("/signup")}>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}
