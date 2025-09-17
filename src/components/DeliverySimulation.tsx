import React from 'react';

export const DeliverySimulation: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      {/* Main Header */}
      <div className="text-left">
        <h2 className="text-white text-4xl font-bold mb-2">Delivery Simulation</h2>
        <p className="text-gray-300 text-xl">Predictive Modeling of Implementation Journey</p>
      </div>

      {/* Delivery Simulation Engine */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#FFAD28] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/536af0c7f3376926b10c67f06e9b94125b32cf89?placeholderIfAbsent=true"
              className="w-7 h-7"
              alt="Delivery Engine"
            />
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">Delivery Simulation Engine</h3>
            <p className="text-gray-300 text-lg">Modeling 18-month implementation journey with risk prediction and mitigation</p>
          </div>
        </div>
      </div>

      {/* Implementation Timeline Simulation */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-8">Implementation Timeline Simulation</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Months 1-3 */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg text-center mb-4">Months 1-3</h4>
            <div className="bg-green-500 p-4 rounded-lg">
              <div className="text-white font-semibold text-sm mb-1">Foundation</div>
              <div className="text-white text-sm">ServiceNow ITSM</div>
            </div>
          </div>

          {/* Months 4-9 */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg text-center mb-4">Months 4-9</h4>
            <div className="bg-yellow-500 p-4 rounded-lg">
              <div className="text-white font-semibold text-sm mb-1">Extension</div>
              <div className="text-white text-sm">Healthcare Agents</div>
            </div>
          </div>

          {/* Months 10-15 */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg text-center mb-4">Months 10-15</h4>
            <div className="bg-orange-500 p-4 rounded-lg">
              <div className="text-white font-semibold text-sm mb-1">Integration</div>
              <div className="text-white text-sm">SAP Bridge</div>
            </div>
            <div className="bg-red-500 p-4 rounded-lg">
              <div className="text-white font-semibold text-sm mb-1">Advanced</div>
              <div className="text-white text-sm">Workflow Integration</div>
            </div>
          </div>

          {/* Months 16-18 */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg text-center mb-4">Months 16-18</h4>
            <div className="bg-purple-500 p-4 rounded-lg">
              <div className="text-white font-semibold text-sm mb-1">Launch</div>
              <div className="text-white text-sm">Go-Live</div>
            </div>
          </div>
        </div>

        {/* Risk Level Legend */}
        <div className="mt-8 flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-green-400 font-semibold">Low Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-yellow-400 font-semibold">Medium Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-red-400 font-semibold">High Risk</span>
          </div>
        </div>
      </div>

      {/* Success Probability Modeling */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-8">Success Probability Modeling</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h4 className="text-white font-bold text-xl mb-4">Traditional Approach:</h4>
            <div className="text-8xl font-bold text-red-400 mb-2 leading-none">23%</div>
            <p className="text-gray-300 text-lg">Success rate</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xl mb-4">Intelligence Spine Approach:</h4>
            <div className="text-8xl font-bold text-green-400 mb-2 leading-none">87%</div>
            <p className="text-gray-300 text-lg">Success rate</p>
          </div>
        </div>

        <div className="bg-[#FFAD28] p-6 rounded-[12px]">
          <h4 className="text-black font-bold text-xl mb-3">Key Factors:</h4>
          <p className="text-black text-lg">Healthcare-native agents, visual architecture modeling, continuous risk monitoring</p>
        </div>
      </div>

      {/* Cost-Benefit Simulation */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-8">Cost-Benefit Simulation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h4 className="text-white font-bold text-xl mb-4">Traditional Budget:</h4>
            <div className="text-4xl font-bold text-red-400">$12M → $18.5M</div>
          </div>
          <div>
            <h4 className="text-white font-bold text-xl mb-4">Intelligence Spine:</h4>
            <div className="text-4xl font-bold text-green-400">$12M → $10.8M</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-white font-bold text-xl mb-4">Net Savings:</h4>
            <div className="text-5xl font-bold text-[#FFAD28]">$7.7M</div>
          </div>
          <div>
            <h4 className="text-white font-bold text-xl mb-4">ROI Acceleration:</h4>
            <div className="text-2xl font-bold text-white">18 months vs 4+ years payback</div>
          </div>
        </div>
      </div>
    </div>
  );
};