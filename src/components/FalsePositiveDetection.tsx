import React from 'react';
import { AlertTriangle, CheckCircle, Eye } from 'lucide-react';

export const FalsePositiveDetection: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      {/* Main Header */}
      <div className="text-left">
        <h2 className="text-white text-display font-bold mb-2">False Positive Detection</h2>
        <p className="text-gray-300 text-subheading">Preventing the 'Talent Shortage' Misdiagnosis</p>
      </div>

      {/* Month 11: Predicted Crisis Point */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#FFAD28] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Eye className="w-7 h-7 text-black" />
          </div>
          <div>
            <h3 className="text-white text-heading font-bold mb-2">Month 11: Predicted Crisis Point</h3>
            <p className="text-gray-300 text-subheading">Simulation correctly predicts "talent shortage" false positive during SAP integration</p>
          </div>
        </div>
      </div>

      {/* Two Column Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Surface Symptoms (What Teams See) */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h3 className="text-white text-subheading font-bold">Surface Symptoms (What Teams See)</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-red-400 font-semibold text-subheading mb-1">ServiceNow AP Implementation Stalled</h4>
                <p className="text-gray-400 text-caption">Team reporting "impossible" integration requirements</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-red-400 font-semibold text-subheading mb-1">Resource Shortage Claimed</h4>
                <p className="text-gray-400 text-caption">"We need 16 more ServiceNow specialists"</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-red-400 font-semibold text-subheading mb-1">Timeline Panic</h4>
                <p className="text-gray-400 text-caption">Project leadership requesting 6-month delay</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Spine Reality */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h3 className="text-white text-subheading font-bold">Intelligence Spine Reality</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-green-400 font-semibold text-subheading mb-1">Architectural Mismatch Identified</h4>
                <p className="text-gray-400 text-caption">847 SAP codes incompatible with ServiceNow assumptions</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-green-400 font-semibold text-subheading mb-1">Kinaxis Integration Gaps</h4>
                <p className="text-gray-400 text-caption">23% missing fields for medical device supply chain</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-green-400 font-semibold text-subheading mb-1">Solution Ready</h4>
                <p className="text-gray-400 text-caption">Healthcare-native agents in agent playground</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* False Positive Pattern Recognition */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-white text-heading font-bold mb-8 text-center">False Positive Pattern Recognition</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-red-400 mb-2">89%</div>
            <h4 className="text-white font-semibold text-subheading mb-2">Traditional Misdiagnosis Rate</h4>
            <p className="text-gray-400 text-caption">"Talent shortage" blamed for architectural gaps</p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-[#FFAD28] mb-2">94%</div>
            <h4 className="text-white font-semibold text-subheading mb-2">Intelligence Spine Accuracy</h4>
            <p className="text-gray-400 text-caption">Correctly identifies true root causes</p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-green-400 mb-2">91%</div>
            <h4 className="text-white font-semibold text-subheading mb-2">Crisis Prevention Success</h4>
            <p className="text-gray-400 text-caption">Projects stay on timeline with proper diagnosis</p>
          </div>
        </div>

        <div className="bg-[#FFAD28] p-6 rounded-[12px] mt-8">
          <h4 className="text-black font-bold text-subheading mb-3">Key Insight:</h4>
          <p className="text-black text-subheading">What appears as "talent shortage" is usually architectural mismatch. Intelligence Spine prevents expensive misallocation of resources.</p>
        </div>
      </div>
    </div>
  );
};