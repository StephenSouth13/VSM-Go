import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
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
      >
        {/* Gradient Overlay */}
        <LinearGradient
          colors={['rgba(30, 64, 175, 0.8)', 'rgba(220, 38, 38, 0.7)', 'rgba(30, 64, 175, 0.9)']}
          style={styles.gradientOverlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <SafeAreaView style={styles.safeArea}>
            {/* Language Toggle */}
            <View style={styles.header}>
              <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
                <Ionicons name="language" size={20} color={VSMStyles.colors.white} />
                <Text style={styles.languageText}>{language.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              {/* Logo Section */}
              <View style={styles.logoSection}>
                <View style={styles.logoContainer}>
                  <LinearGradient
                    colors={[VSMStyles.colors.white, '#F0F9FF']}
                    style={styles.logoGradient}
                  >
                    <Ionicons name="flash" size={56} color={VSMStyles.colors.primary} />
                  </LinearGradient>
                </View>
                <Text style={styles.appName}>{t.appName}</Text>
                <Text style={styles.tagline}>{t.tagline}</Text>
              </View>

              {/* Features Preview */}
              <View style={styles.featuresSection}>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Ionicons name="trophy" size={24} color={VSMStyles.colors.gold} />
                  </View>
                  <Text style={styles.featureText}>1000+ Giải đua</Text>
                </View>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Ionicons name="people" size={24} color={VSMStyles.colors.white} />
                  </View>
                  <Text style={styles.featureText}>50k+ Runner</Text>
                </View>
                <View style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Ionicons name="location" size={24} color={VSMStyles.colors.secondary} />
                  </View>
                  <Text style={styles.featureText}>63 Tỉnh thành</Text>
                </View>
              </View>

              {/* Description */}
              <View style={styles.descriptionSection}>
                <Text style={styles.description}>{t.welcomeDescription}</Text>
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
            </View>

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
    width: screenWidth,
    height: screenHeight,
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
    paddingTop: VSMStyles.spacing.md,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.sm,
    borderRadius: VSMStyles.borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  languageText: {
    color: VSMStyles.colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: VSMStyles.spacing.xs,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: VSMStyles.spacing.xl,
    paddingVertical: VSMStyles.spacing.xxl,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: VSMStyles.spacing.xxl,
  },
  logoContainer: {
    marginBottom: VSMStyles.spacing.lg,
  },
  logoGradient: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    ...VSMStyles.shadows.large,
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    marginBottom: VSMStyles.spacing.sm,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 18,
    color: VSMStyles.colors.white,
    textAlign: 'center',
    opacity: 0.9,
    fontWeight: '500',
  },
  featuresSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: VSMStyles.spacing.xl,
  },
  featureItem: {
    alignItems: 'center',
  },
  featureIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  featureText: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  descriptionSection: {
    alignItems: 'center',
    paddingHorizontal: VSMStyles.spacing.md,
  },
  description: {
    fontSize: 16,
    color: VSMStyles.colors.white,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
    fontWeight: '400',
  },
  buttonsSection: {
    gap: VSMStyles.spacing.md,
    marginBottom: VSMStyles.spacing.lg,
  },
  primaryButton: {
    borderRadius: VSMStyles.borderRadius.lg,
    overflow: 'hidden',
    ...VSMStyles.shadows.medium,
  },
  secondaryButton: {
    borderRadius: VSMStyles.borderRadius.lg,
    overflow: 'hidden',
    ...VSMStyles.shadows.medium,
  },
  buttonGradient: {
    paddingVertical: VSMStyles.spacing.md + 2,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  ghostButton: {
    backgroundColor: 'transparent',
    paddingVertical: VSMStyles.spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: VSMStyles.borderRadius.lg,
  },
  ghostButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 16,
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
    width: 100,
    height: 100,
    top: '15%',
    right: -50,
  },
  circle2: {
    width: 80,
    height: 80,
    bottom: '25%',
    left: -40,
  },
  circle3: {
    width: 60,
    height: 60,
    top: '60%',
    right: '20%',
  },
});
