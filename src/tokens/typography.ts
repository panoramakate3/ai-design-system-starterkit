/**
 * Typography Design Tokens
 * Extracted from Figma TEXT styles
 *
 * Complete type scale from Text-xs (12px) to Text-9xl (128px)
 * with 9 weight variants (Thin 100 - Black 900) per size
 *
 * @see docs/tokens/TOKEN-USAGE-GUIDE.md
 */

export const fontFamily = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"Geist Mono", "SF Mono", Monaco, "Courier New", monospace',
} as const;

export const fontSize = {
  xs: '12px',       // Text-xs
  sm: '14px',       // Text-sm
  base: '16px',     // Text-base
  lg: '18px',       // Text-lg
  xl: '20px',       // Text-xl
  '2xl': '24px',    // Text-2xl
  '3xl': '30px',    // Text-3xl
  '4xl': '36px',    // Text-4xl
  '5xl': '48px',    // Text-5xl
  '6xl': '60px',    // Text-6xl
  '7xl': '72px',    // Text-7xl
  '8xl': '96px',    // Text-8xl
  '9xl': '128px',   // Text-9xl
} as const;

export const fontWeight = {
  thin: 100,        // Thin
  extralight: 200,  // Extra Light
  light: 300,       // Light
  regular: 400,     // Regular
  medium: 500,      // Medium
  semibold: 600,    // Semi Bold
  bold: 700,        // Bold
  extrabold: 800,   // Extra Bold
  black: 900,       // Black
} as const;

export const lineHeight = {
  xs: '16px',       // 1.33 ratio
  sm: '20px',       // 1.43 ratio
  base: '24px',     // 1.5 ratio
  lg: '28px',       // 1.56 ratio
  xl: '28px',       // 1.4 ratio
  '2xl': '32px',    // 1.33 ratio
  '3xl': '36px',    // 1.2 ratio
  '4xl': '40px',    // 1.11 ratio
  '5xl': '48px',    // 1 ratio
  '6xl': '60px',    // 1 ratio
  '7xl': '72px',    // 1 ratio
  '8xl': '96px',    // 1 ratio
  '9xl': '128px',   // 1 ratio
} as const;

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

/**
 * Complete typography scale with all weights
 * Use these tokens for consistent text styling across components
 */
export const typography = {
  xs: {
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    variants: {
      thin: { fontWeight: fontWeight.thin },
      extralight: { fontWeight: fontWeight.extralight },
      light: { fontWeight: fontWeight.light },
      regular: { fontWeight: fontWeight.regular },
      medium: { fontWeight: fontWeight.medium },
      semibold: { fontWeight: fontWeight.semibold },
      bold: { fontWeight: fontWeight.bold },
      extrabold: { fontWeight: fontWeight.extrabold },
      black: { fontWeight: fontWeight.black },
    },
  },
  sm: {
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    variants: {
      thin: { fontWeight: fontWeight.thin },
      extralight: { fontWeight: fontWeight.extralight },
      light: { fontWeight: fontWeight.light },
      regular: { fontWeight: fontWeight.regular },
      medium: { fontWeight: fontWeight.medium },
      semibold: { fontWeight: fontWeight.semibold },
      bold: { fontWeight: fontWeight.bold },
      extrabold: { fontWeight: fontWeight.extrabold },
      black: { fontWeight: fontWeight.black },
    },
  },
  base: {
    fontSize: fontSize.base,
    lineHeight: lineHeight.base,
    variants: {
      thin: { fontWeight: fontWeight.thin },
      extralight: { fontWeight: fontWeight.extralight },
      light: { fontWeight: fontWeight.light },
      regular: { fontWeight: fontWeight.regular },
      medium: { fontWeight: fontWeight.medium },
      semibold: { fontWeight: fontWeight.semibold },
      bold: { fontWeight: fontWeight.bold },
      extrabold: { fontWeight: fontWeight.extrabold },
      black: { fontWeight: fontWeight.black },
    },
  },
  lg: {
    fontSize: fontSize.lg,
    lineHeight: lineHeight.lg,
  },
  xl: {
    fontSize: fontSize.xl,
    lineHeight: lineHeight.xl,
  },
  '2xl': {
    fontSize: fontSize['2xl'],
    lineHeight: lineHeight['2xl'],
  },
  '3xl': {
    fontSize: fontSize['3xl'],
    lineHeight: lineHeight['3xl'],
  },
  '4xl': {
    fontSize: fontSize['4xl'],
    lineHeight: lineHeight['4xl'],
  },
  '5xl': {
    fontSize: fontSize['5xl'],
    lineHeight: lineHeight['5xl'],
  },
  '6xl': {
    fontSize: fontSize['6xl'],
    lineHeight: lineHeight['6xl'],
  },
  '7xl': {
    fontSize: fontSize['7xl'],
    lineHeight: lineHeight['7xl'],
  },
  '8xl': {
    fontSize: fontSize['8xl'],
    lineHeight: lineHeight['8xl'],
  },
  '9xl': {
    fontSize: fontSize['9xl'],
    lineHeight: lineHeight['9xl'],
  },
} as const;

export type Typography = typeof typography;
