# Component-Token Reference Guide

This guide shows which design tokens apply to which shadcn/ui components.

## Button Component

### Tokens Used

**Colors:**
```typescript
colors.primary.DEFAULT          // Default button background
colors.primary.foreground       // Button text
colors.secondary.DEFAULT        // Secondary variant
colors.destructive.DEFAULT      // Destructive variant
```

**Spacing:**
```typescript
componentSpacing.buttonPaddingX // 16px horizontal padding
componentSpacing.buttonPaddingY // 8px vertical padding
componentSpacing.buttonPaddingSmX // 12px for small variant
componentSpacing.buttonPaddingLgX // 24px for large variant
```

**Effects:**
```typescript
componentShadows.focus          // Focus state shadow
shadows.sm                      // Default shadow
```

### CSS Variables
```css
--button-padding-x: var(--spacing-4);
--button-padding-y: var(--spacing-2);
```

---

## Card Component

### Tokens Used

**Spacing:**
```typescript
componentSpacing.cardPadding    // 24px default padding
componentSpacing.cardPaddingSm  // 16px small padding
componentSpacing.cardPaddingLg  // 32px large padding
```

**Effects:**
```typescript
componentShadows.card           // Default card shadow
componentShadows.cardHover      // Hover state shadow
borderRadius.lg                 // Card corners
```

### CSS Variables
```css
--card-padding: var(--spacing-6);
```

---

## Input Component

### Tokens Used

**Spacing:**
```typescript
componentSpacing.inputPaddingX  // 12px horizontal padding
componentSpacing.inputPaddingY  // 8px vertical padding
```

**Effects:**
```typescript
componentShadows.focus          // Focus ring
borderRadius.md                 // Input corners
```

**Typography:**
```typescript
fontSize.base                   // 16px input text
```

### CSS Variables
```css
--input-padding-x: var(--spacing-3);
--input-padding-y: var(--spacing-2);
```

---

## Dialog/Modal Component

### Tokens Used

**Effects:**
```typescript
componentShadows.modal          // Modal shadow
backdropBlur.lg                 // Backdrop blur
```

**Spacing:**
```typescript
spacing[6]                      // Modal padding (24px)
spacing[4]                      // Content spacing (16px)
```

---

## Dropdown Menu / Popover

### Tokens Used

**Effects:**
```typescript
componentShadows.dropdown       // Dropdown shadow
backdropBlur.base               // Subtle backdrop blur
borderRadius.md                 // Menu corners
```

**Spacing:**
```typescript
spacing[1]                      // Item spacing (4px)
spacing[2]                      // Padding (8px)
```

---

## Typography Components (Headings, Paragraphs)

### Tokens Used

**Typography Scale:**

```typescript
// Headings
typography['4xl']  // h1: 36px, line-height 40px, font-weight 700
typography['3xl']  // h2: 30px, line-height 36px, font-weight 600
typography['2xl']  // h3: 24px, line-height 32px, font-weight 600
typography.xl      // h4: 20px, line-height 28px, font-weight 500
typography.lg      // h5: 18px, line-height 28px, font-weight 500
typography.base    // h6: 16px, line-height 24px, font-weight 500

// Body text
typography.base    // p: 16px, line-height 24px
typography.sm      // small: 14px, line-height 20px
typography.xs      // caption: 12px, line-height 16px
```

**Font Weights:**
```typescript
fontWeight.bold      // 700 for h1
fontWeight.semibold  // 600 for h2-h3
fontWeight.medium    // 500 for h4-h6
fontWeight.regular   // 400 for body text
```

### CSS Variables
```css
h1 { font-size: var(--text-4xl); font-weight: var(--font-bold); }
h2 { font-size: var(--text-3xl); font-weight: var(--font-semibold); }
p { font-size: var(--text-base); line-height: var(--leading-base); }
```

---

## Badge Component

### Tokens Used

**Spacing:**
```typescript
spacing[0.5]  // 2px padding vertical
spacing[2]    // 8px padding horizontal
```

**Typography:**
```typescript
fontSize.xs   // 12px badge text
fontWeight.medium  // 500
```

**Effects:**
```typescript
borderRadius.md  // Rounded corners
```

---

## Table Component

### Tokens Used

**Spacing:**
```typescript
spacing[2]  // 8px cell padding vertical
spacing[4]  // 16px cell padding horizontal
spacing[1]  // 4px border width
```

**Colors:**
```typescript
colors.border.light  // Table borders
colors.muted.DEFAULT // Header background
```

---

## Tabs Component

### Tokens Used

**Spacing:**
```typescript
spacing[3]  // 12px tab padding horizontal
spacing[2]  // 8px tab padding vertical
spacing[4]  // 16px content padding
```

**Effects:**
```typescript
borderRadius.md  // Tab corners
```

---

## Tooltip Component

### Tokens Used

**Effects:**
```typescript
componentShadows.tooltip  // Tooltip shadow
backdropBlur.sm          // Subtle blur
```

**Spacing:**
```typescript
spacing[2]  // 8px padding vertical
spacing[3]  // 12px padding horizontal
```

**Typography:**
```typescript
fontSize.sm  // 14px tooltip text
```

---

## Form Components (Checkbox, Radio, Switch)

### Tokens Used

**Spacing:**
```typescript
spacing[2]   // 8px gap between label and input
spacing[5]   // 20px size for checkbox/radio
```

**Effects:**
```typescript
componentShadows.focus  // Focus ring
borderRadius.sm        // Checkbox corners
```

**Colors:**
```typescript
colors.primary.DEFAULT  // Checked state
```

---

## Separator Component

### Tokens Used

**Spacing:**
```typescript
spacing[6]  // 24px margin vertical
spacing[8]  // 32px margin horizontal (for vertical separators)
```

**Colors:**
```typescript
colors.border.light  // Separator color
```

---

## Skeleton Component

### Tokens Used

**Colors:**
```typescript
colors.muted.DEFAULT  // Skeleton background
```

**Effects:**
```typescript
borderRadius.md  // Skeleton corners
```

**Animation:**
```typescript
transitionDuration.slow  // 300ms pulse animation
```

---

## Scroll Area Component

### Tokens Used

**Spacing:**
```typescript
spacing[4]  // 16px scrollbar width
spacing[2]  // 8px thumb padding
```

**Effects:**
```typescript
borderRadius.full  // Scrollbar thumb corners
```

---

## Quick Reference Table

| Component | Primary Tokens | CSS Variables |
|-----------|---------------|---------------|
| Button | `buttonPaddingX/Y`, `colors.primary`, `shadows.sm` | `--button-padding-x/y` |
| Card | `cardPadding`, `componentShadows.card` | `--card-padding` |
| Input | `inputPaddingX/Y`, `componentShadows.focus` | `--input-padding-x/y` |
| Modal | `componentShadows.modal`, `backdropBlur.lg` | `--shadow-xl` |
| Dropdown | `componentShadows.dropdown`, `spacing[2]` | `--shadow-lg` |
| Typography | `typography.*`, `fontSize.*`, `fontWeight.*` | `--text-*`, `--font-*` |
| Table | `spacing[2/4]`, `colors.border.light` | `--spacing-2/4` |
| Tooltip | `componentShadows.tooltip`, `fontSize.sm` | `--shadow-sm` |

---

## Usage Pattern

For any shadcn/ui component, follow this pattern:

1. Identify the component category (button, card, input, etc.)
2. Find relevant tokens from the reference above
3. Apply tokens using TypeScript imports OR CSS variables
4. Never modify component HTML structure - only extend via CSS

### Example: Customizing a Button

```tsx
import { Button } from '@/components/ui/button';
import { componentSpacing, componentShadows } from '@/src/tokens';

// Option 1: Inline styles with tokens
<Button style={{
  padding: `${componentSpacing.buttonPaddingY} ${componentSpacing.buttonPaddingX}`,
  boxShadow: componentShadows.focus
}}>
  Click me
</Button>

// Option 2: CSS with variables
<Button className="custom-button">Click me</Button>

// custom-button.css
.custom-button {
  padding: var(--button-padding-y) var(--button-padding-x);
  box-shadow: var(--shadow-focus);
}
```

---

## Maintaining Shadcn/ui Compatibility

✅ **DO:**
- Use `:where()` selector for low-specificity overrides
- Extend via CSS custom properties
- Preserve all component states (hover, active, disabled, focus)
- Keep Radix UI primitives untouched

❌ **DON'T:**
- Modify component JSX/TSX files
- Override with `!important`
- Remove component states
- Change component structure
