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
      <div className="w-full text-caption text-white font-medium leading-none">
        <div className="text-white text-caption font-medium leading-5">
          {title}
        </div>
      </div>
      <div className="w-full text-label font-normal leading-none">
        <div className={`text-label font-normal leading-4 ${textColor}`}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};
