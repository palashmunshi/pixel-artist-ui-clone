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
        
        {/* Header Row */}
        <div className="grid grid-cols-6 gap-4 mb-6">
          <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg text-center">
            <div className="text-white font-bold text-lg">Phase</div>
          </div>
          <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg text-center">
            <div className="text-white font-bold text-lg">Months 1-3</div>
          </div>
          <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg text-center">
            <div className="text-white font-bold text-lg">Months 4-9</div>
          </div>
          <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg text-center">
            <div className="text-white font-bold text-lg">Months 10-15</div>
          </div>
          <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg text-center">
            <div className="text-white font-bold text-lg">Months 16-18</div>
          </div>
          <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg text-center">
            <div className="text-white font-bold text-lg">Risk Level</div>
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-6 gap-4 mb-4">
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-white font-semibold">Foundation</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-300">ServiceNow ITSM</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-500">-</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-500">-</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-500">-</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-green-400 font-semibold">Low</div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-6 gap-4 mb-4">
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-white font-semibold">Foundation</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-500">-</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-300">Healthcare Agents</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-300">SAP Bridge</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-500">-</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-yellow-400 font-semibold">Medium</div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-white font-semibold">Foundation</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-500">-</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-500">-</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-300">Workflow Integration</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-gray-300">Go-Live</div>
          </div>
          <div className="bg-[rgba(80,82,79,1)] p-4 rounded-lg text-center">
            <div className="text-red-400 font-semibold">High</div>
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