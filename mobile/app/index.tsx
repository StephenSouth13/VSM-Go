import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { VSMStyles } from '@/constants/VSMStyles';

export default function WelcomeScreen() {
  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=800&fit=crop',
        }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            {/* Logo/Icon Section */}
            <View style={styles.logoSection}>
              <View style={styles.logoContainer}>
                <Ionicons name="flash" size={48} color={VSMStyles.colors.white} />
              </View>
              <Text style={styles.appName}>VSM Go</Text>
              <Text style={styles.tagline}>Your Running Journey Starts Here</Text>
            </View>

            {/* Description */}
            <View style={styles.descriptionSection}>
              <Text style={styles.description}>
                Join thousands of runners in exciting events across Vietnam. 
                Track your progress, connect with the community, and achieve your fitness goals.
              </Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonsSection}>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Create Account</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.guestButton} 
                onPress={() => router.push('/(tabs)')}
              >
                <Text style={styles.guestButtonText}>Continue as Guest</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    paddingHorizontal: VSMStyles.spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: VSMStyles.spacing.xl * 2,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: VSMStyles.spacing.xl,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: VSMStyles.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.lg,
    ...VSMStyles.shadows.medium,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    marginBottom: VSMStyles.spacing.sm,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 18,
    color: VSMStyles.colors.white,
    textAlign: 'center',
    opacity: 0.9,
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
  },
  buttonsSection: {
    gap: VSMStyles.spacing.md,
  },
  loginButton: {
    backgroundColor: VSMStyles.colors.primary,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md + 2,
    alignItems: 'center',
    ...VSMStyles.shadows.small,
  },
  loginButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: VSMStyles.colors.white,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md,
    alignItems: 'center',
  },
  registerButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  guestButton: {
    backgroundColor: 'transparent',
    paddingVertical: VSMStyles.spacing.md,
    alignItems: 'center',
  },
  guestButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 16,
    opacity: 0.8,
    textDecorationLine: 'underline',
  },
});
