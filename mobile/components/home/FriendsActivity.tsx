import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";

export interface FriendActivity {
  id: number;
  name: string;
  avatar: string;
  distance: string;
  time: string;
  pace: string;
  recent: boolean;
}

interface FriendsActivityProps {
  friendsActivity: FriendActivity[];
}

export const FriendsActivity: React.FC<FriendsActivityProps> = ({
  friendsActivity,
}) => {
  const { isDark } = useTheme();

  return (
    <View
      className={`${isDark ? "bg-neutral-800" : "bg-white"} mx-5 mb-6 rounded-vsm shadow-vsm overflow-hidden border ${isDark ? "border-neutral-700" : "border-neutral-100"}`}
    >
      <View className="bg-gradient-to-r from-primary-50 to-secondary-50 px-6 py-4">
        <View className="flex-row justify-between items-center">
          <Text
            className={`text-lg font-bold ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
          >
            👥 Hoạt động bạn bè
          </Text>
          <TouchableOpacity className="bg-primary-600 px-4 py-2 rounded-full">
            <Text className="text-white font-semibold text-sm">Xem thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="p-5">
        {friendsActivity.map((friend, index) => (
          <View
            key={friend.id}
            className={`flex-row items-center ${index !== friendsActivity.length - 1 ? "mb-4 pb-4 border-b border-neutral-100" : ""}`}
          >
            <View className="relative">
              <Image
                source={{ uri: friend.avatar }}
                className="w-14 h-14 rounded-full"
              />
              {friend.recent && (
                <View className="absolute -top-1 -right-1 w-4 h-4 bg-success-500 rounded-full border-2 border-white" />
              )}
            </View>
            <View className="flex-1 ml-4">
              <Text
                className={`font-bold text-base ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
              >
                {friend.name}
              </Text>
              <Text
                className={`text-sm mt-1 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
              >
                {friend.distance}km • {friend.time} • {friend.pace}/km
              </Text>
              {friend.recent && (
                <Text className="text-xs text-success-600 mt-1">
                  Vừa hoàn thành
                </Text>
              )}
            </View>
            <TouchableOpacity className="w-16 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl items-center justify-center">
              <Ionicons name="map" size={16} color="white" />
              <Text className="text-xs text-white mt-1">Bản đồ</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};
