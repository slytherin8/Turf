import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/image/image.png";
import googleIcon from "../assets/image/google.png";
import eyeOpen from "../assets/image/eye-open.png";
import eyeClose from "../assets/image/eye-close.png";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="auth-container">
      <div
        className="left-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="right-form">
        <div className="form-box">
          <div className="tab1">Register</div>
          <h2 className="title">Create your account</h2>




          <button className="google-btn">
            <img src={googleIcon} alt="Google" className="google-icon" />
            <span>Continue with Google</span>
          </button>

          <div className="input-wrapper">
            <input className="input" placeholder="Username" />
          </div>

          <div className="input-wrapper">
            <input className="input" type="email" placeholder="Email" />
          </div>

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

          <div className="input-wrapper">
            <input
              className="input"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <img
              src={showConfirmPassword ? eyeOpen : eyeClose}
              className="input-icon clickable"
              alt="toggle confirm password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>


          

          <button className="btn" onClick={() => navigate("/settings")}>Sign up</button>


          <div className="link">
            Already have an account? <span onClick={() => navigate("/")}>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}
