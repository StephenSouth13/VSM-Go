import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";
import { activities as activitiesData } from "@/data/activities";
import { Activity, ActivityStatus } from "@/types/types";
import { ActivityCard } from "@/components/ActivityCard";
import { HomeHeader } from "@/components/home";

const STATUS_FILTERS: Array<{ key: "all" | ActivityStatus; label: string }> = [
  { key: "all", label: "Tất cả" },
  { key: "upcoming", label: "Sắp diễn ra" },
  { key: "ongoing", label: "Đang diễn ra" },
  { key: "past", label: "Đã kết thúc" },
];

export default function ActivitysScreen() {
  const { isDark } = useTheme();
  const activities: Activity[] = activitiesData;

  return (
    <View
      className="flex-1"
      style={{ backgroundColor: isDark ? "#0a0a0a" : "#f7f7f8" }}
    >
      {/* Header */}
      <HomeHeader />

      <View className="px-5 pt-5 pb-3">
        <Text
          className={`text-2xl font-bold ${isDark ? "text-neutral-100" : "text-neutral-900"}`}
        >
          Sự kiện & Thử thách
        </Text>
        <Text
          className={`${isDark ? "text-neutral-400" : "text-neutral-600"} mt-1`}
        >
          Khám phá các hoạt động đang diễn ra xung quanh bạn
        </Text>
      </View>

      {/* Filters (UI only for now) */}
      <View className="px-5 mb-3 flex-row">
        {STATUS_FILTERS.map((item, idx) => {
          const selected = item.key === "all"; // default selected for UI
          return (
            <View
              key={item.key}
              className={`px-4 py-2 mr-2 rounded-full ${
                selected
                  ? "bg-gradient-to-r from-primary-600 to-secondary-600"
                  : isDark
                    ? "bg-neutral-800 border border-neutral-700"
                    : "bg-white border border-neutral-200"
              }`}
            >
              <Text
                className={`text-xs font-semibold ${
                  selected
                    ? "text-white"
                    : isDark
                      ? "text-neutral-200"
                      : "text-neutral-700"
                }`}
              >
                {item.label}
              </Text>
            </View>
          );
        })}
      </View>

      {/* List */}
      <FlatList
        data={activities}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingHorizontal: 58, // Khoảng cách từ trái đến phải của list
          paddingBottom: 24, // Khoảng cách từ cuối đến cuối của list
          paddingTop: 4, // Khoảng cách từ đầu đến đầu của list
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => (
          <ActivityCard
            activity={item}
            featured={false}
            onPress={() => {
              console.log("Open activity", item.id);
            }}
          />
        )}
        ListEmptyComponent={() => (
          <View className="px-5 py-10 items-center">
            <Text
              className={`${isDark ? "text-neutral-400" : "text-neutral-600"}`}
            >
              Không có hoạt động nào
            </Text>
          </View>
        )}
      />
    </View>
  );
}
