import React, { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F5F0] flex flex-col">
      {/* Navbar with Sidebar Toggle */}
      <div className="absolute top-0 right-0 p-4">
        <button
          className="text-3xl text-[#3B302A] focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50">
          <button
            className="text-lg text-[#3B302A] mb-4"
            onClick={() => setSidebarOpen(false)}
          >
            ✕ Close
          </button>
          <h2 className="text-2xl font-bold mb-4 text-[#3B302A]">Menu</h2>
          <ul className="space-y-4">
            <li>
              <Link
                to="/donation"
                className="text-lg text-[#5A514A] hover:text-[#3B302A]"
              >
                Donation
              </Link>
            </li>
            <li>
              <Link
                to="/agencies"
                className="text-lg text-[#5A514A] hover:text-[#3B302A]"
              >
                Agencies
              </Link>
            </li>
            <li>
              <Link
                to="/ngos"
                className="text-lg text-[#5A514A] hover:text-[#3B302A]"
              >
                NGOs
              </Link>
            </li>
            <li>
              <Link
                to="/partnerships"
                className="text-lg text-[#5A514A] hover:text-[#3B302A]"
              >
                Partnerships
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <header className="w-full bg-[#EAE4DA] text-center py-16 px-4">
        <img
          src="/assets/migration-hero.jpg"
          alt="Migration Banner"
          className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4 text-[#3B302A]">unravel AI</h1>
        <p className="text-lg text-[#5A514A]">
          Empowering policy-makers, humanitarian NGOs, and border agencies to
          make informed, data-driven decisions.
        </p>
      </header>

      {/* Problem Section */}
      <section className="py-12 px-6 max-w-5xl text-center mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[#3B302A]">
          The Problem We Are Solving
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-[#C4A484]">
            <h3 className="text-xl font-bold mb-3 text-[#3B302A]">
              Data Fragmentation
            </h3>
            <p className="text-[#5A514A]">
              Relief agencies and policymakers struggle with fragmented data
              sources, making it challenging to get a unified view of migration
              patterns and risks.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-[#C4A484]">
            <h3 className="text-xl font-bold mb-3 text-[#3B302A]">
              Insufficient Analytical Tools
            </h3>
            <p className="text-[#5A514A]">
              Existing tools lack the advanced analytical capabilities required
              to provide actionable insights for effective relief efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 max-w-5xl text-center mx-auto">
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
