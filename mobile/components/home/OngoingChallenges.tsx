import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";

export interface Challenge {
  id: number;
  title: string;
  subtitle: string;
  progress: number;
  remaining: string;
  current: string;
  target: string;
  reward: string;
  participants: number;
}

interface OngoingChallengesProps {
  challenges: Challenge[];
}

export const OngoingChallenges: React.FC<OngoingChallengesProps> = ({
  challenges,
}) => {
  const { isDark } = useTheme();

  return (
    <View
      className={`${isDark ? "bg-neutral-800" : "bg-white"} mx-5 mb-8 rounded-vsm shadow-vsm overflow-hidden border ${isDark ? "border-neutral-700" : "border-neutral-100"}`}
    >
      <View className="bg-gradient-to-r from-success-50 to-emerald-50 px-6 py-4">
        <Text
          className={`text-xl font-bold ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
        >
          🎯 Thử thách đang diễn ra
        </Text>
      </View>

      <View className="p-6">
        {challenges.map((challenge, index) => (
          <View
            key={challenge.id}
            className={`${index !== challenges.length - 1 ? "mb-6 pb-6 border-b border-neutral-100" : ""}`}
          >
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-1">
                <Text
                  className={`font-bold text-lg ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
                >
                  {challenge.title}
                </Text>
                <Text
                  className={`text-sm mt-1 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
                >
                  {challenge.subtitle}
                </Text>
              </View>
              <View className="bg-warning-100 px-3 py-1 rounded-full">
                <Text className="text-warning-600 font-semibold text-sm">
                  Còn {challenge.remaining}
                </Text>
              </View>
            </View>

            <View className="bg-neutral-100 h-3 rounded-full mb-3">
              <View
                className="bg-gradient-to-r from-success-500 to-emerald-500 h-3 rounded-full"
                style={{ width: `${challenge.progress}%` }}
              />
            </View>

            <View className="flex-row justify-between items-center mb-3">
              <Text
                className={`text-sm ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
              >
                {challenge.current} / {challenge.target}
              </Text>
              <Text className="text-sm text-success-600 font-bold">
                {challenge.progress}%
              </Text>
            </View>

            <View className="flex-row justify-between items-center">
              <Text
                className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-500"}`}
              >
                {challenge.reward}
              </Text>
              <View className="flex-row items-center">
                <Ionicons
                  name="people-outline"
                  size={14}
                  color={Colors.neutral[500]}
                />
                <Text
                  className={`text-sm ml-1 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
                >
                  {challenge.participants} tham gia
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
