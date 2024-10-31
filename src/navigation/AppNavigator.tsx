import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FormScreen from '../screens/FormScreen';
import ProfileInformationScreen from '../screens/ProfileInformationScreen';

// Definindo o RootStackParamList com todas as telas do projeto
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Form: undefined; // Adicionando a nova tela Form
  ProfileInformation: undefined; // Adicionando a nova tela ProfileInformation
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ title: 'Tela Inicial' }} // Título personalizável
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Acesse sua conta' }} // Título personalizável
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{ title: 'Cadastrar' }} // Título personalizável
      />
      <Stack.Screen 
        name="Form" 
        component={FormScreen} 
        options={{ title: 'Formulário' }} // Título personalizável
      />
      <Stack.Screen 
        name="ProfileInformation" 
        component={ProfileInformationScreen} 
        options={{ title: 'Informações do Perfil' }} // Título personalizável
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
