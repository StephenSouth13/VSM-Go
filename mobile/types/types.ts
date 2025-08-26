export interface User {
  id: string;
  full_name: string;
  email: string;
  username: string;
  date_of_birth?: Date;
  gender?: 'male' | 'female';
  phone?: string;
  avatar_url?: string;
  role: 'user' | 'editor' | 'admin';
  isActive: boolean;
  last_login_at?: Date;
  createdAt: Date;
  updatedAt: Date;
}


export type ActivityStatus = 'upcoming' | 'ongoing' | 'past';
// export type ActivityType = 'challenge' | 'event'; // Nếu bạn muốn bật lại trường type

export interface Activity {
  id: number; // Khóa chính
  // type?: ActivityType; // Nếu muốn bật lại loại hoạt động
  title: string; // Tên hoạt động
  thumbnail?: any; // Ảnh chính
  short_description: string; // Mô tả ngắn
  description?: string; // Mô tả chi tiết
  distance?: number; // Khoảng cách mục tiêu (km)
  duration?: number; // Thời gian mục tiêu
  location?: string; // Địa điểm tổ chức
  status: ActivityStatus; // Trạng thái sự kiện
  start_time?: Date; // Thời gian bắt đầu
  end_time?: Date; // Thời gian kết thúc
  created_by_user_id: string; // ID người tạo
  createdAt: Date; // Thời điểm tạo
  updatedAt?: Date; // Thời điểm cập nhật
}

export interface News {
  id: string; // UUID, khóa chính
  title: string; // Tiêu đề bài tin tức
  summary?: string; // Tóm tắt (có thể không bắt buộc)
  content: string; // Nội dung chi tiết
  coverImageUrl?: string; // Ảnh bìa
  status: 'draft' | 'published' | 'archived'; // Trạng thái
  overview?: number; // Tổng lượt xem
  createdByUserId: string; // ID người tạo
  publishedAt?: Date; // Thời điểm xuất bản
  createdAt: Date; // Thời điểm tạo
  updatedAt?: Date; // Thời điểm cập nhật
}
