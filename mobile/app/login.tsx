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
} from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { VSMStyles } from '@/constants/VSMStyles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log('Login with:', { email, password });
    // For now, navigate to main app
    router.replace('/(tabs)');
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password logic
    console.log('Forgot password for:', email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <Text style={styles.title}>Welcome Back!</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  secureTextEntry={!showPassword}
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <Link href="/register" asChild>
                <TouchableOpacity>
                  <Text style={styles.linkText}>Sign Up</Text>
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
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: VSMStyles.spacing.lg,
    justifyContent: 'center',
    minHeight: '80%',
  },
  title: {
    ...VSMStyles.typography.title,
    textAlign: 'center',
    marginBottom: VSMStyles.spacing.xl * 2,
  },
  inputContainer: {
    marginBottom: VSMStyles.spacing.lg,
  },
  label: {
    ...VSMStyles.typography.body,
    fontWeight: '500',
    marginBottom: VSMStyles.spacing.sm,
    color: VSMStyles.colors.textDark,
  },
  input: {
    borderWidth: 1,
    borderColor: VSMStyles.colors.borderLight,
    borderRadius: VSMStyles.borderRadius.default,
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.md,
    fontSize: 16,
    color: VSMStyles.colors.textDark,
    backgroundColor: VSMStyles.colors.white,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: VSMStyles.colors.borderLight,
    borderRadius: VSMStyles.borderRadius.default,
    backgroundColor: VSMStyles.colors.white,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.md,
    fontSize: 16,
    color: VSMStyles.colors.textDark,
  },
  eyeIcon: {
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.md,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: VSMStyles.spacing.lg,
  },
  forgotPasswordText: {
    ...VSMStyles.typography.body,
    color: VSMStyles.colors.primary,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: VSMStyles.colors.primary,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md + 2,
    marginBottom: VSMStyles.spacing.xl,
    ...VSMStyles.shadows.small,
  },
  loginButtonText: {
    color: VSMStyles.colors.white,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    ...VSMStyles.typography.body,
    color: '#666',
  },
  linkText: {
    ...VSMStyles.typography.body,
    color: VSMStyles.colors.primary,
    fontWeight: '600',
  },
});
