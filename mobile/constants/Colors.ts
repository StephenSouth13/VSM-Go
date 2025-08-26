// VSM Mobile App Color Constants
// This file provides semantic color names and consistent color values

export const Colors = {
  // Primary Colors - Blue Theme
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e3a8a',
    900: '#1e3a8a',
  },

  // Secondary Colors - Indigo Theme
  secondary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },

  // Success Colors - Green Theme
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  // Warning Colors - Orange Theme
  warning: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },

  // Error Colors - Red Theme
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Neutral Colors - Gray Theme
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  // VSM Brand Colors
  vsm: {
    blue: '#1e3a8a',
    lightBlue: '#3b82f6',
    accent: '#f97316',
    success: '#10b981',
    purple: '#8b5cf6',
    emerald: '#10b981',
  },

  // Semantic Colors for Common Use Cases
  semantic: {
    background: '#f9fafb',        // neutral-50
    surface: '#ffffff',            // white
    text: {
      primary: '#111827',          // neutral-900
      secondary: '#374151',        // neutral-700
      tertiary: '#6b7280',        // neutral-500
      disabled: '#9ca3af',        // neutral-400
    },
    border: {
      light: '#f3f4f6',           // neutral-100
      medium: '#e5e7eb',          // neutral-200
      dark: '#d1d5db',            // neutral-300
    },
    status: {
      online: '#22c55e',          // success-500
      offline: '#6b7280',         // neutral-500
      busy: '#ef4444',            // error-500
      away: '#f97316',            // warning-500
    }
  },

  // Gradient Color Arrays for LinearGradient
  gradients: {
    primary: ['#1e3a8a', '#3b82f6'],
    secondary: ['#3b82f6', '#6366f1'],
    success: ['#10b981', '#059669'],
    warning: ['#f97316', '#ea580c'],
    error: ['#ef4444', '#dc2626'],
    purple: ['#8b5cf6', '#7c3aed'],
  },

  // Icon Colors
  icons: {
    primary: '#3b82f6',           // primary-500
    secondary: '#6366f1',         // secondary-500
    success: '#22c55e',           // success-500
    warning: '#f97316',           // warning-500
    error: '#ef4444',             // error-500
    neutral: '#6b7280',           // neutral-500
  }
};

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Export default colors object
export default Colors;