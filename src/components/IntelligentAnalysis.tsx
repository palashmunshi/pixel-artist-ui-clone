import React from 'react';

export const IntelligentAnalysis: React.FC = () => {
  return (
    <section className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#282A27] min-h-[600px] w-full overflow-hidden gap-6 mt-6 rounded-[20px] max-md:max-w-full">
      <iframe
        src="https://crafty-pixel-replicate.lovable.app/"
        className="w-full h-[800px] rounded-[20px] border-0"
        title="Intelligent Analysis"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </section>
  );
};