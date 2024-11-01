import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FormScreen from '../screens/FormScreen';
import ProfileInformationScreen from '../screens/ProfileInformationScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Form: undefined;
  ProfileInformation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ title: 'Tela Inicial' }} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Acesse sua conta', headerShown: false }} 
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{ title: 'Cadastrar', headerShown: false }} 
      />
      <Stack.Screen 
        name="Form" 
        component={FormScreen} 
        options={{ title: 'Formulário' }}
      />
      <Stack.Screen 
        name="ProfileInformation" 
        component={ProfileInformationScreen} 
        options={{ title: 'Perfil' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
