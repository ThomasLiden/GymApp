// ============================================================================
// THEME CONSTANTS
// ============================================================================
// Light, minimalist theme inspired by modern SaaS websites like Midday

export const COLORS = {
  // Primary Colors
  primary: '#000000', // Pure black for primary actions
  primaryLight: '#4A4A4A', // Dark gray for headings
  primaryDark: '#000000',
  
  // Secondary Colors
  secondary: '#1A2B2C', // Subtle dark green accent
  secondaryLight: '#2A3B3C',
  secondaryDark: '#0A1B1C',
  
  // Light Theme Colors
  background: '#FFFFFF', // Pure white
  surface: '#FFFFFF', // White for cards
  surfaceSecondary: '#F8F9FA', // Very light gray for secondary surfaces
  
  // Text Colors
  textPrimary: '#000000', // Pure black for main text
  textSecondary: '#4A4A4A', // Dark gray for headings
  textTertiary: '#888888', // Medium gray for secondary text
  
  // Border Colors
  border: '#E5E5E5', // Light gray borders
  borderSecondary: '#F0F0F0', // Very light gray borders
  
  // Status Colors
  success: '#10B981', // Subtle green
  warning: '#F59E0B', // Subtle orange
  error: '#EF4444', // Subtle red
  info: '#3B82F6', // Subtle blue
  
  // Shadow Colors
  shadow: 'rgba(0, 0, 0, 0.05)', // Very subtle shadows
  shadowPrimary: 'rgba(0, 0, 0, 0.1)', // Slightly stronger shadows
};

export const TYPOGRAPHY = {
  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 13,
    base: 15,
    lg: 17,
    xl: 18,
    '2xl': 20,
    '3xl': 22,
    '4xl': 24,
    '5xl': 28,
    '6xl': 32,
  },
  
  // Font Weights - Clean and modern
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
  
  // Letter Spacing - Clean and readable
  letterSpacing: {
    tight: -0.3,
    normal: 0,
    wide: 0.1,
  },
};

export const SPACING = {
  // Base spacing unit (4px)
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 28,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
};

export const BORDER_RADIUS = {
  sm: 6,
  base: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
};

export const SHADOWS = {
  sm: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  base: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  lg: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  xl: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
  primary: {
    shadowColor: COLORS.shadowPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
};

export const LAYOUT = {
  // Screen padding
  screenPadding: SPACING.xl,
  
  // Card padding
  cardPadding: SPACING.xl,
  
  // Button padding
  buttonPadding: SPACING.lg,
  
  // Section spacing
  sectionSpacing: SPACING['3xl'],
  
  // Component spacing
  componentSpacing: SPACING.lg,
};

// Common text styles - Clean and modern
export const TEXT_STYLES = {
  h1: {
    fontSize: TYPOGRAPHY.fontSize['6xl'],
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    color: COLORS.textSecondary,
    letterSpacing: TYPOGRAPHY.letterSpacing.tight,
  },
  h2: {
    fontSize: TYPOGRAPHY.fontSize['5xl'],
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    color: COLORS.textSecondary,
    letterSpacing: TYPOGRAPHY.letterSpacing.tight,
  },
  h3: {
    fontSize: TYPOGRAPHY.fontSize['4xl'],
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    color: COLORS.textSecondary,
    letterSpacing: TYPOGRAPHY.letterSpacing.tight,
  },
  h4: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    color: COLORS.textSecondary,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
  },
  h5: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    color: COLORS.textSecondary,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
  },
  body: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: TYPOGRAPHY.fontWeight.normal,
    color: COLORS.textPrimary,
    lineHeight: TYPOGRAPHY.lineHeight.relaxed,
  },
  bodyLarge: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: TYPOGRAPHY.fontWeight.normal,
    color: COLORS.textPrimary,
    lineHeight: TYPOGRAPHY.lineHeight.relaxed,
  },
  caption: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: TYPOGRAPHY.fontWeight.medium,
    color: COLORS.textTertiary,
  },
  button: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
  },
  // New clean text styles
  clean: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: TYPOGRAPHY.fontWeight.light,
    color: COLORS.textPrimary,
    letterSpacing: TYPOGRAPHY.letterSpacing.wide,
  },
  cleanBold: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    color: COLORS.textPrimary,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
  },
};

// Common button styles - Clean and minimal
export const BUTTON_STYLES = {
  primary: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.base,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    ...SHADOWS.primary,
  },
  secondary: {
    backgroundColor: COLORS.surfaceSecondary,
    borderRadius: BORDER_RADIUS.base,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.base,
  },
  success: {
    backgroundColor: COLORS.success,
    borderRadius: BORDER_RADIUS.base,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    ...SHADOWS.base,
  },
  accent: {
    backgroundColor: COLORS.secondary,
    borderRadius: BORDER_RADIUS.base,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    ...SHADOWS.base,
  },
};

// Common card styles - Clean and minimal
export const CARD_STYLES = {
  base: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.xl,
    ...SHADOWS.base,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  elevated: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING['2xl'],
    ...SHADOWS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  feature: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.base,
    padding: SPACING.lg,
    ...SHADOWS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  minimal: {
    backgroundColor: COLORS.surfaceSecondary,
    borderRadius: BORDER_RADIUS.base,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.borderSecondary,
  },
};
