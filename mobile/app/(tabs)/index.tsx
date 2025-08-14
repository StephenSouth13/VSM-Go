import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { VSMStyles } from '@/constants/VSMStyles';
import { useLanguage } from '@/hooks/useLanguage';

const { width: screenWidth } = Dimensions.get('window');

interface Event {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  location: string;
  locationEn: string;
  image: string;
  category: string;
  featured?: boolean;
  price: string;
  participants: string;
  distances: string[];
}

interface PastEvent {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  location: string;
  participants: string;
  year: string;
  status: 'completed';
}

// Real VSM 2025 event from vsm.org.vn
const featuredEvent: Event = {
  id: '1',
  title: 'Vietnam Student Marathon 2025 – Chạy Vì Tương Lai',
  titleEn: 'Vietnam Student Marathon 2025 – Run For The Future',
  date: '28.12.2025',
  location: 'Sala Urban Area, Thủ Đức, TP.HCM',
  locationEn: 'Sala Urban Area, Thu Duc City, Ho Chi Minh City',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
  category: 'Student Marathon',
  featured: true,
  price: 'Đăng ký sớm',
  participants: '5000+ sinh viên',
  distances: ['42KM - Marathon', '21KM - Half Marathon', '10KM - Nâng cao', '5KM - Khởi đầu'],
};

// Real past VSM events from vsm.org.vn
const pastEvents: PastEvent[] = [
  {
    id: '2',
    title: 'VSM 2024 – Run To Lampas',
    titleEn: 'VSM 2024 – Run To Lampas',
    date: '22.12.2024',
    location: 'Lampas Island',
    participants: '3000+ sinh viên',
    year: '2024',
    status: 'completed',
  },
  {
    id: '3',
    title: 'VSM 2024 Kick-off',
    titleEn: 'VSM 2024 Kick-off',
    date: '31.03.2024',
    location: 'TP. Hồ Chí Minh',
    participants: '2500+ sinh viên',
    year: '2024',
    status: 'completed',
  },
  {
    id: '4',
    title: 'VSM 2023 Finals',
    titleEn: 'VSM 2023 Finals',
    date: '24.12.2023',
    location: 'TP. Hồ Chí Minh',
    participants: '4000+ sinh viên',
    year: '2023',
    status: 'completed',
  },
  {
    id: '5',
    title: 'Run For Green 2023',
    titleEn: 'Run For Green 2023',
    date: '15.10.2023',
    location: 'Tân Uyên, Bình Dương',
    participants: '1500+ sinh viên',
    year: '2023',
    status: 'completed',
  },
];

const vsmStats = [
  {
    id: '1',
    title: '50+',
    subtitle: 'Trường ĐH/CĐ',
    icon: 'school',
    color: '#4ECDC4',
  },
  {
    id: '2',
    title: '10,000+',
    subtitle: 'Sinh viên tham gia',
    icon: 'people',
    color: '#FF6B35',
  },
  {
    id: '3',
    title: '2023',
    subtitle: 'Năm thành lập',
    icon: 'calendar',
    color: '#45B7D1',
  },
];

export default function HomeScreen() {
  const { t, language } = useLanguage();
  const [searchText, setSearchText] = useState('');

  const handleEventPress = (event: Event) => {
    router.push(`/event-details?id=${event.id}`);
  };

  const handleSeeAllEvents = () => {
    console.log('Navigate to all events');
  };

  const handleNotifications = () => {
    console.log('Navigate to notifications');
  };

  const handleRegisterVSM2025 = () => {
    console.log('Navigate to VSM 2025 registration');
    // In real app: router.push('https://vsm.org.vn/register');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={VSMStyles.colors.white} />
      
      {/* Header with Search */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={VSMStyles.colors.textLight} />
          <TextInput
            style={styles.searchInput}
            placeholder={language === 'vi' ? 'Tìm kiếm sự kiện VSM...' : 'Search VSM events...'}
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={VSMStyles.colors.textLight}
          />
        </View>
        <TouchableOpacity style={styles.notificationButton} onPress={handleNotifications}>
          <Ionicons name="notifications-outline" size={24} color={VSMStyles.colors.textDark} />
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* VSM 2025 Featured Event Hero */}
        <View style={styles.heroSection}>
          <TouchableOpacity
            style={styles.featuredCard}
            onPress={() => handleEventPress(featuredEvent)}
            activeOpacity={0.9}
          >
            <ImageBackground
              source={{ uri: featuredEvent.image }}
              style={styles.featuredBackground}
              imageStyle={styles.featuredImageStyle}
            >
              <LinearGradient
                colors={['rgba(30, 64, 175, 0.8)', 'rgba(220, 38, 38, 0.7)']}
                style={styles.featuredOverlay}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.featuredContent}>
                  <View style={styles.featuredBadge}>
                    <Text style={styles.featuredBadgeText}>Sự kiện chính</Text>
                  </View>
                  <Text style={styles.featuredTitle}>
                    {language === 'vi' ? 'VSM 2025' : 'VSM 2025'}
                  </Text>
                  <Text style={styles.featuredSubtitle}>
                    {language === 'vi' ? 'Chạy Vì Tương Lai' : 'Run For The Future'}
                  </Text>
                  <View style={styles.featuredInfo}>
                    <View style={styles.featuredInfoItem}>
                      <Ionicons name="calendar-outline" size={16} color={VSMStyles.colors.white} />
                      <Text style={styles.featuredInfoText}>{featuredEvent.date}</Text>
                    </View>
                    <View style={styles.featuredInfoItem}>
                      <Ionicons name="location-outline" size={16} color={VSMStyles.colors.white} />
                      <Text style={styles.featuredInfoText}>
                        {language === 'vi' ? 'Sala Urban Area, Thủ Đức' : 'Sala Urban Area, Thu Duc'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.distancesContainer}>
                    <Text style={styles.distancesTitle}>Cự ly:</Text>
                    <Text style={styles.distancesText}>42KM • 21KM • 10KM • 5KM</Text>
                  </View>
                  <TouchableOpacity style={styles.registerButton} onPress={handleRegisterVSM2025}>
                    <Text style={styles.registerButtonText}>Đăng ký VSM 2025</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* VSM Statistics */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Về Vietnam Student Marathon</Text>
          <View style={styles.statsContainer}>
            {vsmStats.map((stat) => (
              <View key={stat.id} style={styles.statCard}>
                <View style={[styles.statIcon, { backgroundColor: stat.color }]}>
                  <Ionicons name={stat.icon as any} size={24} color={VSMStyles.colors.white} />
                </View>
                <Text style={styles.statValue}>{stat.title}</Text>
                <Text style={styles.statLabel}>{stat.subtitle}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.vsmDescription}>
            VSM là cộng đồng chạy bộ sinh viên lớn nhất Việt Nam, thành lập từ năm 2023 
            với mục tiêu thúc đẩy tinh thần thể thao và kết nối sinh viên toàn quốc.
          </Text>
        </View>

        {/* Past Events Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sự kiện đã diễn ra</Text>
            <TouchableOpacity onPress={handleSeeAllEvents}>
              <Text style={styles.seeAllText}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventsList}>
            {pastEvents.map((event) => (
              <TouchableOpacity
                key={event.id}
                style={styles.eventCard}
                onPress={() => console.log('View past event:', event.id)}
                activeOpacity={0.7}
              >
                <View style={styles.eventImageContainer}>
                  <View style={styles.yearBadge}>
                    <Text style={styles.yearText}>{event.year}</Text>
                  </View>
                </View>
                <View style={styles.eventInfo}>
                  <View style={styles.eventHeader}>
                    <Text style={styles.eventTitle}>
                      {language === 'vi' ? event.title : event.titleEn}
                    </Text>
                    <View style={styles.completedBadge}>
                      <Ionicons name="checkmark-circle" size={16} color={VSMStyles.colors.success} />
                      <Text style={styles.completedText}>Hoàn thành</Text>
                    </View>
                  </View>
                  <View style={styles.eventDetails}>
                    <View style={styles.eventDetailItem}>
                      <Ionicons name="calendar-outline" size={14} color={VSMStyles.colors.textLight} />
                      <Text style={styles.eventDetailText}>{event.date}</Text>
                    </View>
                    <View style={styles.eventDetailItem}>
                      <Ionicons name="location-outline" size={14} color={VSMStyles.colors.textLight} />
                      <Text style={styles.eventDetailText}>{event.location}</Text>
                    </View>
                  </View>
                  <Text style={styles.participantsText}>{event.participants}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={VSMStyles.colors.borderLight} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Community Section */}
        <View style={styles.communitySection}>
          <Text style={styles.sectionTitle}>Tham gia cộng đồng VSM</Text>
          <View style={styles.communityCard}>
            <LinearGradient
              colors={[VSMStyles.colors.primary, VSMStyles.colors.primaryLight]}
              style={styles.communityGradient}
            >
              <Ionicons name="people" size={32} color={VSMStyles.colors.white} />
              <Text style={styles.communityTitle}>Kết nối với 10,000+ sinh viên</Text>
              <Text style={styles.communityDescription}>
                Chia sẻ kinh nghiệm, tìm bạn chạy cùng và cập nhật tin tức mới nhất
              </Text>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Tham gia ngay</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>

        {/* Bottom spacing for tab bar */}
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
    alignItems: 'center',
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.md,
    backgroundColor: VSMStyles.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: VSMStyles.colors.borderLight,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.background,
    borderRadius: VSMStyles.borderRadius.xl,
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.sm,
    marginRight: VSMStyles.spacing.md,
  },
  searchInput: {
    flex: 1,
    marginLeft: VSMStyles.spacing.sm,
    fontSize: 16,
    color: VSMStyles.colors.textDark,
  },
  notificationButton: {
    position: 'relative',
    padding: VSMStyles.spacing.xs,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: VSMStyles.colors.secondary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingTop: VSMStyles.spacing.lg,
  },
  featuredCard: {
    borderRadius: VSMStyles.borderRadius.xl,
    overflow: 'hidden',
    ...VSMStyles.shadows.large,
  },
  featuredBackground: {
    height: 280,
  },
  featuredImageStyle: {
    borderRadius: VSMStyles.borderRadius.xl,
  },
  featuredOverlay: {
    flex: 1,
    padding: VSMStyles.spacing.lg,
    justifyContent: 'space-between',
  },
  featuredContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  featuredBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.xs,
    borderRadius: VSMStyles.borderRadius.lg,
  },
  featuredBadgeText: {
    color: VSMStyles.colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
  featuredTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  featuredSubtitle: {
    fontSize: 18,
    color: VSMStyles.colors.white,
    opacity: 0.9,
    marginBottom: VSMStyles.spacing.md,
  },
  featuredInfo: {
    marginBottom: VSMStyles.spacing.md,
  },
  featuredInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.xs,
  },
  featuredInfoText: {
    color: VSMStyles.colors.white,
    fontSize: 14,
    marginLeft: VSMStyles.spacing.xs,
    fontWeight: '500',
  },
  distancesContainer: {
    marginBottom: VSMStyles.spacing.lg,
  },
  distancesTitle: {
    color: VSMStyles.colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: VSMStyles.spacing.xs,
  },
  distancesText: {
    color: VSMStyles.colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  registerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.lg,
    alignItems: 'center',
  },
  registerButtonText: {
    color: VSMStyles.colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  statsSection: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingTop: VSMStyles.spacing.xl,
  },
  sectionTitle: {
    ...VSMStyles.typography.heading,
    fontSize: 18,
    marginBottom: VSMStyles.spacing.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: VSMStyles.spacing.lg,
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.sm,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: VSMStyles.colors.textDark,
    marginBottom: VSMStyles.spacing.xs,
  },
  statLabel: {
    fontSize: 12,
    color: VSMStyles.colors.textMedium,
    textAlign: 'center',
  },
  vsmDescription: {
    fontSize: 14,
    color: VSMStyles.colors.textMedium,
    lineHeight: 20,
    textAlign: 'center',
  },
  section: {
    marginTop: VSMStyles.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.md,
  },
  seeAllText: {
    color: VSMStyles.colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  eventsList: {
    paddingHorizontal: VSMStyles.spacing.lg,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: VSMStyles.colors.white,
    borderRadius: VSMStyles.borderRadius.lg,
    padding: VSMStyles.spacing.md,
    marginBottom: VSMStyles.spacing.md,
    alignItems: 'center',
    ...VSMStyles.shadows.small,
  },
  eventImageContainer: {
    width: 60,
    height: 60,
    borderRadius: VSMStyles.borderRadius.default,
    backgroundColor: VSMStyles.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: VSMStyles.spacing.md,
  },
  yearBadge: {
    backgroundColor: VSMStyles.colors.primary,
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: VSMStyles.spacing.xs,
    borderRadius: VSMStyles.borderRadius.default,
  },
  yearText: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  eventInfo: {
    flex: 1,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: VSMStyles.spacing.xs,
  },
  eventTitle: {
    ...VSMStyles.typography.body,
    fontWeight: '600',
    flex: 1,
    marginRight: VSMStyles.spacing.sm,
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.background,
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: 2,
    borderRadius: VSMStyles.borderRadius.sm,
  },
  completedText: {
    fontSize: 10,
    fontWeight: '600',
    color: VSMStyles.colors.success,
    marginLeft: 4,
  },
  eventDetails: {
    marginBottom: VSMStyles.spacing.sm,
  },
  eventDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  eventDetailText: {
    ...VSMStyles.typography.caption,
    marginLeft: VSMStyles.spacing.xs,
    color: VSMStyles.colors.textLight,
  },
  participantsText: {
    fontSize: 12,
    fontWeight: '600',
    color: VSMStyles.colors.primary,
  },
  communitySection: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingTop: VSMStyles.spacing.xl,
  },
  communityCard: {
    borderRadius: VSMStyles.borderRadius.xl,
    overflow: 'hidden',
    ...VSMStyles.shadows.medium,
  },
  communityGradient: {
    padding: VSMStyles.spacing.xl,
    alignItems: 'center',
  },
  communityTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    marginTop: VSMStyles.spacing.md,
    marginBottom: VSMStyles.spacing.sm,
    textAlign: 'center',
  },
  communityDescription: {
    fontSize: 14,
    color: VSMStyles.colors.white,
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: VSMStyles.spacing.lg,
    lineHeight: 20,
  },
  joinButton: {
    backgroundColor: VSMStyles.colors.white,
    paddingHorizontal: VSMStyles.spacing.xl,
    paddingVertical: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.lg,
  },
  joinButtonText: {
    color: VSMStyles.colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 100,
  },
});
