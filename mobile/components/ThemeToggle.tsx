import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import Colors from "../constants/Colors";

interface ThemeToggleProps {
  size?: "small" | "medium" | "large";
  variant?: "icon" | "button" | "full";
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = "medium",
  variant = "icon",
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  const getIconName = () => {
    switch (theme) {
      case "light":
        return "sunny";
      case "dark":
        return "moon";
      case "system":
        return "contrast";
      default:
        return "contrast";
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Sáng";
      case "dark":
        return "Tối";
      case "system":
        return "Tự động";
      default:
        return "Tự động";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return { width: 32, height: 32, iconSize: 16 };
      case "large":
        return { width: 48, height: 48, iconSize: 24 };
      default:
        return { width: 40, height: 40, iconSize: 20 };
    }
  };

  const { width, height, iconSize } = getSizeStyles();

  if (variant === "icon") {
    return (
      <TouchableOpacity
        onPress={toggleTheme}
        style={[
          styles.iconButton,
          { width, height },
          {
            backgroundColor: isDark ? Colors.neutral[700] : Colors.neutral[100],
          },
        ]}
      >
        <Ionicons
          name={getIconName()}
          size={iconSize}
          color={isDark ? Colors.neutral[300] : Colors.neutral[600]}
        />
      </TouchableOpacity>
    );
  }

  if (variant === "button") {
    return (
      <TouchableOpacity
        onPress={toggleTheme}
        style={[
          styles.button,
          {
            backgroundColor: isDark ? Colors.neutral[700] : Colors.neutral[100],
          },
        ]}
      >
        <Ionicons
          name={getIconName()}
          size={iconSize}
          color={isDark ? Colors.neutral[300] : Colors.neutral[600]}
        />
        <Text
          style={[
            styles.buttonText,
            { color: isDark ? Colors.neutral[300] : Colors.neutral[600] },
          ]}
        >
          {getThemeLabel()}
        </Text>
      </TouchableOpacity>
    );
  }

  // Full variant
  return (
    <View
      style={[
        styles.fullContainer,
        { backgroundColor: isDark ? Colors.neutral[800] : Colors.neutral[50] },
      ]}
    >
      <Text
        style={[
          styles.fullTitle,
          { color: isDark ? Colors.neutral[200] : Colors.neutral[800] },
        ]}
      >
        Giao diện
      </Text>
      <View style={styles.themeOptions}>
        {(["light", "dark", "system"] as const).map((themeOption) => (
          <TouchableOpacity
            key={themeOption}
            onPress={() => toggleTheme()}
            style={[
              styles.themeOption,
              theme === themeOption && {
                backgroundColor: isDark
                  ? Colors.primary[600]
                  : Colors.primary[500],
              },
            ]}
          >
            <Ionicons
              name={
                themeOption === "light"
                  ? "sunny"
                  : themeOption === "dark"
                    ? "moon"
                    : "contrast"
              }
              size={20}
              color={
                theme === themeOption
                  ? "white"
                  : isDark
                    ? Colors.neutral[400]
                    : Colors.neutral[500]
              }
            />
            <Text
              style={[
                styles.themeOptionText,
                {
                  color:
                    theme === themeOption
                      ? "white"
                      : isDark
                        ? Colors.neutral[400]
                        : Colors.neutral[500],
                },
              ]}
            >
              {themeOption === "light"
                ? "Sáng"
                : themeOption === "dark"
                  ? "Tối"
                  : "Tự động"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  fullContainer: {
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  fullTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  themeOptions: {
    gap: 8,
  },
  themeOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  themeOptionText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default ThemeToggle;
