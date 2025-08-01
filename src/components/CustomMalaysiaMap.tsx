import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const CustomMalaysiaMap = () => {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const facilities = [
    { name: "Shah Alam", x: 285, y: 180 },
    { name: "Penang", x: 250, y: 120 },
    { name: "Johor", x: 320, y: 280 },
    { name: "Kuching", x: 400, y: 200 },
    { name: "Kota Kinabalu", x: 520, y: 80 },
    { name: "Sibu", x: 450, y: 160 },
    { name: "Miri", x: 470, y: 100 },
    { name: "Bintulu", x: 480, y: 140 },
    { name: "Tawau", x: 580, y: 120 }
  ];

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <svg
        viewBox="0 0 700 350"
        className="w-full h-96"
        style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)' }}
      >
        {/* Malaysia outline - simplified SVG path */}
        <path
          d="M200 100 L350 90 L380 120 L420 110 L480 80 L520 70 L580 85 L620 110 L640 140 L620 180 L580 200 L520 220 L480 240 L450 280 L400 300 L350 290 L320 310 L280 300 L250 280 L220 260 L200 220 L180 180 L190 140 Z"
          fill="#22c55e"
          fillOpacity="0.3"
          stroke="#16a34a"
          strokeWidth="2"
        />
        
        {/* Sabah (simplified) */}
        <path
          d="M480 60 L580 50 L620 80 L640 120 L620 160 L580 180 L540 170 L500 160 L480 140 L470 100 Z"
          fill="#22c55e"
          fillOpacity="0.3"
          stroke="#16a34a"
          strokeWidth="2"
        />
        
        {/* Sarawak (simplified) */}
        <path
          d="M380 140 L480 130 L520 150 L540 180 L520 220 L480 240 L420 250 L380 230 L360 200 L370 170 Z"
          fill="#22c55e"
          fillOpacity="0.3"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Facility markers */}
        {facilities.map((facility, index) => (
          <g key={index}>
            {/* Marker shadow */}
            <circle
              cx={facility.x + 2}
              cy={facility.y + 2}
              r="12"
              fill="rgba(0,0,0,0.2)"
            />
            {/* Main marker */}
            <circle
              cx={facility.x}
              cy={facility.y}
              r="12"
              fill="#1e40af"
              stroke="white"
              strokeWidth="2"
              className="cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setSelectedFacility(selectedFacility === facility.name ? null : facility.name)}
            />
            {/* Center dot */}
            <circle
              cx={facility.x}
              cy={facility.y}
              r="4"
              fill="white"
              className="cursor-pointer"
              onClick={() => setSelectedFacility(selectedFacility === facility.name ? null : facility.name)}
            />
            
            {/* Facility label on hover/selection */}
            {selectedFacility === facility.name && (
              <g>
                <rect
                  x={facility.x - 40}
                  y={facility.y - 40}
                  width="80"
                  height="24"
                  fill="white"
                  stroke="#1e40af"
                  strokeWidth="1"
                  rx="4"
                  className="drop-shadow-lg"
                />
                <text
                  x={facility.x}
                  y={facility.y - 24}
                  textAnchor="middle"
                  className="text-sm font-semibold fill-steel-blue"
                  style={{ fontSize: '12px' }}
                >
                  {facility.name}
                </text>
              </g>
            )}
          </g>
        ))}

        {/* Water bodies (South China Sea, etc.) */}
        <circle cx="150" cy="200" r="30" fill="#3b82f6" fillOpacity="0.3" />
        <circle cx="480" cy="40" r="25" fill="#3b82f6" fillOpacity="0.3" />
        <circle cx="350" cy="350" r="20" fill="#3b82f6" fillOpacity="0.3" />
      </svg>

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border">
        <h4 className="font-bold text-steel-blue mb-2 text-sm">ESB Facilities Network</h4>
        <div className="flex items-center space-x-2 text-xs text-slate-gray mb-2">
          <div className="w-3 h-3 bg-steel-blue border border-white rounded-full"></div>
          <span>9 Strategic Locations Across Malaysia</span>
        </div>
        <p className="text-xs text-slate-gray">Click markers for details</p>
      </div>

      {/* Facilities List */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border max-w-xs">
        <h5 className="font-semibold text-steel-blue text-sm mb-2">Facility Locations:</h5>
        <div className="grid grid-cols-2 gap-1 text-xs text-slate-gray">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className={`cursor-pointer hover:text-steel-blue transition-colors ${
                selectedFacility === facility.name ? 'text-steel-blue font-semibold' : ''
              }`}
              onClick={() => setSelectedFacility(selectedFacility === facility.name ? null : facility.name)}
            >
              • {facility.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomMalaysiaMap;