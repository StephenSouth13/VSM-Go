import { ScrollView, View, Text, Image } from "react-native";

export default function NewsScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-black"
      contentContainerStyle={{ padding: 16 }}
    >
      <View className="flex-row items-center gap-2 mb-4">
        {["Tất cả", "Sự kiện", "Thử thách"].map((tag) => (
          <View
            key={tag}
            className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 rounded-full"
          >
            <Text>{tag}</Text>
          </View>
        ))}
      </View>

      {[1, 2, 3, 4].map((id) => (
        <View
          key={id}
          className="flex-row gap-3 mb-4 bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm"
        >
          <Image
            source={{ uri: "https://picsum.photos/200/120" }}
            className="w-32 h-24"
          />
          <View className="flex-1 p-2">
            <Text className="font-semibold">Giải chạy thành phố #{id}</Text>
            <Text className="text-xs text-gray-500 mt-1">
              Event · 12/05/2025
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
