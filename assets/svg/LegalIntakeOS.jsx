import React from "react";

const LegalIntakeOS = ({ width, height, ...props }) => {
  return (
    <svg
      width={width || "100"}
      height={height || "100"}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="10"
            floodColor="#ffffff"
            floodOpacity="0.18"
          />
        </filter>
      </defs>

      <rect
        x="24"
        y="24"
        width="352"
        height="352"
        rx="64"
        fill="#141414"
        filter="url(#softShadow)"
      />

      <rect x="86" y="106" width="58" height="204" rx="16" fill="#ffffff" />
      <rect x="86" y="250" width="150" height="60" rx="16" fill="#ffffff" />

      <rect x="262" y="170" width="44" height="140" rx="14" fill="#ffffff" />
      <rect x="254" y="90" width="60" height="60" rx="14" fill="#6C4CF1" />
    </svg>
  );
};

export default LegalIntakeOS;
