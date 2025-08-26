import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { NewsCard } from "@/components/NewsCard";
import { News } from "@/types/types";

interface FeaturedNewsProps {
  news: News[];
}

export const FeaturedNews: React.FC<FeaturedNewsProps> = ({ news }) => {
  const { isDark } = useTheme();

  return (
    <View className="mb-6 px-5">
      <View className="flex-row justify-between items-center mb-4">
        <Text
          className={`text-xl font-bold ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
        >
          📰 Tin tức nổi bật
        </Text>
        <TouchableOpacity className="bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-2 rounded-full">
          <Text className="text-white font-semibold text-sm">Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {news.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
            onPress={() => {
              // Handle news press
              console.log("News pressed:", item.id);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};
