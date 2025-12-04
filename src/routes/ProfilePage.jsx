import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { FaArrowLeft, FaUser, FaArrowRight } from "react-icons/fa6";
import Logo2 from "../assets/logo2.png";

import "../styles/ProfilePage.css";

export default function ProfilePage() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const nameParts = user?.displayName?.split(" ") || ["", ""];
  const [firstName, setFirstName] = useState(nameParts[0]);
  const [lastName, setLastName] = useState(nameParts[1] || "");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("2001-01-01");

  const [editing, setEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const originalFN = nameParts[0];
    const originalLN = nameParts[1] || "";

    if (
      firstName !== originalFN ||
      lastName !== originalLN ||
      phone !== "" ||
      birth !== "2001-01-01"
    ) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [firstName, lastName, phone, birth]);

  async function saveChanges() {
    try {
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      setEditing(false);
      setPopup(true);
      setTimeout(() => setPopup(false), 2000);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="profile-root">

      {/* NAVBAR */}
      <header className="tools-navbar">
        <div className="nav-left">
          <div className="back-btn" onClick={() => navigate("/home")}>
            <FaArrowLeft className="back-icon" />
          </div>

          <img src={Logo2} className="tools-logo" alt="logo" />
        </div>

        <div className="profile-wrapper">
          <FaUser className="profile-icon-t" />
        </div>
      </header>

      {/* PROFILE CARD WRAPPER */}
      <div className="profile-box-wrapper">

        <div className="profile-card">

          {/* Avatar */}
          <div className="avatar-circle">{firstName[0] || "U"}</div>

          {/* Edit / Cancel inside card */}
          <div className="edit-inside">
            {!editing ? (
              <button className="edit-btn-card" onClick={() => setEditing(true)}>
                Edit
              </button>
            ) : (
              <button
                className="cancel-edit-btn-card"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            )}
          </div>

          <h2 className="profile-title">Profile Information</h2>

          {/* First Name */}
          <label className="label">First Name</label>
          <input
            className="input-modern"
            disabled={!editing}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <label className="label">Last Name</label>
          <input
            className="input-modern"
            disabled={!editing}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {/* Username */}
          <label className="label">Username</label>
          <input
            className="input-modern"
            disabled
            value={"@" + firstName + " " + lastName}
          />

          {/* Email */}
          <label className="label">Email</label>
          <input
            className="input-modern"
            disabled
            value={user?.email}
          />

          {/* Phone */}
          <label className="label">Phone Number</label>
          <input
            className="input-modern"
            disabled={!editing}
            placeholder="05X XXX XXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Birth */}
          <label className="label">Birth</label>
          <input
            type="date"
            className="input-modern"
            disabled={!editing}
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />

          {editing && (
            <button
              className="save-btn"
              disabled={!hasChanges}
              onClick={saveChanges}
            >
              Save Changes
            </button>
          )}

        </div>
      </div>

      {popup && (
        <div className="popup">Profile updated successfully ✓</div>
      )}
    </div>
  );
}
