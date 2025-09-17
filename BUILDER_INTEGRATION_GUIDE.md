# Builder.io Integration Guide

This guide explains how to import additional designs from Builder.io and integrate them with your existing React project.

## Setup Complete ✅

The project is now configured with:
- `@builder.io/react` package installed
- `BuilderComponent` wrapper component
- `BuilderPage` for dynamic content
- Integration utilities in `src/utils/builderIntegration.ts`

## Method 1: Direct Code Export (Recommended for Static Designs)

### Step 1: Export from Builder.io
1. Open your design in Builder.io
2. Click **"Code"** tab → **"React"**
3. Copy the generated component code
4. Note any image URLs that need to be downloaded

### Step 2: Create Component Files
```bash
# Create new component file
src/components/YourNewComponent.tsx
```

### Step 3: Integration Examples
```tsx
// Example: Add to existing page
import { YourNewComponent } from '@/components/YourNewComponent';

// In your page component:
<YourNewComponent />
```

## Method 2: Dynamic Builder.io Integration

### Step 1: Configure API Key
```tsx
// Update src/components/BuilderComponent.tsx
builder.init('YOUR_ACTUAL_BUILDER_API_KEY');
```

### Step 2: Create Dynamic Pages
```tsx
// Use BuilderPage for dynamic content
import BuilderPage from '@/pages/BuilderPage';

// Route to different Builder models
<BuilderPage model="your-page-model" />
```

### Step 3: Register Custom Components
```tsx
// In src/utils/builderIntegration.ts
// Your existing components are already registered!
```

## Adding New Builder Designs

### For Static Components:
1. Export React code from Builder.io
2. Create new component file in `src/components/`
3. Import and use in your pages
4. Update routing if needed

### For Dynamic Content:
1. Create content model in Builder.io
2. Use `<BuilderComponent model="your-model" />`
3. Configure API key
4. Test dynamic loading

## Example New Component Integration

```tsx
// src/components/NewBuilderComponent.tsx
import React from 'react';

export const NewBuilderComponent: React.FC = () => {
  return (
    <section>
      {/* Your Builder.io exported JSX here */}
    </section>
  );
};

// src/pages/Index.tsx - Add to existing page
import { NewBuilderComponent } from '@/components/NewBuilderComponent';

// Add to your JSX:
<NewBuilderComponent />
```

## Best Practices

1. **Component Organization**: Keep Builder components in separate files
2. **Asset Management**: Download images to `src/assets/` and import them
3. **Styling**: Use existing Tailwind classes and design tokens
4. **Responsive**: Ensure Builder designs work with existing breakpoints
5. **Testing**: Test new components on mobile and desktop

## Troubleshooting

- **Images not loading**: Download images to `src/assets/` and update imports
- **Styling conflicts**: Use Tailwind utility classes consistently
- **Component errors**: Check Builder export syntax and TypeScript types
- **API issues**: Verify Builder.io API key and model names

## Next Steps

1. Export your next Builder.io design
2. Create component file
3. Import and integrate
4. Test responsive behavior
5. Update routes if needed

Ready to import your next design! 🚀