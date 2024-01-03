import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExperiencePage from "./components/ExperiencePage.js";
import MainContent from "./components/MainContent.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route
            path="/experience/:experienceId"
            element={<ExperiencePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
