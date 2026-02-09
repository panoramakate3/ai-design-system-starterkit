/**
 * Spacing Design Tokens
 * Extracted from Figma layout spacing, padding, and gaps
 *
 * 45 unique spacing values extracted from 21,000+ uses
 *
 * @see docs/tokens/TOKEN-USAGE-GUIDE.md
 */

export const spacing = {
  // Most frequently used spacing values (based on usage count)
  0: '0px',
  px: '1px',
  0.5: '2px',       // 301 uses - 0.125rem
  1: '4px',         // 1,094 uses - 0.25rem
  1.5: '6px',       // 1,085 uses - 0.375rem
  2: '8px',         // 6,540 uses - 0.5rem (most used)
  2.5: '10px',      // 6,885 uses - 0.625rem (second most used)
  3: '12px',        // 1,781 uses - 0.75rem
  3.5: '14px',      // 50 uses - 0.875rem
  4: '16px',        // 1,222 uses - 1rem
  5: '20px',        // 383 uses - 1.25rem
  6: '24px',        // 1,221 uses - 1.5rem
  7: '28px',        // 33 uses - 1.75rem
  8: '32px',        // 214 uses - 2rem
  9: '36px',        // 7 uses - 2.25rem
  10: '40px',       // 328 uses - 2.5rem
  11: '46px',       // 4 uses - 2.875rem
  12: '48px',       // 45 uses - 3rem
  14: '56px',       // 322 uses - 3.5rem
  16: '64px',       // 2 uses - 4rem
  20: '80px',       // 4 uses - 5rem
  24: '96px',       // 10 uses - 6rem
  28: '112px',      // 5 uses - 7rem
  32: '136px',      // 3 uses - 8.5rem
  40: '176px',      // 2 uses - 11rem
  48: '224px',      // 2 uses - 14rem
  56: '252px',      // 1 use - 15.75rem
  64: '344px',      // 1 use - 21.5rem
} as const;

/**
 * Semantic spacing tokens
 * Use these for consistent component spacing
 */
export const componentSpacing = {
  // Button padding
  buttonPaddingX: spacing[4],  // 16px
  buttonPaddingY: spacing[2],  // 8px
  buttonPaddingSmX: spacing[3], // 12px
  buttonPaddingSmY: spacing[1.5], // 6px
  buttonPaddingLgX: spacing[6], // 24px
  buttonPaddingLgY: spacing[2.5], // 10px

  // Input padding
  inputPaddingX: spacing[3],   // 12px
  inputPaddingY: spacing[2],   // 8px

  // Card padding
  cardPadding: spacing[6],     // 24px
  cardPaddingSm: spacing[4],   // 16px
  cardPaddingLg: spacing[8],   // 32px

  // Gap/spacing between elements
  gapXs: spacing[1],           // 4px
  gapSm: spacing[2],           // 8px
  gap: spacing[4],             // 16px
  gapMd: spacing[6],           // 24px
  gapLg: spacing[8],           // 32px
  gapXl: spacing[10],          // 40px

  // Layout spacing
  sectionSpacing: spacing[14], // 56px
  containerPadding: spacing[6], // 24px
} as const;

export type Spacing = typeof spacing;
export type ComponentSpacing = typeof componentSpacing;
