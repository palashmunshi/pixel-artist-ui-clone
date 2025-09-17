import React from 'react';

interface InfoCardProps {
  icon: string;
  title: string;
  items: string[];
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, items }) => {
  return (
    <article className="border border shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#FFF2DF] min-w-60 overflow-hidden grow shrink w-[298px] gap-4 p-[25px] rounded-[20px] border-solid max-md:px-5">
      <header className="flex w-full items-center">
        <div className="self-stretch flex min-h-6 flex-col w-9 my-auto pr-3">
          <div className="flex min-h-6 w-6 flex-col overflow-hidden items-stretch justify-center">
            <img
              src={icon}
              className="aspect-[1] object-contain w-full flex-1"
              alt={title}
            />
          </div>
        </div>
        <div className="self-stretch text-body text-gray-950 font-semibold text-right my-auto">
          <div className="text-body leading-6">
            {title}
          </div>
        </div>
      </header>
      <div className="w-full text-caption text-gray-950 font-normal leading-none gap-2 mt-4">
        {items.map((item, index) => (
          <div key={index} className={`w-full ${index > 0 ? 'mt-2' : ''}`}>
            <div className="text-caption font-normal leading-5">
              {item}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
