import React from 'react';

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  isPreviousDisabled?: boolean;
  isNextDisabled?: boolean;
  centerText?: {
    main: string;
    sub: string;
  };
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ 
  onPrevious, 
  onNext, 
  isPreviousDisabled = false,
  isNextDisabled = false,
  centerText 
}) => {
  return (
    <nav className="items-center flex w-full flex-wrap gap-[334.8px] mt-6 max-md:max-w-full">
      <button
        onClick={isPreviousDisabled ? undefined : onPrevious}
        disabled={isPreviousDisabled}
        className={`self-stretch flex items-center my-auto px-6 py-3 rounded-lg max-md:px-5 transition-colors ${
          isPreviousDisabled 
            ? 'bg-[rgba(255,242,223,0.3)] opacity-50 cursor-not-allowed' 
            : 'bg-[rgba(255,242,223,1)] hover:bg-[rgba(255,242,223,0.8)]'
        }`}
      >
        <div className="self-stretch flex min-h-5 flex-col w-7 my-auto pr-2">
          <div className="flex min-h-5 w-5 flex-col overflow-hidden items-stretch justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/1e138e64f0d0bee939c7d9faa65065c0542d52a7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full flex-1"
              alt="Previous"
            />
          </div>
        </div>
        <div className={`text-center text-base font-medium leading-6 self-stretch my-auto ${
          isPreviousDisabled ? 'text-[#996818]/50' : 'text-[#996818]'
        }`}>
          Previous Phase
        </div>
      </button>
      
      {centerText && (
        <div className="self-stretch font-normal text-center grow shrink w-[171px] gap-2 my-auto">
          <div className="flex w-full flex-col items-center text-sm text-gray-500 leading-none">
            <div className="text-sm font-normal leading-5">
              {centerText.main}
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-xs text-gray-400 leading-none mt-2">
            <div className="text-xs font-normal leading-4">
              {centerText.sub}
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={isNextDisabled ? undefined : onNext}
        disabled={isNextDisabled}
        className={`items-center self-stretch flex grow shrink w-[123px] my-auto pl-6 pr-5 py-3 rounded-lg max-md:pl-5 transition-colors ${
          isNextDisabled 
            ? 'bg-[#FFAD28]/30 opacity-50 cursor-not-allowed' 
            : 'bg-[#FFAD28] hover:bg-[#FF9A00]'
        }`}
      >
        <div className={`text-center text-base font-medium leading-6 self-stretch my-auto whitespace-nowrap ${
          isNextDisabled ? 'text-white/50' : 'text-white'
        }`}>
          Next Phase
        </div>
        <div className="self-stretch flex min-h-5 flex-col w-7 my-auto pl-2">
          <div className="flex min-h-5 w-5 flex-col overflow-hidden items-stretch justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/08e4f9597a9a74161ebf69028f8e0bae90f0f829?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full flex-1"
              alt="Next"
            />
          </div>
        </div>
      </button>
    </nav>
  );
};
