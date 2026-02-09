# Design Tokens

Complete design token system extracted from Figma design file.

## Quick Reference

```typescript
import { colors, typography, spacing, shadows } from '@/src/tokens';
```

## Files

- **`colors.ts`** - 48 color tokens from Figma
- **`typography.ts`** - 119 typography styles (13 sizes × 9 weights)
- **`spacing.ts`** - 45 spacing values (2px → 344px)
- **`effects.ts`** - 28 shadow and blur effects
- **`design-tokens.css`** - CSS custom properties for all tokens
- **`index.ts`** - Barrel exports

## Usage

### TypeScript/JavaScript

```typescript
// Import specific tokens
import { colors } from '@/src/tokens';
const buttonColor = colors.accent.DEFAULT; // #0090ff

// Import typography
import { typography } from '@/src/tokens';
const headingStyle = {
  ...typography['2xl'],
  fontWeight: typography['2xl'].variants.bold.fontWeight
};
```

### CSS

```css
.my-component {
  background: var(--color-bg-light);
  font-size: var(--text-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
}
```

## Documentation

- **[TOKEN-USAGE-GUIDE.md](../../docs/tokens/TOKEN-USAGE-GUIDE.md)** - Complete usage guide
- **[COMPONENT-REFERENCE.md](../../docs/tokens/COMPONENT-REFERENCE.md)** - Component-token mapping
- **[VALIDATION-REPORT.md](../../docs/tokens/VALIDATION-REPORT.md)** - Extraction verification

## Token Stats

- **205 total tokens** extracted
- **21,000+ usages** analyzed
- **100% accuracy** (no approximations)
- **Full TypeScript support**
- **Shadcn/ui compatible**
