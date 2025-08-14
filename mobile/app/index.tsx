import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { VSMStyles, ButtonStyles } from '@/constants/VSMStyles';
import { useLanguage } from '@/hooks/useLanguage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function WelcomeScreen() {
  const { t, toggleLanguage, language } = useLanguage();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const handleGuest = () => {
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=800&fit=crop',
        }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
        resizeMode="cover"
      >
        {/* Gradient Overlay */}
        <LinearGradient
          colors={['rgba(30, 64, 175, 0.8)', 'rgba(220, 38, 38, 0.7)', 'rgba(30, 64, 175, 0.9)']}
          style={styles.gradientOverlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            {/* Language Toggle */}
            <View style={styles.header}>
              <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
                <Ionicons name="language" size={18} color={VSMStyles.colors.white} />
                <Text style={styles.languageText}>{language.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>

            <ScrollView 
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              {/* Logo Section */}
              <View style={styles.logoSection}>
                <View style={styles.logoContainer}>
                  <LinearGradient
                    colors={[VSMStyles.colors.white, '#F0F9FF']}
                    style={styles.logoGradient}
                  >
                    <Text style={styles.logoText}>VSM</Text>
                  </LinearGradient>
                </View>
                <Text style={styles.appName}>{t.appName}</Text>
                <Text style={styles.tagline}>{t.tagline}</Text>
              </View>

              {/* VSM Features Preview */}
              <View style={styles.featuresSection}>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Ionicons name="school" size={20} color={VSMStyles.colors.gold} />
                  </View>
                  <Text style={styles.featureText}>50+ Trường ĐH/CĐ</Text>
                </View>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Ionicons name="people" size={20} color={VSMStyles.colors.white} />
                  </View>
                  <Text style={styles.featureText}>10k+ Sinh viên</Text>
                </View>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Ionicons name="trophy" size={20} color={VSMStyles.colors.secondary} />
                  </View>
                  <Text style={styles.featureText}>Cộng đồng lớn nhất</Text>
                </View>
              </View>

              {/* Description */}
              <View style={styles.descriptionSection}>
                <Text style={styles.description}>{t.welcomeDescription}</Text>
              </View>

              {/* VSM 2025 Highlight */}
              <View style={styles.eventHighlight}>
                <View style={styles.eventBadge}>
                  <Ionicons name="calendar" size={14} color={VSMStyles.colors.white} />
                  <Text style={styles.eventBadgeText}>VSM 2025</Text>
                </View>
                <Text style={styles.eventTitle}>28.12.2025 • Sala Urban Area</Text>
                <Text style={styles.eventSubtitle}>Chạy Vì Tương Lai</Text>
              </View>

              {/* Action Buttons */}
              <View style={styles.buttonsSection}>
                <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
                  <LinearGradient
                    colors={[VSMStyles.colors.primary, VSMStyles.colors.primaryLight]}
                    style={styles.buttonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={styles.primaryButtonText}>{t.loginButton}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton} onPress={handleRegister}>
                  <LinearGradient
                    colors={[VSMStyles.colors.secondary, VSMStyles.colors.secondaryLight]}
                    style={styles.buttonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={styles.secondaryButtonText}>{t.createAccountButton}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ghostButton} onPress={handleGuest}>
                  <Text style={styles.ghostButtonText}>{t.continueAsGuest}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* Decorative Elements */}
            <View style={styles.decorativeElements}>
              <View style={[styles.decorativeCircle, styles.circle1]} />
              <View style={[styles.decorativeCircle, styles.circle2]} />
              <View style={[styles.decorativeCircle, styles.circle3]} />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
  },
  gradientOverlay: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingTop: VSMStyles.spacing.sm,
    paddingBottom: VSMStyles.spacing.sm,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: VSMStyles.spacing.xs,
    borderRadius: VSMStyles.borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  languageText: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: VSMStyles.spacing.xs,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.md,
    justifyContent: 'center',
    minHeight: screenHeight * 0.85,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.lg,
  },
  logoContainer: {
    marginBottom: VSMStyles.spacing.md,
  },
  logoGradient: {
    width: screenWidth < 375 ? 80 : 100,
    height: screenWidth < 375 ? 80 : 100,
    borderRadius: screenWidth < 375 ? 40 : 50,
    justifyContent: 'center',
    alignItems: 'center',
    ...VSMStyles.shadows.large,
  },
  logoText: {
    fontSize: screenWidth < 375 ? 32 : 40,
    fontWeight: 'bold',
    color: VSMStyles.colors.primary,
  },
  appName: {
    fontSize: screenWidth < 375 ? 20 : 24,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    marginBottom: VSMStyles.spacing.xs,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: screenWidth < 375 ? 12 : 14,
    color: VSMStyles.colors.white,
    textAlign: 'center',
    opacity: 0.9,
    fontWeight: '500',
    paddingHorizontal: VSMStyles.spacing.sm,
  },
  featuresSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: VSMStyles.spacing.lg,
    paddingHorizontal: VSMStyles.spacing.sm,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: VSMStyles.spacing.xs,
  },
  featureIcon: {
    width: screenWidth < 375 ? 35 : 40,
    height: screenWidth < 375 ? 35 : 40,
    borderRadius: screenWidth < 375 ? 17.5 : 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.xs,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  featureText: {
    color: VSMStyles.colors.white,
    fontSize: screenWidth < 375 ? 10 : 11,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 14,
  },
  descriptionSection: {
    alignItems: 'center',
    marginVertical: VSMStyles.spacing.lg,
    paddingHorizontal: VSMStyles.spacing.sm,
  },
  description: {
    fontSize: screenWidth < 375 ? 13 : 14,
    color: VSMStyles.colors.white,
    textAlign: 'center',
    lineHeight: screenWidth < 375 ? 18 : 20,
    opacity: 0.9,
    fontWeight: '400',
  },
  eventHighlight: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: VSMStyles.spacing.md,
    borderRadius: VSMStyles.borderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: VSMStyles.spacing.lg,
  },
  eventBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.secondary,
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: VSMStyles.spacing.xs,
    borderRadius: VSMStyles.borderRadius.default,
    marginBottom: VSMStyles.spacing.xs,
  },
  eventBadgeText: {
    color: VSMStyles.colors.white,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: VSMStyles.spacing.xs,
  },
  eventTitle: {
    fontSize: screenWidth < 375 ? 14 : 16,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    marginBottom: VSMStyles.spacing.xs,
    textAlign: 'center',
  },
  eventSubtitle: {
    fontSize: screenWidth < 375 ? 12 : 13,
    color: VSMStyles.colors.white,
    opacity: 0.9,
    textAlign: 'center',
  },
  buttonsSection: {
    gap: VSMStyles.spacing.sm,
    marginTop: VSMStyles.spacing.lg,
    paddingHorizontal: VSMStyles.spacing.xs,
  },
  primaryButton: {
    borderRadius: VSMStyles.borderRadius.default,
    overflow: 'hidden',
    ...VSMStyles.shadows.medium,
  },
  secondaryButton: {
    borderRadius: VSMStyles.borderRadius.default,
    overflow: 'hidden',
    ...VSMStyles.shadows.medium,
  },
  buttonGradient: {
    paddingVertical: VSMStyles.spacing.md,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: VSMStyles.colors.white,
    fontSize: screenWidth < 375 ? 14 : 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: VSMStyles.colors.white,
    fontSize: screenWidth < 375 ? 14 : 16,
    fontWeight: '600',
  },
  ghostButton: {
    backgroundColor: 'transparent',
    paddingVertical: VSMStyles.spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: VSMStyles.borderRadius.default,
  },
  ghostButtonText: {
    color: VSMStyles.colors.white,
    fontSize: screenWidth < 375 ? 13 : 14,
    fontWeight: '500',
    opacity: 0.9,
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  circle1: {
    width: 80,
    height: 80,
    top: '15%',
    right: -40,
  },
  circle2: {
    width: 60,
    height: 60,
    bottom: '25%',
    left: -30,
  },
  circle3: {
    width: 40,
    height: 40,
    top: '60%',
    right: '20%',
  },
});
