import React from 'react';

export const IntelligentAnalysis: React.FC = () => {
  return (
    <section className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#282A27] min-h-[600px] w-full overflow-hidden gap-6 mt-6 p-8 rounded-[20px] max-md:max-w-full max-md:px-5">
      <header className="w-full text-white gap-2 max-md:max-w-full">
        <div className="w-full text-2xl font-bold leading-none max-md:max-w-full">
          <h2 className="text-2xl font-bold leading-8 max-md:max-w-full">
            Intelligent Analysis
          </h2>
        </div>
        <div className="w-full text-lg font-normal leading-loose mt-2 max-md:max-w-full">
          <div className="text-lg font-normal leading-7 max-md:max-w-full">
            Architecture Risk Assessment & Optimization
          </div>
        </div>
      </header>
      
      <div className="w-full gap-6 mt-6 max-md:max-w-full">

        {/* Intelligence Spine Analysis Card */}
        <article className="items-stretch border border-gray-400 flex w-full flex-col justify-center p-[26px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
        <div className="flex items-center gap-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f8fb7e782ef4a7a077608b758cd1a58fd05f0fc0?width=64" 
            alt="Intelligence Spine Analysis" 
            className="w-12 h-12 flex-shrink-0"
          />
          <div>
            <h3 className="text-[#FFAD28] text-xl font-bold mb-1">Intelligence Spine Architecture Analysis</h3>
            <p className="text-gray-300">Analyzing CIO vision against healthcare domain knowledge and historical patterns.</p>
          </div>
          </div>
        </article>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Risk Analysis */}
          <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
              <span className="text-red-400 text-lg">⚠</span>
            </div>
            <h3 className="text-red-400 text-xl font-bold">Risk Analysis</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">Legacy Data Complexity</h4>
              <p className="text-gray-300">847 SAP custom codes incompatible with ServiceNow</p>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">Supply Chain Evolution</h4>
              <p className="text-gray-300">Kinaxis 23% field gaps for medical device logistics</p>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">Integration Assumptions</h4>
              <p className="text-gray-300">Standard vendor modules don't match healthcare reality</p>
            </div>
            </div>
          </article>

          {/* Optimization Opportunities */}
          <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span className="text-green-400 text-lg">↗</span>
            </div>
            <h3 className="text-green-400 text-xl font-bold">Optimization Opportunities</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">Healthcare-Native Architecture</h4>
              <p className="text-gray-300">Purpose-built agents for clinical complexity</p>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">Phased Integration Strategy</h4>
              <p className="text-gray-300">ServiceNow ITSM first, custom AP bridge layer</p>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">Agent Orchestration</h4>
              <p className="text-gray-300">Visual compatibility modeling before build</p>
            </div>
            </div>
          </article>
        </div>

        {/* Intelligence Spine Recommendations */}
        <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 mt-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-6">Intelligence Spine Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <h4 className="text-white font-semibold text-base mb-2">Layered Architecture</h4>
            <p className="text-gray-300 text-sm">ServiceNow + Healthcare-native bridge</p>
          </div>
          <div className="text-center">
            <h4 className="text-white font-semibold text-base mb-2">Agent-First Approach</h4>
            <p className="text-gray-300 text-sm">Intelligent automation for complex integration</p>
          </div>
          <div className="text-center">
            <h4 className="text-white font-semibold text-base mb-2">Continuous Monitoring</h4>
            <p className="text-gray-300 text-sm">Real-time architecture health tracking</p>
          </div>
        </div>

        <div className="bg-[#FFAD28] p-6 rounded-[12px]">
          <p className="text-black text-lg font-medium">
            <strong>Key Insight:</strong> CIO's vision is achievable but requires healthcare-specific architectural patterns, not standard enterprise approaches
          </p>
          </div>
        </article>
      </div>
    </section>
  );
};