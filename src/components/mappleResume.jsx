import React from 'react';

const MappleResumeLogo = () => {
  return (
    <div className="flex items-center relative">
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <rect x="0" y="6" width="40" height="40" fill="#16a34a"/>
        <text x="20" y="30" fontFamily="Arial" fontSize="16" fill="#fff" textAnchor="middle" alignmentBaseline="middle">MR</text>
      </svg>
      <div>
        <span className="text-black font-bold text-xl">Mapple Resume</span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600"></div>
    </div>
  );
};

export default MappleResumeLogo;
