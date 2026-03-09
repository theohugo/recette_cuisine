import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, Image, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import recipes from '../data/recipes';
import recipeSteps from '../data/recipeSteps';

type Props = {
  route: RouteProp<RootStackParamList, 'RecipeDetail'>;
};

export default function RecipeDetail({ route }: Props) {
  const { recipeId } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  // Récupérer la recette correspondante
  const recipe = recipes.find(r => r.id === recipeId);

  // Récupérer les étapes correspondantes, triées par order
  const steps = recipeSteps
    .filter(step => step.recipeId === recipeId)
    .sort((a, b) => a.order - b.order);

  if (!recipe) {
    return (
      <View style={styles.center}>
        <Text>Recette introuvable 😢</Text>
      </View>
    );
  }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    Alert.alert(
      'Favori',
      !isFavorite ? 'Recette ajoutée aux favoris !' : 'Recette retirée des favoris'
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <Text style={styles.title}>{recipe.titre}</Text>
      <Text style={styles.info}>
        Temps : {recipe.temps_preparation} min | Difficulté : {recipe.difficulte}
      </Text>

      <Text style={styles.sectionTitle}>Ingrédients :</Text>
      {recipe.ingredients.map((ing, index) => (
        <Text key={index} style={styles.item}>• {ing}</Text>
      ))}

      <Text style={styles.sectionTitle}>Étapes :</Text>
      {steps.map(step => (
        <View key={step.id} style={styles.stepContainer}>
          <Text style={styles.stepTitle}>{step.order}. {step.title} ({step.stepTime} min)</Text>
          <Text style={styles.item}>{step.description}</Text>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <Button
          title={isFavorite ? 'Retirer des favoris' : 'Mettre en favori'}
          onPress={handleFavorite}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  item: {
    fontSize: 16,
    marginBottom: 4,
  },
  stepContainer: {
    marginBottom: 12,
    paddingLeft: 8,
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
});