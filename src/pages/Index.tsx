import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PhaseNavigation } from '@/components/PhaseNavigation';
import { StrategicVision } from '@/components/StrategicVision';
import { NavigationButtons } from '@/components/NavigationButtons';

const Index = () => {
  const [activeStep, setActiveStep] = useState('strategic-vision');

  const phaseSteps = [
    {
      id: 'strategic-vision',
      title: 'Strategic Vision',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/d3e311e0deaf3c03c5a57683e9cedfef252846ef?placeholderIfAbsent=true',
      isActive: true
    },
    {
      id: 'intelligent-analysis',
      title: 'Intelligent Analysis',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/e4eaca950e40259170c6534a3743ff9fc4deab2e?placeholderIfAbsent=true',
      isActive: false
    },
    {
      id: 'delivery-simulation',
      title: 'Delivery Simulation',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/536af0c7f3376926b10c67f06e9b94125b32cf89?placeholderIfAbsent=true',
      isActive: false
    },
    {
      id: 'false-positive-detection',
      title: 'False Positive Detection',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/86632aa8718e481e24596404a52243ba54bed26d?placeholderIfAbsent=true',
      isActive: false
    },
    {
      id: 'agent-orchestration',
      title: 'Agent Orchestration',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/911dcf2b2272106a0dfb047fea6c45fcd8cd59ab?placeholderIfAbsent=true',
      isActive: false
    },
    {
      id: 'success-metrics',
      title: 'Success Metrics',
      icon: 'https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/11500ef12dfb3237d5e9a3d944d66c2f293cce4f?placeholderIfAbsent=true',
      isActive: false
    }
  ];

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId);
    // Update active state for visual feedback
    phaseSteps.forEach(step => {
      step.isActive = step.id === stepId;
    });
  };

  const handlePreviousPhase = () => {
    console.log('Previous phase clicked');
    // Implement navigation logic
  };

  const handleNextPhase = () => {
    console.log('Next phase clicked');
    // Implement navigation logic
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
        
        <StrategicVision />
        
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
