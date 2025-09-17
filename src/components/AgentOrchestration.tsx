import React from 'react';
import { Network, ArrowRight, Activity, Database, Users, Cog } from 'lucide-react';

export const AgentOrchestration: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <div className="text-left">
        <h2 className="typography-page-header text-white mb-2">Agent Orchestration</h2>
        <p className="typography-page-subtitle text-gray-300">Visual Architecture Solution Deployment</p>
      </div>

      {/* Agent Playground Header */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#FFAD28] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Network className="w-7 h-7 text-black" />
          </div>
          <div>
            <h3 className="typography-section-header text-white mb-2">Agent Playground: Visual Solution Architecture</h3>
            <p className="typography-page-subtitle text-gray-300">Real-time agent orchestration for healthcare-native integration architecture</p>
          </div>
        </div>
      </div>

      {/* Interactive Agent Orchestration */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="typography-section-header text-[#FFAD28] mb-8">Interactive Agent Orchestration</h3>
        
        {/* First Flow */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-gray-600 text-center min-w-[120px]">
              <Database className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="typography-label text-white">SAP Legacy</div>
              <div className="typography-micro text-gray-400 mt-1">847 codes</div>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="text-green-400 font-bold text-lg">94%</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-green-500 text-center min-w-[120px]">
              <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="typography-label text-white">Healthcare Agent</div>
              <div className="typography-micro text-green-400 mt-1">Data Transform</div>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="text-green-400 font-bold text-lg">96%</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-purple-500 text-center min-w-[120px]">
              <Cog className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="typography-label text-white">Integration</div>
              <div className="typography-micro text-purple-400 mt-1">Orchestrator</div>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="text-green-400 font-bold text-lg">98%</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-green-500 text-center min-w-[120px]">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="typography-label text-white">ServiceNow</div>
              <div className="typography-micro text-green-400 mt-1">Platform</div>
            </div>
          </div>
        </div>

        {/* Second Flow */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-gray-600 text-center min-w-[120px]">
              <Database className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <div className="typography-label text-white">Kinaxis</div>
              <div className="typography-micro text-gray-400 mt-1">Supply Chain</div>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="text-yellow-400 font-bold text-lg">91%</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-blue-500 text-center min-w-[120px]">
              <Activity className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="typography-label text-white">Bridge Agent</div>
              <div className="typography-micro text-blue-400 mt-1">Field Mapping</div>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="text-green-400 font-bold text-lg">93%</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-purple-500 text-center min-w-[120px]">
              <Cog className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="typography-label text-white">Merge Layer</div>
              <div className="typography-micro text-purple-400 mt-1">Unified Data</div>
            </div>
            
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="text-green-400 font-bold text-lg">98%</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="bg-[rgba(60,62,59,1)] p-4 rounded-lg border border-green-500 text-center min-w-[120px]">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="typography-label text-white">Clinical</div>
              <div className="typography-micro text-green-400 mt-1">Workflows</div>
            </div>
          </div>
        </div>

        {/* Overall Compatibility */}
        <div className="bg-[#FFAD28] p-6 rounded-[12px] text-center">
          <h4 className="typography-section-header text-black mb-2">Overall Architecture Compatibility: 95.2%</h4>
        </div>
      </div>

      {/* Three Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Agent Capabilities */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <h3 className="typography-section-header text-white mb-6">Agent Capabilities</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="typography-label text-gray-300">Healthcare data transformation</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="typography-label text-gray-300">Real-time compatibility monitoring</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="typography-label text-gray-300">Clinical workflow preservation</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="typography-label text-gray-300">Automated field mapping</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <h3 className="typography-section-header text-white mb-6">Performance Metrics</h3>
          <div className="space-y-4">
            <div>
              <span className="typography-label text-gray-300">Data throughput:</span>
              <div className="typography-label text-white mt-1">15K records/min</div>
            </div>
            <div>
              <span className="typography-label text-gray-300">Error rate:</span>
              <div className="typography-label text-green-400 mt-1">0.03%</div>
            </div>
            <div>
              <span className="typography-label text-gray-300">Uptime SLA:</span>
              <div className="typography-label text-green-400 mt-1">99.97%</div>
            </div>
            <div>
              <span className="typography-label text-gray-300">Response time:</span>
              <div className="typography-label text-green-400 mt-1">120ms avg</div>
            </div>
          </div>
        </div>

        {/* Deployment Status */}
        <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
          <h3 className="typography-section-header text-white mb-6">Deployment Status</h3>
          <div className="space-y-4">
            <div>
              <span className="typography-label text-gray-300">Healthcare Agent:</span>
              <div className="typography-label text-green-400 mt-1">Deployed</div>
            </div>
            <div>
              <span className="typography-label text-gray-300">Bridge Agent:</span>
              <div className="typography-label text-green-400 mt-1">Deployed</div>
            </div>
            <div>
              <span className="typography-label text-gray-300">Integration Layer:</span>
              <div className="typography-label text-green-400 mt-1">Active</div>
            </div>
            <div>
              <span className="typography-label text-gray-300">Monitoring:</span>
              <div className="typography-label text-green-400 mt-1">Real-time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Success Summary */}
      <div className="bg-[rgba(40,42,39,1)] p-8 rounded-[20px] border border-[rgba(112,112,112,1)]">
        <h3 className="typography-section-header text-white mb-6 text-center">Agent Orchestration Success</h3>
        <p className="typography-page-subtitle text-gray-300 text-center mb-6">
          95.2% compatibility achieved through visual architecture modeling and healthcare-native agent deployment
        </p>
        
        <div className="text-center">
          <div className="text-6xl font-bold text-green-400 mb-2">95.2%</div>
          <p className="typography-page-subtitle text-gray-300">Architecture Compatibility</p>
        </div>
      </div>
    </div>
  );
};