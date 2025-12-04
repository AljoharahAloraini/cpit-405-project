import { useEffect, useState } from "react";
import { getAllProjects, deleteProject } from "../utils/Storage";
import { useNavigate } from "react-router-dom";

import Logo2 from "../assets/logo2.png";
import { FaUser, FaArrowLeft, FaEye, FaTrash } from "react-icons/fa6";

import "../styles/Projects.css";

export default function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setProjects(getAllProjects());
  }, []);

  function handleDelete(id) {
    deleteProject(id);
    setProjects(getAllProjects());
  }

  return (
    <div className="projects-root">

      <header className="tools-navbar">
        <div className="nav-left">
          <div className="back-btn" onClick={() => navigate("/home")}>
            <FaArrowLeft className="back-icon" />
          </div>
          <img src={Logo2} className="tools-logo" alt="logo" />
        </div>

        <div className="profile-wrapper">
          <FaUser className="profile-icon-t" onClick={() => setShowMenu(!showMenu)} />
          {showMenu && (
            <div className="dropdown-menu-t">
              <p onClick={() => navigate("/profile")}>My Profile</p>
              <p onClick={() => navigate("/projects")}>My Projects</p>
              <p onClick={() => navigate("/logout")}>Logout</p>
            </div>
          )}
        </div>
      </header>

      <div className="page-title">
        <h1>My Feasibility Studies</h1>
      </div>

      <div className="projects-container">
        {projects.length === 0 ? (
          <div className="empty-message">
            <h2>No projects yet</h2>
            <p>Create your first feasibility study to begin!</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card">

                <h3 className="p-title">{p.input.name}</h3>

                <div className="industry-tag">{p.input.industry}</div>

                <p className="p-date">
                  Created on: {new Date(p.id).toLocaleString()}
                </p>

                <div className="card-buttons">
                  <button
                    className="btn view"
                    onClick={() => navigate(`/result/${p.id}`)}
                  >
                    <FaEye /> View
                  </button>

                  <button
                    className="btn delete"
                    onClick={() => handleDelete(p.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
