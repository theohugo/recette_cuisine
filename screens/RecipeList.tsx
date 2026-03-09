import React, { useContext, useState } from 'react';
import { View, FlatList, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import recipes from '../data/recipes';
import { FavoriteContext } from '../context/FavoriteContext';

export default function RecipeList() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { favorites, toggleFavorite } = useContext(FavoriteContext); // utilisation du contexte
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter(r =>
    r.titre.toLowerCase().includes(search.toLowerCase())
  );

  const renderRecipe = ({ item }: { item: typeof recipes[0] }) => {
    const isFavorite = favorites.includes(item.id);

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>
            {item.titre} {isFavorite ? '⭐' : '☆'}
          </Text>
          <Text style={styles.info}>
            Temps : {item.temps_preparation} min | Difficulté : {item.difficulte}
          </Text>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(item.id)}
          >
            <Text style={styles.favoriteText}>{isFavorite ? 'Retirer des favoris' : 'Mettre en favori'}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id}
        renderItem={renderRecipe}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    margin: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  card: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    marginTop: 4,
  },
  favoriteButton: {
    marginTop: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    backgroundColor: '#ffd70033',
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  favoriteText: {
    fontSize: 14,
    color: '#ffb400',
    fontWeight: '600',
  },
});