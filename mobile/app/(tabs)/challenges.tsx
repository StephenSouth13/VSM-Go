import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/contexts/ThemeContext";

interface Challenge {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  startDate: string;
  endDate: string;
  progress: number;
  current: number;
  target: number;
  unit: string;
  difficulty: "easy" | "medium" | "hard";
  type: "personal" | "community";
  participants: number;
  reward: string;
  isJoined: boolean;
  category: "distance" | "time" | "frequency";
}

type TabType = "personal" | "community";
type FilterType = "all" | "easy" | "medium" | "hard";

export default function ChallengesScreen() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<TabType>("personal");
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  // Mock challenges data
  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Thử thách 100km tháng 12",
      subtitle: "Chinh phục mục tiêu cuối năm",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      startDate: "01/12",
      endDate: "31/12",
      progress: 65,
      current: 65,
      target: 100,
      unit: "km",
      difficulty: "medium",
      type: "personal",
      participants: 342,
      reward: "🏆 Huy chương vàng",
      isJoined: true,
      category: "distance",
    },
    {
      id: 2,
      title: "Marathon cộng đồng",
      subtitle: "Cùng nhau chạy 42km",
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400",
      startDate: "15/01",
      endDate: "15/02",
      progress: 0,
      current: 0,
      target: 42,
      unit: "km",
      difficulty: "hard",
      type: "community",
      participants: 1250,
      reward: "🥇 Chứng nhận hoàn thành",
      isJoined: false,
      category: "distance",
    },
    {
      id: 3,
      title: "Chạy 30 ngày liên tiếp",
      subtitle: "Xây dựng thói quen chạy bộ",
      image:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400",
      startDate: "01/01",
      endDate: "30/01",
      progress: 40,
      current: 12,
      target: 30,
      unit: "ngày",
      difficulty: "easy",
      type: "personal",
      participants: 89,
      reward: "🎯 Huy hiệu kiên trì",
      isJoined: true,
      category: "frequency",
    },
    {
      id: 4,
      title: "Sub 5 Challenge",
      subtitle: "Chạy dưới 5 phút/km",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
      startDate: "01/01",
      endDate: "31/03",
      progress: 80,
      current: 4.2,
      target: 5.0,
      unit: "min/km",
      difficulty: "hard",
      type: "community",
      participants: 456,
      reward: "⚡ Huy hiệu tốc độ",
      isJoined: true,
      category: "time",
    },
  ];

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesTab = challenge.type === activeTab;
    const matchesFilter =
      selectedFilter === "all" || challenge.difficulty === selectedFilter;
    return matchesTab && matchesFilter;
  });

  const joinedChallenges = challenges.filter((challenge) => challenge.isJoined);
  const totalProgress =
    joinedChallenges.length > 0
      ? Math.round(
          joinedChallenges.reduce(
            (sum, challenge) => sum + challenge.progress,
            0
          ) / joinedChallenges.length
        )
      : 0;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "#22c55e";
      case "medium":
        return "#f59e0b";
      case "hard":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "Dễ";
      case "medium":
        return "Trung bình";
      case "hard":
        return "Khó";
      default:
        return "";
    }
  };

  const handleJoinChallenge = (challengeId: number) => {
    console.log("Join challenge:", challengeId);
    // Implementation for joining challenge
  };

  const handleChallengeDetails = (challengeId: number) => {
    console.log("View challenge details:", challengeId);
    // Implementation for viewing challenge details
  };

  const ChallengeCard = ({ challenge }: { challenge: Challenge }) => (
    <View
      className={`${
        isDark ? "bg-neutral-800" : "bg-white"
      } rounded-2xl mb-4 shadow-md overflow-hidden border ${
        isDark ? "border-neutral-700" : "border-neutral-100"
      }`}
    >
      {/* Challenge Image */}
      <View className="h-40 relative">
        <Image
          source={{ uri: challenge.image }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          className="absolute inset-0"
        />

        {/* Difficulty Badge */}
        <View
          className="absolute top-3 right-3 px-3 py-1 rounded-full"
          style={{
            backgroundColor: getDifficultyColor(challenge.difficulty) + "20",
          }}
        >
          <Text
            className="text-xs font-bold"
            style={{ color: getDifficultyColor(challenge.difficulty) }}
          >
            {getDifficultyLabel(challenge.difficulty)}
          </Text>
        </View>

        {/* Duration */}
        <View className="absolute bottom-3 left-3">
          <Text className="text-white text-sm font-medium">
            📅 {challenge.startDate} - {challenge.endDate}
          </Text>
        </View>
      </View>

      {/* Challenge Info */}
      <View className="p-4">
        <Text
          className={`text-lg font-bold mb-1 ${
            isDark ? "text-white" : "text-neutral-800"
          }`}
        >
          {challenge.title}
        </Text>
        <Text
          className={`text-sm mb-3 ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {challenge.subtitle}
        </Text>

        {/* Progress */}
        {challenge.isJoined && (
          <View className="mb-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text
                className={`text-sm font-medium ${
                  isDark ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Tiến độ cá nhân
              </Text>
              <Text className="text-primary-600 font-bold text-sm">
                {challenge.progress}%
              </Text>
            </View>

            <View className="bg-neutral-200 h-2 rounded-full mb-2">
              <View
                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                style={{ width: `${challenge.progress}%` }}
              />
            </View>

            <Text
              className={`text-xs ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              {challenge.current} / {challenge.target} {challenge.unit}
            </Text>
          </View>
        )}

        {/* Participants & Reward */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <Ionicons
              name="people-outline"
              size={16}
              color={isDark ? "#9ca3af" : "#6b7280"}
            />
            <Text
              className={`text-sm ml-1 ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              {challenge.participants} người
            </Text>
          </View>
          <Text
            className={`text-sm ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {challenge.reward}
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3">
          {challenge.isJoined ? (
            <Pressable
              onPress={() => handleChallengeDetails(challenge.id)}
              className="flex-1 bg-primary-600 rounded-xl py-3 items-center active:opacity-80"
            >
              <Text className="text-white font-semibold">Chi tiết</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => handleJoinChallenge(challenge.id)}
              className="flex-1 bg-success-600 rounded-xl py-3 items-center active:opacity-80"
            >
              <Text className="text-white font-semibold">Tham gia</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View className={`flex-1 ${isDark ? "bg-neutral-900" : "bg-neutral-50"} `}>
      {/* Header */}
      <View
        className={`${
          isDark ? "bg-neutral-800" : "bg-white"
        } px-6 pt-14 pb-4 shadow-sm border-b ${
          isDark ? "border-neutral-700" : "border-neutral-100"
        }`}
      >
        <View className="flex-row justify-between items-center">
          <Text
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-neutral-800"
            }`}
          >
            🎯 Thử thách
          </Text>
          <Pressable
            onPress={() => setFilterVisible(true)}
            className={`p-2 rounded-full ${
              isDark ? "bg-neutral-700" : "bg-neutral-100"
            } active:opacity-70`}
          >
            <Ionicons
              name="filter"
              size={24}
              color={isDark ? "#e5e7eb" : "#374151"}
            />
          </Pressable>
        </View>
      </View>

      {/* Quick Summary */}
      <View className="px-6 py-4">
        <View
          className={`${
            isDark ? "bg-neutral-800" : "bg-white"
          } rounded-2xl p-4 shadow-md border ${
            isDark ? "border-neutral-700" : "border-neutral-100"
          }`}
        >
          <Text
            className={`text-base font-semibold mb-3 ${
              isDark ? "text-white" : "text-neutral-800"
            }`}
          >
            📊 Tổng quan của bạn
          </Text>

          <View className="flex-row justify-between items-center mb-3">
            <Text
              className={`text-sm ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Đang tham gia: {joinedChallenges.length} thử thách
            </Text>
            <Text className="text-primary-600 font-bold">
              {totalProgress}% hoàn thành
            </Text>
          </View>

          <View className="bg-neutral-200 h-2 rounded-full">
            <View
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
              style={{ width: `${totalProgress}%` }}
            />
          </View>
        </View>
      </View>

      {/* Tab Switcher */}
      <View className="px-6 mb-4">
        <View
          className={`${
            isDark ? "bg-neutral-800" : "bg-neutral-100"
          } rounded-xl p-1 flex-row`}
        >
          <Pressable
            onPress={() => setActiveTab("personal")}
            className={`flex-1 py-3 rounded-lg items-center ${
              activeTab === "personal" ? "bg-primary-600" : "bg-transparent"
            }`}
          >
            <Text
              className={`font-semibold ${
                activeTab === "personal"
                  ? "text-white"
                  : isDark
                    ? "text-neutral-400"
                    : "text-neutral-600"
              }`}
            >
              👤 Cá nhân
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("community")}
            className={`flex-1 py-3 rounded-lg items-center ${
              activeTab === "community" ? "bg-primary-600" : "bg-transparent"
            }`}
          >
            <Text
              className={`font-semibold ${
                activeTab === "community"
                  ? "text-white"
                  : isDark
                    ? "text-neutral-400"
                    : "text-neutral-600"
              }`}
            >
              👥 Cộng đồng
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Challenges List */}
      <FlatList
        data={filteredChallenges}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
        renderItem={({ item }) => <ChallengeCard challenge={item} />}
        ListEmptyComponent={() => (
          <View className="items-center py-12">
            <Ionicons
              name="medal-outline"
              size={64}
              color={isDark ? "#6b7280" : "#9ca3af"}
            />
            <Text
              className={`text-center mt-4 ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Không có thử thách nào
            </Text>
          </View>
        )}
      />

      {/* Filter Modal */}
      <Modal
        visible={filterVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setFilterVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View
            className={`${
              isDark ? "bg-neutral-800" : "bg-white"
            } rounded-t-3xl p-6`}
          >
            <View className="flex-row justify-between items-center mb-6">
              <Text
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-neutral-800"
                }`}
              >
                Bộ lọc
              </Text>
              <Pressable
                onPress={() => setFilterVisible(false)}
                className="p-2"
              >
                <Ionicons
                  name="close"
                  size={24}
                  color={isDark ? "#e5e7eb" : "#374151"}
                />
              </Pressable>
            </View>

            <Text
              className={`text-base font-semibold mb-3 ${
                isDark ? "text-white" : "text-neutral-800"
              }`}
            >
              Độ khó
            </Text>

            {[
              { key: "all", label: "Tất cả" },
              { key: "easy", label: "Dễ" },
              { key: "medium", label: "Trung bình" },
              { key: "hard", label: "Khó" },
            ].map((filter) => (
              <Pressable
                key={filter.key}
                onPress={() => {
                  setSelectedFilter(filter.key as FilterType);
                  setFilterVisible(false);
                }}
                className={`p-4 rounded-xl mb-2 border ${
                  selectedFilter === filter.key
                    ? "bg-primary-50 border-primary-600"
                    : isDark
                      ? "bg-neutral-700 border-neutral-600"
                      : "bg-neutral-50 border-neutral-200"
                }`}
              >
                <Text
                  className={`font-medium ${
                    selectedFilter === filter.key
                      ? "text-primary-600"
                      : isDark
                        ? "text-white"
                        : "text-neutral-800"
                  }`}
                >
                  {filter.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}
