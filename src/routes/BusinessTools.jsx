

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo2 from "../assets/logo2.png";
import { FaArrowLeft, FaUser, FaMoneyBillWave } from "react-icons/fa6";

import "../styles/BusinessTools.css";

export default function BusinessTools() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-scroll-tools");
    return () => document.body.classList.remove("no-scroll-tools");
  }, []);

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("SAR");
  const [result, setResult] = useState("");

  async function convert() {
    try {
      const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
      const data = await res.json();
      const converted = (amount * data.rates[to]).toFixed(2);
      setResult(converted);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="tools-root">

      {/* ================= NAVBAR ================= */}
      <header className="tools-navbar">

        <div className="nav-left">
          <div className="back-btn" onClick={() => navigate("/home")}>
            <FaArrowLeft className="back-icon" />
          </div>

          <img src={Logo2} className="tools-logo" alt="logo" />
        </div>

        <div className="profile-wrapper">
          <FaUser
            className="profile-icon-t"
            onClick={() => setShowMenu(!showMenu)}
          />

          {showMenu && (
            <div className="dropdown-menu-t">
              <p onClick={() => navigate("/profile")}>My Profile</p>
              <p onClick={() => navigate("/projects")}>My Projects</p>
              <p onClick={() => navigate("/logout")}>Logout</p>
            </div>
          )}
        </div>
      </header>

      {/* ================= PAGE TITLE ================= */}
      <h1 className="tools-title">Currency Converter</h1>
      <p className="tools-subtitle">
        Convert currencies instantly with up-to-date global rates
      </p>

      {/* ================= CONVERTER CARD ================= */}
      <div className="converter-card">

        <div className="converter-body improved-layout">

          {/* Amount */}
          <label className="field-label">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="conv-input"
            placeholder="Enter amount"
          />

          {/* From */}
          <label className="field-label">From Currency</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="conv-select"
          >
            <option>USD</option>
            <option>SAR</option>
            <option>EUR</option>
            <option>AED</option>
          </select>

          {/* To */}
          <label className="field-label">To Currency</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="conv-select"
          >
            <option>SAR</option>
            <option>USD</option>
            <option>EUR</option>
            <option>AED</option>
          </select>

          {/* Convert Button */}
          <button className="conv-btn" onClick={convert}>
            Convert
          </button>

          {result && (
            <p className="conv-result">
              {amount} {from} = <strong>{result} {to}</strong>
            </p>
          )}
        </div>
      </div>

    </div>
  );
}
