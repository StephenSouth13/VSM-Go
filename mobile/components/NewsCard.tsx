import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";
import { News } from "@/types/types";

interface NewsCardProps {
  news: News;
  onPress?: () => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news, onPress }) => {
  const { isDark } = useTheme();

  const formatDate = (date?: Date) => {
    if (!date) return "Chưa xuất bản";
    try {
      return new Date(date).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return "Chưa xuất bản";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${isDark ? "bg-neutral-800" : "bg-white"} rounded-vsm mr-4 w-80 shadow-vsm overflow-hidden border ${isDark ? "border-neutral-700" : "border-neutral-100"}`}
    >
      <View className="relative">
        {news.coverImageUrl ? (
          <Image
            source={{ uri: news.coverImageUrl }}
            className="w-full h-40"
            resizeMode="cover"
          />
        ) : (
          <View className="w-full h-40 bg-gradient-to-br from-primary-400 to-secondary-500 items-center justify-center">
            <Ionicons name="newspaper-outline" size={48} color="white" />
            <Text className="text-white text-sm mt-2 font-medium">Tin tức</Text>
          </View>
        )}
      </View>

      <View className="p-5">
        <Text
          className={`font-bold text-lg mb-2 ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
          numberOfLines={2}
        >
          {news.title}
        </Text>

        {news.summary && (
          <Text
            className={`text-sm mb-3 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
            numberOfLines={3}
          >
            {news.summary}
          </Text>
        )}

        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <Ionicons
              name="time-outline"
              size={16}
              color={Colors.neutral[500]}
            />
            <Text
              className={`text-xs ml-1 ${isDark ? "text-neutral-400" : "text-neutral-500"}`}
            >
              {formatDate(news.publishedAt)}
            </Text>
          </View>
          {typeof news.overview === "number" && (
            <View className="flex-row items-center">
              <Ionicons
                name="eye-outline"
                size={16}
                color={Colors.neutral[500]}
              />
              <Text
                className={`text-xs ml-1 ${isDark ? "text-neutral-400" : "text-neutral-500"}`}
              >
                {news.overview}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity className="bg-gradient-to-r from-primary-600 to-secondary-600 py-3 rounded-xl">
          <Text className="text-white text-center font-bold">Đọc thêm</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
