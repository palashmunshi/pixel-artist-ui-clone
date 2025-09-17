import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#2A2B27] flex items-center justify-between px-8 py-4 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" fill="currentColor"/>
          </svg>
        </div>
        <div className="text-white font-medium">
          <span className="text-lg">genpact</span>
          <span className="text-orange-400 ml-2 italic">on it</span>
        </div>
      </div>
      
      <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
        </svg>
      </div>
    </header>
  );
};