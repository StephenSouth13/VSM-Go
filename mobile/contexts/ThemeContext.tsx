import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  colors: typeof Colors;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeMode>("system");

  // Determine if we should use dark mode
  const isDark =
    theme === "system" ? systemColorScheme === "dark" : theme === "dark";

  // Update theme when system color scheme changes
  useEffect(() => {
    if (theme === "system") {
      // Theme will automatically update when systemColorScheme changes
    }
  }, [theme, systemColorScheme]);

  const toggleTheme = () => {
    setTheme((current) => {
      if (current === "light") return "dark";
      if (current === "dark") return "system";
      return "light";
    });
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    colors: Colors,
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Hook for getting theme-aware colors
export const useThemeColors = () => {
  const { colors, isDark } = useTheme();

  return {
    ...colors,
    // Override colors based on theme if needed
    background: isDark ? "#111827" : colors.semantic.background,
    surface: isDark ? "#1f2937" : colors.semantic.surface,
    text: {
      primary: isDark ? "#f9fafb" : colors.semantic.text.primary,
      secondary: isDark ? "#d1d5db" : colors.semantic.text.secondary,
      tertiary: isDark ? "#9ca3af" : colors.semantic.text.tertiary,
      disabled: isDark ? "#6b7280" : colors.semantic.text.disabled,
    },
    border: {
      light: isDark ? "#374151" : colors.semantic.border.light,
      medium: isDark ? "#4b5563" : colors.semantic.border.medium,
      dark: isDark ? "#6b7280" : colors.semantic.border.dark,
    },
  };
};
