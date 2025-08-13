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
import { VSMStyles } from '@/constants/VSMStyles';

const { width: screenWidth } = Dimensions.get('window');

// Mock event data - in real app this would come from API
const eventData = {
  id: '1',
  title: 'HCMC Night Run 2024',
  date: 'December 15, 2024',
  time: '6:00 PM',
  location: 'District 1, Ho Chi Minh City',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  participants: '5000+',
  distances: '5-10-21km',
  type: 'Virtual Race',
  description: `Join us for an unforgettable night running experience through the heart of Ho Chi Minh City. This event features multiple distance options suitable for runners of all levels.

The race starts at 6:00 PM when the city lights begin to illuminate the streets, creating a magical atmosphere for all participants. Professional timing chips will be provided for accurate results.

Registration includes a race kit with a technical t-shirt, bib number, timing chip, and post-race refreshments. Awards will be given to top finishers in each category.

Safety is our priority - the entire route will be clearly marked with volunteers and medical support stationed throughout the course.`,
  route: 'The race route takes you through iconic landmarks including Nguyen Hue Walking Street, Saigon Opera House, and along the beautiful Saigon River.',
  price: '₫500,000',
  registrationDeadline: 'December 10, 2024',
};

export default function EventDetailsScreen() {
  const params = useLocalSearchParams();
  const eventId = params.id;

  const handleBack = () => {
    router.back();
  };

  const handleRegister = () => {
    console.log('Register for event:', eventId);
    // TODO: Implement registration logic
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
            <View style={styles.heroOverlay}>
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color={VSMStyles.colors.white} />
              </TouchableOpacity>
            </View>
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
              <Text style={styles.statLabel}>Participants</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{eventData.distances}</Text>
              <Text style={styles.statLabel}>Distances</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{eventData.type}</Text>
              <Text style={styles.statLabel}>Type</Text>
            </View>
          </View>

          {/* About Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About The Race</Text>
            <Text style={styles.descriptionText}>{eventData.description}</Text>
          </View>

          {/* Route Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Race Route</Text>
            <Text style={styles.descriptionText}>{eventData.route}</Text>
            
            {/* Mock Map Container */}
            <View style={styles.mapContainer}>
              <View style={styles.mapPlaceholder}>
                <Ionicons name="map-outline" size={48} color="#ccc" />
                <Text style={styles.mapText}>Interactive Route Map</Text>
              </View>
            </View>
          </View>

          {/* Registration Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Registration Details</Text>
            <View style={styles.registrationInfo}>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Entry Fee:</Text>
                <Text style={styles.priceValue}>{eventData.price}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Registration Deadline:</Text>
                <Text style={styles.deadlineValue}>{eventData.registrationDeadline}</Text>
              </View>
            </View>
          </View>

          {/* Bottom spacing for sticky button */}
          <View style={styles.bottomSpacing} />
        </View>
      </ScrollView>

      {/* Sticky Register Button */}
      <View style={styles.stickyButtonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register Now</Text>
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
    height: 300,
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingTop: 50,
    paddingHorizontal: VSMStyles.spacing.lg,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 26,
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
  priceValue: {
    ...VSMStyles.typography.body,
    fontWeight: 'bold',
    color: VSMStyles.colors.primary,
    fontSize: 18,
  },
  deadlineValue: {
    ...VSMStyles.typography.body,
    fontWeight: '600',
    color: '#e74c3c',
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
    backgroundColor: VSMStyles.colors.primary,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md + 2,
    alignItems: 'center',
  },
  registerButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
