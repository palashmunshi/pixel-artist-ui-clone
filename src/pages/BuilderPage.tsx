import React from 'react';
import { BuilderComponent } from '@/components/BuilderComponent';

interface BuilderPageProps {
  model?: string;
}

const BuilderPage: React.FC<BuilderPageProps> = ({ model = 'page' }) => {
  return (
    <main className="min-h-screen bg-background">
      <BuilderComponent model={model} />
    </main>
  );
};

export default BuilderPage;