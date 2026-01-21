import { useNavigate } from "react-router-dom";
import bgImage from "../assets/image/image.png";
import "../styles/authLayout.css";
import "../styles/signup.css";

export default function Signup() {
  const navigate = useNavigate();

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
          <div className="tab1">Register</div>
          <h2 className="title">Create your account</h2>

          <button className="google-btn">Continue with Google</button>

          <input className="input" placeholder="Username" />
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <input className="input" type="password" placeholder="Confirm Password" />

          <button className="btn">Sign up</button>

          <div className="link">
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}
