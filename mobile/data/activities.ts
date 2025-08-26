import { Activity } from "@/types/types";

export const activities: Activity[] = [
  {
    id: 1,
    title: "Marathon Hà Nội 2025 - Chạy vì sức khỏe cộng đồng",
    thumbnail: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400",
    short_description:
      "Tham gia cuộc thi marathon quốc tế với lộ trình đi qua các địa danh nổi tiếng của thủ đô.",
    description:
      "Marathon Hà Nội 2025 là sự kiện thể thao lớn nhất năm, thu hút hàng nghìn vận động viên trong và ngoài nước.",
    distance: 42.2,
    duration: 240,
    location: "Hà Nội, Việt Nam",
    status: "upcoming",
    start_time: new Date("2025-03-15T06:00:00"),
    end_time: new Date("2025-03-15T12:00:00"),
    created_by_user_id: "admin",
    createdAt: new Date("2024-12-01"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: 2,
    title: "Thử thách 100km tháng 12 - Chinh phục mục tiêu cuối năm",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    short_description:
      "Tham gia thử thách chạy bộ 100km trong tháng 12 để hoàn thành mục tiêu năm 2024.",
    description:
      "Thử thách này dành cho những người yêu thích chạy bộ và muốn thử sức với khoảng cách lớn.",
    distance: 100,
    duration: 720,
    location: "Toàn quốc",
    status: "ongoing",
    start_time: new Date("2024-12-01T00:00:00"),
    end_time: new Date("2024-12-31T23:59:59"),
    created_by_user_id: "admin",
    createdAt: new Date("2024-11-15"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: 3,
    title: "Fun Run Công viên Tao Đàn - Chạy bộ cùng gia đình",
    thumbnail: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400",
    short_description:
      "Sự kiện chạy bộ vui nhộn dành cho cả gia đình tại công viên Tao Đàn, TP.HCM.",
    description:
      "Fun Run Tao Đàn là hoạt động thể thao lành mạnh, phù hợp với mọi lứa tuổi.",
    distance: 5,
    duration: 45,
    location: "Công viên Tao Đàn, TP.HCM",
    status: "upcoming",
    start_time: new Date("2025-01-20T07:00:00"),
    end_time: new Date("2025-01-20T10:00:00"),
    created_by_user_id: "admin",
    createdAt: new Date("2024-12-01"),
    updatedAt: new Date("2024-12-01"),
  },
];