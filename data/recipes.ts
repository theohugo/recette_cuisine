import { Recette } from '../types';

const recipes: Recette[] = [
  {
    id: '1',
    titre: 'Spaghetti bolognaise',
    temps_preparation: 35,
    difficulte: 'Facile',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format&fit=crop&w=900&q=80',
    ingredients: ['spaghetti', 'boeuf hache', 'tomate concassee', 'oignon', 'ail', 'huile d olive'],
  },
  {
    id: '2',
    titre: 'Poulet curry coco',
    temps_preparation: 40,
    difficulte: 'Moyenne',
    image: 'https://images.unsplash.com/photo-1604908177073-9f5f8478f8a3?auto=format&fit=crop&w=900&q=80',
    ingredients: ['blanc de poulet', 'lait de coco', 'curry', 'oignon', 'gingembre', 'riz basmati'],
  },
  {
    id: '3',
    titre: 'Quiche lorraine',
    temps_preparation: 50,
    difficulte: 'Moyenne',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=900&q=80',
    ingredients: ['pate brisee', 'oeufs', 'creme fraiche', 'lardons', 'gruyere', 'poivre'],
  },
  {
    id: '4',
    titre: 'Salade cesar',
    temps_preparation: 20,
    difficulte: 'Facile',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
    ingredients: ['salade romaine', 'filet de poulet', 'parmesan', 'croutons', 'sauce cesar'],
  },
  {
    id: '5',
    titre: 'Ratatouille maison',
    temps_preparation: 55,
    difficulte: 'Difficile',
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&w=900&q=80',
    ingredients: ['aubergine', 'courgette', 'poivron', 'tomate', 'oignon', 'ail', 'thym'],
  },
];

export default recipes;
