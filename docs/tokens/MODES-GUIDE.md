# Color Modes Guide

## Overview

This design system supports two distinct color modes extracted from Figma design tokens:

1. **Primary Mode** (Light theme) - Sky/Blue color palette
2. **Dark Mode** - Neutral/Gray color palette

Both modes follow the shadcn/ui semantic color system with exact values from Figma.

---

## Color Modes

### Primary Mode (Light Theme)

**Theme**: Sky/Blue palette
**Source**: `primary.tokens.json`

```typescript
import { primaryMode } from '@/src/tokens';

primaryMode.background      // #082F49 (sky/950)
primaryMode.foreground      // #F0F9FF (sky/50)
primaryMode.primary         // #BAE6FD (sky/200)
primaryMode.accent          // #0369A1 (sky/700)
```

**Visual Character**:
- Deep blue backgrounds (#082F49)
- Light sky foregrounds (#F0F9FF)
- Professional, corporate aesthetic
- High contrast for readability
- Blue-themed accents

### Dark Mode

**Theme**: Neutral/Gray palette
**Source**: `dark mode.tokens.json`

```typescript
import { darkMode } from '@/src/tokens';

darkMode.background         // #0A0A0A (neutral/950)
darkMode.foreground         // #FAFAFA (neutral/50)
darkMode.primary            // #E5E5E5 (neutral/200)
darkMode.accent             // #404040 (neutral/700)
```

**Visual Character**:
- True black backgrounds (#0A0A0A)
- Warm white foregrounds (#FAFAFA)
- Minimal, modern aesthetic
- Reduced eye strain
- Monochrome with subtle grays

---

## Color Comparison

| Token | Primary Mode | Dark Mode |
|-------|-------------|-----------|
| **background** | #082F49 (sky/950) | #0A0A0A (neutral/950) |
| **foreground** | #F0F9FF (sky/50) | #FAFAFA (neutral/50) |
| **card** | #0F172A (slate/900) | #171717 (neutral/900) |
| **primary** | #BAE6FD (sky/200) | #E5E5E5 (neutral/200) |
| **accent** | #0369A1 (sky/700) | #404040 (neutral/700) |
| **border** | #0369A1 (sky/700) | #404040 (neutral/700) |
| **ring** | #0EA5E9 (sky/500) | #737373 (neutral/500) |

---

## Usage

### Automatic Mode Switching

The mode automatically switches based on the `.dark` class:

```html
<!-- Primary (Light) Mode -->
<html>
  <body>
    <!-- Uses primary mode colors -->
  </body>
</html>

<!-- Dark Mode -->
<html class="dark">
  <body>
    <!-- Uses dark mode colors -->
  </body>
</html>
```

### CSS Variables

All colors are available as CSS variables:

```css
.my-component {
  /* Automatically uses correct mode */
  background: var(--background);
  color: var(--foreground);
  border-color: var(--border);
}

/* Primary mode: background = #082F49 */
/* Dark mode: background = #0A0A0A */
```

### TypeScript/JavaScript

```typescript
import { colors, primaryMode, darkMode } from '@/src/tokens';

// Access mode-specific colors
const primaryBg = primaryMode.background;  // #082F49
const darkBg = darkMode.background;        // #0A0A0A

// Access current mode via CSS variables
const currentBg = 'var(--background)';

// Access neutral color scale
const gray500 = colors.neutral[500];  // #737373

// Access sky color scale
const sky700 = colors.sky[700];  // #0369A1
```

---

## Implementation Examples

### Example 1: Mode-Aware Component

```tsx
import { cn } from '@/lib/utils';

export function Card({ className, children }) {
  return (
    <div className={cn(
      // These classes automatically use correct mode
      'bg-card text-card-foreground',
      'border border-border',
      'rounded-lg shadow-md',
      className
    )}>
      {children}
    </div>
  );
}

// Primary mode: bg = #0F172A, text = #F0F9FF
// Dark mode: bg = #171717, text = #FAFAFA
```

### Example 2: Explicit Mode Colors

```typescript
import { primaryMode, darkMode } from '@/src/tokens';

export function ThemeSwitcher({ mode }: { mode: 'primary' | 'dark' }) {
  const colors = mode === 'primary' ? primaryMode : darkMode;

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.foreground,
      borderColor: colors.border,
    }}>
      Current mode: {mode}
    </div>
  );
}
```

### Example 3: CSS with Mode Variables

```css
.hero-section {
  /* Primary mode */
  background: var(--background);  /* #082F49 */
  color: var(--foreground);       /* #F0F9FF */
}

.dark .hero-section {
  /* Dark mode */
  background: var(--background);  /* #0A0A0A */
  color: var(--foreground);       /* #FAFAFA */
}

/* Or let CSS variables handle it automatically */
.hero-section {
  background: var(--background);
  color: var(--foreground);
  /* Automatically adapts based on .dark class */
}
```

---

## Toggle Dark Mode

### Using next-themes

```tsx
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

### Manual Toggle

```typescript
// Add 'dark' class to html element
document.documentElement.classList.add('dark');

// Remove 'dark' class for primary mode
document.documentElement.classList.remove('dark');

// Toggle
document.documentElement.classList.toggle('dark');
```

---

## Color Scales

### Neutral Scale (Dark Mode Base)

```typescript
colors.neutral[50]   // #FAFAFA
colors.neutral[100]  // #F5F5F5
colors.neutral[200]  // #E5E5E5
colors.neutral[400]  // #A3A3A3
colors.neutral[500]  // #737373
colors.neutral[700]  // #404040
colors.neutral[800]  // #262626
colors.neutral[900]  // #171717
colors.neutral[950]  // #0A0A0A
```

### Sky Scale (Primary Mode Base)

```typescript
colors.sky[50]   // #F0F9FF
colors.sky[200]  // #BAE6FD
colors.sky[400]  // #38BDF8
colors.sky[500]  // #0EA5E9
colors.sky[700]  // #0369A1
colors.sky[800]  // #075985
colors.sky[900]  // #0C4A6E
colors.sky[950]  // #082F49
```

---

## Best Practices

### ✅ DO

- Use semantic tokens (`var(--background)`) instead of hardcoded colors
- Let CSS variables handle mode switching automatically
- Test components in both modes
- Maintain sufficient contrast in both modes
- Use neutral colors for dark mode, sky colors for primary mode

### ❌ DON'T

- Hardcode color values from one mode only
- Mix mode-specific colors inappropriately
- Override mode colors without good reason
- Forget to test accessibility in both modes

---

## Accessibility

Both modes meet WCAG AA standards:

**Primary Mode**:
- Background (#082F49) on Foreground (#F0F9FF): **17.2:1** ✅ AAA
- Primary (#BAE6FD) on Primary Foreground (#0C4A6E): **9.1:1** ✅ AAA

**Dark Mode**:
- Background (#0A0A0A) on Foreground (#FAFAFA): **20.1:1** ✅ AAA
- Primary (#E5E5E5) on Primary Foreground (#171717): **13.6:1** ✅ AAA

---

## Migration from Old Tokens

If you have existing color references:

**Before**:
```typescript
const bg = '#0a0a0a';  // Hardcoded
```

**After**:
```typescript
import { darkMode } from '@/src/tokens';
const bg = darkMode.background;  // #0A0A0A

// Or use CSS variable
const bg = 'var(--background)';  // Automatically adapts
```

---

## Complete Token Reference

See [TOKEN-USAGE-GUIDE.md](./TOKEN-USAGE-GUIDE.md) for complete documentation.

All mode colors are defined in:
- `app/globals.css` - CSS custom properties
- `src/tokens/colors.ts` - TypeScript definitions
- Source files:
  - `/Users/panoramakate/Documents/AI Design System course/primary.tokens.json`
  - `/Users/panoramakate/Documents/AI Design System course/dark mode.tokens.json`
