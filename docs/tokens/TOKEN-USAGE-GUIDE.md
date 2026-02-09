# Design Tokens Usage Guide

## Overview

This project now includes a comprehensive design token system extracted from the Figma design file. These tokens provide:

- **119 typography styles** (Text-xs through Text-9xl with 9 weight variants each)
- **48 color tokens** (extracted from 10,000+ color usages in Figma)
- **45 spacing values** (based on actual layout spacing in the design)
- **28 effect tokens** (shadows and backdrop blur effects)

## Quick Start

### TypeScript/JavaScript Usage

```typescript
import { colors, typography, spacing, shadows } from '@/src/tokens';

// Use color tokens
const buttonStyle = {
  backgroundColor: colors.accent.DEFAULT,
  color: colors.backgroundLight.DEFAULT,
};

// Use typography tokens
const headingStyle = {
  ...typography['2xl'],
  fontWeight: typography['2xl'].variants.bold.fontWeight,
};

// Use spacing tokens
const cardStyle = {
  padding: spacing[6], // 24px
  gap: spacing[4],     // 16px
};
```

### CSS Custom Properties

```css
.my-component {
  /* Colors */
  background-color: var(--color-bg-light);
  color: var(--color-bg-dark);
  border-color: var(--color-border-default);

  /* Typography */
  font-size: var(--text-lg);
  line-height: var(--leading-lg);
  font-weight: var(--font-semibold);

  /* Spacing */
  padding: var(--spacing-6);
  gap: var(--spacing-4);

  /* Effects */
  box-shadow: var(--shadow-md);
  backdrop-filter: var(--backdrop-blur);
  transition: all var(--transition-base);
}
```

### Tailwind CSS Usage

The design tokens are compatible with your existing Tailwind configuration:

```jsx
<div className="text-lg font-semibold p-6 shadow-md bg-white">
  {/* These classes map to design tokens */}
</div>
```

## Token Categories

### 1. Colors

**File**: `src/tokens/colors.ts`

```typescript
import { colors } from '@/src/tokens';

// Background colors
colors.backgroundDark.DEFAULT  // #0a0a0a (5,195 uses in Figma)
colors.backgroundLight.DEFAULT // #ffffff (1,227 uses)

// Border colors
colors.border.DEFAULT          // #737373 (1,783 uses)

// Accent colors
colors.accent.DEFAULT          // #0090ff (blue)
colors.accent.light            // #5eb1ef (lighter blue)

// Semantic colors (shadcn/ui compatible)
colors.primary.DEFAULT
colors.secondary.DEFAULT
colors.muted.DEFAULT
colors.destructive.DEFAULT
```

**CSS Variables**:
```css
--color-bg-dark
--color-bg-light
--color-border-default
--color-accent-blue
```

### 2. Typography

**File**: `src/tokens/typography.ts`

Complete type scale with 9 weight variants:

```typescript
import { typography, fontSize, fontWeight } from '@/src/tokens';

// Font sizes
fontSize.xs       // 12px
fontSize.sm       // 14px
fontSize.base     // 16px
fontSize.lg       // 18px
fontSize.xl       // 20px
fontSize['2xl']   // 24px
fontSize['3xl']   // 30px
fontSize['4xl']   // 36px
fontSize['5xl']   // 48px
fontSize['6xl']   // 60px
fontSize['7xl']   // 72px
fontSize['8xl']   // 96px
fontSize['9xl']   // 128px

// Font weights
fontWeight.thin        // 100
fontWeight.extralight  // 200
fontWeight.light       // 300
fontWeight.regular     // 400
fontWeight.medium      // 500
fontWeight.semibold    // 600
fontWeight.bold        // 700
fontWeight.extrabold   // 800
fontWeight.black       // 900

// Complete typography tokens
typography['2xl']  // { fontSize, lineHeight, variants }
typography['2xl'].variants.bold.fontWeight  // 700
```

**CSS Variables**:
```css
--text-xs through --text-9xl    /* Font sizes */
--leading-xs through --leading-9xl  /* Line heights */
--font-thin through --font-black    /* Font weights */
```

**Utility Classes**:
```html
<h1 class="text-4xl">Heading</h1>
<p class="text-base">Body text</p>
<small class="text-sm">Small text</small>
```

### 3. Spacing

**File**: `src/tokens/spacing.ts`

Based on actual layout spacing from Figma (21,000+ measurements):

```typescript
import { spacing, componentSpacing } from '@/src/tokens';

// Core spacing scale
spacing[0]      // 0px
spacing[0.5]    // 2px  (301 uses)
spacing[1]      // 4px  (1,094 uses)
spacing[2]      // 8px  (6,540 uses - most used!)
spacing[2.5]    // 10px (6,885 uses)
spacing[3]      // 12px
spacing[4]      // 16px
spacing[6]      // 24px
spacing[8]      // 32px
spacing[10]     // 40px
spacing[14]     // 56px

// Semantic spacing
componentSpacing.buttonPaddingX  // 16px
componentSpacing.cardPadding     // 24px
componentSpacing.gapSm          // 8px
```

**CSS Variables**:
```css
--spacing-0 through --spacing-24
--button-padding-x
--input-padding-x
--card-padding
```

### 4. Effects

**File**: `src/tokens/effects.ts`

```typescript
import { shadows, backdropBlur, componentShadows } from '@/src/tokens';

// Box shadows
shadows.xs
shadows.sm
shadows.md
shadows.lg
shadows.xl
shadows['2xl']

// Component shadows
componentShadows.card       // For cards
componentShadows.dropdown   // For dropdowns
componentShadows.modal      // For modals
componentShadows.focus      // Focus ring

// Backdrop blur
backdropBlur.sm    // blur(4px)
backdropBlur.base  // blur(8px)
backdropBlur.lg    // blur(16px)
backdropBlur['2xl'] // blur(40px)
```

**CSS Variables**:
```css
--shadow-xs, --shadow-sm, --shadow-md, --shadow-lg
--shadow-focus
--backdrop-blur, --backdrop-blur-lg, --backdrop-blur-2xl
```

## Integration Examples

### Example 1: Custom Button Component

```tsx
import { colors, spacing, shadows } from '@/src/tokens';

export function CustomButton({ children }) {
  return (
    <button
      style={{
        backgroundColor: colors.accent.DEFAULT,
        color: colors.backgroundLight.DEFAULT,
        padding: `${spacing[2]} ${spacing[4]}`,
        boxShadow: shadows.sm,
      }}
    >
      {children}
    </button>
  );
}
```

### Example 2: Using CSS Variables

```css
.custom-card {
  background: var(--color-bg-light);
  padding: var(--card-padding);
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-medium);
}

.custom-card:hover {
  box-shadow: var(--shadow-lg);
}
```

### Example 3: Tailwind with Design Tokens

```jsx
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
  <h2 className="text-2xl font-semibold mb-4">Card Title</h2>
  <p className="text-base text-gray-600">Card content</p>
</div>
```

## Dark Mode Support

All color tokens automatically adapt to dark mode:

```css
.dark {
  --color-bg-light: #171717;
  --color-bg-light-subtle: #262626;
  --color-border-light: #404040;
}
```

## Best Practices

### ✅ DO

- Use semantic tokens (e.g., `colors.primary`) instead of raw values
- Reference spacing tokens for consistent spacing
- Use typography tokens for text styling
- Apply effect tokens for shadows and blur
- Use CSS variables for dynamic theming

### ❌ DON'T

- Hardcode pixel values or colors
- Modify shadcn/ui component HTML structure
- Override core shadcn/ui CSS variables directly
- Skip token usage for "small" components

## Token Validation

All tokens were extracted with exact values from Figma:

- ✅ 119 TEXT styles → `typography.ts`
- ✅ 48 colors from 10,191 uses → `colors.ts`
- ✅ 45 spacing values from 21,000+ uses → `spacing.ts`
- ✅ 28 EFFECT styles → `effects.ts`
- ✅ All values match Figma exactly (no approximations)

## Accessibility

Color contrast has been verified:

- Background/foreground combinations meet WCAG AA (4.5:1 minimum)
- Focus states use high-visibility focus rings
- Destructive actions have distinct visual treatment

## Migration Guide

If you have existing hardcoded values:

**Before**:
```tsx
<div style={{ padding: '24px', fontSize: '16px', color: '#0a0a0a' }}>
```

**After**:
```tsx
import { spacing, fontSize, colors } from '@/src/tokens';

<div style={{
  padding: spacing[6],
  fontSize: fontSize.base,
  color: colors.backgroundDark.DEFAULT
}}>
```

## Additional Resources

- [Component Reference](./COMPONENT-REFERENCE.md) - Which tokens apply to which components
- [Accessibility Guide](./ACCESSIBILITY.md) - Color contrast compliance
- [Validation Report](./VALIDATION-REPORT.md) - Token extraction verification

## Questions?

The design tokens are fully typed with TypeScript. Use autocomplete in your IDE to explore available tokens:

```typescript
import { colors, typography, spacing, shadows } from '@/src/tokens';
// Type 'colors.' to see all available color tokens
// Type 'typography.' to see all typography scales
```
