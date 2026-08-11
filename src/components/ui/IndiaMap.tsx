"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "/geo/india-states.json";

interface City {
  name: string;
  coordinates: [number, number];
  story: string;
  type: "origin" | "key" | "reach";
}

const cities: City[] = [
  {
    name: "Lucknow",
    coordinates: [80.946, 26.846],
    story: "Where Sakhi was born. ISDP Bootcamp, Jan 2024.",
    type: "origin",
  },
  {
    name: "Delhi",
    coordinates: [77.209, 28.614],
    story: "Students away from home for the first time, managing alone.",
    type: "key",
  },
  {
    name: "Mumbai",
    coordinates: [72.877, 19.076],
    story: "Working women who needed PCOD answers without a doctor visit.",
    type: "key",
  },
  {
    name: "Bangalore",
    coordinates: [77.594, 12.972],
    story: "Women who wanted AI health insights without sharing data.",
    type: "key",
  },
  {
    name: "Pune",
    coordinates: [73.856, 18.52],
    story: "Mothers and daughters using Sakhi together, 300 km apart.",
    type: "key",
  },
  {
    name: "Hyderabad",
    coordinates: [78.474, 17.385],
    story: "Early beta testers who shaped the v2 experience.",
    type: "reach",
  },
  {
    name: "Chennai",
    coordinates: [80.28, 13.08],
    story: "Women discovering Sakhi through the App Store.",
    type: "reach",
  },
  {
    name: "Kolkata",
    coordinates: [88.363, 22.572],
    story: "Growing Sakhi community in eastern India.",
    type: "reach",
  },
  {
    name: "Ahmedabad",
    coordinates: [72.585, 23.033],
    story: "Campus reach across Gujarat's student population.",
    type: "reach",
  },
  {
    name: "Jaipur",
    coordinates: [75.787, 26.912],
    story: "Women reaching out through word of mouth.",
    type: "reach",
  },
];

const typeConfig = {
  origin: { size: 10, fill: "#F61887", ring: 18, ringOpacity: 0.25 },
  key:    { size: 7,  fill: "#F61887", ring: 13, ringOpacity: 0.18 },
  reach:  { size: 5,  fill: "rgba(246,24,135,0.6)", ring: 9, ringOpacity: 0.12 },
};

export default function IndiaMap() {
  const [active, setActive] = useState<string | null>(null);
  const activeCity = cities.find(c => c.name === active);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
      {/* Tooltip */}
      <AnimatePresence>
        {activeCity && (
          <motion.div
            key={activeCity.name}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              background: "#fff",
              borderRadius: 14,
              padding: "14px 18px",
              maxWidth: 220,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              zIndex: 20,
              pointerEvents: "none",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 5 }}>
              {activeCity.name}
            </div>
            <div style={{ fontSize: 12, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.6 }}>
              {activeCity.story}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [82, 22], scale: 1050 }}
        style={{ width: "100%", height: "auto" }}
        width={420}
        height={480}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#F8E5EC", stroke: "#EAD8E0", strokeWidth: 0.8, outline: "none" },
                  hover:   { fill: "#F8E5EC", stroke: "#EAD8E0", strokeWidth: 0.8, outline: "none" },
                  pressed: { fill: "#F8E5EC", stroke: "#EAD8E0", strokeWidth: 0.8, outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {cities.map((city, i) => {
          const cfg = typeConfig[city.type];
          const isActive = active === city.name;
          return (
            <Marker
              key={city.name}
              coordinates={city.coordinates}
              onMouseEnter={() => setActive(city.name)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === city.name ? null : city.name)}
            >
              {/* Pulse ring */}
              <circle
                r={cfg.ring}
                fill={`rgba(246,24,135,${isActive ? cfg.ringOpacity * 2 : cfg.ringOpacity})`}
                style={{
                  animation: city.type === "origin"
                    ? `pulse-ring 2s ${i * 0.3}s ease-in-out infinite`
                    : `pulse-ring 3s ${i * 0.4}s ease-in-out infinite`,
                }}
              />
              {/* Dot */}
              <circle
                r={isActive ? cfg.size + 2 : cfg.size}
                fill={isActive ? "#F61887" : cfg.fill}
                style={{
                  cursor: "pointer",
                  transition: "r 0.2s ease",
                  filter: isActive ? "drop-shadow(0 0 6px rgba(246,24,135,0.6))" : "none",
                }}
              />
              {/* City label for origin */}
              {city.type === "origin" && (
                <text
                  textAnchor="middle"
                  y={-14}
                  style={{ fontSize: 9, fill: "#F61887", fontWeight: 600, fontFamily: "Lato, sans-serif", pointerEvents: "none" }}
                >
                  {city.name}
                </text>
              )}
            </Marker>
          );
        })}
      </ComposableMap>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.7; r: 0; }
          50% { opacity: 0; r: 18; }
        }
      `}</style>

      {/* Legend */}
      <div style={{ display: "flex", gap: 16, paddingTop: 12, paddingLeft: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F61887" }} />
          <span style={{ fontSize: 11, color: "#A0A0A0" }}>Origin</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#F61887" }} />
          <span style={{ fontSize: 11, color: "#A0A0A0" }}>Key cities</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(246,24,135,0.6)" }} />
          <span style={{ fontSize: 11, color: "#A0A0A0" }}>Growing reach</span>
        </div>
      </div>
    </div>
  );
}
