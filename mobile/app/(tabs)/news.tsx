import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { VSMStyles } from '@/constants/VSMStyles';
import { useLanguage } from '@/hooks/useLanguage';

const { width: screenWidth } = Dimensions.get('window');

interface NewsArticle {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const featuredArticle: NewsArticle = {
  id: '1',
  title: 'Bình Phước Marathon 2024: Giải chạy lớn nhất miền Đông Nam Bộ',
  titleEn: 'Binh Phuoc Marathon 2024: The Biggest Race in Southeast Vietnam',
  summary: 'Với sự tham gia của hơn 3,000 runner từ khắp cả nước, Bình Phước Marathon 2024 hứa hẹn sẽ là một trong những giải chạy ấn tượng nhất năm.',
  summaryEn: 'With over 3,000 runners from across the country, Binh Phuoc Marathon 2024 promises to be one of the most impressive races of the year.',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
  category: 'Sự kiện',
  date: '2 giờ trước',
  readTime: '3 phút đọc',
  featured: true,
};

const newsArticles: NewsArticle[] = [
  {
    id: '2',
    title: 'Tips chạy bộ an toàn trong mùa mưa',
    titleEn: 'Safe Running Tips During Rainy Season',
    summary: 'Những lời khuyên hữu ích để duy trì thói quen chạy bộ ngay cả khi thời tiết không thuận lợi.',
    summaryEn: 'Useful tips to maintain your running routine even when weather conditions are unfavorable.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=100&fit=crop',
    category: 'Hướng dẫn',
    date: '5 giờ trước',
    readTime: '4 phút đọc',
  },
  {
    id: '3',
    title: 'Runner Việt Nam đạt thành tích ấn tượng tại SEA Games',
    titleEn: 'Vietnamese Runners Achieve Impressive Results at SEA Games',
    summary: 'Đội tuyển điền kinh Việt Nam tiếp tục khẳng định vị thế trong khu vực với những thành tích xuất sắc.',
    summaryEn: 'Vietnam\'s athletics team continues to assert their regional position with outstanding achievements.',
    image: 'https://images.unsplash.com/photo-1594736797933-d0a71db2d928?w=150&h=100&fit=crop',
    category: 'Thể thao',
    date: '1 ngày trước',
    readTime: '5 phút đọc',
  },
  {
    id: '4',
    title: 'Dinh dưỡng cho runner: Ăn gì trước và sau khi chạy?',
    titleEn: 'Nutrition for Runners: What to Eat Before and After Running?',
    summary: 'Hướng dẫn chi tiết về chế độ dinh dưỡng phù hợp để tối ưu hóa hiệu suất chạy bộ.',
    summaryEn: 'Detailed guide on proper nutrition to optimize running performance.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=150&h=100&fit=crop',
    category: 'Sức khỏe',
    date: '2 ngày trước',
    readTime: '6 phút đọc',
  },
  {
    id: '5',
    title: 'Xu hướng giày chạy bộ 2024: Những đôi giày được yêu thích nhất',
    titleEn: 'Running Shoe Trends 2024: Most Popular Shoes',
    summary: 'Tổng hợp những mẫu giày chạy bộ hot nhất năm 2024 được các runner Việt Nam ưa chuộng.',
    summaryEn: 'Compilation of the hottest running shoes of 2024 favored by Vietnamese runners.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=100&fit=crop',
    category: 'Gear',
    date: '3 ngày trước',
    readTime: '4 phút đọc',
  },
];

const categories = ['Tất cả', 'Sự kiện', 'Hướng dẫn', 'Thể thao', 'Sức khỏe', 'Gear'];

export default function NewsScreen() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const handleArticlePress = (article: NewsArticle) => {
    console.log('Navigate to article:', article.id);
  };

  const filteredArticles = selectedCategory === 'Tất cả' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tin tức</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search-outline" size={24} color={VSMStyles.colors.textDark} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.activeCategoryButton
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.activeCategoryText
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Featured Article */}
        <TouchableOpacity
          style={styles.featuredCard}
          onPress={() => handleArticlePress(featuredArticle)}
          activeOpacity={0.9}
        >
          <ImageBackground
            source={{ uri: featuredArticle.image }}
            style={styles.featuredBackground}
            imageStyle={styles.featuredImageStyle}
          >
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
              style={styles.featuredOverlay}
            >
              <View style={styles.featuredContent}>
                <View style={styles.featuredBadge}>
                  <Text style={styles.featuredBadgeText}>Tin nổi bật</Text>
                </View>
                <Text style={styles.featuredTitle}>
                  {language === 'vi' ? featuredArticle.title : featuredArticle.titleEn}
                </Text>
                <Text style={styles.featuredSummary}>
                  {language === 'vi' ? featuredArticle.summary : featuredArticle.summaryEn}
                </Text>
                <View style={styles.featuredMeta}>
                  <View style={styles.metaItem}>
                    <Ionicons name="time-outline" size={14} color={VSMStyles.colors.white} />
                    <Text style={styles.metaText}>{featuredArticle.date}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="book-outline" size={14} color={VSMStyles.colors.white} />
                    <Text style={styles.metaText}>{featuredArticle.readTime}</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>

        {/* News List */}
        <View style={styles.newsSection}>
          <Text style={styles.sectionTitle}>Tin tức mới nhất</Text>
          <View style={styles.newsList}>
            {filteredArticles.map((article) => (
              <TouchableOpacity
                key={article.id}
                style={styles.newsCard}
                onPress={() => handleArticlePress(article)}
                activeOpacity={0.7}
              >
                <Image source={{ uri: article.image }} style={styles.newsImage} />
                <View style={styles.newsContent}>
                  <View style={styles.newsHeader}>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryBadgeText}>{article.category}</Text>
                    </View>
                    <View style={styles.newsMeta}>
                      <Text style={styles.newsDate}>{article.date}</Text>
                    </View>
                  </View>
                  <Text style={styles.newsTitle}>
                    {language === 'vi' ? article.title : article.titleEn}
                  </Text>
                  <Text style={styles.newsSummary} numberOfLines={2}>
                    {language === 'vi' ? article.summary : article.summaryEn}
                  </Text>
                  <View style={styles.newsFooter}>
                    <View style={styles.readTimeContainer}>
                      <Ionicons name="time-outline" size={12} color={VSMStyles.colors.textLight} />
                      <Text style={styles.readTime}>{article.readTime}</Text>
                    </View>
                    <TouchableOpacity style={styles.bookmarkButton}>
                      <Ionicons name="bookmark-outline" size={16} color={VSMStyles.colors.textLight} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.bottomSpacing} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  searchButton: {
    padding: VSMStyles.spacing.xs,
  },
  categoriesContainer: {
    backgroundColor: VSMStyles.colors.white,
    paddingVertical: VSMStyles.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: VSMStyles.colors.borderLight,
  },
  categoriesScroll: {
    paddingHorizontal: VSMStyles.spacing.lg,
  },
  categoryButton: {
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.sm,
    borderRadius: VSMStyles.borderRadius.lg,
    marginRight: VSMStyles.spacing.sm,
    backgroundColor: VSMStyles.colors.background,
  },
  activeCategoryButton: {
    backgroundColor: VSMStyles.colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: VSMStyles.colors.textMedium,
  },
  activeCategoryText: {
    color: VSMStyles.colors.white,
  },
  scrollView: {
    flex: 1,
  },
  featuredCard: {
    margin: VSMStyles.spacing.lg,
    borderRadius: VSMStyles.borderRadius.xl,
    overflow: 'hidden',
    ...VSMStyles.shadows.large,
  },
  featuredBackground: {
    height: 280,
  },
  featuredImageStyle: {
    borderRadius: VSMStyles.borderRadius.xl,
  },
  featuredOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: VSMStyles.spacing.lg,
  },
  featuredContent: {
    
  },
  featuredBadge: {
    alignSelf: 'flex-start',
    backgroundColor: VSMStyles.colors.secondary,
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.xs,
    borderRadius: VSMStyles.borderRadius.lg,
    marginBottom: VSMStyles.spacing.md,
  },
  featuredBadgeText: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: VSMStyles.colors.white,
    marginBottom: VSMStyles.spacing.sm,
    lineHeight: 26,
  },
  featuredSummary: {
    fontSize: 14,
    color: VSMStyles.colors.white,
    opacity: 0.9,
    lineHeight: 20,
    marginBottom: VSMStyles.spacing.md,
  },
  featuredMeta: {
    flexDirection: 'row',
    gap: VSMStyles.spacing.lg,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    color: VSMStyles.colors.white,
    fontSize: 12,
    marginLeft: VSMStyles.spacing.xs,
    opacity: 0.8,
  },
  newsSection: {
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingTop: VSMStyles.spacing.lg,
  },
  sectionTitle: {
    ...VSMStyles.typography.heading,
    marginBottom: VSMStyles.spacing.lg,
  },
  newsList: {
    gap: VSMStyles.spacing.md,
  },
  newsCard: {
    flexDirection: 'row',
    backgroundColor: VSMStyles.colors.white,
    borderRadius: VSMStyles.borderRadius.lg,
    padding: VSMStyles.spacing.md,
    ...VSMStyles.shadows.small,
  },
  newsImage: {
    width: 100,
    height: 80,
    borderRadius: VSMStyles.borderRadius.default,
    marginRight: VSMStyles.spacing.md,
  },
  newsContent: {
    flex: 1,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: VSMStyles.spacing.xs,
  },
  categoryBadge: {
    backgroundColor: VSMStyles.colors.background,
    paddingHorizontal: VSMStyles.spacing.sm,
    paddingVertical: 2,
    borderRadius: VSMStyles.borderRadius.sm,
  },
  categoryBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: VSMStyles.colors.primary,
  },
  newsMeta: {
    
  },
  newsDate: {
    fontSize: 12,
    color: VSMStyles.colors.textLight,
  },
  newsTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: VSMStyles.colors.textDark,
    marginBottom: VSMStyles.spacing.xs,
    lineHeight: 20,
  },
  newsSummary: {
    fontSize: 13,
    color: VSMStyles.colors.textMedium,
    lineHeight: 18,
    marginBottom: VSMStyles.spacing.sm,
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readTime: {
    fontSize: 11,
    color: VSMStyles.colors.textLight,
    marginLeft: 4,
  },
  bookmarkButton: {
    padding: 4,
  },
  bottomSpacing: {
    height: 100,
  },
});
