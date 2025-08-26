import { Tabs } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";

export default function TabsLayout() {
  const { isDark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDark ? Colors.primary[100] : "#ffffff",
        tabBarInactiveTintColor: isDark
          ? Colors.neutral[400]
          : Colors.primary[100],
        tabBarStyle: {
          backgroundColor: isDark ? Colors.neutral[800] : Colors.primary[600],
          borderTopWidth: 0,
          height: 72, // Chiều cao của tab bar
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 0, // Khoảng cách từ tab bar đến màn hình
          borderRadius: 24,
          paddingBottom: 8,
          paddingTop: 8,
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
          elevation: 12,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 6,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activitys" // Tên của tab bar
        options={{
          title: "Sự kiện",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"} // Tên icon của tab bar
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          title: "Bắt đầu",
          tabBarButton: ({
            onPress,
            onLongPress,
            accessibilityRole,
            accessibilityState,
            accessibilityLabel,
            testID,
            style,
          }) => (
            <Pressable
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole={accessibilityRole}
              accessibilityState={accessibilityState}
              accessibilityLabel={accessibilityLabel}
              testID={testID}
              style={[
                style,
                {
                  top: -28,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <View
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 34,
                  backgroundColor: isDark ? Colors.primary[500] : "#ff3b30",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.25,
                  shadowRadius: 8,
                  shadowOffset: { width: 0, height: 3 },
                  elevation: 8,
                }}
              >
                <Ionicons name="stopwatch" size={30} color="#fff" />
                <Text style={{ color: "#fff", fontSize: 10, marginTop: 2 }}>
                  Bắt đầu
                </Text>
              </View>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Thử thách",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "trophy" : "trophy-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Cá nhân",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
