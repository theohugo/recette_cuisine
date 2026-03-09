export interface Recette {
  id: string;
  titre: string;
  temps_preparation: number;
  difficulte: 'Facile' | 'Moyenne' | 'Difficile';
  image: string;
  ingredients: string[];
}

export interface RecipeStep {
  id: string;
  recipeId: string;
  order: number;
  title: string;
  stepTime: number;
  description: string;
}

export type RootStackParamList = {
  Home: undefined;
  RecipeDetail: { recette: Recette };
};
