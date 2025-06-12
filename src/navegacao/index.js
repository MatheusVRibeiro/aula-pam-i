import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones

// Importando as telas
import HomeScreen from './home';
import SearchScreen from './search';
import ProfileScreen from './profile';

const Tab = createBottomTabNavigator();

export default function NavegacaoPrincipal() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions é usado para aplicar configurações a todas as abas
        screenOptions={({ route }) => ({
          // tabBarIcon define o ícone de cada aba
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Busca') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // Retorna o componente de ícone
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Outras opções visuais
          tabBarActiveTintColor: 'tomato', // Cor do ícone ativo
          tabBarInactiveTintColor: 'gray',   // Cor do ícone inativo
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Busca" component={SearchScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}