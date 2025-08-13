import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { VSMStyles } from '@/constants/VSMStyles';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  featured?: boolean;
}

const featuredEvent: Event = {
  id: '1',
  title: 'HCMC Midnight Marathon',
  date: 'Dec 15, 2024',
  location: 'Ho Chi Minh City',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
  featured: true,
};

const upcomingEvents: Event[] = [
  {
    id: '2',
    title: 'Da Nang Beach Run',
    date: 'Jan 20, 2025',
    location: 'Da Nang',
    image: 'https://images.unsplash.com/photo-1544537651-6add72a38e73?w=120&h=80&fit=crop',
  },
  {
    id: '3',
    title: 'Hanoi Morning Jog',
    date: 'Feb 10, 2025',
    location: 'Hanoi',
    image: 'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=120&h=80&fit=crop',
  },
  {
    id: '4',
    title: 'Mekong Delta Trail Run',
    date: 'Mar 5, 2025',
    location: 'Can Tho',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=120&h=80&fit=crop',
  },
];

export default function HomeScreen() {
  const handleEventPress = (event: Event) => {
    // Navigate to event details
    router.push(`/event-details?id=${event.id}`);
  };

  const handleSeeAllEvents = () => {
    // Navigate to all events screen
    console.log('Navigate to all events');
  };

  const handleProfilePress = () => {
    // Navigate to profile
    router.push('/(tabs)/profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Hello, Stephen!</Text>
          </View>
          <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={24} color={VSMStyles.colors.primary} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Featured Event */}
        <TouchableOpacity
          style={styles.featuredCard}
          onPress={() => handleEventPress(featuredEvent)}
          activeOpacity={0.8}
        >
          <ImageBackground
            source={{ uri: featuredEvent.image }}
            style={styles.featuredBackground}
            imageStyle={styles.featuredImage}
          >
            <View style={styles.featuredOverlay}>
              <View style={styles.featuredContent}>
                <Text style={styles.featuredTitle}>{featuredEvent.title}</Text>
                <View style={styles.featuredInfo}>
                  <Ionicons name="calendar-outline" size={16} color={VSMStyles.colors.white} />
                  <Text style={styles.featuredDate}>{featuredEvent.date}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Upcoming Events Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity onPress={handleSeeAllEvents}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Events List */}
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
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View style={styles.eventDetails}>
                  <Ionicons name="calendar-outline" size={14} color="#666" />
                  <Text style={styles.eventDate}>{event.date}</Text>
                </View>
                <View style={styles.eventDetails}>
                  <Ionicons name="location-outline" size={14} color="#666" />
                  <Text style={styles.eventLocation}>{event.location}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: VSMStyles.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.md,
    backgroundColor: VSMStyles.colors.white,
  },
  welcomeSection: {
    flex: 1,
  },
  welcomeText: {
    ...VSMStyles.typography.heading,
    fontSize: 24,
  },
  profileButton: {
    padding: VSMStyles.spacing.xs,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F4FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredCard: {
    marginHorizontal: VSMStyles.spacing.lg,
    marginTop: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.lg,
    borderRadius: VSMStyles.borderRadius.large,
    overflow: 'hidden',
    ...VSMStyles.shadows.medium,
  },
  featuredBackground: {
    height: 200,
    justifyContent: 'flex-end',
  },
  featuredImage: {
    borderRadius: VSMStyles.borderRadius.large,
  },
  featuredOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: VSMStyles.spacing.lg,
  },
  featuredContent: {
    flexDirection: 'column',
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    marginBottom: VSMStyles.spacing.sm,
  },
  featuredInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredDate: {
    fontSize: 16,
    color: VSMStyles.colors.white,
    marginLeft: VSMStyles.spacing.xs,
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
    ...VSMStyles.typography.body,
    color: VSMStyles.colors.primary,
    fontWeight: '500',
  },
  eventsList: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingBottom: VSMStyles.spacing.xl,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: VSMStyles.colors.white,
    borderRadius: VSMStyles.borderRadius.default,
    padding: VSMStyles.spacing.md,
    marginBottom: VSMStyles.spacing.md,
    alignItems: 'center',
    ...VSMStyles.shadows.small,
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: VSMStyles.borderRadius.default,
    marginRight: VSMStyles.spacing.md,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    ...VSMStyles.typography.body,
    fontWeight: '600',
    marginBottom: VSMStyles.spacing.xs,
  },
  eventDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  eventDate: {
    ...VSMStyles.typography.caption,
    marginLeft: VSMStyles.spacing.xs,
  },
  eventLocation: {
    ...VSMStyles.typography.caption,
    marginLeft: VSMStyles.spacing.xs,
  },
});
