"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#131722", // Using your Deep Slate color
    showAtmosphere: true,
    atmosphereColor: "#00D09B", // Using your Brand Green
    atmosphereAltitude: 0.1,
    emissive: "#131722",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(0, 208, 155, 0.1)", // Brand Green with low opacity
    ambientLight: "#00D09B",
    directionalLeftLight: "#F0F3F7",
    directionalTopLight: "#F0F3F7", 
    pointLight: "#00D09B",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 9.0765, lng: 7.3986 }, // Nigeria coordinates
    autoRotate: true,
    autoRotateSpeed: 0.3,
  };

  const colors = ["#00D09B", "#FFC043", "#8A919E"]; // Your brand colors
  
  // Financial centers and major cities for forex theme
  const forexArcs = [
    {
      order: 1,
      startLat: 9.0765, // Lagos, Nigeria
      startLng: 7.3986,
      endLat: 40.7128, // New York
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 1,
      startLat: 9.0765, // Lagos, Nigeria
      startLng: 7.3986,
      endLat: 51.5072, // London
      endLng: -0.1276,
      arcAlt: 0.4,
      color: colors[1],
    },
    {
      order: 2,
      startLat: 9.0765, // Lagos, Nigeria
      startLng: 7.3986,
      endLat: 1.3521, // Singapore
      endLng: 103.8198,
      arcAlt: 0.5,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 51.5072, // London
      startLng: -0.1276,
      endLat: 40.7128, // New York
      endLng: -74.006,
      arcAlt: 0.2,
      color: colors[2],
    },
    {
      order: 3,
      startLat: 35.6762, // Tokyo
      startLng: 139.6503,
      endLat: 9.0765, // Lagos, Nigeria
      endLng: 7.3986,
      arcAlt: 0.6,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 25.2048, // Dubai
      startLng: 55.2708,
      endLat: 9.0765, // Lagos, Nigeria
      endLng: 7.3986,
      arcAlt: 0.3,
      color: colors[0],
    }
  ];

  return (
    <div className="absolute inset-0 w-full h-screen overflow-hidden opacity-20 pointer-events-none">
      <div className="w-full h-full relative">
        <div className="absolute w-full h-full">
          <World data={forexArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
