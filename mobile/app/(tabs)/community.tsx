import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { VSMStyles } from '@/constants/VSMStyles';

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

const communityPosts: Post[] = [
  {
    id: '1',
    user: {
      name: 'Mai Nguyen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e25938?w=50&h=50&fit=crop&crop=face',
    },
    content: 'Just finished my first 10K! Feeling amazing 🏃‍♀️✨',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    likes: 24,
    comments: 8,
    timeAgo: '2h ago',
  },
  {
    id: '2',
    user: {
      name: 'Duc Tran',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
    },
    content: 'Training for the HCMC Marathon! Who else is joining? 🏃‍♂️',
    likes: 15,
    comments: 12,
    timeAgo: '4h ago',
  },
];

export default function CommunityScreen() {
  const [searchText, setSearchText] = useState('');

  const handleLike = (postId: string) => {
    console.log('Like post:', postId);
  };

  const handleComment = (postId: string) => {
    console.log('Comment on post:', postId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color={VSMStyles.colors.textDark} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchField}
            placeholder="Search runners, events..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="add-circle" size={24} color={VSMStyles.colors.primary} />
            <Text style={styles.actionText}>Share Run</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="people" size={24} color={VSMStyles.colors.primary} />
            <Text style={styles.actionText}>Find Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="trophy" size={24} color={VSMStyles.colors.primary} />
            <Text style={styles.actionText}>Leaderboard</Text>
          </TouchableOpacity>
        </View>

        {/* Posts */}
        <View style={styles.postsContainer}>
          {communityPosts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <Image source={{ uri: post.user.avatar }} style={styles.userAvatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{post.user.name}</Text>
                  <Text style={styles.timeAgo}>{post.timeAgo}</Text>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                  <Ionicons name="ellipsis-horizontal" size={20} color="#999" />
                </TouchableOpacity>
              </View>

              <Text style={styles.postContent}>{post.content}</Text>

              {post.image && (
                <Image source={{ uri: post.image }} style={styles.postImage} />
              )}

              <View style={styles.postActions}>
                <TouchableOpacity
                  style={styles.actionItem}
                  onPress={() => handleLike(post.id)}
                >
                  <Ionicons name="heart-outline" size={20} color="#666" />
                  <Text style={styles.actionCount}>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionItem}
                  onPress={() => handleComment(post.id)}
                >
                  <Ionicons name="chatbubble-outline" size={20} color="#666" />
                  <Text style={styles.actionCount}>{post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionItem}>
                  <Ionicons name="share-outline" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
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
  searchContainer: {
    backgroundColor: VSMStyles.colors.white,
    paddingHorizontal: VSMStyles.spacing.lg,
    paddingBottom: VSMStyles.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: VSMStyles.colors.borderLight,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: VSMStyles.colors.background,
    borderRadius: VSMStyles.borderRadius.default,
    paddingHorizontal: VSMStyles.spacing.md,
    paddingVertical: VSMStyles.spacing.sm,
  },
  searchField: {
    flex: 1,
    marginLeft: VSMStyles.spacing.sm,
    fontSize: 16,
    color: VSMStyles.colors.textDark,
  },
  scrollView: {
    flex: 1,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: VSMStyles.colors.white,
    paddingVertical: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.sm,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    ...VSMStyles.typography.caption,
    marginTop: VSMStyles.spacing.xs,
    color: VSMStyles.colors.primary,
    fontWeight: '500',
  },
  postsContainer: {
    paddingBottom: VSMStyles.spacing.xl,
  },
  postCard: {
    backgroundColor: VSMStyles.colors.white,
    marginBottom: VSMStyles.spacing.sm,
    paddingVertical: VSMStyles.spacing.md,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.md,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: VSMStyles.spacing.md,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...VSMStyles.typography.body,
    fontWeight: '600',
  },
  timeAgo: {
    ...VSMStyles.typography.small,
    color: '#666',
  },
  moreButton: {
    padding: VSMStyles.spacing.xs,
  },
  postContent: {
    ...VSMStyles.typography.body,
    paddingHorizontal: VSMStyles.spacing.lg,
    marginBottom: VSMStyles.spacing.md,
    lineHeight: 22,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: VSMStyles.spacing.md,
  },
  postActions: {
    flexDirection: 'row',
    paddingHorizontal: VSMStyles.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: VSMStyles.colors.borderLight,
    paddingTop: VSMStyles.spacing.md,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: VSMStyles.spacing.lg,
  },
  actionCount: {
    ...VSMStyles.typography.caption,
    marginLeft: VSMStyles.spacing.xs,
    color: '#666',
  },
});
