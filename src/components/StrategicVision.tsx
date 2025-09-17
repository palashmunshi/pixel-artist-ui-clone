import React from 'react';
import { SystemCard } from './SystemCard';
import { InfoCard } from './InfoCard';

export const StrategicVision: React.FC = () => {
  const currentStateItems = [
    { title: "Legacy SAP", subtitle: "15+ years clinical evolution", borderColor: "border-red-200", textColor: "text-[#FFB6B6]" },
    { title: "Kinaxis Supply Chain", subtitle: "Pharma → Medical Device gap", borderColor: "border-orange-200", textColor: "text-[#FFA474]" },
    { title: "Disparate Clinical Systems", subtitle: "12 different platforms", borderColor: "border-yellow-200", textColor: "text-[#FFAD28]" }
  ];

  const futureStateItems = [
    { title: "ServiceNow Platform", subtitle: "ITSM + AP + HR modules", borderColor: "border-green-200", textColor: "text-green-200" },
    { title: "Integrated Clinical Workflow", subtitle: "Single patient journey", borderColor: "border-blue-200", textColor: "text-blue-200" },
    { title: "Real-time Analytics", subtitle: "AI-driven insights", borderColor: "border-purple-200", textColor: "text-purple-200" }
  ];

  const infoCards = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/d4f17a6f747a9b73c5772d323e9ca861e07f0e0e?placeholderIfAbsent=true",
      title: "Strategic Goals",
      items: [
        "• Unified patient experience",
        "• Operational efficiency", 
        "• Cost reduction",
        "• Regulatory compliance"
      ]
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/deefdd2d06ac3dac1734720e38223f94d9605037?placeholderIfAbsent=true",
      title: "Timeline Vision",
      items: [
        "• Phase 1: 18 months",
        "• ServiceNow implementation",
        "• Legacy system integration",
        "• Clinical workflow modernization"
      ]
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/d496c79b8f8c827ce3399142a27b7e5105b2c8c5?placeholderIfAbsent=true",
      title: "Investment",
      items: [
        "• Initial budget: $12M",
        "• Expected ROI: 3 years",
        "• Operational savings target",
        "• Efficiency improvements"
      ]
    }
  ];

  return (
    <section className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#282A27] min-h-[600px] w-full overflow-hidden gap-6 mt-6 p-8 rounded-[20px] max-md:max-w-full max-md:px-5">
      <header className="w-full text-white gap-2 max-md:max-w-full">
        <div className="w-full text-heading font-bold leading-none max-md:max-w-full">
          <h2 className="text-heading font-bold leading-8 max-md:max-w-full">
            Strategic Vision
          </h2>
        </div>
        <div className="w-full text-subheading font-normal leading-loose mt-2 max-md:max-w-full">
          <div className="text-subheading font-normal leading-7 max-md:max-w-full">
            CIO's Napkin Architecture Sketch
          </div>
        </div>
      </header>
      
      <div className="w-full gap-6 mt-6 max-md:max-w-full">
        <article className="items-stretch border border-gray-400 flex w-full flex-col justify-center p-[26px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <div className="flex w-full items-center flex-wrap max-md:max-w-full">
            <div className="self-stretch flex min-h-8 flex-col w-12 my-auto pr-4">
              <div className="flex min-h-8 w-8 flex-col overflow-hidden items-stretch justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/25733cbb7c2ac787fa2f7e6b4976c587e089a55e?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-full flex-1"
                  alt="Healthcare icon"
                />
              </div>
            </div>
            <div className="self-stretch min-w-60 text-right w-[507px] my-auto max-md:max-w-full">
              <div className="w-full text-subheading text-white font-bold leading-[1.4] max-md:max-w-full">
                <h3 className="text-white text-subheading font-bold leading-7">
                  Healthcare Digital Transformation Vision
                </h3>
              </div>
              <div className="w-full text-body text-white font-normal max-md:max-w-full">
                <div className="text-body font-normal leading-6 max-md:max-w-full">
                  "We need to modernize our entire ERP and clinical systems ecosystem"
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <article className="border border-gray-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] bg-[#4A4C4D] w-full overflow-hidden gap-6 mt-6 p-[34px] rounded-[20px] border-solid max-md:max-w-full max-md:px-5">
          <header className="w-full text-body text-white font-bold text-center max-md:max-w-full">
            <h3 className="text-white text-body leading-6 max-md:max-w-full">
              CIO's Strategic Architecture Vision
            </h3>
          </header>
          
          <div className="justify-center items-stretch flex w-full gap-8 flex-wrap mt-6 max-md:max-w-full">
            <div className="min-w-60 text-center grow shrink w-[276px] gap-4">
              <div className="w-full text-body text-[#FFB6B6] font-semibold">
                <h4 className="text-body leading-6">
                  Current State
                </h4>
              </div>
              <div className="w-full gap-3 mt-4">
                {currentStateItems.map((item, index) => (
                  <div key={index} className={index > 0 ? "mt-3" : ""}>
                    <SystemCard {...item} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="min-w-60 grow shrink w-[277px] gap-4">
              <div className="w-full text-body text-blue-300 font-semibold whitespace-nowrap text-center">
                <h4 className="text-blue-300 text-body leading-6">
                  Transformation
                </h4>
              </div>
              <div className="flex w-full flex-col items-center text-sm text-white font-medium text-right leading-none mt-4">
                <div className="items-center border-blue-300 flex flex-col gap-2 p-[18px] rounded-[10px] border-2 border-solid">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/ec87ba009b3ad7ec0ffaa53f9973768162e35df2?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-8"
                    alt="Intelligent Integration"
                  />
                  <div className="flex flex-col items-center mt-2">
                    <div className="text-white text-caption font-medium leading-5">
                      Intelligent Integration
                    </div>
                  </div>
                </div>
                <div className="w-[174px] max-w-full pt-4">
                  <div className="items-center border-purple-300 flex w-full flex-col gap-2 p-[18px] rounded-[10px] border-2 border-solid">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/bd1da15b35434b809217212e9a7671c3/765d9281813a99b99a4ba5baa8dcd219e85f7242?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-8"
                      alt="Unified Data Layer"
                    />
                    <div className="flex flex-col items-center mt-2">
                      <div className="text-white text-caption font-medium leading-5">
                        Unified Data Layer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="min-w-60 text-center grow shrink w-[276px] gap-4">
              <div className="w-full text-body text-green-200 font-semibold">
                <h4 className="text-body leading-6">
                  Future State
                </h4>
              </div>
              <div className="w-full gap-3 mt-4">
                {futureStateItems.map((item, index) => (
                  <div key={index} className={index > 0 ? "mt-3" : ""}>
                    <SystemCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
        
        <div className="justify-center items-stretch flex w-full gap-6 flex-wrap mt-6 max-md:max-w-full">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
        
        <div className="w-full text-subheading text-white font-medium leading-loose mt-6 max-md:max-w-full">
          <div className="text-subheading font-medium leading-7 max-md:max-w-full">
            Question: How do we turn this vision into reality while avoiding common pitfalls?
          </div>
        </div>
      </div>
    </section>
  );
};
