import React from "react";
import { useNavigate } from "react-router-dom";

const MapSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Current Location Incident</h1>
      <p className="text-gray-600 mb-6">
        Choose a map view to explore and understand the intensity of migration hotspots and patterns.
      </p>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => navigate("/dashboard/map")}
          className="px-4 py-2 rounded-lg text-white bg-primary hover:bg-secondary transition duration-300"
        >
          View Interactive Map
        </button>
        <button
          onClick={() => navigate("/dashboard/heatmap")}
          className="px-4 py-2 rounded-lg text-white bg-primary hover:bg-secondary transition duration-300"
        >
          View Heatmap
        </button>
      </div>
    </div>
  );
};

export default MapSelection;
