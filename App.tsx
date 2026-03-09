import React from 'react';
import AppNavigator from './navigation';
import { FavoriteProvider } from './context/FavoriteContext';

export default function App() {
  return (
    <FavoriteProvider>
      <AppNavigator />
    </FavoriteProvider>
  );
}