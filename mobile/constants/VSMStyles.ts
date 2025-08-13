export const VSMStyles = {
  colors: {
    primary: '#0a7ea4',        // Energetic blue
    textDark: '#333333',       // Dark gray for text
    borderLight: '#DDDDDD',    // Light gray for borders
    white: '#FFFFFF',          // White
    error: '#FF4444',          // Red for destructive actions
    success: '#00C851',        // Green for success states
    background: '#F8F9FA',     // Light background
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    default: 8,
    large: 16,
  },
  fonts: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
  },
  typography: {
    title: {
      fontSize: 28,
      fontWeight: 'bold' as const,
      color: '#333333',
    },
    heading: {
      fontSize: 20,
      fontWeight: '600' as const,
      color: '#333333',
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal' as const,
      color: '#333333',
    },
    caption: {
      fontSize: 14,
      fontWeight: 'normal' as const,
      color: '#666666',
    },
    small: {
      fontSize: 12,
      fontWeight: 'normal' as const,
      color: '#666666',
    },
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
    },
  },
};
