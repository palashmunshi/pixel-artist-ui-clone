import React from 'react';

export const IntelligentAnalysis: React.FC = () => {
  return (
    <div className="space-y-6 mt-6">
      <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h2 className="text-white text-2xl font-bold mb-2">Intelligent Analysis</h2>
        <p className="text-gray-300 text-sm mb-6">Architecture Risk Assessment & Optimization</p>
        
        <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-[rgba(132,132,132,1)] mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f8fb7e782ef4a7a077608b758cd1a58fd05f0fc0?width=64" 
              alt="Intelligence Spine" 
              className="w-8 h-8"
            />
            <div>
              <h3 className="text-[#FFAD28] text-lg font-bold">Intelligence Spine Architecture Analysis</h3>
              <p className="text-gray-300 text-sm">Analyzing CIO vision against healthcare domain knowledge and historical patterns.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Risk Analysis */}
          <div className="bg-[rgba(50,52,49,1)] p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">⚠</span>
              </div>
              <h3 className="text-red-400 font-bold">Risk Analysis</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-1">Legacy Data Complexity</h4>
                <p className="text-gray-400 text-sm">847 SAP custom codes incompatible with ServiceNow</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-1">Supply Chain Evolution</h4>
                <p className="text-gray-400 text-sm">Kinaxis 23% field gaps for medical device logistics</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-1">Integration Assumptions</h4>
                <p className="text-gray-400 text-sm">Standard vendor modules don't match healthcare reality</p>
              </div>
            </div>
          </div>

          {/* Optimization Opportunities */}
          <div className="bg-[rgba(50,52,49,1)] p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">↗</span>
              </div>
              <h3 className="text-green-400 font-bold">Optimization Opportunities</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-1">Healthcare-Native Architecture</h4>
                <p className="text-gray-400 text-sm">Purpose-built agents for clinical complexity</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-1">Phased Integration Strategy</h4>
                <p className="text-gray-400 text-sm">ServiceNow ITSM first, custom AP bridge layer</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-1">Agent Orchestration</h4>
                <p className="text-gray-400 text-sm">Visual compatibility modeling before build</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(60,62,59,1)] p-5 rounded-lg mt-6">
          <h3 className="text-[#FFAD28] font-bold mb-4">Intelligence Spine Recommendations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <h4 className="text-white font-medium text-sm mb-1">Layered Architecture</h4>
              <p className="text-gray-400 text-xs">ServiceNow + Healthcare-native bridge</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-medium text-sm mb-1">Agent-First Approach</h4>
              <p className="text-gray-400 text-xs">Intelligent automation for complex integration</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-medium text-sm mb-1">Continuous Monitoring</h4>
              <p className="text-gray-400 text-xs">Real-time architecture health tracking</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-medium text-sm mb-1">Key Insight</h4>
              <p className="text-gray-400 text-xs">Healthcare-specific patterns required</p>
            </div>
          </div>

          <div className="bg-[#FFAD28] p-4 rounded-lg">
            <p className="text-black font-medium text-sm">
              <strong>Key Insight:</strong> CIO's vision is achievable but requires healthcare-specific architectural patterns, not standard enterprise approaches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};