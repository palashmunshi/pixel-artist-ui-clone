import { builder, Builder } from '@builder.io/react';

// Helper function to fetch Builder.io content
export const fetchBuilderContent = async (model: string, url?: string) => {
  try {
    const content = await builder
      .get(model, {
        url: url || window.location.pathname,
      })
      .promise();
    
    return content;
  } catch (error) {
    console.error('Error fetching Builder content:', error);
    return null;
  }
};

// Helper to register custom components with Builder
export const registerBuilderComponents = () => {
  // Register your existing components so they can be used in Builder
  Builder.registerComponent(require('@/components/HeroSection').HeroSection, {
    name: 'HeroSection',
    inputs: [
      { name: 'title', type: 'string' },
      { name: 'subtitle', type: 'string' },
      { name: 'phase', type: 'string' },
    ],
  });

  Builder.registerComponent(require('@/components/StrategicVision').StrategicVision, {
    name: 'StrategicVision',
  });

  Builder.registerComponent(require('@/components/PhaseNavigation').PhaseNavigation, {
    name: 'PhaseNavigation',
    inputs: [
      { name: 'steps', type: 'list' },
    ],
  });
};