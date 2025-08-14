export type Language = 'en' | 'vi';

export interface TranslationTexts {
  // App General
  appName: string;
  tagline: string;
  
  // Welcome Screen
  welcomeDescription: string;
  loginButton: string;
  createAccountButton: string;
  continueAsGuest: string;
  
  // Authentication
  createAccount: string;
  welcomeBack: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  forgotPassword: string;
  signUp: string;
  logIn: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  
  // Navigation
  races: string;
  personal: string;
  record: string;
  news: string;
  notifications: string;
  home: string;
  myEvents: string;
  community: string;
  profile: string;
  
  // Home Screen
  searchPlaceholder: string;
  featuredRace: string;
  upcomingRaces: string;
  seeAll: string;
  registerNow: string;
  
  // Race Details
  aboutRace: string;
  raceRoute: string;
  participants: string;
  distances: string;
  raceType: string;
  entryFee: string;
  registrationDeadline: string;
  
  // Profile
  editProfile: string;
  myVouchers: string;
  privacyPolicy: string;
  settings: string;
  logOut: string;
  myStats: string;
  eventsJoined: string;
  totalKM: string;
  avgPace: string;
  badges: string;
  
  // Community
  shareRun: string;
  findGroups: string;
  leaderboard: string;
  
  // Common
  loading: string;
  error: string;
  retry: string;
  cancel: string;
  confirm: string;
  save: string;
  back: string;
  next: string;
  done: string;
}

export const translations: Record<Language, TranslationTexts> = {
  en: {
    // App General
    appName: 'VSM Go',
    tagline: 'Your Running Journey Starts Here',
    
    // Welcome Screen
    welcomeDescription: 'Join thousands of runners in exciting events across Vietnam. Track your progress, connect with the community, and achieve your fitness goals.',
    loginButton: 'Log In',
    createAccountButton: 'Create Account',
    continueAsGuest: 'Continue as Guest',
    
    // Authentication
    createAccount: 'Create Your Account',
    welcomeBack: 'Welcome Back!',
    fullName: 'Full Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    signUp: 'Sign Up',
    logIn: 'Log In',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    
    // Navigation
    races: 'Races',
    personal: 'Personal',
    record: 'Record',
    news: 'News',
    notifications: 'Notifications',
    home: 'Home',
    myEvents: 'My Events',
    community: 'Community',
    profile: 'Profile',
    
    // Home Screen
    searchPlaceholder: 'Search races, locations...',
    featuredRace: 'Featured Race',
    upcomingRaces: 'Upcoming Races',
    seeAll: 'See All',
    registerNow: 'Register Now',
    
    // Race Details
    aboutRace: 'About The Race',
    raceRoute: 'Race Route',
    participants: 'Participants',
    distances: 'Distances',
    raceType: 'Type',
    entryFee: 'Entry Fee',
    registrationDeadline: 'Registration Deadline',
    
    // Profile
    editProfile: 'Edit Profile',
    myVouchers: 'My Vouchers',
    privacyPolicy: 'Privacy Policy',
    settings: 'Settings',
    logOut: 'Log Out',
    myStats: 'My Stats',
    eventsJoined: 'Events Joined',
    totalKM: 'Total KM',
    avgPace: 'Avg. Pace',
    badges: 'Badges',
    
    // Community
    shareRun: 'Share Run',
    findGroups: 'Find Groups',
    leaderboard: 'Leaderboard',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    back: 'Back',
    next: 'Next',
    done: 'Done',
  },
  vi: {
    // App General
    appName: 'VSM Go',
    tagline: 'Hành Trình Chạy Bộ Của Bạn Bắt Đầu Tại Đây',
    
    // Welcome Screen
    welcomeDescription: 'Tham gia cùng hàng nghìn runner trong các sự kiện thú vị khắp Việt Nam. Theo dõi tiến độ, kết nối cộng đồng và đạt được mục tiêu thể lực.',
    loginButton: 'Đăng Nhập',
    createAccountButton: 'Tạo Tài Khoản',
    continueAsGuest: 'Tiếp Tục Không Đăng Ký',
    
    // Authentication
    createAccount: 'Tạo Tài Khoản Của Bạn',
    welcomeBack: 'Chào Mừng Trở Lại!',
    fullName: 'Họ và Tên',
    email: 'Email',
    password: 'Mật Khẩu',
    confirmPassword: 'Xác Nhận Mật Khẩu',
    forgotPassword: 'Quên Mật Khẩu?',
    signUp: 'Đăng Ký',
    logIn: 'Đăng Nhập',
    alreadyHaveAccount: 'Đã có tài khoản?',
    dontHaveAccount: 'Chưa có tài khoản?',
    
    // Navigation
    races: 'Cuộc Đua',
    personal: 'Cá Nhân',
    record: 'Kỷ Lục',
    news: 'Tin Tức',
    notifications: 'Thông Báo',
    home: 'Trang Chủ',
    myEvents: 'Sự Kiện Của Tôi',
    community: 'Cộng Đồng',
    profile: 'Hồ Sơ',
    
    // Home Screen
    searchPlaceholder: 'Tìm kiếm giải đua, địa điểm...',
    featuredRace: 'Giải Đua Nổi Bật',
    upcomingRaces: 'Giải Đua Sắp Tới',
    seeAll: 'Xem Tất Cả',
    registerNow: 'Đăng Ký Ngay',
    
    // Race Details
    aboutRace: 'Về Cuộc Đua',
    raceRoute: 'Tuyến Đường Đua',
    participants: 'Người Tham Gia',
    distances: 'Cự Ly',
    raceType: 'Loại',
    entryFee: 'Phí Tham Gia',
    registrationDeadline: 'Hạn Đăng Ký',
    
    // Profile
    editProfile: 'Chỉnh Sửa Hồ Sơ',
    myVouchers: 'Voucher Của Tôi',
    privacyPolicy: 'Chính Sách Bảo Mật',
    settings: 'Cài Đặt',
    logOut: 'Đăng Xuất',
    myStats: 'Thống Kê Của Tôi',
    eventsJoined: 'Sự Kiện Đã Tham Gia',
    totalKM: 'Tổng Số KM',
    avgPace: 'Pace Trung Bình',
    badges: 'Huy Hiệu',
    
    // Community
    shareRun: 'Chia Sẻ Chạy Bộ',
    findGroups: 'Tìm Nhóm',
    leaderboard: 'Bảng Xếp Hạng',
    
    // Common
    loading: 'Đang tải...',
    error: 'Lỗi',
    retry: 'Thử lại',
    cancel: 'Hủy',
    confirm: 'Xác nhận',
    save: 'Lưu',
    back: 'Quay lại',
    next: 'Tiếp theo',
    done: 'Hoàn thành',
  },
};

// Language context
export const defaultLanguage: Language = 'vi'; // Default to Vietnamese

export const getTranslation = (language: Language = defaultLanguage): TranslationTexts => {
  return translations[language] || translations[defaultLanguage];
};
