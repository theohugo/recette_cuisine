import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Image } from 'expo-image';
import type { Recette } from '../types';
import { colors, spacing, typography } from '../theme';
import FavoriteButton from './FavoriteButton';

interface RecipeCardProps {
  recette: Recette;
  onPress: () => void;
  isFavorite?: boolean;
  onFavoritePress?: () => void;
  style?: ViewStyle;
}

const getDifficulteColor = (difficulte: Recette['difficulte']) => {
  switch (difficulte) {
    case 'Facile':
      return colors.facile;
    case 'Moyenne':
      return colors.moyenne;
    case 'Difficile':
      return colors.difficile;
    default:
      return colors.textMuted;
  }
};

export default function RecipeCard({
  recette,
  onPress,
  isFavorite = false,
  onFavoritePress,
  style,
}: RecipeCardProps) {
  const difficulteColor = getDifficulteColor(recette.difficulte);

  return (
    <View style={[styles.card, style]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: recette.image }}
            style={styles.image}
            contentFit="cover"
          />
          {onFavoritePress && (
            <View style={styles.favoriteWrapper}>
              <FavoriteButton
                isFavorite={isFavorite}
                onPress={onFavoritePress}
                size="sm"
              />
            </View>
          )}
        </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {recette.titre}
        </Text>
        <View style={styles.meta}>
          <View style={styles.badge}>
            <Text style={styles.timeText}>⏱ {recette.temps_preparation} min</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: difficulteColor }]}>
            <Text style={styles.difficulteText}>{recette.difficulte}</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundCard,
    borderRadius: 12,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    overflow: 'hidden',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: colors.surface,
  },
  favoriteWrapper: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    zIndex: 10,
  },
  content: {
    padding: spacing.lg,
  },
  title: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  meta: {
    flexDirection: 'row',
    gap: spacing.sm,
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 8,
  },
  timeText: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
  difficulteText: {
    fontSize: typography.sm,
    color: colors.white,
    fontWeight: typography.semibold,
  },
});
