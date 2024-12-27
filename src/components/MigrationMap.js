import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { BASE_URL } from "../services/api";

const MigrationMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/migration-data`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <MapContainer center={[20, 10]} zoom={2} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((point, index) => (
        <CircleMarker
          key={index}
          center={[point.Latitude, point.Longitude]}
          radius={Math.min(point["Total Number of Dead and Missing"] / 10, 10)}
          color="red"
          fillOpacity={0.7}
        >
          <Popup>
            <strong>Incident Type:</strong> {point["Incident Type"]}<br />
            <strong>Fatalities:</strong> {point["Total Number of Dead and Missing"]}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default MigrationMap;
