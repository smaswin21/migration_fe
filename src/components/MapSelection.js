import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MapSelection = () => {
  const navigate = useNavigate();

  // Dynamic dataset for regions
  const regions = [
    {
      name: "Central Mediterranean",
      survivors: 5000,
      totalDeadMissing: 1200,
    },
    {
      name: "Western Africa",
      survivors: 3000,
      totalDeadMissing: 800,
    },
    {
      name: "Eastern Mediterranean",
      survivors: 4500,
      totalDeadMissing: 900,
    },
  ];

  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);
  const currentRegion = regions[currentRegionIndex];

  const handleNextRegion = () => {
    setCurrentRegionIndex((prevIndex) => (prevIndex + 1) % regions.length);
  };

  const handlePrevRegion = () => {
    setCurrentRegionIndex(
      (prevIndex) => (prevIndex - 1 + regions.length) % regions.length
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-8 px-4"
      style={{
        background: "linear-gradient(120deg, #f7f7f7, #e3f2fd)", // Subtle gradient background
      }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Current Location Incident
      </h1>
      <p className="text-gray-600 mb-6">
        Choose a map view to explore and understand the intensity of migration
        hotspots and patterns.
      </p>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => navigate("/dashboard/map")}
          className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
        >
          View Interactive Map
        </button>
        <button
          onClick={() => navigate("/dashboard/heatmap")}
          className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
        >
          View Heatmap
        </button>
      </div>

      {/* Importance Text */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mb-8 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Statistical Analysis of Migration Routes</h2>
        <ul className="text-gray-700 text-left space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-teal-500 font-bold">•</span>
            <span>Aggregated data for the top 10 migration routes, ranked by the number of missing and deceased migrants.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-teal-500 font-bold">•</span>
            <span>Comprehensive statistics highlighting the number of survivors, missing individuals, and deceased migrants.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-teal-500 font-bold">•</span>
            <span>Actionable insights to assist in prioritizing high-risk routes and regions for humanitarian relief efforts.</span>
          </li>
        </ul>
      </div>

      {/* Container for Bar Chart and Circle Widgets */}
      <div className="flex items-start w-full max-w-6xl gap-8 mt-8">
        {/* Bar Chart Section */}
        <div className="flex-grow bg-white shadow-lg rounded-lg p-4 max-w-[1000px]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Top Migration Routes
          </h2>
          <iframe
            src="/results/top_routes.html"
            title="Bar Chart"
            style={{ width: "100%", height: "500px", border: "none" }}
          ></iframe>
        </div>

        {/* Statistical Highlights Section */}
        <div
          className="flex-shrink-0 bg-white shadow-lg rounded-lg p-4 max-w-[400px] flex flex-col justify-between"
          style={{ marginTop: "90px" }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
            Statistical Highlights for {currentRegion.name}
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Number of Survivors</span>
              <span className="text-5xl font-bold text-gray-800">
                {currentRegion.survivors}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">
                Total Dead and Missing
              </span>
              <span className="text-5xl font-bold text-gray-800">
                {currentRegion.totalDeadMissing}
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300"
              onClick={handlePrevRegion}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300"
              onClick={handleNextRegion}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSelection;
