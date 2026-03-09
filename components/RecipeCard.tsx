import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import type { Recette } from '../types';
import { colors, spacing, typography } from '../theme';

interface RecipeCardProps {
  recette: Recette;
  onPress: () => void;
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

export default function RecipeCard({ recette, onPress, style }: RecipeCardProps) {
  const difficulteColor = getDifficulteColor(recette.difficulte);

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: recette.image }}
        style={styles.image}
        resizeMode="cover"
      />
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
  image: {
    width: '100%',
    height: 160,
    backgroundColor: colors.surface,
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
