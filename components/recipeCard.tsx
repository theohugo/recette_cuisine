import { View, Text, Image, TouchableOpacity, Button, FlatList, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  recipeId: string;
  title: string;
  image: string;
};

export default function RecipeCard({ recipeId, title, image }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipeId })}>
      <View>
        <Image source={{ uri: image }} style={{ width: '100%', height: 150, borderRadius: 10 }} />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}