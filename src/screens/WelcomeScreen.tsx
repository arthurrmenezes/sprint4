import React from 'react';
import { Button, Center, VStack, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <Center flex={1} bg="white">
      <VStack space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Bem-vindo!</Text>
        <Button 
          onPress={() => navigation.replace('Login')} // Usando replace para substituir Welcome por Login
          colorScheme="primary"
          width="75%"
        >
          Login
        </Button>
        <Button 
          onPress={() => navigation.navigate('SignUp')} // Navigate pode ser usado para Cadastro, se quiser a opção de voltar
          colorScheme="secondary"
          width="75%"
        >
          Cadastrar
        </Button>
      </VStack>
    </Center>
  );
};

export default WelcomeScreen;
