import React, { useState } from 'react';
import { NativeBaseProvider, Box, Button, Input, Center, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen = ({ navigation }: Props) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    if (!username || !password || !confirmPassword) {
      setMessage('Todos os campos são obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, confirmPassword }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        setMessage(data.message || 'Erro desconhecido'); 
      } else {
        setMessage('Usuário registrado com sucesso!');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Erro:', error); 
      setMessage('Erro ao cadastrar usuário.');
    }
    console.log('Dados a serem enviados:', { username, password, confirmPassword });
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box width="90%">
          <Button mb={4} onPress={() => navigation.navigate('Welcome')}>
            Voltar para o Menu Principal
          </Button>
          <Input
            placeholder="Nome de Usuário"
            mb={4}
            value={username}
            onChangeText={setUsername}
          />
          <Input
            placeholder="Senha"
            mb={4}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Input
            placeholder="Confirmar Senha"
            mb={4}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {message ? <Text color="red.500">{message}</Text> : null}
          <Button onPress={handleSignUp}>
            Criar Conta
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default SignUpScreen;
