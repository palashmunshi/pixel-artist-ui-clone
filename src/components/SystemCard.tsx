import React from 'react';

interface SystemCardProps {
  title: string;
  subtitle: string;
  borderColor: string;
  textColor: string;
}

export const SystemCard: React.FC<SystemCardProps> = ({ title, subtitle, borderColor, textColor }) => {
  return (
    <div className={`w-full p-3.5 rounded-[10px] border-2 border-solid ${borderColor}`}>
      <div className="w-full">
        <div className="typography-label text-white">
          {title}
        </div>
      </div>
      <div className="w-full">
        <div className={`typography-micro ${textColor}`}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};
