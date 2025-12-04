import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

import "../styles/SignupPage.css";
import Logo from "../assets/Logo2.png";

export default function SignupPage() {
  const navigate = useNavigate();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    if (pass !== confirm) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, pass)
      .then(async () => {
        await updateProfile(auth.currentUser, {
          displayName: `${first} ${last}`,  
        });

        navigate("/home"); 
      })
      .catch(() => {
        setError("Failed to create account");
      });
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={Logo} alt="Logo" className="signup-logo" />

        <h2 className="signup-title">Create an Account</h2>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label className="input-label">First Name *</label>
            <input
              type="text"
              className="input-field"
              required
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Last Name *</label>
            <input
              type="text"
              className="input-field"
              required
              onChange={(e) => setLast(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Email *</label>
            <input
              type="email"
              className="input-field"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password *</label>
            <input
              type="password"
              className="input-field"
              required
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Password *</label>
            <input
              type="password"
              className="input-field"
              required
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="signup-btn">Sign Up</button>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
