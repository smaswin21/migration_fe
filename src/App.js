import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import MigrationMap from "./components/MigrationMap";
import FoliumMap from "./components/FoliumMap";
import MapSelection from "./components/MapSelection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/map-selection" element={<MapSelection />} />
        <Route path="/dashboard/map" element={<MigrationMap />} />
        <Route path="/dashboard/heatmap" element={<FoliumMap />} />
      </Routes>
    </Router>
  );
};

export default App;
