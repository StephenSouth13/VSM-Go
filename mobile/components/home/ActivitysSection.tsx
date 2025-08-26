import React, { useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { ActivityCard } from "@/components/ActivityCard";
import { Activity } from "@/types/types";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

interface ActivitySectionProps {
  activities: Activity[];
}

export const ActivitysSection: React.FC<ActivitySectionProps> = ({
  activities,
}) => {
  const { isDark } = useTheme();
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<Activity>>(null);

  return (
    <View className="mb-6 ">
      <View className="flex-row justify-between items-center mb-4">
        <Text
          className={`text-xl font-bold ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
        >
          🏃‍♂️ Hoạt động nổi bật
        </Text>
        <TouchableOpacity className="bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-2 rounded-full">
          <Text className="text-white font-semibold text-sm">Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatListRef}
        data={activities}
        keyExtractor={(item) => String(item.id)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
          setActiveIndex(index);
        }}
        renderItem={({ item, index }) => (
          <View style={{ width: screenWidth }}>
            <ActivityCard
              activity={item}
              featured
              onPress={() => {
                console.log("Activity pressed:", item.id);
              }}
            />
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View className="flex-row justify-center items-center mt-3">
        {activities.map((_, i) => (
          <View
            key={i}
            className={`h-2 rounded-full mx-1 ${i === activeIndex ? "bg-primary-600" : isDark ? "bg-neutral-600" : "bg-neutral-300"}`}
            style={{ width: i === activeIndex ? 16 : 8 }}
          />
        ))}
      </View>
    </View>
  );
};
