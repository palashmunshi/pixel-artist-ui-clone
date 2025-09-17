import React from 'react';

export const SuccessMetrics: React.FC = () => {
  return (
    <section className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#282A27] min-h-[600px] w-full overflow-hidden gap-6 mt-6 p-8 rounded-[20px] max-md:max-w-full max-md:px-5">
      <header className="w-full text-white gap-2 max-md:max-w-full">
        <div className="w-full text-2xl font-bold leading-none max-md:max-w-full">
          <h2 className="text-2xl font-bold leading-8 max-md:max-w-full">
            Success Metrics
          </h2>
        </div>
        <div className="w-full text-lg font-normal leading-loose mt-2 max-md:max-w-full">
          <div className="text-lg font-normal leading-7 max-md:max-w-full">
            End-to-End Transformation Results
          </div>
        </div>
      </header>
      
      <div className="w-full gap-6 mt-6 max-md:max-w-full">
        {/* Complete Transformation Success Card */}
        <article className="items-stretch border border-gray-400 flex w-full flex-col justify-center p-[26px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-[#FFAD28] rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-lg font-semibold leading-6 mb-2">Complete Transformation Success</h3>
              <p className="text-gray-300 text-sm font-normal leading-5">
                From CIO's napkin sketch to live production in 14 months vs 18+ month traditional timeline
              </p>
            </div>
          </div>
        </article>

        {/* False Positive Pattern Recognition Metrics */}
        <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 mt-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <div className="text-center mb-6">
            <h3 className="text-white text-lg font-semibold leading-6 mb-2">False Positive Pattern Recognition</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Savings */}
            <div className="text-center">
              <div className="text-white text-4xl font-bold leading-10 mb-2">$9.8M</div>
              <div className="text-gray-300 text-sm font-normal leading-5">Total savings</div>
              <div className="text-gray-400 text-xs font-normal leading-4 mt-1">vs traditional approach</div>
            </div>

            {/* Months Delivery */}
            <div className="text-center">
              <div className="text-white text-4xl font-bold leading-10 mb-2">14</div>
              <div className="text-gray-300 text-sm font-normal leading-5">Months delivery</div>
              <div className="text-gray-400 text-xs font-normal leading-4 mt-1">4 months ahead of schedule</div>
            </div>

            {/* System Compatibility */}
            <div className="text-center">
              <div className="text-white text-4xl font-bold leading-10 mb-2">95.2%</div>
              <div className="text-gray-300 text-sm font-normal leading-5">System compatibility</div>
              <div className="text-gray-400 text-xs font-normal leading-4 mt-1">agent orchestration success</div>
            </div>

            {/* User Adoption */}
            <div className="text-center">
              <div className="text-white text-4xl font-bold leading-10 mb-2">87%</div>
              <div className="text-gray-300 text-sm font-normal leading-5">User adoption</div>
              <div className="text-gray-400 text-xs font-normal leading-4 mt-1">vs 34% industry average</div>
            </div>
          </div>
        </article>

        {/* Transformation Journey Success Metrics */}
        <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 mt-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <h3 className="text-white text-lg font-semibold leading-6 mb-6">Transformation Journey Success Metrics</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Strategic Vision Achievement */}
            <div>
              <h4 className="text-[#4ADE80] text-base font-semibold leading-6 mb-4">Strategic Vision Achievement</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm font-normal leading-5">Unified patient experience:</span>
                  <span className="text-[#4ADE80] text-sm font-semibold leading-5">Achieved</span>
                </div>
              </div>
            </div>

            {/* Intelligence Spine Impact */}
            <div>
              <h4 className="text-[#FFAD28] text-base font-semibold leading-6 mb-4">Intelligence Spine Impact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm font-normal leading-5">False positive prevention:</span>
                  <span className="text-[#FFAD28] text-sm font-semibold leading-5">$8.6M saved</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};