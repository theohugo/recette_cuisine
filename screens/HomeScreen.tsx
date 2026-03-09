import React, { useState, useMemo } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecipeCard, SearchBar } from '../components';
import { colors, layoutStyles, spacing, typography } from '../theme';
import recipes from '../data/recipes';
import type { Recette } from '../types';

interface HomeScreenProps {
  onRecipePress?: (recette: Recette) => void;
}

export default function HomeScreen({ onRecipePress }: HomeScreenProps) {
  const [search, setSearch] = useState('');

  const filteredRecipes = useMemo(() => {
    if (!search.trim()) return recipes;
    const query = search.toLowerCase().trim();
    return recipes.filter(
      (r: Recette) =>
        r.titre.toLowerCase().includes(query) ||
        r.ingredients.some((i) => i.toLowerCase().includes(query))
    );
  }, [search]);

  const renderItem: ListRenderItem<Recette> = ({ item }) => (
    <RecipeCard
      recette={item}
      onPress={() => onRecipePress?.(item)}
    />
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🔍</Text>
      <Text style={styles.emptyTitle}>Aucune recette trouvée</Text>
      <Text style={styles.emptySubtitle}>
        Essayez avec d'autres mots-clés
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Recettes</Text>
      <Text style={styles.subtitle}>
        {filteredRecipes.length} recette{filteredRecipes.length > 1 ? 's' : ''}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={layoutStyles.safeContainer} edges={['top']}>
      <View style={styles.content}>
        {renderHeader()}
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Rechercher une recette ou un ingrédient..."
        />
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={[
            layoutStyles.contentContainer,
            filteredRecipes.length === 0 && styles.emptyList,
          ]}
          ListEmptyComponent={renderEmptyList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  title: {
    fontSize: typography.xxl,
    fontWeight: typography.bold,
    color: colors.text,
  },
  subtitle: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  emptyList: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl * 2,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: spacing.lg,
  },
  emptyTitle: {
    fontSize: typography.lg,
    fontWeight: typography.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptySubtitle: {
    fontSize: typography.sm,
    color: colors.textMuted,
  },
});
