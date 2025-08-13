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
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { VSMStyles } from '@/constants/VSMStyles';

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // TODO: Implement sign up logic
    console.log('Sign up with:', { fullName, email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <Text style={styles.title}>Create Your Account</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter your full name"
                placeholderTextColor="#999"
                autoCapitalize="words"
                returnKeyType="next"
              />
            </View>

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

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Link href="/login" asChild>
                <TouchableOpacity>
                  <Text style={styles.linkText}>Log In</Text>
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
  signUpButton: {
    backgroundColor: VSMStyles.colors.primary,
    borderRadius: VSMStyles.borderRadius.default,
    paddingVertical: VSMStyles.spacing.md + 2,
    marginTop: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.xl,
    ...VSMStyles.shadows.small,
  },
  signUpButtonText: {
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
