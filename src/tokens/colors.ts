/**
 * Color Design Tokens
 * Extracted from Figma design system with dual mode support
 *
 * @see docs/tokens/TOKEN-USAGE-GUIDE.md
 */

/**
 * Light Mode Colors
 * Extracted from light mode.tokens.json - True light theme with white background
 */
export const lightMode = {
  background: '#FFFFFF',  // white
  foreground: '#0A0A0A',  // neutral/950
  card: '#FFFFFF',  // white
  cardForeground: '#0A0A0A',  // neutral/950
  popover: '#FFFFFF',  // white
  popoverForeground: '#0A0A0A',  // neutral/950
  primary: '#171717',  // neutral/900
  primaryForeground: '#FAFAFA',  // neutral/50
  secondary: '#F5F5F5',  // neutral/100
  secondaryForeground: '#0A0A0A',  // neutral/950
  muted: '#F5F5F5',  // neutral/100
  mutedForeground: '#737373',  // neutral/500
  accent: '#F5F5F5',  // neutral/100
  accentForeground: '#171717',  // neutral/900
  destructive: '#DC2626',  // red/600
  border: '#E5E5E5',  // neutral/200
  input: '#E5E5E5',  // neutral/200
  ring: '#737373',  // neutral/500
} as const;

/**
 * Dark Mode Colors
 * Extracted from dark mode.tokens.json - Neutral/Gray theme
 */
export const darkMode = {
  background: '#0A0A0A',  // neutral/950
  foreground: '#FAFAFA',  // neutral/50
  card: '#171717',  // neutral/900
  cardForeground: '#FAFAFA',  // neutral/50
  popover: '#262626',  // neutral/800
  popoverForeground: '#FAFAFA',  // neutral/50
  primary: '#E5E5E5',  // neutral/200
  primaryForeground: '#171717',  // neutral/900
  secondary: '#262626',  // neutral/800
  secondaryForeground: '#FAFAFA',  // neutral/50
  muted: '#262626',  // neutral/800
  mutedForeground: '#A3A3A3',  // neutral/400
  accent: '#404040',  // neutral/700
  accentForeground: '#FAFAFA',  // neutral/50
  destructive: '#F87171',  // red/400
  border: '#404040',  // neutral/700
  input: '#171717',  // neutral/900
  ring: '#737373',  // neutral/500
} as const;

/**
 * Midnight Mode Colors
 * Extracted from midnight.tokens.json - Sky/Blue dark theme
 */
export const midnightMode = {
  background: '#082F49',  // sky/950
  foreground: '#F0F9FF',  // sky/50
  card: '#0F172A',  // slate/900
  cardForeground: '#F0F9FF',  // sky/50
  popover: '#075985',  // sky/800
  popoverForeground: '#F0F9FF',  // sky/50
  primary: '#BAE6FD',  // sky/200
  primaryForeground: '#0C4A6E',  // sky/900
  secondary: '#075985',  // sky/800
  secondaryForeground: '#F0F9FF',  // sky/50
  muted: '#075985',  // sky/800
  mutedForeground: '#38BDF8',  // sky/400
  accent: '#0369A1',  // sky/700
  accentForeground: '#F0F9FF',  // sky/50
  destructive: '#F87171',  // red/400
  border: '#0369A1',  // sky/700
  input: '#0C4A6E',  // sky/900
  ring: '#0EA5E9',  // sky/500
} as const;

/**
 * Unified color palette (for use in TypeScript/JavaScript)
 * Defaults to current mode via CSS variables
 */
export const colors = {
  // Mode-specific palettes
  modes: {
    light: lightMode,
    dark: darkMode,
    midnight: midnightMode,
  },

  // Chart colors (consistent across modes)
  chart: {
    1: '#5EB1EF',  // blue/8
    2: '#0090FF',  // blue/9
    3: '#0588F0',  // blue/10
    4: '#0D74CE',  // blue/11
    5: '#113264',  // blue/12
  },

  // Sidebar colors (consistent across modes)
  sidebar: {
    primary: '#0588F0',  // blue/10
    border: 'rgba(255, 255, 255, 0.8)',  // white/10
  },

  // Tailwind color scales
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },

  sky: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0EA5E9',
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E',
    950: '#082F49',
  },

  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },

  blue: {
    8: '#5EB1EF',
    9: '#0090FF',
    10: '#0588F0',
    11: '#0D74CE',
    12: '#113264',
  },

  red: {
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
  },

  // Semantic colors
  semantic: {
    background: '#272625',
    border: '#535151',
    foreground: '#FFFFFF',
  },
} as const;

export type Colors = typeof colors;
export type LightMode = typeof lightMode;
export type DarkMode = typeof darkMode;
export type MidnightMode = typeof midnightMode;

/**
 * CSS Variable Mapping
 * Maps design tokens to CSS custom properties for use in components
 */
export const colorVariables = {
  // Light mode
  '--background-light': lightMode.background,
  '--foreground-light': lightMode.foreground,
  '--primary-light': lightMode.primary,
  '--accent-light': lightMode.accent,
  '--border-light': lightMode.border,

  // Dark mode
  '--background-dark': darkMode.background,
  '--foreground-dark': darkMode.foreground,
  '--primary-dark': darkMode.primary,
  '--accent-dark': darkMode.accent,
  '--border-dark': darkMode.border,

  // Chart colors
  '--chart-1': colors.chart[1],
  '--chart-2': colors.chart[2],
  '--chart-3': colors.chart[3],
  '--chart-4': colors.chart[4],
  '--chart-5': colors.chart[5],
} as const;
