import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { VSMStyles } from '@/constants/VSMStyles';

const { width: screenWidth } = Dimensions.get('window');

// Real VSM 2025 event data from vsm.org.vn
const eventData = {
  id: '1',
  title: 'Vietnam Student Marathon 2025',
  subtitle: 'Chạy Vì Tương Lai',
  date: 'December 28, 2025',
  time: '5:00 AM',
  location: 'Sala Urban Area, Thủ Đức, TP.HCM',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  participants: '5000+',
  universities: '50+',
  type: 'Student Marathon',
  distances: [
    { name: '42KM', description: 'Marathon - Thử thách tối đa' },
    { name: '21KM', description: 'Half Marathon - Cự ly phổ biến' },
    { name: '10KM', description: 'Nâng cao - Cho runner có kinh nghiệm' },
    { name: '5KM', description: 'Khởi đầu - Dành cho người mới bắt đầu' }
  ],
  description: `Vietnam Student Marathon 2025 – Chạy Vì Tương Lai là sự kiện chạy bộ lớn nhất dành cho sinh viên Việt Nam.

Được tổ chức từ năm 2023, VSM đã trở thành cộng đồng chạy bộ sinh viên lớn nhất tại Việt Nam với sự tham gia của hơn 50 trường đại học và cao đẳng trên toàn quốc.

Sự kiện không chỉ là một cuộc thi chạy bộ mà còn là cơ hội để các bạn sinh viên thử thách bản thân, cải thiện sức khỏe và kết nối với nhau thông qua niềm đam mê chạy bộ.

VSM 2025 sẽ diễn ra tại Sala Urban Area - một trong những khu đô thị hiện đại nhất TP.HCM, mang đến trải nghiệm chạy bộ tuyệt vời cho tất cả người tham gia.`,
  route: 'Tuyến đường chạy sẽ đi qua các khu vực đẹp nhất của Sala Urban Area, Thủ Đức. Toàn bộ tuyến đường được bảo đảm an toàn với sự hỗ trợ của đội ngũ tình nguyện viên và y tế.',
  registrationInfo: {
    earlyBird: 'Đăng ký sớm đang mở',
    deadline: 'December 20, 2025',
    included: [
      'Áo kỷ niệm VSM 2025',
      'Số báo danh và chip đo thời gian',
      'Thức ăn và nước uống sau giải',
      'Huy chương hoàn thành',
      'Chứng nhận tham gia'
    ]
  }
};

export default function EventDetailsScreen() {
  const params = useLocalSearchParams();
  const eventId = params.id;

  const handleBack = () => {
    router.back();
  };

  const handleRegister = () => {
    console.log('Navigate to VSM 2025 registration');
    // In real app: Linking.openURL('https://vsm.org.vn/register');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Image with Back Button */}
        <View style={styles.heroContainer}>
          <ImageBackground
            source={{ uri: eventData.image }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <LinearGradient
              colors={['rgba(30, 64, 175, 0.7)', 'rgba(220, 38, 38, 0.8)']}
              style={styles.heroOverlay}
            >
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color={VSMStyles.colors.white} />
              </TouchableOpacity>
              <View style={styles.heroContent}>
                <View style={styles.heroBadge}>
                  <Text style={styles.heroBadgeText}>Vietnam Student Marathon</Text>
                </View>
                <Text style={styles.heroTitle}>VSM 2025</Text>
                <Text style={styles.heroSubtitle}>{eventData.subtitle}</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Event Info */}
        <View style={styles.contentContainer}>
          {/* Title and Basic Info */}
          <View style={styles.titleSection}>
            <Text style={styles.eventTitle}>{eventData.title}</Text>
            
            <View style={styles.infoRow}>
              <Ionicons name="calendar-outline" size={20} color={VSMStyles.colors.primary} />
              <Text style={styles.infoText}>{eventData.date} • {eventData.time}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={20} color={VSMStyles.colors.primary} />
              <Text style={styles.infoText}>{eventData.location}</Text>
            </View>
          </View>

          {/* Statistics */}
          <View style={styles.statsSection}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{eventData.participants}</Text>
              <Text style={styles.statLabel}>Sinh viên tham gia</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{eventData.universities}</Text>
              <Text style={styles.statLabel}>Trường ĐH/CĐ</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{eventData.type}</Text>
              <Text style={styles.statLabel}>Loại sự kiện</Text>
            </View>
          </View>

          {/* Distances */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cự ly thi đấu</Text>
            <View style={styles.distancesContainer}>
              {eventData.distances.map((distance, index) => (
                <View key={index} style={styles.distanceCard}>
                  <View style={styles.distanceHeader}>
                    <Text style={styles.distanceName}>{distance.name}</Text>
                    <View style={[styles.distanceIcon, { backgroundColor: 
                      index === 0 ? VSMStyles.colors.secondary : 
                      index === 1 ? VSMStyles.colors.primary : 
                      index === 2 ? VSMStyles.colors.gold : '#4ECDC4' 
                    }]}>
                      <Ionicons name="flag" size={16} color={VSMStyles.colors.white} />
                    </View>
                  </View>
                  <Text style={styles.distanceDescription}>{distance.description}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* About Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Về Vietnam Student Marathon</Text>
            <Text style={styles.descriptionText}>{eventData.description}</Text>
          </View>

          {/* Route Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tuyến đường chạy</Text>
            <Text style={styles.descriptionText}>{eventData.route}</Text>
            
            {/* Mock Map Container */}
            <View style={styles.mapContainer}>
              <View style={styles.mapPlaceholder}>
                <Ionicons name="map-outline" size={48} color="#ccc" />
                <Text style={styles.mapText}>Xem tuyến đường chi tiết</Text>
              </View>
            </View>
          </View>

          {/* Registration Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Thông tin đăng ký</Text>
            <View style={styles.registrationInfo}>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Trạng thái:</Text>
                <View style={styles.earlyBirdBadge}>
                  <Text style={styles.earlyBirdText}>{eventData.registrationInfo.earlyBird}</Text>
                </View>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Hạn đăng ký:</Text>
                <Text style={styles.deadlineValue}>{eventData.registrationInfo.deadline}</Text>
              </View>
            </View>

            <Text style={styles.includedTitle}>Bao gồm trong phí đăng ký:</Text>
            <View style={styles.includedList}>
              {eventData.registrationInfo.included.map((item, index) => (
                <View key={index} style={styles.includedItem}>
                  <Ionicons name="checkmark-circle" size={16} color={VSMStyles.colors.success} />
                  <Text style={styles.includedText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Bottom spacing for sticky button */}
          <View style={styles.bottomSpacing} />
        </View>
      </ScrollView>

      {/* Sticky Register Button */}
      <View style={styles.stickyButtonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <LinearGradient
            colors={[VSMStyles.colors.secondary, VSMStyles.colors.secondaryLight]}
            style={styles.registerGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.registerButtonText}>Đăng ký VSM 2025</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: VSMStyles.colors.white,
  },
  scrollView: {
    flex: 1,
  },
  heroContainer: {
    height: 320,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroImageStyle: {
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 50,
    paddingHorizontal: VSMStyles.spacing.lg,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  heroContent: {
    paddingBottom: VSMStyles.spacing.xl,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.xs,
    borderRadius: VSMStyles.borderRadius.lg,
    marginBottom: VSMStyles.spacing.md,
  },
  heroBadgeText: {
    color: VSMStyles.colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    marginBottom: VSMStyles.spacing.xs,
  },
  heroSubtitle: {
    fontSize: 18,
    color: VSMStyles.colors.white,
    fontWeight: '500',
    opacity: 0.9,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: VSMStyles.colors.white,
  },
  titleSection: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingTop: VSMStyles.spacing.lg,
    paddingBottom: VSMStyles.spacing.md,
  },
  eventTitle: {
    ...VSMStyles.typography.title,
    fontSize: 24,
    marginBottom: VSMStyles.spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.sm,
  },
  infoText: {
    ...VSMStyles.typography.body,
    marginLeft: VSMStyles.spacing.sm,
    color: '#666',
  },
  statsSection: {
    flexDirection: 'row',
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: VSMStyles.colors.borderLight,
    backgroundColor: VSMStyles.colors.background,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: VSMStyles.spacing.md,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: VSMStyles.colors.primary,
    marginBottom: VSMStyles.spacing.xs,
  },
  statLabel: {
    ...VSMStyles.typography.caption,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: VSMStyles.colors.borderLight,
  },
  sectionTitle: {
    ...VSMStyles.typography.heading,
    marginBottom: VSMStyles.spacing.md,
  },
  distancesContainer: {
    gap: VSMStyles.spacing.md,
  },
  distanceCard: {
    backgroundColor: VSMStyles.colors.background,
    padding: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.lg,
    borderWidth: 1,
    borderColor: VSMStyles.colors.borderLight,
  },
  distanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.xs,
  },
  distanceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: VSMStyles.colors.textDark,
  },
  distanceIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanceDescription: {
    fontSize: 14,
    color: VSMStyles.colors.textMedium,
  },
  descriptionText: {
    ...VSMStyles.typography.body,
    lineHeight: 24,
    color: '#555',
  },
  mapContainer: {
    marginTop: VSMStyles.spacing.lg,
    height: 200,
    borderRadius: VSMStyles.borderRadius.default,
    overflow: 'hidden',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: VSMStyles.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  mapText: {
    ...VSMStyles.typography.caption,
    marginTop: VSMStyles.spacing.sm,
    color: '#999',
  },
  registrationInfo: {
    backgroundColor: VSMStyles.colors.background,
    padding: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.default,
    marginBottom: VSMStyles.spacing.lg,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.sm,
  },
  priceLabel: {
    ...VSMStyles.typography.body,
    color: '#666',
  },
  earlyBirdBadge: {
    backgroundColor: VSMStyles.colors.success,
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: VSMStyles.spacing.xs,
    borderRadius: VSMStyles.borderRadius.sm,
  },
  earlyBirdText: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  deadlineValue: {
    ...VSMStyles.typography.body,
    fontWeight: '600',
    color: '#e74c3c',
  },
  includedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: VSMStyles.colors.textDark,
    marginBottom: VSMStyles.spacing.md,
  },
  includedList: {
    gap: VSMStyles.spacing.sm,
  },
  includedItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  includedText: {
    marginLeft: VSMStyles.spacing.sm,
    fontSize: 14,
    color: VSMStyles.colors.textMedium,
  },
  bottomSpacing: {
    height: 100,
  },
  stickyButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: VSMStyles.colors.white,
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.md,
    borderTopWidth: 1,
    borderTopColor: VSMStyles.colors.borderLight,
    ...VSMStyles.shadows.medium,
  },
  registerButton: {
    borderRadius: VSMStyles.borderRadius.lg,
    overflow: 'hidden',
  },
  registerGradient: {
    paddingVertical: VSMStyles.spacing.md + 2,
    alignItems: 'center',
  },
  registerButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
