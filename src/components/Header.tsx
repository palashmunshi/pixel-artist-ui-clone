import React from 'react';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#2A2A2A] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 relative">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L16 4L24 8V16L16 20L8 16V8Z" fill="white" stroke="white" strokeWidth="0.5"/>
            <path d="M8 16L16 12L24 16V24L16 28L8 24V16Z" fill="white" fillOpacity="0.7" stroke="white" strokeWidth="0.5"/>
            <path d="M16 4V12M16 12L24 16M16 12L8 16" stroke="#2A2A2A" strokeWidth="0.5"/>
          </svg>
        </div>
        <span className="text-white font-semibold text-lg">genpact</span>
        <span className="text-orange-400 font-normal text-lg italic">on it</span>
      </div>
      
      <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
    </header>
  );
};