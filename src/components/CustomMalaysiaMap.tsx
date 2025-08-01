import React, { useState } from 'react';

const CustomMalaysiaMap = () => {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const facilities = [
    // Peninsular Malaysia
    { name: "Shah Alam", x: 160, y: 240 }, 
    { name: "Penang", x: 140, y: 180 }, 
    { name: "Johor", x: 185, y: 320 }, 
    // Sarawak
    { name: "Kuching", x: 380, y: 280 }, 
    { name: "Sibu", x: 420, y: 260 }, 
    { name: "Miri", x: 440, y: 220 }, 
    { name: "Bintulu", x: 460, y: 240 }, 
    // Sabah
    { name: "Kota Kinabalu", x: 520, y: 160 }, 
    { name: "Tawau", x: 570, y: 200 }
  ];

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <svg
        viewBox="0 0 650 400"
        className="w-full h-96"
        style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)' }}
      >
        {/* Peninsular Malaysia - Accurate shape */}
        <path
          d="M 110 160 
             C 120 150, 135 145, 150 150
             C 165 155, 175 165, 180 180
             C 185 195, 190 210, 195 225
             C 200 240, 205 255, 210 270
             C 215 285, 220 300, 215 315
             C 210 330, 200 340, 185 345
             C 170 350, 155 345, 140 340
             C 125 335, 115 325, 110 310
             C 105 295, 100 280, 105 265
             C 110 250, 115 235, 120 220
             C 125 205, 130 190, 125 175
             C 120 165, 115 160, 110 160 Z"
          fill="#22c55e"
          fillOpacity="0.8"
          stroke="#16a34a"
          strokeWidth="2"
        />
        
        {/* Sarawak - Accurate elongated shape along Borneo coast */}
        <path
          d="M 320 240
             C 340 235, 360 240, 380 245
             C 400 250, 420 255, 440 260
             C 460 265, 480 270, 500 275
             C 520 280, 530 285, 525 295
             C 520 305, 510 310, 495 312
             C 480 314, 465 312, 450 310
             C 435 308, 420 305, 405 300
             C 390 295, 375 290, 360 285
             C 345 280, 330 275, 320 265
             C 315 255, 318 245, 320 240 Z"
          fill="#22c55e"
          fillOpacity="0.8"
          stroke="#16a34a"
          strokeWidth="2"
        />
        
        {/* Sabah - Accurate shape in northern Borneo */}
        <path
          d="M 480 140
             C 500 135, 520 140, 540 145
             C 560 150, 580 155, 590 170
             C 600 185, 595 200, 585 210
             C 575 220, 560 225, 545 222
             C 530 219, 515 212, 505 205
             C 495 198, 490 185, 488 170
             C 486 155, 485 145, 480 140 Z"
          fill="#22c55e"
          fillOpacity="0.8"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Brunei - Small enclave in Sarawak */}
        <path
          d="M 465 250 C 470 248, 475 250, 478 255 C 475 260, 470 262, 465 260 C 462 255, 463 252, 465 250 Z"
          fill="#fbbf24"
          fillOpacity="0.6"
          stroke="#f59e0b"
          strokeWidth="1"
        />

        {/* Water bodies and labels */}
        {/* South China Sea */}
        <circle cx="280" cy="120" r="25" fill="#3b82f6" fillOpacity="0.2" />
        <text x="280" y="125" textAnchor="middle" className="text-xs fill-blue-600" style={{ fontSize: '11px' }}>
          South China Sea
        </text>

        {/* Strait of Malacca */}
        <ellipse cx="80" cy="240" rx="25" ry="60" fill="#3b82f6" fillOpacity="0.2" />
        <text x="80" y="245" textAnchor="middle" className="text-xs fill-blue-600" style={{ fontSize: '10px' }}>
          Strait of
        </text>
        <text x="80" y="255" textAnchor="middle" className="text-xs fill-blue-600" style={{ fontSize: '10px' }}>
          Malacca
        </text>

        {/* Sulu Sea */}
        <circle cx="550" cy="100" r="20" fill="#3b82f6" fillOpacity="0.2" />
        <text x="550" y="105" textAnchor="middle" className="text-xs fill-blue-600" style={{ fontSize: '10px' }}>
          Sulu Sea
        </text>

        {/* Celebes Sea */}
        <circle cx="590" cy="250" r="18" fill="#3b82f6" fillOpacity="0.2" />
        <text x="590" y="255" textAnchor="middle" className="text-xs fill-blue-600" style={{ fontSize: '9px' }}>
          Celebes Sea
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
                  x={facility.x - 40}
                  y={facility.y - 35}
                  width="80"
                  height="22"
                  fill="white"
                  stroke="#1e40af"
                  strokeWidth="1"
                  rx="4"
                  className="drop-shadow-lg"
                />
                <text
                  x={facility.x}
                  y={facility.y - 20}
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

        {/* Regional labels */}
        <text x="160" y="380" textAnchor="middle" className="text-sm font-bold fill-green-700" style={{ fontSize: '14px' }}>
          Peninsular Malaysia
        </text>
        <text x="420" y="380" textAnchor="middle" className="text-sm font-bold fill-green-700" style={{ fontSize: '14px' }}>
          Sarawak
        </text>
        <text x="540" y="380" textAnchor="middle" className="text-sm font-bold fill-green-700" style={{ fontSize: '14px' }}>
          Sabah
        </text>
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
        <h5 className="font-semibold text-steel-blue text-sm mb-2">Our Facilities:</h5>
        <div className="space-y-1 text-xs text-slate-gray">
          <div className="font-medium text-green-700">Peninsular Malaysia:</div>
          <div className="ml-2">• Shah Alam • Penang • Johor</div>
          <div className="font-medium text-green-700 mt-2">Sarawak:</div>
          <div className="ml-2">• Kuching • Sibu • Miri • Bintulu</div>
          <div className="font-medium text-green-700 mt-2">Sabah:</div>
          <div className="ml-2">• Kota Kinabalu • Tawau</div>
        </div>
      </div>
    </div>
  );
};

export default CustomMalaysiaMap;