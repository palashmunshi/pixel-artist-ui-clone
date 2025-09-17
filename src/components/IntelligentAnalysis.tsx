import React from 'react';

export const IntelligentAnalysis: React.FC = () => {
  return (
    <div className="space-y-6 mt-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-white text-4xl font-bold mb-2">Intelligent Analysis</h2>
        <p className="text-gray-300 text-lg">Architecture Risk Assessment & Optimization</p>
      </div>

      {/* Intelligence Spine Analysis Card */}
      <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)] mb-6">
        <div className="flex items-start gap-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f8fb7e782ef4a7a077608b758cd1a58fd05f0fc0?width=64" 
            alt="Intelligence Spine Analysis" 
            className="w-16 h-16 flex-shrink-0"
          />
          <div>
            <h3 className="text-[#FFAD28] text-2xl font-bold mb-2">Intelligence Spine Architecture Analysis</h3>
            <p className="text-gray-300 text-lg">Analyzing CIO vision against healthcare domain knowledge and historical patterns.</p>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Risk Analysis */}
        <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)]">
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
        </div>

        {/* Optimization Opportunities */}
        <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)]">
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
        </div>
      </div>

      {/* Intelligence Spine Recommendations */}
      <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-6">Intelligence Spine Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
          <div className="text-center">
            <h4 className="text-white font-semibold text-base mb-2">Key Insight</h4>
            <p className="text-gray-300 text-sm">Healthcare-specific patterns required</p>
          </div>
        </div>

        <div className="bg-[#FFAD28] p-6 rounded-[12px]">
          <p className="text-black text-lg font-medium">
            <strong>Key Insight:</strong> CIO's vision is achievable but requires healthcare-specific architectural patterns, not standard enterprise approaches
          </p>
        </div>
      </div>
    </div>
  );
};