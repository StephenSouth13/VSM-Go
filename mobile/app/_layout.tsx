import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";

function RootLayoutContent() {
  const { isDark } = useTheme();

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      {/* Hiển thị thanh trạng thái */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark ? Colors.neutral[800] : Colors.primary[600],
          },
          headerTintColor: isDark ? Colors.neutral[100] : "#ffffff",
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 18,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: isDark ? Colors.neutral[900] : Colors.neutral[50],
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* headerShown: false: ẩn header dùng để chuyển sang tabs */}
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}
