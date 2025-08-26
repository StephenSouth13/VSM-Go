import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";

export interface QuickStat {
  label: string;
  value: string;
  unit: string;
  icon: string;
  colors: [string, string];
  bgColor: string;
}

interface QuickStatsProps {
  quickStats: QuickStat[];
}

export const QuickStats: React.FC<QuickStatsProps> = ({ quickStats }) => {
  const { isDark } = useTheme();

  return (
    <View className="mx-5 mb-6">
      <View
        className={`${isDark ? "bg-neutral-800" : "bg-white"} rounded-vsm p-6 shadow-vsm border ${isDark ? "border-neutral-700" : "border-neutral-100"}`}
      >
        <Text
          className={`text-xl font-bold mb-4 ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
        >
          📊 Thống kê tháng này
        </Text>
        <View className="flex-row justify-between">
          {quickStats.map((stat, index) => (
            <LinearGradient
              key={index}
              colors={stat.colors}
              className="flex-1 items-center mx-2 rounded-xl p-4"
            >
              <View
                className={`w-12 h-12 ${stat.bgColor} rounded-xl items-center justify-center mb-3`}
              >
                <Ionicons name={stat.icon as any} size={24} color="#ffffff" />
              </View>
              <Text className="text-xl font-bold text-white">{stat.value}</Text>
              <Text className="text-sm text-white/80 mt-1">{stat.label}</Text>
              <Text className="text-xs text-white/60">{stat.unit}</Text>
            </LinearGradient>
          ))}
        </View>
      </View>
    </View>
  );
};
