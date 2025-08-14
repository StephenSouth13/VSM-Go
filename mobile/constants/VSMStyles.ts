export const VSMStyles = {
  colors: {
    // Main theme colors: White - Red - Blue
    primary: '#1E40AF',        // Rich blue
    secondary: '#DC2626',      // Vibrant red
    white: '#FFFFFF',          // Pure white
    
    // Variations
    primaryLight: '#3B82F6',   // Lighter blue
    primaryDark: '#1E3A8A',    // Darker blue
    secondaryLight: '#EF4444', // Lighter red
    secondaryDark: '#B91C1C',  // Darker red
    
    // Neutrals
    textDark: '#1F2937',       // Dark gray for text
    textMedium: '#4B5563',     // Medium gray
    textLight: '#6B7280',      // Light gray
    borderLight: '#E5E7EB',    // Very light gray for borders
    background: '#F9FAFB',     // Off-white background
    surface: '#FFFFFF',        // Card/surface background
    
    // Status colors
    success: '#10B981',        // Green for success
    warning: '#F59E0B',        // Orange for warning
    error: '#EF4444',          // Red for errors
    info: '#3B82F6',           // Blue for info
    
    // Special colors
    gold: '#F59E0B',           // Gold for premium/awards
    gradient: {
      primary: ['#1E40AF', '#3B82F6'],
      secondary: ['#DC2626', '#EF4444'],
      hero: ['rgba(30, 64, 175, 0.8)', 'rgba(220, 38, 38, 0.6)'],
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    default: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    round: 50,
  },
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  typography: {
    hero: {
      fontSize: 32,
      fontWeight: 'bold' as const,
      color: '#FFFFFF',
      lineHeight: 40,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold' as const,
      color: '#1F2937',
      lineHeight: 36,
    },
    heading: {
      fontSize: 20,
      fontWeight: '600' as const,
      color: '#1F2937',
      lineHeight: 28,
    },
    subheading: {
      fontSize: 18,
      fontWeight: '600' as const,
      color: '#4B5563',
      lineHeight: 26,
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal' as const,
      color: '#1F2937',
      lineHeight: 24,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: 'normal' as const,
      color: '#4B5563',
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      fontWeight: 'normal' as const,
      color: '#6B7280',
      lineHeight: 16,
    },
    button: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 24,
    },
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 8,
    },
  },
  animations: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
};

// Common button styles
export const ButtonStyles = {
  primary: {
    backgroundColor: VSMStyles.colors.primary,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md,
    paddingHorizontal: VSMStyles.spacing.lg,
    ...VSMStyles.shadows.medium,
  },
  secondary: {
    backgroundColor: VSMStyles.colors.secondary,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md,
    paddingHorizontal: VSMStyles.spacing.lg,
    ...VSMStyles.shadows.medium,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: VSMStyles.colors.primary,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md - 2,
    paddingHorizontal: VSMStyles.spacing.lg,
  },
  ghost: {
    backgroundColor: 'transparent',
    paddingVertical: VSMStyles.spacing.md,
    paddingHorizontal: VSMStyles.spacing.lg,
  },
};
