import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo2 from "../assets/logo2.png";
import { FaUser, FaArrowLeft } from "react-icons/fa";

import { generateFeasibilityReport } from "../utils/FeasibilityEngine";
import { saveProject } from "../utils/Storage";

import "../styles/NewStudy.css";

export default function NewStudy() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const [data, setData] = useState({
    name: "",
    industry: "",
    description: "",
    initial_investment: 0,
    target_market: "",
  });

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const report = generateFeasibilityReport(data);

    const projectWithReport = {
      id: Date.now(),
      input: data,
      report,
    };

    saveProject(projectWithReport);
    navigate(`/result/${projectWithReport.id}`);
  }

  return (
    <div className="study-root">

      {/* NAVBAR */}
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

      {/* CENTER FORM */}
      <div className="study-container">

        <h1 className="study-title">Create Feasibility Study</h1>

        <form onSubmit={handleSubmit} className="study-form">

          <label>Project Name</label>
          <input
            type="text"
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <label>Industry</label>
          <input
            type="text"
            required
            onChange={(e) => setData({ ...data, industry: e.target.value })}
          />

          <label>Description</label>
          <textarea
            required
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />

          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) =>
              setData({
                ...data,
                initial_investment: Number(e.target.value),
              })
            }
          />

          <label>Target Market</label>
          <input
            type="text"
            required
            onChange={(e) =>
              setData({ ...data, target_market: e.target.value })
            }
          />

          <button className="study-btn">Generate Feasibility Study </button>
        </form>

      </div>

    </div>
  );
}
