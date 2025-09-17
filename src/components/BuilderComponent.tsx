import React from 'react';
import { BuilderComponent as BuilderReactComponent, builder } from '@builder.io/react';

// Initialize Builder
builder.init('YOUR_BUILDER_API_KEY'); // Replace with your actual API key

interface BuilderComponentProps {
  model: string;
  content?: any;
}

export const BuilderComponent: React.FC<BuilderComponentProps> = ({ model, content }) => {
  return (
    <BuilderReactComponent
      model={model}
      content={content}
    />
  );
};