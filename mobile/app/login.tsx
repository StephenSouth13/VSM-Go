import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { VSMStyles, ButtonStyles } from '@/constants/VSMStyles';
import { useLanguage } from '@/hooks/useLanguage';

const { width: screenWidth } = Dimensions.get('window');

export default function LoginScreen() {
  const { t, toggleLanguage, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    // TODO: Implement login logic
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 1500);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password for:', email);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={VSMStyles.colors.white} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color={VSMStyles.colors.textDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
          <Ionicons name="language" size={20} color={VSMStyles.colors.primary} />
          <Text style={styles.languageText}>{language.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {/* Logo Section */}
            <View style={styles.logoSection}>
              <LinearGradient
                colors={[VSMStyles.colors.primary, VSMStyles.colors.primaryLight]}
                style={styles.logoContainer}
              >
                <Ionicons name="flash" size={40} color={VSMStyles.colors.white} />
              </LinearGradient>
              <Text style={styles.title}>{t.welcomeBack}</Text>
              <Text style={styles.subtitle}>Đăng nhập để tiếp tục hành trình chạy bộ</Text>
            </View>

            {/* Form Section */}
            <View style={styles.formSection}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>{t.email}</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons name="mail-outline" size={20} color={VSMStyles.colors.textLight} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Nhập email của bạn"
                    placeholderTextColor={VSMStyles.colors.textLight}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>{t.password}</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons name="lock-closed-outline" size={20} color={VSMStyles.colors.textLight} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor={VSMStyles.colors.textLight}
                    secureTextEntry={!showPassword}
                    returnKeyType="done"
                    onSubmitEditing={handleLogin}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color={VSMStyles.colors.textLight}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.forgotPassword}
                onPress={handleForgotPassword}
              >
                <Text style={styles.forgotPasswordText}>{t.forgotPassword}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.loginButton, loading && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={loading}
              >
                <LinearGradient
                  colors={loading ? ['#ccc', '#999'] : [VSMStyles.colors.primary, VSMStyles.colors.primaryLight]}
                  style={styles.buttonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  {loading ? (
                    <View style={styles.loadingContainer}>
                      <Text style={styles.buttonText}>Đang đăng nhập...</Text>
                    </View>
                  ) : (
                    <Text style={styles.buttonText}>{t.logIn}</Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              {/* Social Login */}
              <View style={styles.socialSection}>
                <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>Hoặc đăng nhập bằng</Text>
                  <View style={styles.dividerLine} />
                </View>

                <View style={styles.socialButtons}>
                  <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-google" size={24} color="#DB4437" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-facebook" size={24} color="#4267B2" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-apple" size={24} color={VSMStyles.colors.textDark} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>{t.dontHaveAccount} </Text>
              <Link href="/register" asChild>
                <TouchableOpacity>
                  <Text style={styles.linkText}>{t.signUp}</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: VSMStyles.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingVertical: VSMStyles.spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: VSMStyles.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.background,
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.sm,
    borderRadius: VSMStyles.borderRadius.lg,
    borderWidth: 1,
    borderColor: VSMStyles.colors.borderLight,
  },
  languageText: {
    color: VSMStyles.colors.primary,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: VSMStyles.spacing.xs,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: VSMStyles.spacing.xl,
    justifyContent: 'space-between',
    minHeight: '85%',
  },
  logoSection: {
    alignItems: 'center',
    marginTop: VSMStyles.spacing.xl,
    marginBottom: VSMStyles.spacing.xxl,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.lg,
    ...VSMStyles.shadows.medium,
  },
  title: {
    ...VSMStyles.typography.title,
    textAlign: 'center',
    marginBottom: VSMStyles.spacing.sm,
  },
  subtitle: {
    ...VSMStyles.typography.bodySmall,
    textAlign: 'center',
    color: VSMStyles.colors.textMedium,
  },
  formSection: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: VSMStyles.spacing.lg,
  },
  label: {
    ...VSMStyles.typography.bodySmall,
    fontWeight: '600',
    marginBottom: VSMStyles.spacing.sm,
    color: VSMStyles.colors.textDark,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: VSMStyles.colors.borderLight,
    borderRadius: VSMStyles.borderRadius.lg,
    backgroundColor: VSMStyles.colors.background,
    paddingHorizontal: VSMStyles.spacing.md,
  },
  inputIcon: {
    marginRight: VSMStyles.spacing.sm,
  },
  input: {
    flex: 1,
    paddingVertical: VSMStyles.spacing.md,
    fontSize: 16,
    color: VSMStyles.colors.textDark,
  },
  eyeIcon: {
    padding: VSMStyles.spacing.sm,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: VSMStyles.spacing.xl,
  },
  forgotPasswordText: {
    ...VSMStyles.typography.bodySmall,
    color: VSMStyles.colors.primary,
    fontWeight: '600',
  },
  loginButton: {
    borderRadius: VSMStyles.borderRadius.lg,
    overflow: 'hidden',
    marginBottom: VSMStyles.spacing.xl,
    ...VSMStyles.shadows.medium,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonGradient: {
    paddingVertical: VSMStyles.spacing.md + 2,
    alignItems: 'center',
  },
  buttonText: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialSection: {
    marginBottom: VSMStyles.spacing.lg,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: VSMStyles.colors.borderLight,
  },
  dividerText: {
    ...VSMStyles.typography.caption,
    marginHorizontal: VSMStyles.spacing.md,
    color: VSMStyles.colors.textLight,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: VSMStyles.spacing.lg,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: VSMStyles.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: VSMStyles.colors.borderLight,
    ...VSMStyles.shadows.small,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.lg,
  },
  footerText: {
    ...VSMStyles.typography.body,
    color: VSMStyles.colors.textMedium,
  },
  linkText: {
    ...VSMStyles.typography.body,
    color: VSMStyles.colors.primary,
    fontWeight: '600',
  },
});
