import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#2A2A2A] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-800 rounded-sm transform rotate-12"></div>
        </div>
        <span className="text-white font-semibold text-lg">genpact</span>
        <span className="text-orange-400 font-normal text-lg italic">on it</span>
      </div>
      
      <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
    </header>
  );
};