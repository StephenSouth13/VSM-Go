import { ScrollView, View, Text, Pressable } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-black"
      contentContainerStyle={{ padding: 16 }}
    >
      <View className="items-center mb-4">
        <View className="w-20 h-20 rounded-full bg-gray-300 mb-2" />
        <Text className="text-lg font-semibold">Người dùng VSM</Text>
        <Text className="text-gray-500">user@vsm.com</Text>
        <Pressable className="mt-2 px-4 py-2 bg-gray-100 dark:bg-neutral-800 rounded-full">
          <Text>Chỉnh sửa hồ sơ</Text>
        </Pressable>
      </View>

      <View className="flex-row justify-between mb-4">
        {[
          { label: "Tổng km", value: "512" },
          { label: "Pace TB", value: "5'28" },
          { label: "Sự kiện", value: "12" },
        ].map((item) => (
          <View
            key={item.label}
            className="flex-1 mx-1 bg-gray-100 dark:bg-neutral-800 rounded-2xl p-3 items-center"
          >
            <Text className="text-xs text-gray-500 mb-1">{item.label}</Text>
            <Text className="text-xl font-semibold">{item.value}</Text>
          </View>
        ))}
      </View>

      <Text className="text-base font-semibold mb-2">Lịch sử chạy</Text>
      {[1, 2, 3].map((i) => (
        <View
          key={i}
          className="flex-row justify-between p-3 bg-white dark:bg-neutral-900 rounded-2xl mb-2"
        >
          <Text>7.1 km · 36:50</Text>
          <Text className="text-gray-500">12/05/2025</Text>
        </View>
      ))}

      <Text className="text-base font-semibold mt-4 mb-2">
        Followers / Following
      </Text>
      <View className="flex-row gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <View key={i} className="w-10 h-10 rounded-full bg-gray-300" />
        ))}
      </View>

      <Text className="text-base font-semibold mt-4 mb-2">Đơn hàng</Text>
      {[1, 2].map((i) => (
        <View
          key={i}
          className="p-3 bg-white dark:bg-neutral-900 rounded-2xl mb-2"
        >
          <Text className="font-medium">Giày chạy #{i}</Text>
          <Text className="text-gray-500">Trạng thái: Đang giao</Text>
        </View>
      ))}

      <Pressable className="mt-6 px-4 py-3 bg-red-500 rounded-2xl items-center">
        <Text className="text-white font-semibold">Đăng xuất</Text>
      </Pressable>
    </ScrollView>
  );
}
