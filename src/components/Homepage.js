import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#F9F5F0] flex flex-col items-center">
      {/* Hero Section */}
      <header className="w-full bg-[#EAE4DA] text-center py-16 px-4">
        <img
          src="/assets/migration-hero.jpg"
          alt="Migration Banner"
          className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4 text-[#3B302A]">
          unravel AI
        </h1>
        <p className="text-lg text-[#5A514A]">
          Empowering policy-makers, humanitarian NGOs, and border agencies to
          make informed, data-driven decisions.
        </p>
      </header>

      {/* Features Section */}
      <section className="py-12 px-6 max-w-5xl text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#3B302A]">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-[#C4A484]">
            <h3 className="text-xl font-bold mb-3 text-[#3B302A] flex items-center justify-center">
              <img
                src="/assets/icon-dashboard.png"
                alt="Dashboard Icon"
                className="w-6 h-6 mr-2"
              />
              Unified Geospatial Dashboard
            </h3>
            <p className="text-[#5A514A]">
              View migration hotspots, layered insights, and dynamic overlays in
              real-time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-[#C4A484]">
            <h3 className="text-xl font-bold mb-3 text-[#3B302A] flex items-center justify-center">
              <img
                src="/assets/icon-data.png"
                alt="Data Integration Icon"
                className="w-6 h-6 mr-2"
              />
              Real-Time Data Integration
            </h3>
            <p className="text-[#5A514A]">
              Consolidate fragmented datasets into one platform with
              auto-refresh and live filtering.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-[#C4A484]">
            <h3 className="text-xl font-bold mb-3 text-[#3B302A] flex items-center justify-center">
              <img
                src="/assets/icon-alert.png"
                alt="Risk Assessment Icon"
                className="w-6 h-6 mr-2"
              />
              Lightweight Risk Assessment
            </h3>
            <p className="text-[#5A514A]">
              Identify high-risk regions with actionable insights and visual
              alerts.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#EAE4DA] w-full py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#3B302A]">
          Explore the Migration Landscape
        </h2>
        <p className="text-[#5A514A] mb-6">
          Dive into interactive maps and discover migration patterns, risks, and
          opportunities for intervention.
        </p>
        <Link to="/dashboard">
          <button className="bg-[#C4A484] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#A78866] transition duration-300">
            Go to Geospatial Dashboard
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#F9F5F0] text-center py-6 border-t border-[#C4A484]">
        <p className="text-sm text-[#5A514A]">
          Built to support migration policy, humanitarian needs, and safer
          migration pathways.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
