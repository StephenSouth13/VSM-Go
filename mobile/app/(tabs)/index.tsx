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
}

interface Challenge {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  color: string;
  icon: string;
}

const featuredEvent: Event = {
  id: '1',
  title: 'BÌNH PHƯỚC MARATHON',
  titleEn: 'BINH PHUOC MARATHON',
  date: '26.11.2024',
  location: 'Bình Phước',
  locationEn: 'Binh Phuoc',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
  category: 'Marathon',
  featured: true,
  price: '₫350,000',
  participants: '3000+',
};

const upcomingEvents: Event[] = [
  {
    id: '2',
    title: 'Hồ Chí Minh City Marathon',
    titleEn: 'Ho Chi Minh City Marathon',
    date: '15.12.2024',
    location: 'TP. Hồ Chí Minh',
    locationEn: 'Ho Chi Minh City',
    image: 'https://images.unsplash.com/photo-1544537651-6add72a38e73?w=120&h=80&fit=crop',
    category: 'Marathon',
    price: '₫500,000',
    participants: '5000+',
  },
  {
    id: '3',
    title: 'Đà Nẵng Beach Run',
    titleEn: 'Da Nang Beach Run',
    date: '20.01.2025',
    location: 'Đà Nẵng',
    locationEn: 'Da Nang',
    image: 'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=120&h=80&fit=crop',
    category: 'Fun Run',
    price: '₫200,000',
    participants: '2000+',
  },
  {
    id: '4',
    title: 'Hà Nội Heritage Run',
    titleEn: 'Hanoi Heritage Run',
    date: '10.02.2025',
    location: 'Hà Nội',
    locationEn: 'Hanoi',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=120&h=80&fit=crop',
    category: 'Half Marathon',
    price: '₫300,000',
    participants: '4000+',
  },
];

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Thử thách 12 Con Giáp',
    titleEn: '12 Zodiac Challenge',
    description: 'Hoàn thành 12 giải chạy theo 12 con giáp',
    descriptionEn: 'Complete 12 races based on zodiac animals',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=150&fit=crop',
    color: '#FF6B35',
    icon: 'star',
  },
  {
    id: '2',
    title: 'Hành trình Xuyên Việt',
    titleEn: 'Vietnam Journey',
    description: 'Khám phá 63 tỉnh thành qua các giải chạy',
    descriptionEn: 'Explore 63 provinces through races',
    image: 'https://images.unsplash.com/photo-1587213811864-677dc3d6ac4e?w=300&h=150&fit=crop',
    color: '#4ECDC4',
    icon: 'map',
  },
  {
    id: '3',
    title: 'Chiến binh 12 Con Giáp',
    titleEn: '12 Zodiac Warriors',
    description: 'Thử thách sức bền với 12 cự ly khác nhau',
    descriptionEn: 'Endurance challenge with 12 different distances',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=150&fit=crop',
    color: '#45B7D1',
    icon: 'shield',
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

  const handleChallengePress = (challenge: Challenge) => {
    console.log('Navigate to challenge:', challenge.id);
  };

  const handleNotifications = () => {
    console.log('Navigate to notifications');
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
            placeholder={language === 'vi' ? 'Tìm kiếm giải đua...' : 'Search races...'}
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={VSMStyles.colors.textLight}
          />
        </View>
        <TouchableOpacity style={styles.notificationButton} onPress={handleNotifications}>
          <Ionicons name="notifications-outline" size={24} color={VSMStyles.colors.textDark} />
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Featured Event Hero */}
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
                colors={['rgba(30, 64, 175, 0.7)', 'rgba(220, 38, 38, 0.8)']}
                style={styles.featuredOverlay}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.featuredContent}>
                  <View style={styles.featuredBadge}>
                    <Text style={styles.featuredBadgeText}>Giải chạy nổi bật</Text>
                  </View>
                  <Text style={styles.featuredTitle}>
                    {language === 'vi' ? featuredEvent.title : featuredEvent.titleEn}
                  </Text>
                  <View style={styles.featuredInfo}>
                    <View style={styles.featuredInfoItem}>
                      <Ionicons name="calendar-outline" size={16} color={VSMStyles.colors.white} />
                      <Text style={styles.featuredInfoText}>{featuredEvent.date}</Text>
                    </View>
                    <View style={styles.featuredInfoItem}>
                      <Ionicons name="location-outline" size={16} color={VSMStyles.colors.white} />
                      <Text style={styles.featuredInfoText}>
                        {language === 'vi' ? featuredEvent.location : featuredEvent.locationEn}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.featuredStats}>
                    <View style={styles.statItem}>
                      <Text style={styles.statValue}>{featuredEvent.participants}</Text>
                      <Text style={styles.statLabel}>Người tham gia</Text>
                    </View>
                    <View style={styles.statItem}>
                      <Text style={styles.statValue}>{featuredEvent.price}</Text>
                      <Text style={styles.statLabel}>Phí tham gia</Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Themed Challenges Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bộ thử thách theo chủ đề</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.challengesContainer}
          >
            {challenges.map((challenge) => (
              <TouchableOpacity
                key={challenge.id}
                style={styles.challengeCard}
                onPress={() => handleChallengePress(challenge)}
                activeOpacity={0.8}
              >
                <ImageBackground
                  source={{ uri: challenge.image }}
                  style={styles.challengeImage}
                  imageStyle={styles.challengeImageStyle}
                >
                  <LinearGradient
                    colors={[`${challenge.color}CC`, `${challenge.color}99`]}
                    style={styles.challengeOverlay}
                  >
                    <View style={styles.challengeContent}>
                      <View style={styles.challengeIcon}>
                        <Ionicons name={challenge.icon as any} size={24} color={VSMStyles.colors.white} />
                      </View>
                      <Text style={styles.challengeTitle}>
                        {language === 'vi' ? challenge.title : challenge.titleEn}
                      </Text>
                      <Text style={styles.challengeDescription}>
                        {language === 'vi' ? challenge.description : challenge.descriptionEn}
                      </Text>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Upcoming Events Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Giải đua sắp tới</Text>
            <TouchableOpacity onPress={handleSeeAllEvents}>
              <Text style={styles.seeAllText}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventsList}>
            {upcomingEvents.map((event) => (
              <TouchableOpacity
                key={event.id}
                style={styles.eventCard}
                onPress={() => handleEventPress(event)}
                activeOpacity={0.7}
              >
                <Image source={{ uri: event.image }} style={styles.eventImage} />
                <View style={styles.eventInfo}>
                  <View style={styles.eventHeader}>
                    <Text style={styles.eventTitle}>
                      {language === 'vi' ? event.title : event.titleEn}
                    </Text>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryText}>{event.category}</Text>
                    </View>
                  </View>
                  <View style={styles.eventDetails}>
                    <View style={styles.eventDetailItem}>
                      <Ionicons name="calendar-outline" size={14} color={VSMStyles.colors.textLight} />
                      <Text style={styles.eventDetailText}>{event.date}</Text>
                    </View>
                    <View style={styles.eventDetailItem}>
                      <Ionicons name="location-outline" size={14} color={VSMStyles.colors.textLight} />
                      <Text style={styles.eventDetailText}>
                        {language === 'vi' ? event.location : event.locationEn}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.eventFooter}>
                    <Text style={styles.eventPrice}>{event.price}</Text>
                    <Text style={styles.eventParticipants}>{event.participants} tham gia</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={VSMStyles.colors.borderLight} />
              </TouchableOpacity>
            ))}
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
    height: 240,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    marginVertical: VSMStyles.spacing.md,
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
  featuredStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    opacity: 0.9,
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
  sectionTitle: {
    ...VSMStyles.typography.heading,
    fontSize: 18,
  },
  seeAllText: {
    color: VSMStyles.colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  challengesContainer: {
    paddingLeft: VSMStyles.spacing.lg,
    paddingRight: VSMStyles.spacing.md,
  },
  challengeCard: {
    width: screenWidth * 0.75,
    height: 140,
    marginRight: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.lg,
    overflow: 'hidden',
    ...VSMStyles.shadows.medium,
  },
  challengeImage: {
    flex: 1,
  },
  challengeImageStyle: {
    borderRadius: VSMStyles.borderRadius.lg,
  },
  challengeOverlay: {
    flex: 1,
    padding: VSMStyles.spacing.md,
  },
  challengeContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  challengeIcon: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: VSMStyles.spacing.sm,
    borderRadius: VSMStyles.borderRadius.default,
  },
  challengeTitle: {
    color: VSMStyles.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: VSMStyles.spacing.xs,
  },
  challengeDescription: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    opacity: 0.9,
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
  eventImage: {
    width: 70,
    height: 70,
    borderRadius: VSMStyles.borderRadius.default,
    marginRight: VSMStyles.spacing.md,
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
  categoryBadge: {
    backgroundColor: VSMStyles.colors.background,
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: 2,
    borderRadius: VSMStyles.borderRadius.sm,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '600',
    color: VSMStyles.colors.primary,
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
  eventFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: VSMStyles.colors.secondary,
  },
  eventParticipants: {
    ...VSMStyles.typography.caption,
    color: VSMStyles.colors.textLight,
  },
  bottomSpacing: {
    height: 100,
  },
});
