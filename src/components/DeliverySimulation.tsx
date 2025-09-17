import React from 'react';

export const DeliverySimulation: React.FC = () => {
  return (
    <section className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#282A27] min-h-[600px] w-full overflow-hidden gap-6 mt-6 p-8 rounded-[20px] max-md:max-w-full max-md:px-5">
      <header className="w-full text-white gap-2 max-md:max-w-full">
        <div className="w-full text-2xl font-bold leading-none max-md:max-w-full">
          <h2 className="text-2xl font-bold leading-8 max-md:max-w-full">
            Delivery Simulation
          </h2>
        </div>
        <div className="w-full text-lg font-normal leading-loose mt-2 max-md:max-w-full">
          <div className="text-lg font-normal leading-7 max-md:max-w-full">
            Predictive Modeling of Implementation Journey
          </div>
        </div>
      </header>
      
      <div className="w-full gap-6 mt-6 max-md:max-w-full">

        {/* Delivery Simulation Engine */}
        <article className="items-stretch border border-gray-400 flex w-full flex-col justify-center p-[26px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
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
        </article>

        {/* Implementation Timeline Simulation */}
        <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 mt-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
        <h3 className="text-[#FFAD28] text-2xl font-bold mb-8">Implementation Timeline Simulation</h3>
        
        <div className="bg-[rgba(60,62,59,1)] rounded-[12px] p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-white text-left py-4 px-4 font-bold text-lg">Phase</th>
                <th className="text-white text-center py-4 px-4 font-bold text-lg">Months 1-3</th>
                <th className="text-white text-center py-4 px-4 font-bold text-lg">Months 4-9</th>
                <th className="text-white text-center py-4 px-4 font-bold text-lg">Months 10-15</th>
                <th className="text-white text-center py-4 px-4 font-bold text-lg">Months 16-18</th>
                <th className="text-white text-center py-4 px-4 font-bold text-lg">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="text-white py-4 px-4 font-semibold">Foundation</td>
                <td className="text-gray-300 py-4 px-4 text-center">ServiceNow ITSM</td>
                <td className="text-gray-500 py-4 px-4 text-center">-</td>
                <td className="text-gray-500 py-4 px-4 text-center">-</td>
                <td className="text-gray-500 py-4 px-4 text-center">-</td>
                <td className="text-green-400 py-4 px-4 text-center font-semibold">Low</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="text-white py-4 px-4 font-semibold">Foundation</td>
                <td className="text-gray-500 py-4 px-4 text-center">-</td>
                <td className="text-gray-300 py-4 px-4 text-center">Healthcare Agents</td>
                <td className="text-gray-300 py-4 px-4 text-center">SAP Bridge</td>
                <td className="text-gray-500 py-4 px-4 text-center">-</td>
                <td className="text-yellow-400 py-4 px-4 text-center font-semibold">Medium</td>
              </tr>
              <tr>
                <td className="text-white py-4 px-4 font-semibold">Foundation</td>
                <td className="text-gray-500 py-4 px-4 text-center">-</td>
                <td className="text-gray-500 py-4 px-4 text-center">-</td>
                <td className="text-gray-300 py-4 px-4 text-center">Workflow Integration</td>
                <td className="text-gray-300 py-4 px-4 text-center">Go-Live</td>
                <td className="text-red-400 py-4 px-4 text-center font-semibold">High</td>
              </tr>
            </tbody>
          </table>
          </div>
        </article>

        {/* Success Probability Modeling */}
        <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 mt-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
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
        </article>

        {/* Cost-Benefit Simulation */}
        <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 mt-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
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
        </article>
      </div>
    </section>
  );
};