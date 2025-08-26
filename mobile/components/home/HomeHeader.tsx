import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export const HomeHeader: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [animation] = useState(new Animated.Value(1));

  const toggleExpanded = () => {
    const toValue = isExpanded ? 0 : 1; // Dùng 0 để collapse, 1 để expand
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsExpanded(!isExpanded);
  };

  const welcomeHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // 0 when collapsed, 120 when expanded
  });

  const welcomeOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <LinearGradient
      colors={Colors.gradients.primary as [string, string]}
      className="px-5 pt-14 pb-2 mb-4"
    >
      {/* Top Section - Logo and Navigation (Always Visible) */}
      <View className="flex-row items-center justify-between mb-4">
        {/* Left Side - Logo and Brand */}
        <View className="flex-row items-center flex-1">
          <Image
            source={require("@/assets/images/misc/logo.png")}
            className="w-10 h-10 mr-3"
            resizeMode="contain"
          />
          <View>
            <Text className="text-white text-xl font-bold">VSM Go</Text>
            {/* <Text className="text-primary-100 text-xs">Chạy bộ thông minh</Text> */}
          </View>
        </View>

        {/* Center - Page Title */}
        <View className="flex-1 items-center">
          {/* <Text className="text-white text-lg font-semibold">Trang Chủ</Text> */}
          {/* <Text className="text-primary-100 text-xs">
            Chào mừng bạn trở lại
          </Text> */}
        </View>

        {/* Right Side - Actions */}
        <View className="flex-row items-center">
          <TouchableOpacity className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mr-3">
            <Ionicons name="settings-outline" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 bg-white/20 rounded-full items-center justify-center">
            <Ionicons name="notifications-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Toggle Button */}
      {/* <TouchableOpacity
        onPress={toggleExpanded}
        className="flex-row items-center justify-center"
      >
        <View className="flex-row items-center bg-white/20 rounded-full px-4 py-2">
          <Ionicons
            name={isExpanded ? "chevron-up" : "chevron-down"}
            size={16}
            color="white"
          />
          <Text className="text-white text-sm ml-2 font-medium">
            {isExpanded ? "Thu gọn" : "Mở rộng"}
          </Text>
        </View>
      </TouchableOpacity> 

      <Animated.View
        style={{
          height: welcomeHeight,
          opacity: welcomeOpacity,
          // overflow: "hidden",
        }}
      >
        <View className="mb-4">
          <Text className="text-white text-2xl font-bold">Chào bạn! 👋</Text>
          <Text className="text-primary-100 text-base">
            Khám phá tin tức và bắt đầu chạy bộ hôm nay
          </Text>
        </View>

        
        <View className="flex-row items-center mb-4">
          <View className="flex-1 flex-row items-center bg-white/20 rounded-full px-4 py-3">
            <Ionicons name="search" size={20} color="white" />
            <TextInput
              placeholder="Tìm kiếm tin tức, sự kiện, thử thách..."
              className="flex-1 ml-3 text-white text-base"
              placeholderTextColor="rgba(255,255,255,0.7)"
            />
          </View>
          <TouchableOpacity className="ml-3 w-12 h-12 bg-white/20 rounded-full items-center justify-center">
            <Ionicons name="filter" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between">
          <View className="items-center">
            <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center mb-2">
              <Ionicons name="trending-up" size={20} color="white" />
            </View>
            <Text className="text-white text-sm font-semibold">125.8 km</Text>
            <Text className="text-primary-100 text-xs">Tháng này</Text>
          </View>

          <View className="items-center">
            <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center mb-2">
              <Ionicons name="trophy" size={20} color="white" />
            </View>
            <Text className="text-white text-sm font-semibold">18</Text>
            <Text className="text-primary-100 text-xs">Buổi chạy</Text>
          </View>

          <View className="items-center">
            <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center mb-2">
              <Ionicons name="people" size={20} color="white" />
            </View>
            <Text className="text-white text-sm font-semibold">342</Text>
            <Text className="text-primary-100 text-xs">Bạn bè</Text>
          </View>
        </View>
      </Animated.View> */}
    </LinearGradient>
  );
};
