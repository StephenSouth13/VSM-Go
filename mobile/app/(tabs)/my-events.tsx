import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { VSMStyles } from '@/constants/VSMStyles';

interface UserEvent {
  id: string;
  title: string;
  date: string;
  status: 'registered' | 'completed' | 'upcoming';
  image: string;
}

const userEvents: UserEvent[] = [
  {
    id: '1',
    title: 'HCMC Midnight Marathon',
    date: 'Dec 15, 2024',
    status: 'registered',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=80&fit=crop',
  },
  {
    id: '2',
    title: 'Saigon River Run',
    date: 'Nov 20, 2024',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1544537651-6add72a38e73?w=120&h=80&fit=crop',
  },
];

export default function MyEventsScreen() {
  const handleEventPress = (event: UserEvent) => {
    router.push(`/event-details?id=${event.id}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'registered':
        return VSMStyles.colors.primary;
      case 'completed':
        return VSMStyles.colors.success;
      case 'upcoming':
        return '#FFA500';
      default:
        return '#999';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'registered':
        return 'Registered';
      case 'completed':
        return 'Completed';
      case 'upcoming':
        return 'Upcoming';
      default:
        return status;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Events</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {userEvents.length > 0 ? (
          <View style={styles.eventsList}>
            {userEvents.map((event) => (
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
                  <View style={[styles.statusBadge, { backgroundColor: getStatusColor(event.status) }]}>
                    <Text style={styles.statusText}>{getStatusText(event.status)}</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="calendar-outline" size={64} color="#ccc" />
            <Text style={styles.emptyTitle}>No Events Yet</Text>
            <Text style={styles.emptySubtitle}>Join your first running event!</Text>
            <TouchableOpacity 
              style={styles.browseButton}
              onPress={() => router.push('/(tabs)')}
            >
              <Text style={styles.browseButtonText}>Browse Events</Text>
            </TouchableOpacity>
          </View>
        )}
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
  scrollView: {
    flex: 1,
  },
  eventsList: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingTop: VSMStyles.spacing.lg,
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
    marginBottom: VSMStyles.spacing.xs,
  },
  eventDate: {
    ...VSMStyles.typography.caption,
    marginLeft: VSMStyles.spacing.xs,
  },
  statusBadge: {
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: VSMStyles.colors.white,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: VSMStyles.spacing.xl,
    paddingTop: VSMStyles.spacing.xl * 3,
  },
  emptyTitle: {
    ...VSMStyles.typography.heading,
    marginTop: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.sm,
  },
  emptySubtitle: {
    ...VSMStyles.typography.body,
    color: '#666',
    textAlign: 'center',
    marginBottom: VSMStyles.spacing.xl,
  },
  browseButton: {
    backgroundColor: VSMStyles.colors.primary,
    paddingHorizontal: VSMStyles.spacing.xl,
    paddingVertical: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.default,
  },
  browseButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
