import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { VSMStyles } from '@/constants/VSMStyles';
import { useLanguage } from '@/hooks/useLanguage';

export default function TabLayout() {
  const { t } = useLanguage();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: VSMStyles.colors.primary,
        tabBarInactiveTintColor: VSMStyles.colors.textLight,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderTopWidth: 1,
            borderTopColor: VSMStyles.colors.borderLight,
            paddingTop: 8,
            height: 85,
          },
          default: {
            backgroundColor: VSMStyles.colors.white,
            borderTopWidth: 1,
            borderTopColor: VSMStyles.colors.borderLight,
            paddingTop: 8,
            height: 70,
            ...VSMStyles.shadows.medium,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginBottom: Platform.OS === 'ios' ? 0 : 8,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Cuộc đua',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={26} 
              name={focused ? 'flag.fill' : 'flag'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-events"
        options={{
          title: 'Cá nhân',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={26} 
              name={focused ? 'person.fill' : 'person'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          title: 'Record',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={26} 
              name={focused ? 'chart.bar.fill' : 'chart.bar'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'Tin tức',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={26} 
              name={focused ? 'newspaper.fill' : 'newspaper'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Thông báo',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={26} 
              name={focused ? 'bell.fill' : 'bell'} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
