import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Necessário para a navegação
import AppNavigator from './navigation/AppNavigator'; // Importando o seu AppNavigator

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator /> {/* AppNavigator gerencia a navegação */}
    </NavigationContainer>
  );
}
