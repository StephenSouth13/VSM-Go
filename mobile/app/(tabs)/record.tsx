import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { VSMStyles } from '@/constants/VSMStyles';
import { useLanguage } from '@/hooks/useLanguage';

const { width: screenWidth } = Dimensions.get('window');

interface PersonalRecord {
  id: string;
  distance: string;
  time: string;
  pace: string;
  date: string;
  event: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  earned: boolean;
  date?: string;
}

const personalRecords: PersonalRecord[] = [
  {
    id: '1',
    distance: '5K',
    time: '22:15',
    pace: '4:27/km',
    date: '15.10.2024',
    event: 'Saigon River Run',
  },
  {
    id: '2',
    distance: '10K',
    time: '46:30',
    pace: '4:39/km',
    date: '20.09.2024',
    event: 'HCMC Marathon',
  },
  {
    id: '3',
    distance: 'Half Marathon',
    time: '1:45:20',
    pace: '5:00/km',
    date: '05.08.2024',
    event: 'Da Nang Challenge',
  },
  {
    id: '4',
    distance: 'Marathon',
    time: '3:45:15',
    pace: '5:20/km',
    date: '12.06.2024',
    event: 'Hanoi Marathon',
  },
];

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Người mới bắt đầu',
    description: 'Hoàn thành giải chạy đầu tiên',
    icon: 'medal',
    color: '#FFD700',
    earned: true,
    date: '15.05.2024',
  },
  {
    id: '2',
    title: 'Runner 5K',
    description: 'Hoàn thành 5 giải chạy 5K',
    icon: 'trophy',
    color: '#C0C0C0',
    earned: true,
    date: '20.08.2024',
  },
  {
    id: '3',
    title: 'Tốc độ ánh sáng',
    description: 'Pace dưới 4:30/km trong giải 5K',
    icon: 'flash',
    color: '#FF6B35',
    earned: true,
    date: '15.10.2024',
  },
  {
    id: '4',
    title: 'Marathon Master',
    description: 'Hoàn thành 3 giải marathon',
    icon: 'star',
    color: '#4ECDC4',
    earned: false,
  },
  {
    id: '5',
    title: 'Khám phá Việt Nam',
    description: 'Chạy ở 10 tỉnh thành khác nhau',
    icon: 'map',
    color: '#45B7D1',
    earned: false,
  },
  {
    id: '6',
    title: 'Streak Master',
    description: 'Chạy liên tiếp 30 ngày',
    icon: 'calendar',
    color: '#96CEB4',
    earned: false,
  },
];

export default function RecordScreen() {
  const { language } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<'records' | 'achievements'>('records');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Record</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-outline" size={24} color={VSMStyles.colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Tab Selector */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'records' && styles.activeTab]}
          onPress={() => setSelectedTab('records')}
        >
          <Text style={[styles.tabText, selectedTab === 'records' && styles.activeTabText]}>
            Kỷ lục cá nhân
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'achievements' && styles.activeTab]}
          onPress={() => setSelectedTab('achievements')}
        >
          <Text style={[styles.tabText, selectedTab === 'achievements' && styles.activeTabText]}>
            Thành tích
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {selectedTab === 'records' ? (
          /* Personal Records */
          <View style={styles.content}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Kỷ lục tốt nhất</Text>
              <Text style={styles.sectionSubtitle}>
                Những thành tích tốt nhất của bạn theo từng c�� ly
              </Text>
            </View>

            <View style={styles.recordsList}>
              {personalRecords.map((record, index) => (
                <View key={record.id} style={styles.recordCard}>
                  <LinearGradient
                    colors={
                      index === 0
                        ? [VSMStyles.colors.primary, VSMStyles.colors.primaryLight]
                        : [VSMStyles.colors.white, VSMStyles.colors.background]
                    }
                    style={styles.recordGradient}
                  >
                    <View style={styles.recordHeader}>
                      <Text style={[
                        styles.recordDistance,
                        index === 0 && styles.recordDistanceHighlight
                      ]}>
                        {record.distance}
                      </Text>
                      {index === 0 && (
                        <View style={styles.bestBadge}>
                          <Ionicons name="star" size={12} color={VSMStyles.colors.white} />
                          <Text style={styles.bestBadgeText}>Best</Text>
                        </View>
                      )}
                    </View>
                    <Text style={[
                      styles.recordTime,
                      index === 0 && styles.recordTimeHighlight
                    ]}>
                      {record.time}
                    </Text>
                    <View style={styles.recordDetails}>
                      <View style={styles.recordDetailItem}>
                        <Ionicons 
                          name="speedometer-outline" 
                          size={14} 
                          color={index === 0 ? VSMStyles.colors.white : VSMStyles.colors.textLight} 
                        />
                        <Text style={[
                          styles.recordDetailText,
                          index === 0 && styles.recordDetailHighlight
                        ]}>
                          {record.pace}
                        </Text>
                      </View>
                      <View style={styles.recordDetailItem}>
                        <Ionicons 
                          name="calendar-outline" 
                          size={14} 
                          color={index === 0 ? VSMStyles.colors.white : VSMStyles.colors.textLight} 
                        />
                        <Text style={[
                          styles.recordDetailText,
                          index === 0 && styles.recordDetailHighlight
                        ]}>
                          {record.date}
                        </Text>
                      </View>
                    </View>
                    <Text style={[
                      styles.recordEvent,
                      index === 0 && styles.recordEventHighlight
                    ]}>
                      {record.event}
                    </Text>
                  </LinearGradient>
                </View>
              ))}
            </View>
          </View>
        ) : (
          /* Achievements */
          <View style={styles.content}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Thành tích đạt được</Text>
              <Text style={styles.sectionSubtitle}>
                Những cột mốc quan trọng trong hành trình chạy bộ
              </Text>
            </View>

            <View style={styles.achievementsList}>
              {achievements.map((achievement) => (
                <View key={achievement.id} style={[
                  styles.achievementCard,
                  !achievement.earned && styles.achievementCardLocked
                ]}>
                  <View style={[
                    styles.achievementIcon,
                    { backgroundColor: achievement.earned ? achievement.color : '#E5E7EB' }
                  ]}>
                    <Ionicons 
                      name={achievement.icon as any} 
                      size={24} 
                      color={achievement.earned ? VSMStyles.colors.white : VSMStyles.colors.textLight} 
                    />
                  </View>
                  <View style={styles.achievementContent}>
                    <Text style={[
                      styles.achievementTitle,
                      !achievement.earned && styles.achievementTitleLocked
                    ]}>
                      {achievement.title}
                    </Text>
                    <Text style={[
                      styles.achievementDescription,
                      !achievement.earned && styles.achievementDescriptionLocked
                    ]}>
                      {achievement.description}
                    </Text>
                    {achievement.earned && achievement.date && (
                      <Text style={styles.achievementDate}>
                        Đạt được: {achievement.date}
                      </Text>
                    )}
                  </View>
                  {achievement.earned ? (
                    <View style={styles.earnedBadge}>
                      <Ionicons name="checkmark-circle" size={24} color={VSMStyles.colors.success} />
                    </View>
                  ) : (
                    <View style={styles.lockedBadge}>
                      <Ionicons name="lock-closed" size={20} color={VSMStyles.colors.textLight} />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

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
  shareButton: {
    padding: VSMStyles.spacing.xs,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: VSMStyles.colors.white,
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingBottom: VSMStyles.spacing.md,
  },
  tab: {
    flex: 1,
    paddingVertical: VSMStyles.spacing.sm,
    paddingHorizontal: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.lg,
    marginHorizontal: VSMStyles.spacing.xs,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: VSMStyles.colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: VSMStyles.colors.textMedium,
  },
  activeTabText: {
    color: VSMStyles.colors.white,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingTop: VSMStyles.spacing.lg,
  },
  sectionHeader: {
    marginBottom: VSMStyles.spacing.xl,
  },
  sectionTitle: {
    ...VSMStyles.typography.heading,
    marginBottom: VSMStyles.spacing.xs,
  },
  sectionSubtitle: {
    ...VSMStyles.typography.bodySmall,
    color: VSMStyles.colors.textMedium,
  },
  recordsList: {
    gap: VSMStyles.spacing.md,
  },
  recordCard: {
    borderRadius: VSMStyles.borderRadius.lg,
    overflow: 'hidden',
    ...VSMStyles.shadows.medium,
  },
  recordGradient: {
    padding: VSMStyles.spacing.lg,
  },
  recordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.sm,
  },
  recordDistance: {
    fontSize: 18,
    fontWeight: 'bold',
    color: VSMStyles.colors.textDark,
  },
  recordDistanceHighlight: {
    color: VSMStyles.colors.white,
  },
  bestBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: 4,
    borderRadius: VSMStyles.borderRadius.lg,
  },
  bestBadgeText: {
    color: VSMStyles.colors.white,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 4,
  },
  recordTime: {
    fontSize: 28,
    fontWeight: 'bold',
    color: VSMStyles.colors.primary,
    marginBottom: VSMStyles.spacing.sm,
  },
  recordTimeHighlight: {
    color: VSMStyles.colors.white,
  },
  recordDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: VSMStyles.spacing.sm,
  },
  recordDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordDetailText: {
    fontSize: 14,
    color: VSMStyles.colors.textMedium,
    marginLeft: VSMStyles.spacing.xs,
  },
  recordDetailHighlight: {
    color: VSMStyles.colors.white,
  },
  recordEvent: {
    fontSize: 12,
    color: VSMStyles.colors.textLight,
    fontStyle: 'italic',
  },
  recordEventHighlight: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  achievementsList: {
    gap: VSMStyles.spacing.md,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.white,
    padding: VSMStyles.spacing.lg,
    borderRadius: VSMStyles.borderRadius.lg,
    ...VSMStyles.shadows.small,
  },
  achievementCardLocked: {
    opacity: 0.6,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: VSMStyles.spacing.md,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: VSMStyles.colors.textDark,
    marginBottom: VSMStyles.spacing.xs,
  },
  achievementTitleLocked: {
    color: VSMStyles.colors.textLight,
  },
  achievementDescription: {
    fontSize: 14,
    color: VSMStyles.colors.textMedium,
    marginBottom: VSMStyles.spacing.xs,
  },
  achievementDescriptionLocked: {
    color: VSMStyles.colors.textLight,
  },
  achievementDate: {
    fontSize: 12,
    color: VSMStyles.colors.textLight,
    fontStyle: 'italic',
  },
  earnedBadge: {
    marginLeft: VSMStyles.spacing.sm,
  },
  lockedBadge: {
    marginLeft: VSMStyles.spacing.sm,
  },
  bottomSpacing: {
    height: 100,
  },
});
