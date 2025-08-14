import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { VSMStyles } from '@/constants/VSMStyles';
import { useAuth } from '@/contexts/AuthContext';

interface UserStat {
  label: string;
  value: string;
  icon: string;
}

interface MenuOption {
  title: string;
  icon: string;
  action: () => void;
  requiresAuth?: boolean;
}

const userStats: UserStat[] = [
  { label: 'Events Joined', value: '12', icon: 'trophy' },
  { label: 'Total KM', value: '156.8', icon: 'speedometer' },
  { label: 'Avg. Pace', value: '5:30', icon: 'time' },
  { label: 'Badges', value: '8', icon: 'medal' },
];

// Guest Login Prompt Component
function GuestLoginPrompt() {
  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <View style={styles.guestContainer}>
      <LinearGradient
        colors={[VSMStyles.colors.primary, VSMStyles.colors.primaryLight]}
        style={styles.guestGradient}
      >
        <View style={styles.guestIcon}>
          <Ionicons name="person-outline" size={48} color={VSMStyles.colors.white} />
        </View>
        <Text style={styles.guestTitle}>Đăng nhập để trải nghiệm đầy đủ</Text>
        <Text style={styles.guestDescription}>
          Theo dõi tiến độ chạy bộ, kết nối với cộng đồng và tham gia các sự kiện VSM
        </Text>
        
        <View style={styles.guestButtons}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Tạo tài khoản</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.continueGuestButton} onPress={() => router.back()}>
          <Text style={styles.continueGuestText}>Tiếp tục ở chế độ khách</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* VSM Features for Guests */}
      <View style={styles.guestFeatures}>
        <Text style={styles.guestFeaturesTitle}>Với tài khoản VSM, bạn có thể:</Text>
        <View style={styles.featuresList}>
          <View style={styles.featureItem}>
            <Ionicons name="trophy" size={20} color={VSMStyles.colors.primary} />
            <Text style={styles.featureText}>Theo dõi kỷ lục cá nhân</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="people" size={20} color={VSMStyles.colors.primary} />
            <Text style={styles.featureText}>Kết nối với 10,000+ sinh viên</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="calendar" size={20} color={VSMStyles.colors.primary} />
            <Text style={styles.featureText}>Đăng ký sự kiện VSM</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="medal" size={20} color={VSMStyles.colors.primary} />
            <Text style={styles.featureText}>Nhận huy hiệu và thành tích</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const { user, isAuthenticated, logout } = useAuth();

  const handleEditProfile = () => {
    console.log('Navigate to edit profile');
  };

  const handleMyVouchers = () => {
    console.log('Navigate to vouchers');
  };

  const handlePrivacyPolicy = () => {
    console.log('Navigate to privacy policy');
  };

  const handleSettings = () => {
    console.log('Navigate to settings');
  };

  const handleLogout = () => {
    Alert.alert(
      'Đăng xuất',
      'Bạn có chắc chắn muốn đăng xuất?',
      [
        { text: 'Hủy', style: 'cancel' },
        { 
          text: 'Đăng xuất', 
          style: 'destructive',
          onPress: () => {
            logout();
            router.replace('/');
          }
        },
      ]
    );
  };

  const menuOptions: MenuOption[] = [
    { title: 'Chỉnh sửa hồ sơ', icon: 'person-outline', action: handleEditProfile, requiresAuth: true },
    { title: 'Voucher của tôi', icon: 'ticket-outline', action: handleMyVouchers, requiresAuth: true },
    { title: 'Chính sách bảo mật', icon: 'shield-outline', action: handlePrivacyPolicy },
    { title: 'Cài đặt', icon: 'settings-outline', action: handleSettings },
  ];

  // Show guest login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hồ sơ</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={VSMStyles.colors.textDark} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <GuestLoginPrompt />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hồ sơ</Text>
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
          <Ionicons name="settings-outline" size={24} color={VSMStyles.colors.textDark} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: user?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color={VSMStyles.colors.white} />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>{user?.name || 'Quach Thanh Long'}</Text>
          <Text style={styles.userEmail}>{user?.email || 'quach.thanh.long@example.com'}</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Thống kê c���a tôi</Text>
          <View style={styles.statsGrid}>
            {userStats.map((stat, index) => (
              <View key={index} style={styles.statBox}>
                <View style={styles.statIconContainer}>
                  <Ionicons 
                    name={stat.icon as any} 
                    size={24} 
                    color={VSMStyles.colors.primary} 
                  />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Menu Options */}
        <View style={styles.menuSection}>
          {menuOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={option.action}
              activeOpacity={0.7}
            >
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIconContainer}>
                  <Ionicons 
                    name={option.icon as any} 
                    size={20} 
                    color={VSMStyles.colors.primary} 
                  />
                </View>
                <Text style={styles.menuItemText}>{option.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color={VSMStyles.colors.white} />
            <Text style={styles.logoutButtonText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: VSMStyles.colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.white,
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: VSMStyles.colors.borderLight,
  },
  headerTitle: {
    ...VSMStyles.typography.heading,
    fontSize: 24,
  },
  backButton: {
    padding: VSMStyles.spacing.xs,
  },
  settingsButton: {
    padding: VSMStyles.spacing.xs,
  },
  scrollView: {
    flex: 1,
  },
  // Guest Mode Styles
  guestContainer: {
    flex: 1,
  },
  guestGradient: {
    margin: VSMStyles.spacing.lg,
    padding: VSMStyles.spacing.xl,
    borderRadius: VSMStyles.borderRadius.xl,
    alignItems: 'center',
    ...VSMStyles.shadows.medium,
  },
  guestIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.lg,
  },
  guestTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    textAlign: 'center',
    marginBottom: VSMStyles.spacing.sm,
  },
  guestDescription: {
    fontSize: 14,
    color: VSMStyles.colors.white,
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 20,
    marginBottom: VSMStyles.spacing.xl,
  },
  guestButtons: {
    width: '100%',
    gap: VSMStyles.spacing.md,
    marginBottom: VSMStyles.spacing.lg,
  },
  loginButton: {
    backgroundColor: VSMStyles.colors.white,
    paddingVertical: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.default,
    alignItems: 'center',
  },
  loginButtonText: {
    color: VSMStyles.colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: VSMStyles.colors.white,
    paddingVertical: VSMStyles.spacing.md - 2,
    borderRadius: VSMStyles.borderRadius.default,
    alignItems: 'center',
  },
  registerButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  continueGuestButton: {
    paddingVertical: VSMStyles.spacing.sm,
  },
  continueGuestText: {
    color: VSMStyles.colors.white,
    fontSize: 14,
    opacity: 0.8,
    textDecorationLine: 'underline',
  },
  guestFeatures: {
    margin: VSMStyles.spacing.lg,
    backgroundColor: VSMStyles.colors.white,
    padding: VSMStyles.spacing.lg,
    borderRadius: VSMStyles.borderRadius.lg,
    ...VSMStyles.shadows.small,
  },
  guestFeaturesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: VSMStyles.colors.textDark,
    marginBottom: VSMStyles.spacing.md,
  },
  featuresList: {
    gap: VSMStyles.spacing.md,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    marginLeft: VSMStyles.spacing.md,
    fontSize: 14,
    color: VSMStyles.colors.textMedium,
  },
  // Authenticated User Styles
  profileSection: {
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.white,
    paddingVertical: VSMStyles.spacing.xl,
    marginBottom: VSMStyles.spacing.lg,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: VSMStyles.spacing.lg,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: VSMStyles.colors.primary,
  },
  editAvatarButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: VSMStyles.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: VSMStyles.colors.white,
  },
  userName: {
    ...VSMStyles.typography.heading,
    fontSize: 22,
    marginBottom: VSMStyles.spacing.xs,
  },
  userEmail: {
    ...VSMStyles.typography.body,
    color: '#666',
  },
  statsSection: {
    backgroundColor: VSMStyles.colors.white,
    paddingVertical: VSMStyles.spacing.lg,
    paddingHorizontal: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.lg,
  },
  sectionTitle: {
    ...VSMStyles.typography.heading,
    marginBottom: VSMStyles.spacing.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.background,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.md,
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F4FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.sm,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: VSMStyles.colors.primary,
    marginBottom: VSMStyles.spacing.xs,
  },
  statLabel: {
    ...VSMStyles.typography.caption,
    textAlign: 'center',
    color: '#666',
  },
  menuSection: {
    backgroundColor: VSMStyles.colors.white,
    marginBottom: VSMStyles.spacing.lg,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: VSMStyles.colors.borderLight,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F4FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: VSMStyles.spacing.md,
  },
  menuItemText: {
    ...VSMStyles.typography.body,
    flex: 1,
  },
  logoutSection: {
    paddingHorizontal: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.lg,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md + 2,
    ...VSMStyles.shadows.small,
  },
  logoutButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: VSMStyles.spacing.sm,
  },
  bottomSpacing: {
    height: VSMStyles.spacing.xl,
  },
});
