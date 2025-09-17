import React from 'react';

export const DeliverySimulation: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      {/* Main Header */}
      <div className="text-left">
        <h2 className="typography-page-header text-white mb-2">Delivery Simulation</h2>
        <p className="typography-page-subtitle text-gray-300">Predictive Modeling of Implementation Journey</p>
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
            <h3 className="typography-section-header text-white mb-2">Delivery Simulation Engine</h3>
            <p className="typography-page-subtitle text-gray-300">Modeling 18-month implementation journey with risk prediction and mitigation</p>
          </div>
        </div>
      </div>

      {/* Implementation Timeline Simulation */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="typography-section-header text-[#FFAD28] mb-8">Implementation Timeline Simulation</h3>
        
        <div className="bg-[rgba(60,62,59,1)] rounded-[12px] p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="typography-page-subtitle text-white text-left py-4 px-4">Phase</th>
                <th className="typography-page-subtitle text-white text-center py-4 px-4">Months 1-3</th>
                <th className="typography-page-subtitle text-white text-center py-4 px-4">Months 4-9</th>
                <th className="typography-page-subtitle text-white text-center py-4 px-4">Months 10-15</th>
                <th className="typography-page-subtitle text-white text-center py-4 px-4">Months 16-18</th>
                <th className="typography-page-subtitle text-white text-center py-4 px-4">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="typography-card-subheader text-white py-4 px-4">Foundation</td>
                <td className="typography-body text-gray-300 py-4 px-4 text-center">ServiceNow ITSM</td>
                <td className="typography-body text-gray-500 py-4 px-4 text-center">-</td>
                <td className="typography-body text-gray-500 py-4 px-4 text-center">-</td>
                <td className="typography-body text-gray-500 py-4 px-4 text-center">-</td>
                <td className="typography-card-subheader text-green-400 py-4 px-4 text-center">Low</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="typography-card-subheader text-white py-4 px-4">Foundation</td>
                <td className="typography-body text-gray-500 py-4 px-4 text-center">-</td>
                <td className="typography-body text-gray-300 py-4 px-4 text-center">Healthcare Agents</td>
                <td className="typography-body text-gray-300 py-4 px-4 text-center">SAP Bridge</td>
                <td className="typography-body text-gray-500 py-4 px-4 text-center">-</td>
                <td className="typography-card-subheader text-yellow-400 py-4 px-4 text-center">Medium</td>
              </tr>
              <tr>
                <td className="typography-card-subheader text-white py-4 px-4">Foundation</td>
                <td className="typography-body text-gray-500 py-4 px-4 text-center">-</td>
                <td className="typography-body text-gray-500 py-4 px-4 text-center">-</td>
                <td className="typography-body text-gray-300 py-4 px-4 text-center">Workflow Integration</td>
                <td className="typography-body text-gray-300 py-4 px-4 text-center">Go-Live</td>
                <td className="typography-card-subheader text-red-400 py-4 px-4 text-center">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Success Probability Modeling */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="typography-section-header text-[#FFAD28] mb-8">Success Probability Modeling</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h4 className="typography-section-header text-white mb-4">Traditional Approach:</h4>
            <div className="text-8xl font-bold text-red-400 mb-2 leading-none">23%</div>
            <p className="typography-page-subtitle text-gray-300">Success rate</p>
          </div>
          <div>
            <h4 className="typography-section-header text-white mb-4">Intelligence Spine Approach:</h4>
            <div className="text-8xl font-bold text-green-400 mb-2 leading-none">87%</div>
            <p className="typography-page-subtitle text-gray-300">Success rate</p>
          </div>
        </div>

        <div className="bg-[#FFAD28] p-6 rounded-[12px]">
          <h4 className="typography-section-header text-black mb-3">Key Factors:</h4>
          <p className="typography-page-subtitle text-black">Healthcare-native agents, visual architecture modeling, continuous risk monitoring</p>
        </div>
      </div>

      {/* Cost-Benefit Simulation */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="typography-section-header text-[#FFAD28] mb-8">Cost-Benefit Simulation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h4 className="typography-section-header text-white mb-4">Traditional Budget:</h4>
            <div className="text-4xl font-bold text-red-400">$12M → $18.5M</div>
          </div>
          <div>
            <h4 className="typography-section-header text-white mb-4">Intelligence Spine:</h4>
            <div className="text-4xl font-bold text-green-400">$12M → $10.8M</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="typography-section-header text-white mb-4">Net Savings:</h4>
            <div className="text-5xl font-bold text-[#FFAD28]">$7.7M</div>
          </div>
          <div>
            <h4 className="typography-section-header text-white mb-4">ROI Acceleration:</h4>
            <div className="text-2xl font-bold text-white">18 months vs 4+ years payback</div>
          </div>
        </div>
      </div>
    </div>
  );
};