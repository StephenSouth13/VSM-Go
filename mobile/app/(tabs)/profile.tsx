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
import { VSMStyles } from '@/constants/VSMStyles';

interface UserStat {
  label: string;
  value: string;
  icon: string;
}

interface MenuOption {
  title: string;
  icon: string;
  action: () => void;
}

const userStats: UserStat[] = [
  { label: 'Events Joined', value: '12', icon: 'trophy' },
  { label: 'Total KM', value: '156.8', icon: 'speedometer' },
  { label: 'Avg. Pace', value: '5:30', icon: 'time' },
  { label: 'Badges', value: '8', icon: 'medal' },
];

export default function ProfileScreen() {
  const handleEditProfile = () => {
    console.log('Navigate to edit profile');
    // TODO: Navigate to edit profile screen
  };

  const handleMyVouchers = () => {
    console.log('Navigate to vouchers');
    // TODO: Navigate to vouchers screen
  };

  const handlePrivacyPolicy = () => {
    console.log('Navigate to privacy policy');
    // TODO: Navigate to privacy policy screen
  };

  const handleSettings = () => {
    console.log('Navigate to settings');
    // TODO: Navigate to settings screen
  };

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Log Out', 
          style: 'destructive',
          onPress: () => {
            // TODO: Implement logout logic
            console.log('User logged out');
            router.replace('/login');
          }
        },
      ]
    );
  };

  const menuOptions: MenuOption[] = [
    { title: 'Edit Profile', icon: 'person-outline', action: handleEditProfile },
    { title: 'My Vouchers', icon: 'ticket-outline', action: handleMyVouchers },
    { title: 'Privacy Policy', icon: 'shield-outline', action: handlePrivacyPolicy },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
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
                uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color={VSMStyles.colors.white} />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>Quach Thanh Long</Text>
          <Text style={styles.userEmail}>quach.thanh.long@example.com</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>My Stats</Text>
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
            <Text style={styles.logoutButtonText}>Log Out</Text>
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
  settingsButton: {
    padding: VSMStyles.spacing.xs,
  },
  scrollView: {
    flex: 1,
  },
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
