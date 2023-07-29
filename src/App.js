import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

import MiscPage from "./pages/MiscPage";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="/Misc" element={<MiscPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
