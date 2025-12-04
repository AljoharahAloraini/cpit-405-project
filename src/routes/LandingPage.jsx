
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import LandingVisual from "../assets/logo.png";

export default function LandingPage() {
  return (
    <div className="landing-root">
      <div className="landing-inner">

        {/* LEFT — IMAGE */}
        <div className="landing-left">
          <div
            className="landing-visual"
            style={{ backgroundImage: `url(${LandingVisual})` }}
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="landing-right">
          <p className="landing-kicker">AI-POWERED PLATFORM</p>

          <h1 className="landing-title">Moqaddim</h1>

          <p className="landing-subtitle">
            Smart feasibility study assistant that helps you validate ideas
            and make confident business decisions using AI.
          </p>

          <Link to="/login" className="landing-button">
            Let’s Go
          </Link>
        </div>

      </div>
    </div>
  );
}
