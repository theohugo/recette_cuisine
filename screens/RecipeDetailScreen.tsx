import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecipeStepsList } from '../components';
import { colors, layoutStyles, spacing, typography } from '../theme';
import type { Recette, RootStackParamList } from '../types';

type RecipeDetailRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

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

export default function RecipeDetailScreen() {
  const { params } = useRoute<RecipeDetailRouteProp>();
  const recette = params.recette;

  return (
    <SafeAreaView style={layoutStyles.safeContainer} edges={['top']}>
      <RecipeDetailContent recette={recette} />
    </SafeAreaView>
  );
}

function RecipeDetailContent({ recette }: { recette: Recette }) {
  const difficulteColor = getDifficulteColor(recette.difficulte);

  return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: recette.image }}
          style={styles.image}
          contentFit="cover"
        />
        <View style={styles.content}>
          <Text style={styles.title}>{recette.titre}</Text>
          <View style={styles.meta}>
            <View style={styles.badge}>
              <Text style={styles.metaText}>⏱ {recette.temps_preparation} min</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: difficulteColor }]}>
              <Text style={styles.difficulteText}>{recette.difficulte}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingrédients</Text>
            <View style={styles.ingredientsList}>
              {recette.ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.ingredientText}>{ingredient}</Text>
                </View>
              ))}
            </View>
          </View>

          <RecipeStepsList recipeId={recette.id} />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxl * 2,
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: colors.surface,
  },
  content: {
    padding: spacing.lg,
  },
  title: {
    fontSize: typography.xxl,
    fontWeight: typography.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  meta: {
    flexDirection: 'row',
    gap: spacing.sm,
    flexWrap: 'wrap',
    marginBottom: spacing.xl,
  },
  badge: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
  metaText: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
  difficulteText: {
    fontSize: typography.sm,
    color: colors.white,
    fontWeight: typography.semibold,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  ingredientsList: {
    backgroundColor: colors.backgroundCard,
    borderRadius: 12,
    padding: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  bullet: {
    fontSize: typography.md,
    color: colors.primary,
    marginRight: spacing.sm,
  },
  ingredientText: {
    fontSize: typography.sm,
    color: colors.text,
    flex: 1,
  },
});
