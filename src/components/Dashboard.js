import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Geospatial Dashboard Analysis</h1>
      <p className="text-lg text-gray-600 text-center mb-6 max-w-3xl">
        Geospatial analysis plays a critical role in enabling stakeholders to understand migration patterns,
        identify high-risk areas, and implement effective relief efforts. Our goal is to empower policymakers,
        humanitarian NGOs, and border agencies with actionable insights to support informed decision-making.
      </p>

      {/* Call to Action */}
      <button
        onClick={() => navigate("/dashboard/map-selection")}
        className="px-8 py-4 bg-[#6D9773] text-white font-semibold rounded-lg text-lg hover:bg-[#567A5E] transition duration-300 mb-8"
      >
        Current Location Incident
      </button>

      {/* Image Section */}
      <div className="mb-8 flex justify-center w-full max-w-5xl">
        <img
          src="/assets/geospatial-analysis.jpg"
          alt="Geospatial Analysis"
          className="rounded-lg shadow-lg max-w-full h-auto object-cover"
          style={{ maxHeight: "300px" }}
        />
      </div>

      {/* Statistical Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-5xl w-full">
        <div className="bg-[#EAE4DA] shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-transform transform hover:-translate-y-1">
          <h2 className="text-4xl font-bold text-primary mb-2">120+</h2>
          <p className="text-gray-700 font-medium">Migration Hotspots Identified</p>
        </div>
        <div className="bg-[#EAE4DA] shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-transform transform hover:-translate-y-1">
          <h2 className="text-4xl font-bold text-primary mb-2">300K+</h2>
          <p className="text-gray-700 font-medium">Data Points Collected</p>
        </div>
        <div className="bg-[#EAE4DA] shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-transform transform hover:-translate-y-1">
          <h2 className="text-4xl font-bold text-primary mb-2">50+</h2>
          <p className="text-gray-700 font-medium">High-Risk Routes Mapped</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl text-left bg-white p-6 shadow-lg rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why is this feature important?
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Layered Data Visualization:</strong> Combine satellite imagery, migration hotspots, routes, and external
            factors like conflict zones and weather risks.
          </li>
          <li>
            <strong>Heatmaps and Dynamic Overlays:</strong> Highlight high-risk zones such as fatality corridors or regions
            with extreme migration spikes.
          </li>
          <li>
            <strong>Interactive Navigation:</strong> Hover and view region-specific stats such as fatalities, crossings,
            and incident reports. Use a time slider to analyze trends over different time frames.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
