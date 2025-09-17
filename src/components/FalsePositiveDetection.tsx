import React from 'react';
import { AlertTriangle, CheckCircle, Eye } from 'lucide-react';

export const FalsePositiveDetection: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      {/* Main Header */}
      <div className="text-left">
        <h2 className="typography-page-header text-white mb-2">False Positive Detection</h2>
        <p className="typography-page-subtitle text-gray-300">Preventing the 'Talent Shortage' Misdiagnosis</p>
      </div>

      {/* Month 11: Predicted Crisis Point */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#FFAD28] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Eye className="w-7 h-7 text-black" />
          </div>
          <div>
            <h3 className="typography-section-header text-white mb-2">Month 11: Predicted Crisis Point</h3>
            <p className="typography-page-subtitle text-gray-300">Simulation correctly predicts "talent shortage" false positive during SAP integration</p>
          </div>
        </div>
      </div>

      {/* Two Column Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Surface Symptoms (What Teams See) */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h3 className="typography-section-header text-white">Surface Symptoms (What Teams See)</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="typography-page-subtitle text-red-400 mb-1">ServiceNow AP Implementation Stalled</h4>
                <p className="typography-label text-gray-400">"Team reporting "impossible" integration requirements</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="typography-page-subtitle text-red-400 mb-1">Resource Shortage Claimed</h4>
                <p className="typography-label text-gray-400">"We need 16 more ServiceNow specialists"</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="typography-page-subtitle text-red-400 mb-1">Timeline Panic</h4>
                <p className="typography-label text-gray-400">Project leadership requesting 6-month delay</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Spine Reality */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h3 className="typography-section-header text-white">Intelligence Spine Reality</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="typography-page-subtitle text-green-400 mb-1">Architectural Mismatch Identified</h4>
                <p className="typography-label text-gray-400">847 SAP codes incompatible with ServiceNow assumptions</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="typography-page-subtitle text-green-400 mb-1">Kinaxis Integration Gaps</h4>
                <p className="typography-label text-gray-400">23% missing fields for medical device supply chain</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="typography-page-subtitle text-green-400 mb-1">Solution Ready</h4>
                <p className="typography-label text-gray-400">Healthcare-native agents in agent playground</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* False Positive Pattern Recognition */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="typography-section-header text-white mb-8 text-center">False Positive Pattern Recognition</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-red-400 mb-2">89%</div>
            <h4 className="typography-page-subtitle text-white mb-2">Traditional Misdiagnosis Rate</h4>
            <p className="typography-label text-gray-400">"Talent shortage" blamed for architectural gaps</p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-[#FFAD28] mb-2">94%</div>
            <h4 className="typography-page-subtitle text-white mb-2">Intelligence Spine Accuracy</h4>
            <p className="typography-label text-gray-400">Correctly identifies true root causes</p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-green-400 mb-2">91%</div>
            <h4 className="typography-page-subtitle text-white mb-2">Crisis Prevention Success</h4>
            <p className="typography-label text-gray-400">Projects stay on timeline with proper diagnosis</p>
          </div>
        </div>

        <div className="bg-[#FFAD28] p-6 rounded-[12px] mt-8">
          <h4 className="typography-section-header text-black mb-3">Key Insight:</h4>
          <p className="typography-page-subtitle text-black">What appears as "talent shortage" is usually architectural mismatch. Intelligence Spine prevents expensive misallocation of resources.</p>
        </div>
      </div>
    </div>
  );
};