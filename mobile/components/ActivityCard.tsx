import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";
import { Activity, ActivityStatus } from "@/types/types";

interface ActivityCardProps {
  activity: Activity;
  onPress?: () => void;
  featured?: boolean;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onPress,
  featured = false,
}) => {
  const { isDark } = useTheme();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const getStatusColor = (status: ActivityStatus) => {
    switch (status) {
      case "upcoming":
        return Colors.warning[500];
      case "ongoing":
        return Colors.success[500];
      case "past":
        return Colors.neutral[500];
      default:
        return Colors.neutral[500];
    }
  };

  const getStatusText = (status: ActivityStatus) => {
    switch (status) {
      case "upcoming":
        return "Sắp diễn ra";
      case "ongoing":
        return "Đang diễn ra";
      case "past":
        return "Đã kết thúc";
      default:
        return "Không xác định";
    }
  };

  const getStatusIcon = (status: ActivityStatus) => {
    switch (status) {
      case "upcoming":
        return "time-outline";
      case "ongoing":
        return "play-circle-outline";
      case "past":
        return "checkmark-circle-outline";
      default:
        return "help-circle-outline";
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <View
      className={`${featured ? "p-[1] px-4 rounded-vsm bg-gradient-to-r from-primary-500 to-secondary-500" : ""} ${featured ? "" : "mr-4"}`}
    >
      {/* featured dùng để hiển thị card hoạt động nổi bật*/}
      <TouchableOpacity
        onPress={onPress} // Dùng để chuyển hướng đến trang chi tiết hoạt động
        activeOpacity={0.9} // Dùng để giảm độ sáng của card khi người dùng nhấn vào nó
        className={`${isDark ? "bg-neutral-800" : "bg-white"} rounded-vsm ${featured ? "w-full" : "w-80"} shadow-vsm overflow-hidden border ${isDark ? "border-neutral-700" : "border-neutral-100"}`}
      >
        {/* Header with Status */}
        <View className="relative">
          {/* Placeholder/Image */}
          {activity.thumbnail ? (
            <Image
              source={{ uri: activity.thumbnail }}
              className={`w-full ${featured ? "h-64" : "h-48"}`}
              resizeMode="cover"
            />
          ) : (
            <View
              className={`w-full ${featured ? "h-64" : "h-48"} bg-gradient-to-br from-primary-400 to-secondary-500 items-center justify-center`}
            >
              <Ionicons name="fitness-outline" size={56} color="white" />
              <Text className="text-white text-sm mt-2 font-medium">
                Hoạt động
              </Text>
            </View>
          )}

          {/* Overlay gradient to add depth */}
          <View className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* Status Badge */}
          <View
            className="absolute top-3 left-3 px-3 py-1 rounded-full flex-row items-center"
            style={{ backgroundColor: `${getStatusColor(activity.status)}20` }}
          >
            <Ionicons
              name={getStatusIcon(activity.status) as any}
              size={14}
              color={getStatusColor(activity.status)}
            />
            <Text
              className="text-xs font-semibold ml-1"
              style={{ color: getStatusColor(activity.status) }}
            >
              {getStatusText(activity.status)}
            </Text>
          </View>

          {/* Favorite Button */}
          <TouchableOpacity
            onPress={() => setIsFavorite((prev) => !prev)}
            className="absolute top-3 right-3 bg-black/40 rounded-full p-2"
            activeOpacity={0.8}
          >
            <Ionicons
              name={(isFavorite ? "heart" : "heart-outline") as any}
              size={18}
              color={isFavorite ? "#ef4444" : "#ffffff"}
            />
          </TouchableOpacity>

          {/* Distance Badge (moved below image by user) */}
          {/* kept intentionally empty here */}
        </View>

        {/* Content */}
        <View className="p-6">
          {/* Title */}
          <Text
            className={`font-bold ${featured ? "text-2xl" : "text-xl"} mb-2 ${isDark ? "text-neutral-100" : "text-neutral-800"}`}
            numberOfLines={2}
          >
            {activity.title}
          </Text>

          {/* Description */}
          <Text
            className={`text-sm mb-4 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
            numberOfLines={3}
          >
            {activity.short_description}
          </Text>

          {/* Details Row */}
          <View className="flex-row items-center justify-between mb-5">
            {/* Location */}
            {activity.location && (
              <View className="flex-row items-center">
                <Ionicons
                  name="location-outline"
                  size={18}
                  color={Colors.neutral[500]}
                />
                <Text
                  className={`text-xs ml-1 ${isDark ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  {activity.location}
                </Text>
              </View>
            )}

            <View className="">
              {/* Duration */}
              {activity.duration && (
                <View className="flex-row items-center">
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color={Colors.neutral[500]}
                  />
                  <Text
                    className={`text-xs ml-1 ${isDark ? "text-neutral-400" : "text-neutral-500"}`}
                  >
                    {activity.duration} phút
                  </Text>
                </View>
              )}
              {activity.distance && (
                <View className="absolute right-3 top-12 bg-black/50 px-3 py-1 rounded-full">
                  <Text className="text-white text-xs font-semibold">
                    {activity.distance} km
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Time Info */}
          {activity.start_time && (
            <View className="flex-row items-center mb-4">
              <Ionicons
                name="calendar-outline"
                size={18}
                color={Colors.primary[500]}
              />
              <Text
                className={`text-sm ml-2 font-semibold ${isDark ? "text-primary-400" : "text-primary-600"}`}
              >
                {formatDate(activity.start_time)} •{" "}
                {formatTime(activity.start_time)}
              </Text>
            </View>
          )}

          {/* Action Button */}
          <TouchableOpacity
            className={`py-3.5 rounded-xl flex-row items-center justify-center ${
              activity.status === "ongoing"
                ? "bg-gradient-to-r from-success-500 to-emerald-500"
                : "bg-gradient-to-r from-primary-600 to-secondary-600"
            }`}
          >
            <Text className="text-white text-center font-bold mr-2">
              {activity.status === "ongoing" ? "Tham gia ngay" : "Xem chi tiết"}
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
