import React from 'react';

export const DeliverySimulation: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      {/* Main Header */}
      <div className="text-center">
        <h2 className="text-white text-4xl font-bold mb-4">Delivery Simulation</h2>
        <p className="text-gray-300 text-lg">Predictive Modeling of Implementation Journey</p>
      </div>

      {/* Delivery Simulation Engine */}
      <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-[#FFAD28] rounded-lg flex items-center justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/536af0c7f3376926b10c67f06e9b94125b32cf89?placeholderIfAbsent=true"
              className="w-6 h-6"
              alt="Delivery Engine"
            />
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Delivery Simulation Engine</h3>
            <p className="text-gray-300">Modeling 18-month implementation journey with risk prediction and mitigation</p>
          </div>
        </div>
      </div>

      {/* Implementation Timeline Simulation */}
      <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-6">Implementation Timeline Simulation</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-white text-left py-3 px-4 font-semibold">Phase</th>
                <th className="text-white text-left py-3 px-4 font-semibold">Months 1-3</th>
                <th className="text-white text-left py-3 px-4 font-semibold">Months 4-9</th>
                <th className="text-white text-left py-3 px-4 font-semibold">Months 10-15</th>
                <th className="text-white text-left py-3 px-4 font-semibold">Months 16-18</th>
                <th className="text-white text-left py-3 px-4 font-semibold">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="text-gray-300 py-3 px-4">Foundation</td>
                <td className="text-gray-300 py-3 px-4">ServiceNow ITSM</td>
                <td className="text-gray-300 py-3 px-4">-</td>
                <td className="text-gray-300 py-3 px-4">-</td>
                <td className="text-gray-300 py-3 px-4">-</td>
                <td className="text-green-400 py-3 px-4">Low</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="text-gray-300 py-3 px-4">Foundation</td>
                <td className="text-gray-300 py-3 px-4">-</td>
                <td className="text-gray-300 py-3 px-4">Healthcare Agents</td>
                <td className="text-gray-300 py-3 px-4">SAP Bridge</td>
                <td className="text-gray-300 py-3 px-4">-</td>
                <td className="text-yellow-400 py-3 px-4">Medium</td>
              </tr>
              <tr>
                <td className="text-gray-300 py-3 px-4">Foundation</td>
                <td className="text-gray-300 py-3 px-4">-</td>
                <td className="text-gray-300 py-3 px-4">-</td>
                <td className="text-gray-300 py-3 px-4">Workflow Integration</td>
                <td className="text-gray-300 py-3 px-4">Go-Live</td>
                <td className="text-red-400 py-3 px-4">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Success Probability Modeling */}
      <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-6">Success Probability Modeling</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-2">Traditional Approach:</h4>
            <div className="text-6xl font-bold text-red-400 mb-2">23%</div>
            <p className="text-gray-300">Success rate</p>
          </div>
          <div className="text-center">
            <h4 className="text-white font-semibold mb-2">Intelligence Spine Approach:</h4>
            <div className="text-6xl font-bold text-green-400 mb-2">87%</div>
            <p className="text-gray-300">Success rate</p>
          </div>
        </div>

        <div className="bg-[#FFAD28] p-6 rounded-[12px]">
          <h4 className="text-black font-bold text-lg mb-2">Key Factors:</h4>
          <p className="text-black">Healthcare-native agents, visual architecture modeling, continuous risk monitoring</p>
        </div>
      </div>

      {/* Cost-Benefit Simulation */}
      <div className="bg-[rgba(40,42,39,1)] p-6 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-6">Cost-Benefit Simulation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-white font-semibold mb-4">Traditional Budget:</h4>
            <div className="text-3xl font-bold text-red-400 mb-2">$12M → $18.5M</div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Intelligence Spine:</h4>
            <div className="text-3xl font-bold text-green-400 mb-2">$12M → $10.8M</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-2">Net Savings:</h4>
            <div className="text-4xl font-bold text-[#FFAD28]">$7.7M</div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">ROI Acceleration:</h4>
            <div className="text-2xl font-bold text-white">18 months vs 4+ years payback</div>
          </div>
        </div>
      </div>
    </div>
  );
};