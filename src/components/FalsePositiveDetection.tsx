import React from 'react';
import { AlertTriangle, CheckCircle, Eye } from 'lucide-react';

export const FalsePositiveDetection: React.FC = () => {
  return (
    <section className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#282A27] min-h-[600px] w-full overflow-hidden gap-6 mt-6 p-8 rounded-[20px] max-md:max-w-full max-md:px-5">
      <header className="w-full text-white gap-2 max-md:max-w-full">
        <div className="w-full text-2xl font-bold leading-none max-md:max-w-full">
          <h2 className="text-2xl font-bold leading-8 max-md:max-w-full">
            False Positive Detection
          </h2>
        </div>
        <div className="w-full text-lg font-normal leading-loose mt-2 max-md:max-w-full">
          <div className="text-lg font-normal leading-7 max-md:max-w-full">
            Preventing the 'Talent Shortage' Misdiagnosis
          </div>
        </div>
      </header>
      
      <div className="w-full gap-6 mt-6 max-md:max-w-full">

        {/* Month 11: Predicted Crisis Point */}
        <article className="items-stretch border border-gray-400 flex w-full flex-col justify-center p-[26px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#FFAD28] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Eye className="w-7 h-7 text-black" />
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">Month 11: Predicted Crisis Point</h3>
            <p className="text-gray-300 text-lg">Simulation correctly predicts "talent shortage" false positive during SAP integration</p>
          </div>
          </div>
        </article>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Surface Symptoms (What Teams See) */}
          <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h3 className="text-white text-xl font-bold">Surface Symptoms (What Teams See)</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-red-400 font-semibold text-lg mb-1">ServiceNow AP Implementation Stalled</h4>
                <p className="text-gray-400 text-sm">Team reporting "impossible" integration requirements</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-red-400 font-semibold text-lg mb-1">Resource Shortage Claimed</h4>
                <p className="text-gray-400 text-sm">"We need 16 more ServiceNow specialists"</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-red-400 font-semibold text-lg mb-1">Timeline Panic</h4>
                <p className="text-gray-400 text-sm">Project leadership requesting 6-month delay</p>
              </div>
            </div>
            </div>
          </article>

          {/* Intelligence Spine Reality */}
          <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h3 className="text-white text-xl font-bold">Intelligence Spine Reality</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-green-400 font-semibold text-lg mb-1">Architectural Mismatch Identified</h4>
                <p className="text-gray-400 text-sm">847 SAP codes incompatible with ServiceNow assumptions</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-green-400 font-semibold text-lg mb-1">Kinaxis Integration Gaps</h4>
                <p className="text-gray-400 text-sm">23% missing fields for medical device supply chain</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-green-400 font-semibold text-lg mb-1">Solution Ready</h4>
                <p className="text-gray-400 text-sm">Healthcare-native agents in agent playground</p>
              </div>
            </div>
            </div>
          </article>
        </div>

        {/* False Positive Pattern Recognition */}
        <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 mt-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
        <h3 className="text-white text-2xl font-bold mb-8 text-center">False Positive Pattern Recognition</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-red-400 mb-2">89%</div>
            <h4 className="text-white font-semibold text-lg mb-2">Traditional Misdiagnosis Rate</h4>
            <p className="text-gray-400 text-sm">"Talent shortage" blamed for architectural gaps</p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-[#FFAD28] mb-2">94%</div>
            <h4 className="text-white font-semibold text-lg mb-2">Intelligence Spine Accuracy</h4>
            <p className="text-gray-400 text-sm">Correctly identifies true root causes</p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-green-400 mb-2">91%</div>
            <h4 className="text-white font-semibold text-lg mb-2">Crisis Prevention Success</h4>
            <p className="text-gray-400 text-sm">Projects stay on timeline with proper diagnosis</p>
          </div>
        </div>

        <div className="bg-[#FFAD28] p-6 rounded-[12px] mt-8">
          <h4 className="text-black font-bold text-xl mb-3">Key Insight:</h4>
          <p className="text-black text-lg">What appears as "talent shortage" is usually architectural mismatch. Intelligence Spine prevents expensive misallocation of resources.</p>
        </div>
        </article>
      </div>
    </section>
  );
};