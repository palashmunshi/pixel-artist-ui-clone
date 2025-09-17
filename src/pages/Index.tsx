import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PhaseNavigation } from '@/components/PhaseNavigation';
import { StrategicVision } from '@/components/StrategicVision';
import { IntelligentAnalysis } from '@/components/IntelligentAnalysis';
import { DeliverySimulation } from '@/components/DeliverySimulation';
import { FalsePositiveDetection } from '@/components/FalsePositiveDetection';
import { AgentOrchestration } from '@/components/AgentOrchestration';
import { SuccessMetrics } from '@/components/SuccessMetrics';
import { NavigationButtons } from '@/components/NavigationButtons';

const Index = () => {
  const [activeStep, setActiveStep] = useState('strategic-vision');

  const phaseSteps = [
    {
      id: 'strategic-vision',
      title: 'Strategic Vision',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/d3e311e0deaf3c03c5a57683e9cedfef252846ef?placeholderIfAbsent=true',
      isActive: activeStep === 'strategic-vision'
    },
    {
      id: 'intelligent-analysis',
      title: 'Intelligent Analysis',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/e4eaca950e40259170c6534a3743ff9fc4deab2e?placeholderIfAbsent=true',
      isActive: activeStep === 'intelligent-analysis'
    },
    {
      id: 'delivery-simulation',
      title: 'Delivery Simulation',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/536af0c7f3376926b10c67f06e9b94125b32cf89?placeholderIfAbsent=true',
      isActive: activeStep === 'delivery-simulation'
    },
    {
      id: 'false-positive-detection',
      title: 'False Positive Detection',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/86632aa8718e481e24596404a52243ba54bed26d?placeholderIfAbsent=true',
      isActive: activeStep === 'false-positive-detection'
    },
    {
      id: 'agent-orchestration',
      title: 'Agent Orchestration',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/911dcf2b2272106a0dfb047fea6c45fcd8cd59ab?placeholderIfAbsent=true',
      isActive: activeStep === 'agent-orchestration'
    },
    {
      id: 'success-metrics',
      title: 'Success Metrics',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/11500ef12dfb3237d5e9a3d944d66c2f293cce4f?placeholderIfAbsent=true',
      isActive: activeStep === 'success-metrics'
    }
  ];

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId);
  };

  const handlePreviousPhase = () => {
    const currentIndex = phaseSteps.findIndex(step => step.id === activeStep);
    if (currentIndex > 0) {
      setActiveStep(phaseSteps[currentIndex - 1].id);
    }
  };

  const handleNextPhase = () => {
    const currentIndex = phaseSteps.findIndex(step => step.id === activeStep);
    if (currentIndex < phaseSteps.length - 1) {
      setActiveStep(phaseSteps[currentIndex + 1].id);
    }
  };

  return (
    <main className="bg-black flex flex-col overflow-hidden items-center pb-[30px]">
      <HeroSection
        title="Use Case 3: End-to-End Intelligent Architecture Journey"
        subtitle="From Strategic Vision to Production Success"
        phase="Phase 1 / 6"
      />
      
      <section className="max-w-screen-xl bg-black z-10 min-h-[900px] mt-[-105px] w-full gap-6 p-6 rounded-[20px] max-md:max-w-full max-md:px-5">
        <PhaseNavigation 
          steps={phaseSteps} 
          onStepClick={handleStepClick}
        />
        
        {activeStep === 'strategic-vision' && <StrategicVision />}
        {activeStep === 'intelligent-analysis' && <IntelligentAnalysis />}
        {activeStep === 'delivery-simulation' && <DeliverySimulation />}
        {activeStep === 'false-positive-detection' && <FalsePositiveDetection />}
        {activeStep === 'agent-orchestration' && <AgentOrchestration />}
        {activeStep === 'success-metrics' && <SuccessMetrics />}
        
        <NavigationButtons
          onPrevious={handlePreviousPhase}
          onNext={handleNextPhase}
          centerText={{
            main: "Intelligence Spine Platform",
            sub: "Complete Architecture Journey Demo"
          }}
        />
        
        <div className="w-full text-xs text-gray-400 font-normal text-center leading-none mt-6 max-md:max-w-full">
          <div className="text-xs font-normal leading-4 max-md:max-w-full">
            Executive Demo • Complete Journey • CIO Vision → Agent Orchestration → Production Success
          </div>
        </div>
      </section>
      
      <footer className="flex w-full max-w-[1256px] items-center gap-[40px_100px] text-sm text-white font-medium justify-between flex-wrap mt-[30px] max-md:max-w-full">
        <div className="self-stretch my-auto">
          Copyright © Genpact 2025. All rights reserved.
        </div>
        <div className="self-stretch my-auto">
          Developed & maintained by AI Practice Team
        </div>
      </footer>
    </main>
  );
};

export default Index;
