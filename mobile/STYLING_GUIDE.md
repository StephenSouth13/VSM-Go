# VSM Mobile App Styling Guide

## Tổng quan

Ứng dụng VSM Mobile sử dụng **NativeWind** (Tailwind CSS cho React Native) kết hợp với hệ thống màu sắc tùy chỉnh để tạo ra giao diện nhất quán và dễ bảo trì.

## Hệ thống màu sắc

### 1. Cấu trúc màu sắc

```typescript
// Sử dụng trong component
import Colors from '../constants/Colors';

// Truy cập màu sắc
Colors.primary[500]        // #3b82f6
Colors.secondary[600]      // #4f46e5
Colors.success[500]        // #22c55e
Colors.warning[500]        // #f97316
Colors.error[500]          // #ef4444
Colors.neutral[800]        // #1f2937
```

### 2. Các nhóm màu chính

#### Primary Colors (Xanh dương)
- **50-100**: Màu nhạt, dùng cho background
- **500-600**: Màu chính, dùng cho buttons, links
- **700-900**: Màu đậm, dùng cho text, borders

#### Secondary Colors (Chàm)
- Dùng cho các elements phụ, highlights
- Tạo contrast với primary colors

#### Semantic Colors
- **Success**: Xanh lá - thông báo thành công
- **Warning**: Cam - cảnh báo, thông báo
- **Error**: Đỏ - lỗi, thông báo quan trọng

#### Neutral Colors (Xám)
- **50-200**: Background, borders nhạt
- **400-600**: Text phụ, icons
- **700-900**: Text chính, headings

### 3. Sử dụng trong Tailwind Classes

```tsx
// Background colors
<View className="bg-primary-500" />
<View className="bg-secondary-100" />
<View className="bg-success-50" />

// Text colors
<Text className="text-neutral-900" />
<Text className="text-primary-600" />
<Text className="text-warning-500" />

// Border colors
<View className="border border-neutral-200" />
<View className="border-l-4 border-l-primary-500" />
```

## Theme Management

### 1. Theme Context

```tsx
import { useTheme, useThemeColors } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  const themeColors = useThemeColors();
  
  return (
    <View style={{ backgroundColor: themeColors.background }}>
      <Text style={{ color: themeColors.text.primary }}>
        Current theme: {theme}
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### 2. Theme Toggle Component

```tsx
import ThemeToggle from '../components/ThemeToggle';

// Icon only
<ThemeToggle size="small" variant="icon" />

// Button with text
<ThemeToggle size="medium" variant="button" />

// Full theme selector
<ThemeToggle variant="full" />
```

## Best Practices

### 1. Sử dụng Semantic Colors

```tsx
// ✅ Tốt - Sử dụng semantic colors
<Text className="text-success-600">Thành công!</Text>
<View className="bg-warning-100 border border-warning-300" />

// ❌ Không tốt - Hardcode colors
<Text style={{ color: '#22c55e' }}>Thành công!</Text>
```

### 2. Consistent Spacing & Border Radius

```tsx
// Sử dụng custom spacing
<View className="rounded-vsm" />      // 1rem
<View className="rounded-vsm-lg" />   // 1.5rem

// Sử dụng custom shadows
<View className="shadow-vsm" />       // Light shadow
<View className="shadow-vsm-lg" />    // Heavy shadow
```

### 3. Gradient Usage

```tsx
import { LinearGradient } from 'expo-linear-gradient';

// Sử dụng gradient colors từ config
<LinearGradient
  colors={Colors.gradients.primary}
  className="p-4 rounded-xl"
>
  <Text className="text-white font-bold">Gradient Button</Text>
</LinearGradient>
```

## Responsive Design

### 1. Breakpoints

```tsx
// Mobile-first approach
<View className="w-full md:w-1/2 lg:w-1/3" />

// Responsive text sizes
<Text className="text-sm md:text-base lg:text-lg" />
```

### 2. Platform-specific Styling

```tsx
// iOS specific
<View className="ios:shadow-lg" />

// Android specific
<View className="android:elevation-5" />
```

## Dark Mode Support

### 1. Automatic Theme Detection

```tsx
const { isDark } = useTheme();

// Conditional styling
<View className={`${isDark ? 'bg-neutral-800' : 'bg-white'}`} />
<Text className={`${isDark ? 'text-neutral-100' : 'text-neutral-900'}`} />
```

### 2. Theme-aware Colors

```tsx
const themeColors = useThemeColors();

// Colors automatically adjust based on theme
<View style={{ backgroundColor: themeColors.background }}>
  <Text style={{ color: themeColors.text.primary }}>
    This text adapts to theme
  </Text>
</View>
```

## Custom Components

### 1. Button Variants

```tsx
// Primary button
<TouchableOpacity className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg">
  <Text className="text-white font-semibold text-center">Primary Button</Text>
</TouchableOpacity>

// Secondary button
<TouchableOpacity className="bg-secondary-100 hover:bg-secondary-200 px-6 py-3 rounded-lg border border-secondary-300">
  <Text className="text-secondary-700 font-semibold text-center">Secondary Button</Text>
</TouchableOpacity>
```

### 2. Card Components

```tsx
<View className="bg-white rounded-vsm shadow-vsm p-6 border border-neutral-100">
  <Text className="text-neutral-900 font-bold text-lg mb-2">Card Title</Text>
  <Text className="text-neutral-600">Card content goes here...</Text>
</View>
```

## Troubleshooting

### 1. Colors không hiển thị

- Kiểm tra `tailwind.config.js` đã include đúng paths
- Restart Metro bundler sau khi thay đổi config
- Kiểm tra NativeWind preset đã được cài đặt

### 2. Theme không hoạt động

- Đảm bảo `ThemeProvider` đã wrap app
- Kiểm tra `useTheme` hook được sử dụng đúng cách
- Verify theme context được export/import đúng

### 3. Performance Issues

- Sử dụng `useMemo` cho complex color calculations
- Tránh tạo inline styles trong render
- Sử dụng Tailwind classes thay vì StyleSheet khi có thể

## Examples

### 1. Complete Component Example

```tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import Colors from '../constants/Colors';

export const ExampleCard: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <View className={`
      bg-white dark:bg-neutral-800 
      rounded-vsm shadow-vsm 
      p-6 border border-neutral-100 dark:border-neutral-700
    `}>
      <Text className="text-neutral-900 dark:text-neutral-100 text-xl font-bold mb-3">
        Example Card
      </Text>
      
      <Text className="text-neutral-600 dark:text-neutral-300 mb-4">
        This card automatically adapts to the current theme.
      </Text>
      
      <TouchableOpacity className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg">
        <Text className="text-white font-semibold text-center">
          Action Button
        </Text>
      </TouchableOpacity>
    </View>
  );
};
```

### 2. Gradient Button Example

```tsx
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';

export const GradientButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={Colors.gradients.primary}
      className="px-6 py-3 rounded-xl shadow-vsm"
    >
      <Text className="text-white font-bold text-center text-lg">
        Gradient Button
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);
```

## Kết luận

Hệ thống styling này cung cấp:
- **Consistency**: Màu sắc nhất quán trong toàn bộ app
- **Maintainability**: Dễ dàng thay đổi theme và colors
- **Accessibility**: Hỗ trợ dark mode và contrast tốt
- **Performance**: Tối ưu với NativeWind và Tailwind CSS
- **Developer Experience**: API đơn giản và dễ sử dụng

Hãy tuân thủ các best practices để đảm bảo code dễ đọc, dễ bảo trì và có hiệu suất tốt. 