import React from 'react';

interface PhaseStep {
  id: string;
  title: string;
  icon: string;
  isActive: boolean;
}

interface PhaseNavigationProps {
  steps: PhaseStep[];
  onStepClick?: (stepId: string) => void;
}

export const PhaseNavigation: React.FC<PhaseNavigationProps> = ({ steps, onStepClick }) => {
  return (
    <nav className="bg-[rgba(40,42,39,1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] border flex w-full flex-col overflow-hidden items-stretch justify-center p-4 rounded-[20px] border-[rgba(112,112,112,1)] border-solid max-md:max-w-full">
      <div className="flex w-full items-center gap-2 justify-center max-md:gap-1 max-md:flex-wrap">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => onStepClick?.(step.id)}
            className={`items-center flex flex-col p-2 rounded-lg border-2 border-solid transition-colors min-w-[100px] ${
              step.isActive
                ? 'bg-[#FFAD28] border-[#FFAD28]'
                : 'bg-gray-600 border-gray-600 hover:bg-gray-500'
            }`}
          >
            <div className="w-6 pb-1">
              <img
                src={step.icon}
                className="aspect-[1] object-contain w-full"
                alt={step.title}
              />
            </div>
            <div className="text-white text-center text-[10px] font-medium leading-3">
              {step.title}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};
