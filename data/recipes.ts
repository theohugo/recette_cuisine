import { Recette } from '../types';

const recipes: Recette[] = [
  {
    id: '1',
    titre: 'Spaghetti bolognaise',
    temps_preparation: 35,
    difficulte: 'Facile',
    image: 'https://api.toutlevin.com/images/7ca8fec142bb2d1a96157489d6695075003840002366.jpg?width=1920&quality=75',
    ingredients: ['spaghetti', 'boeuf hache', 'tomate concassee', 'oignon', 'ail', 'huile d olive'],
  },
  {
    id: '2',
    titre: 'Poulet curry coco',
    temps_preparation: 40,
    difficulte: 'Moyenne',
    image: 'https://www.etal-des-epices.com/wp-content/uploads/2023/11/poulet-curry-coco.jpg',
    ingredients: ['blanc de poulet', 'lait de coco', 'curry', 'oignon', 'gingembre', 'riz basmati'],
  },
  {
    id: '3',
    titre: 'Quiche lorraine',
    temps_preparation: 50,
    difficulte: 'Moyenne',
    image: 'https://recettes.precuttech.com/wp-content/uploads/2024/08/Quiche-Lorraine-allegee.jpg',
    ingredients: ['pate brisee', 'oeufs', 'creme fraiche', 'lardons', 'gruyere', 'poivre'],
  },
  {
    id: '4',
    titre: 'Salade cesar',
    temps_preparation: 20,
    difficulte: 'Facile',
    image: 'https://images.ctfassets.net/1p5r6txvlxu4/5BoMaZHe0FFFqrZjUEhRih/ea104cc4f7442fa88e049e7cc0b48711/AdobeStock_157570276-2.jpeg?w=768&h=541&fm=webp&q=100&fit=fill&f=center',
    ingredients: ['salade romaine', 'filet de poulet', 'parmesan', 'croutons', 'sauce cesar'],
  },
  {
    id: '5',
    titre: 'Ratatouille maison',
    temps_preparation: 55,
    difficulte: 'Difficile',
    image: 'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/ratatouille-maison-3939657/95115788-12-fre-FR/Saveurs-de-vacances-Comment-faire-une-ratatouille-maison-que-vous-jalousera-votre-grand-mere.jpg',
    ingredients: ['aubergine', 'courgette', 'poivron', 'tomate', 'oignon', 'ail', 'thym'],
  },
];

export default recipes;
