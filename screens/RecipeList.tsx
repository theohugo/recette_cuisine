import { useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import recipes from '../data/recipes';
import RecipeCard from '../components/recipeCard';

export default function RecipeList() {
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter(r =>
    r.titre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View>
      <TextInput
        placeholder="Rechercher..."
        value={search}
        onChangeText={setSearch}
        style={{ padding: 10, borderWidth: 1, margin: 10, borderRadius: 8 }}
      />
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeCard recipeId={item.id} title={item.titre} image={item.image} />
        )}
      />
    </View>
  );
}