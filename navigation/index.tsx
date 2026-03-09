import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RecipeList from '../screens/RecipeList';
import RecipeDetail from '../screens/RecipeDetail';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Recettes' }} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{ title: 'Détails' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}