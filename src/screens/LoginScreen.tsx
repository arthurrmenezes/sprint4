import React, { useState } from 'react';
import { Center, Input, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Exemplo de chamada de API de login
    try {
      const response = await fetch('http://localhost:3000/login', { // URL do backend local
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError('Credenciais inválidas'); // Mensagem de erro
        return;
      }

      const data = await response.json();
      // Supondo que você tenha um token de autenticação
      if (data.token) {
        navigation.navigate('ProfileInformation'); // Navega para a tela de perfil
      } else {
        setError('Falha no login'); // Outra mensagem de erro se necessário
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao conectar ao servidor');
    }
  };

  return (
    <Center flex={1} bg="white" padding={4}>
      <Button mb={4} onPress={() => navigation.navigate('Welcome')}>
        Voltar para o Menu Principal
      </Button>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        mb={4}
      />
      <Input
        placeholder="Senha"
        value={password}
        type="password"
        onChangeText={setPassword}
        mb={4}
      />
      {error ? <Text color="red.500">{error}</Text> : null}
      <Button onPress={handleLogin}>
        Entrar
      </Button>
    </Center>
  );
};

export default LoginScreen;
