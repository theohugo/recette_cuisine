import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { RecipeStep } from '../types';
import { colors, spacing, typography } from '../theme';
import recipeSteps from '../data/recipeSteps';

interface RecipeStepsListProps {
  recipeId: string;
}

function getStepsForRecipe(recipeId: string): RecipeStep[] {
  return recipeSteps
    .filter((step) => step.recipeId === recipeId)
    .sort((a, b) => a.order - b.order);
}

export default function RecipeStepsList({ recipeId }: RecipeStepsListProps) {
  const steps = getStepsForRecipe(recipeId);

  if (steps.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Aucune étape disponible pour cette recette.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Étapes de préparation</Text>
      {steps.map((step) => (
        <View key={step.id} style={styles.stepCard}>
          <View style={styles.stepHeader}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{step.order}</Text>
            </View>
            <View style={styles.stepMeta}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <View style={styles.timeBadge}>
                <Text style={styles.timeText}>⏱ {step.stepTime} min</Text>
              </View>
            </View>
          </View>
          <Text style={styles.stepDescription}>{step.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  stepCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  stepNumberText: {
    fontSize: typography.sm,
    fontWeight: typography.bold,
    color: colors.white,
  },
  stepMeta: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  stepTitle: {
    fontSize: typography.md,
    fontWeight: typography.semibold,
    color: colors.text,
    flex: 1,
  },
  timeBadge: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 8,
  },
  timeText: {
    fontSize: typography.xs,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
  stepDescription: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  empty: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: typography.sm,
    color: colors.textMuted,
  },
});
