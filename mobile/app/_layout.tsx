import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  const theme = useColorScheme() ?? "light";
  const isDark = theme === "dark";

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark
              ? Colors.dark.background
              : Colors.light.tint,
          },
          headerTintColor: isDark ? Colors.dark.text : "#ffffff",
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 18,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: isDark
              ? Colors.dark.background
              : Colors.light.background,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "VSM" }} />
      </Stack>
    </>
  );
}
