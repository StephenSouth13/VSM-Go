import React from "react";
import { ScrollView, View, Text, Pressable, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/contexts/ThemeContext";

interface OverviewStat {
  label: string;
  value: string;
  unit: string;
  icon: keyof typeof Ionicons.glyphMap;
  gradient: [string, string];
}

interface QuickStat {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

interface MenuOption {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  color?: string;
}

export default function ProfileScreen() {
  const { isDark } = useTheme();

  // Mock user data
  const user = {
    name: "Nguyễn Tuấn Dũng",
    username: "@tuandung_runner",
    avatar: null,
    level: "Á quân",
    levelBadge: "🏆",
  };

  const overviewStats: OverviewStat[] = [
    {
      label: "Tổng km",
      value: "1,248",
      unit: "km",
      icon: "map-outline",
      gradient: ["#3b82f6", "#1d4ed8"],
    },
    {
      label: "Tổng thời gian",
      value: "89h 32m",
      unit: "",
      icon: "time-outline",
      gradient: ["#10b981", "#059669"],
    },
    {
      label: "Số buổi chạy",
      value: "156",
      unit: "buổi",
      icon: "calendar-outline",
      gradient: ["#8b5cf6", "#7c3aed"],
    },
  ];

  const quickStats: QuickStat[] = [
    {
      label: "Pace TB",
      value: "5:28",
      icon: "speedometer-outline",
      color: "#3b82f6",
    },
    {
      label: "Calories",
      value: "89,240",
      icon: "flame-outline",
      color: "#f97316",
    },
    {
      label: "Thành tích gần nhất",
      value: "10km PB",
      icon: "trophy-outline",
      color: "#eab308",
    },
  ];

  const menuOptions: MenuOption[] = [
    {
      label: "Chỉnh sửa hồ sơ",
      icon: "person-outline",
      onPress: () => console.log("Edit profile"),
    },
    {
      label: "Lịch sử chạy bộ",
      icon: "list-outline",
      onPress: () => console.log("Running history"),
    },
    {
      label: "Thành tích & huy chương",
      icon: "medal-outline",
      onPress: () => console.log("Achievements"),
    },
    {
      label: "Cài đặt",
      icon: "settings-outline",
      onPress: () => console.log("Settings"),
    },
  ];

  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc chắn muốn đăng xuất không?", [
      {
        text: "Hủy",
        style: "cancel",
      },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: () => console.log("Logout confirmed"),
      },
    ]);
  };

  return (
    <ScrollView
      className={`flex-1 ${isDark ? "bg-neutral-900" : "bg-neutral-50"}`}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section */}
      <LinearGradient colors={["#1e3a8a", "#3b82f6"]} className="px-6 pt-16">
        <View className="items-center">
          {/* Avatar */}
          <View className="relative mb-4">
            {user.avatar ? (
              <Image
                source={{ uri: user.avatar }}
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <View className="w-24 h-24 rounded-full bg-white/20 items-center justify-center">
                <Ionicons name="person" size={48} color="white" />
              </View>
            )}
            {/* Level Badge */}
            <View className="absolute -bottom-2 -right-2 bg-warning-500 rounded-full px-3 py-1 flex-row items-center">
              <Text className="text-xs font-bold text-white mr-1">
                {user.levelBadge}
              </Text>
              <Text className="text-xs font-bold text-white">{user.level}</Text>
            </View>
          </View>

          {/* User Info */}
          <Text className="text-2xl font-bold text-white mb-1">
            {user.name}
          </Text>
          <Text className="text-lg text-white/80 mb-4">{user.username}</Text>
        </View>
      </LinearGradient>

      {/* Overview Stats */}
      <View className="px-6 -mt-4">
        <View
          className={`${
            isDark ? "bg-neutral-800" : "bg-white"
          } rounded-2xl p-6 shadow-lg mb-6`}
        >
          <Text
            className={`text-lg font-bold mb-4 ${
              isDark ? "text-white" : "text-neutral-800"
            }`}
          >
            📈 Thông tin tổng quan
          </Text>
          <View className="flex-row justify-between">
            {overviewStats.map((stat, index) => (
              <View key={index} className="flex-1 items-center">
                <LinearGradient
                  colors={stat.gradient}
                  className="w-16 h-16 rounded-full items-center justify-center mb-3"
                >
                  <Ionicons name={stat.icon} size={28} color="white" />
                </LinearGradient>
                <Text
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-neutral-800"
                  }`}
                >
                  {stat.value}
                </Text>
                <Text
                  className={`text-sm ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {stat.label}
                </Text>
                {stat.unit && (
                  <Text
                    className={`text-xs ${
                      isDark ? "text-neutral-500" : "text-neutral-500"
                    }`}
                  >
                    {stat.unit}
                  </Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Quick Stats Bar */}
      <View className="px-6 mb-6">
        <Text
          className={`text-lg font-bold mb-3 ${
            isDark ? "text-white" : "text-neutral-800"
          }`}
        >
          ⚡ Thống kê nhanh
        </Text>
        {quickStats.map((stat, index) => (
          <View
            key={index}
            className={`${
              isDark ? "bg-neutral-800" : "bg-white"
            } rounded-xl p-4 mb-3 flex-row items-center shadow-md`}
          >
            <View
              className="w-12 h-12 rounded-full items-center justify-center mr-4"
              style={{ backgroundColor: stat.color + "20" }}
            >
              <Ionicons name={stat.icon} size={24} color={stat.color} />
            </View>
            <View className="flex-1">
              <Text
                className={`text-base font-semibold ${
                  isDark ? "text-white" : "text-neutral-800"
                }`}
              >
                {stat.value}
              </Text>
              <Text
                className={`text-sm ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {stat.label}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDark ? "#9ca3af" : "#6b7280"}
            />
          </View>
        ))}
      </View>

      {/* Personal Features Menu */}
      <View className="px-6 mb-6">
        <Text
          className={`text-lg font-bold mb-3 ${
            isDark ? "text-white" : "text-neutral-800"
          }`}
        >
          🛠️ Tính năng cá nhân
        </Text>
        <View
          className={`${
            isDark ? "bg-neutral-800" : "bg-white"
          } rounded-2xl shadow-md overflow-hidden`}
        >
          {menuOptions.map((option, index) => (
            <Pressable
              key={index}
              onPress={option.onPress}
              className={`p-4 flex-row items-center ${
                index !== menuOptions.length - 1
                  ? isDark
                    ? "border-b border-neutral-700"
                    : "border-b border-neutral-100"
                  : ""
              } active:opacity-70`}
            >
              <View className="w-10 h-10 rounded-full bg-primary-100 items-center justify-center mr-4">
                <Ionicons
                  name={option.icon}
                  size={20}
                  color={option.color || "#3b82f6"}
                />
              </View>
              <Text
                className={`flex-1 text-base font-medium ${
                  isDark ? "text-white" : "text-neutral-800"
                }`}
              >
                {option.label}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={isDark ? "#9ca3af" : "#6b7280"}
              />
            </Pressable>
          ))}
        </View>
      </View>

      {/* Logout Button */}
      <View className="px-6 pb-8">
        <Pressable
          onPress={handleLogout}
          className="bg-error-500 rounded-2xl p-4 flex-row items-center justify-center active:opacity-90"
        >
          <Ionicons name="log-out-outline" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">
            Đăng xuất
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
