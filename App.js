import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import LoginScreen from './component/LoginScreen';
import RegisterScreen from './component/RegisterScreen';
import HomeScreen from './component/HomeScreen';
import SettingsScreen from './component/SettingsScreen';
import ResetPasswordScreen from './component/ResetPasswordScreen';
import AddObjectScreen from './component/AddObjectScreen';
import TanksScreen from './component/TanksScreen';
import AddTanksScreen from './component/AddTanksScreen';
import RecipesScreen from './component/RecipesScreen';
import AddRecipesScreen from './component/AddRecipesScreen';

// Fonction pour charger les polices asynchrones
async function loadFonts() {
  await Font.loadAsync({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
}

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddRecipes">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddObject" component={AddObjectScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tanks" component={TanksScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddTanks" component={AddTanksScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Recipes" component={RecipesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddRecipes" component={AddRecipesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Appel de la fonction pour charger les polices
loadFonts();

export default AppNavigation;