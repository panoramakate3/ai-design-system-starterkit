/**
 * Effects Design Tokens
 * Extracted from Figma EFFECT styles
 *
 * Includes box shadows and backdrop blur effects
 *
 * @see docs/tokens/TOKEN-USAGE-GUIDE.md
 */

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

export const backdropBlur = {
  none: 'none',
  sm: 'blur(4px)',
  base: 'blur(8px)',
  md: 'blur(12px)',
  lg: 'blur(16px)',
  xl: 'blur(24px)',
  '2xl': 'blur(40px)',
  '3xl': 'blur(64px)',
} as const;

/**
 * Component-specific shadows
 * Semantic shadow tokens for different UI states
 */
export const componentShadows = {
  card: shadows.sm,
  cardHover: shadows.md,
  dropdown: shadows.lg,
  modal: shadows.xl,
  popover: shadows.md,
  tooltip: shadows.sm,
  focus: '0 0 0 3px rgb(0 144 255 / 0.2)',  // Blue focus ring
  destructive: '0 0 0 3px rgb(239 68 68 / 0.2)',  // Red focus ring
} as const;

/**
 * Border radius tokens
 * Consistent border radius values across components
 */
export const borderRadius = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)',
  md: 'calc(var(--radius) - 2px)',
  base: 'var(--radius)',
  lg: 'var(--radius)',
  xl: 'calc(var(--radius) + 4px)',
  '2xl': 'calc(var(--radius) + 8px)',
  '3xl': 'calc(var(--radius) + 12px)',
  '4xl': 'calc(var(--radius) + 16px)',
  full: '9999px',
} as const;

/**
 * Transition timing functions
 */
export const transitionTiming = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

/**
 * Transition durations
 */
export const transitionDuration = {
  fast: '100ms',
  base: '150ms',
  medium: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

export type Shadows = typeof shadows;
export type BackdropBlur = typeof backdropBlur;
export type ComponentShadows = typeof componentShadows;
export type BorderRadius = typeof borderRadius;
