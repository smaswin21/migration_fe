import React from "react";

const FoliumMap = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        title="Folium Map"
        src="/results/map_overview_1.html"
        style={{ border: "none", width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default FoliumMap;
