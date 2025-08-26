import React, { useRef } from "react";
import { View, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/contexts/ThemeContext";
import {
  HomeHeader,
  ActivitysSection,
  QuickStats,
  FriendsActivity,
  FeaturedNews,
  OngoingChallenges,
  type QuickStat,
  type FriendActivity,
  type Challenge,
} from "@/components/home";
// import data
import { activities } from "@/data/activities";
import { quickStats } from "@/data/quickStats";
import { friendsActivity } from "@/data/friendsActivity";
import { news } from "@/data/news";

export default function HomeScreen() {
  const { isDark } = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;

  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Thử thách 100km tháng 12",
      subtitle: "Chinh phục mục tiêu cuối năm",
      progress: 65,
      remaining: "12 ngày",
      current: "65km",
      target: "100km",
      reward: "🏆 Huy chương vàng",
      participants: 342,
    },
  ];

  return (
    <View className={`flex-1 ${isDark ? "bg-neutral-900" : "bg-neutral-50"}`}>
      <StatusBar style="light" />

      {/* Header with Gradient - Collapsible */}
      <HomeHeader />

      <Animated.ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Activities Section */}
        <ActivitysSection activities={activities} />

        {/* Quick Stats */}
        <QuickStats quickStats={quickStats} />

        {/* Friends Activity */}
        <FriendsActivity friendsActivity={friendsActivity} />

        {/* Featured News */}
        <FeaturedNews news={news} />

        {/* Ongoing Challenges */}
        <OngoingChallenges challenges={challenges} />
      </Animated.ScrollView>
    </View>
  );
}
