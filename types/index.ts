export interface Recette {
  id: string;
  titre: string;
  temps_preparation: number;
  difficulte: 'Facile' | 'Moyenne' | 'Difficile';
  image: string;
  ingredients: string[];
}
