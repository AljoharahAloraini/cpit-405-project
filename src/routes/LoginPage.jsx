import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

import "../styles/LoginPage.css";
import Logo from "../assets/Logo2.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home"); 
      })
      .catch(() => {
        setError("Invalid email or password");
      });
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Logo} alt="Logo" className="login-logo" />

        <h2 className="login-title">Welcome Back</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className="input-label">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              className="input-field"
              placeholder="example@mail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              className="input-field"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="login-btn">Login</button>

          <p className="signup-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}