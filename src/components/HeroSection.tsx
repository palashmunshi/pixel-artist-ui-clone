import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  phase: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, phase }) => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[383px] w-full items-stretch pb-24 max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/fe91475535c70c01047347d9e6c9305025e5d926?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/006da4cccc5a6a69b9848741d0c54e0b0ab2d25a?placeholderIfAbsent=true"
        className="aspect-[17.54] object-contain w-full max-md:max-w-full"
        alt="Header decoration"
      />
      <div className="relative self-center flex w-full max-w-[1232px] flex-col items-stretch mt-[53px] max-md:max-w-full max-md:mt-10">
        <div className="shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex w-full flex-col overflow-hidden items-stretch justify-center p-6 rounded-lg max-md:max-w-full max-md:px-5">
          <div className="items-start relative flex w-full max-md:max-w-full">
            <div className="z-0 min-w-60 w-[758px] max-md:max-w-full">
              <h1 className="w-full text-3xl text-white font-bold leading-[1.2] max-md:max-w-full">
                <div className="max-md:max-w-full">
                  {title}
                </div>
              </h1>
              <div className="w-full text-lg text-gray-200 font-normal leading-loose mt-2 max-md:max-w-full">
                <div>
                  {subtitle}
                </div>
              </div>
            </div>
            <div className="absolute z-0 flex min-h-5 items-stretch translate-x-[0%] -translate-y-2/4 right-0 top-2/4" />
          </div>
        </div>
        <div className="text-gray-500 text-right text-sm font-normal leading-none mt-3 relative z-20">
          {phase}
        </div>
      </div>
    </section>
  );
};
