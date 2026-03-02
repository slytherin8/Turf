import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/image/image.png";
import googleIcon from "../assets/image/google.png";
import eyeOpen from "../assets/image/eye-open.png";
import eyeClose from "../assets/image/eye-close.png";

import "../styles/authLayout.css";
import "../styles/signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Unable to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

          {error && <div style={{ color: 'red', marginBottom: '10px', fontSize: '14px' }}>{error}</div>}

          <button className="google-btn">
            <img src={googleIcon} alt="Google" className="google-icon" />
            <span>Continue with Google</span>
          </button>

          {/* USERNAME */}
          <div className="input-wrapper">
            <input 
              className="input" 
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <div className="input-wrapper">
            <input 
              className="input" 
              type="email" 
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div className="input-wrapper">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <img
              src={showPassword ? eyeOpen : eyeClose}
              className="input-icon clickable"
              alt="toggle password"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="input-wrapper">
            <input
              className="input"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <img
              src={showConfirmPassword ? eyeOpen : eyeClose}
              className="input-icon clickable"
              alt="toggle confirm password"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            />
          </div>

          <button className="btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Signing up...' : 'Sign up'}
          </button>

          <div className="link">
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}
