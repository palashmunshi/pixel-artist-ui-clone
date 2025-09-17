import React from 'react';

export const SuccessMetrics: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <div className="text-left">
        <h2 className="text-white text-display font-bold mb-2">Success Metrics</h2>
        <p className="text-gray-300 text-subheading">End-to-End Transformation Results</p>
      </div>

      {/* Complete Transformation Success Card */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-[#FFAD28] rounded flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-subheading font-semibold leading-6 mb-2">Complete Transformation Success</h3>
            <p className="text-gray-300 text-caption font-normal leading-5">
              From CIO's napkin sketch to live production in 14 months vs 18+ month traditional timeline
            </p>
          </div>
        </div>
      </div>

      {/* False Positive Pattern Recognition Metrics */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <div className="text-center mb-6">
          <h3 className="text-white text-subheading font-semibold leading-6 mb-2">False Positive Pattern Recognition</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Savings */}
          <div className="text-center">
            <div className="text-white text-4xl font-bold leading-10 mb-2">$9.8M</div>
            <div className="text-gray-300 text-caption font-normal leading-5">Total savings</div>
            <div className="text-gray-400 text-label font-normal leading-4 mt-1">vs traditional approach</div>
          </div>

          {/* Months Delivery */}
          <div className="text-center">
            <div className="text-white text-4xl font-bold leading-10 mb-2">14</div>
            <div className="text-gray-300 text-caption font-normal leading-5">Months delivery</div>
            <div className="text-gray-400 text-label font-normal leading-4 mt-1">4 months ahead of schedule</div>
          </div>

          {/* System Compatibility */}
          <div className="text-center">
            <div className="text-white text-4xl font-bold leading-10 mb-2">95.2%</div>
            <div className="text-gray-300 text-caption font-normal leading-5">System compatibility</div>
            <div className="text-gray-400 text-label font-normal leading-4 mt-1">agent orchestration success</div>
          </div>

          {/* User Adoption */}
          <div className="text-center">
            <div className="text-white text-4xl font-bold leading-10 mb-2">87%</div>
            <div className="text-gray-300 text-caption font-normal leading-5">User adoption</div>
            <div className="text-gray-400 text-label font-normal leading-4 mt-1">vs 34% industry average</div>
          </div>
        </div>
      </div>

      {/* Transformation Journey Success Metrics */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-white text-subheading font-semibold leading-6 mb-6">Transformation Journey Success Metrics</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategic Vision Achievement */}
          <div>
            <h4 className="text-[#4ADE80] text-body font-semibold leading-6 mb-4">Strategic Vision Achievement</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-normal leading-5">Unified patient experience:</span>
                <span className="text-[#4ADE80] text-sm font-semibold leading-5">Achieved</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-normal leading-5">Operational efficiency:</span>
                <span className="text-[#4ADE80] text-sm font-semibold leading-5">+34% improvement</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-normal leading-5">Cost reduction:</span>
                <span className="text-[#4ADE80] text-sm font-semibold leading-5">$9.8M savings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-normal leading-5">Regulatory compliance:</span>
                <span className="text-[#4ADE80] text-sm font-semibold leading-5">Full compliance</span>
              </div>
            </div>
          </div>

          {/* Intelligence Spine Impact */}
          <div>
            <h4 className="text-[#FFAD28] text-body font-semibold leading-6 mb-4">Intelligence Spine Impact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-normal leading-5">False positive prevention:</span>
                <span className="text-[#FFAD28] text-sm font-semibold leading-5">$8.6M saved</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-normal leading-5">Architecture optimization:</span>
                <span className="text-[#FFAD28] text-sm font-semibold leading-5">95.2% compatibility</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-normal leading-5">Risk mitigation:</span>
                <span className="text-[#FFAD28] text-sm font-semibold leading-5">Zero major issues</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-normal leading-5">Delivery acceleration:</span>
                <span className="text-[#FFAD28] text-sm font-semibold leading-5">4 months early</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traditional Approach Projection */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <h3 className="text-white text-lg font-semibold leading-6 mb-4">Traditional Approach Projection</h3>
          <div className="space-y-3">
            <div>
              <span className="text-gray-300 text-sm font-medium">Timeline:</span>
              <div className="text-white text-sm mt-1">18-24 months</div>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium">Budget:</span>
              <div className="text-white text-sm mt-1">$18.5M+ (54% overrun)</div>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium">Success probability:</span>
              <div className="text-white text-sm mt-1">23%</div>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium">User adoption:</span>
              <div className="text-white text-sm mt-1">34%</div>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium">Crisis events:</span>
              <div className="text-white text-sm mt-1">3-4 major issues</div>
            </div>
          </div>
        </div>

        {/* Intelligence Spine Actual Results */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <h3 className="text-white text-lg font-semibold leading-6 mb-4">Intelligence Spine Actual Results</h3>
          <div className="space-y-3">
            <div>
              <span className="text-gray-300 text-sm font-medium">Timeline:</span>
              <div className="text-[#4ADE80] text-sm mt-1 font-semibold">14 months</div>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium">Budget:</span>
              <div className="text-[#4ADE80] text-sm mt-1 font-semibold">$10.8M (10% under)</div>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium">Success achievement:</span>
              <div className="text-[#4ADE80] text-sm mt-1 font-semibold">Full success</div>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium">User adoption:</span>
              <div className="text-[#4ADE80] text-sm mt-1 font-semibold">87%</div>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium">Crisis prevention:</span>
              <div className="text-[#4ADE80] text-sm mt-1 font-semibold">Zero major issues</div>
            </div>
          </div>
        </div>
      </div>

      {/* End-to-End Transformation Success */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="text-white text-lg font-semibold leading-6 mb-4">End-to-End Transformation Success</h3>
        <p className="text-gray-300 text-sm font-normal leading-5 mb-6">
          From CIO's strategic vision to production reality with Intelligence Spine guidance
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-white text-4xl font-bold leading-10 mb-2">$9.8M</div>
            <div className="text-gray-300 text-sm font-normal leading-5">Total savings</div>
          </div>
          <div>
            <div className="text-white text-4xl font-bold leading-10 mb-2">14 mo</div>
            <div className="text-gray-300 text-sm font-normal leading-5">Vision to Reality</div>
          </div>
          <div>
            <div className="text-white text-4xl font-bold leading-10 mb-2">100%</div>
            <div className="text-gray-300 text-sm font-normal leading-5">Strategic Goals Met</div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs font-normal leading-4">
            Executive Demo • Complete Journey • CIO Vision → Agent Orchestration → Production Success
          </p>
        </div>
      </div>
    </div>
  );
};