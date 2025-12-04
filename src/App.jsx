import { Routes, Route } from "react-router-dom";

import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import HomePage from "./routes/HomePage";
import NewStudy from "./routes/NewStudy";
import StudyResult from "./routes/StudyResult";
import Projects from "./routes/Projects";
import ProfilePage from "./routes/ProfilePage";
import BusinessTools from "./routes/BusinessTools";

import ProtectedRoute from "./components/ProtectedRoute"; 

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tools"
        element={
          <ProtectedRoute>
            <BusinessTools />
          </ProtectedRoute>
        }
      />

      <Route
        path="/new-study"
        element={
          <ProtectedRoute>
            <NewStudy />
          </ProtectedRoute>
        }
      />

      <Route
        path="/result/:id"
        element={
          <ProtectedRoute>
            <StudyResult />
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
