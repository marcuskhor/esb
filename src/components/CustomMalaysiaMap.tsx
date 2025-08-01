import React, { useState } from 'react';

const CustomMalaysiaMap = () => {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const facilities = [
    { name: "Shah Alam", x: 170, y: 220 }, // Peninsular Malaysia
    { name: "Penang", x: 140, y: 180 }, // Peninsular Malaysia  
    { name: "Johor", x: 190, y: 280 }, // Peninsular Malaysia
    { name: "Kuching", x: 380, y: 240 }, // Sarawak
    { name: "Kota Kinabalu", x: 480, y: 140 }, // Sabah
    { name: "Sibu", x: 420, y: 220 }, // Sarawak
    { name: "Miri", x: 440, y: 190 }, // Sarawak
    { name: "Bintulu", x: 450, y: 210 }, // Sarawak
    { name: "Tawau", x: 520, y: 180 } // Sabah
  ];

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <svg
        viewBox="0 0 600 350"
        className="w-full h-96"
        style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)' }}
      >
        {/* Peninsular Malaysia */}
        <path
          d="M120 150 C130 140, 140 135, 155 140 C170 145, 180 150, 190 160 C200 170, 205 180, 210 195 C215 210, 220 225, 225 240 C230 255, 235 270, 230 285 C225 300, 215 310, 200 315 C185 320, 170 315, 155 310 C140 305, 125 295, 115 280 C105 265, 100 250, 105 235 C110 220, 115 205, 120 190 C125 175, 120 160, 120 150 Z"
          fill="#4ade80"
          fillOpacity="0.7"
          stroke="#16a34a"
          strokeWidth="1.5"
        />
        
        {/* Sarawak */}
        <path
          d="M320 200 C340 195, 360 200, 380 205 C400 210, 420 215, 440 220 C460 225, 480 230, 490 240 C500 250, 495 265, 485 275 C475 285, 460 290, 445 285 C430 280, 415 270, 400 260 C385 250, 370 240, 355 235 C340 230, 325 225, 315 215 C305 205, 310 195, 320 200 Z"
          fill="#4ade80"
          fillOpacity="0.7"
          stroke="#16a34a"
          strokeWidth="1.5"
        />
        
        {/* Sabah */}
        <path
          d="M450 120 C470 115, 490 120, 510 125 C530 130, 550 135, 560 150 C570 165, 565 180, 555 190 C545 200, 530 205, 515 200 C500 195, 485 185, 475 175 C465 165, 460 150, 455 135 C450 125, 445 115, 450 120 Z"
          fill="#4ade80"
          fillOpacity="0.7"
          stroke="#16a34a"
          strokeWidth="1.5"
        />

        {/* South China Sea */}
        <circle cx="270" cy="100" r="15" fill="#2563eb" fillOpacity="0.3" />
        <text x="270" y="105" textAnchor="middle" className="text-xs fill-blue-600" style={{ fontSize: '10px' }}>
          South China Sea
        </text>

        {/* Strait of Malacca */}
        <ellipse cx="100" cy="220" rx="20" ry="40" fill="#2563eb" fillOpacity="0.3" />
        <text x="100" y="225" textAnchor="middle" className="text-xs fill-blue-600" style={{ fontSize: '8px' }}>
          Strait of Malacca
        </text>

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
            
            {/* Facility label on selection */}
            {selectedFacility === facility.name && (
              <g>
                <rect
                  x={facility.x - 35}
                  y={facility.y - 35}
                  width="70"
                  height="20"
                  fill="white"
                  stroke="#1e40af"
                  strokeWidth="1"
                  rx="3"
                  className="drop-shadow-lg"
                />
                <text
                  x={facility.x}
                  y={facility.y - 22}
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