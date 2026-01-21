import { useNavigate } from "react-router-dom";
import bgImage from "../assets/image/image.png";
import "../styles/authLayout.css";
import "../styles/login.css";

export default function Login() {
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
          <div className="tab">Login</div>
          <h2 className="title">Welcome Back!</h2>

          <button className="google-btn">Continue with Google</button>

          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />

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
