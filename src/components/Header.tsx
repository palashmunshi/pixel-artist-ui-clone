import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#2A2A2A] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-[4px] flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M3 3h6v6H3V3zm12 0h6v6h-6V3zM3 15h6v6H3v-6zm12 0h6v6h-6v-6z" fill="#2A2A2A"/>
          </svg>
        </div>
        <span className="text-white font-medium text-lg tracking-wide">genpact</span>
        <span className="text-[#FFA500] font-medium text-lg italic ml-1">on it</span>
      </div>
      
      <div className="w-10 h-10 bg-[#FFA500] rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
    </header>
  );
};