// src/screens/ProfileInformationScreen.tsx

import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, Button, Center, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

type ProfileInformationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfileInformation'>;

type Props = {
  navigation: ProfileInformationScreenNavigationProp;
};

const ProfileInformationScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(response.data.username);
        setRole(response.data.role);
        setEmail(response.data.email); // Assumindo que o backend retorna um campo 'email'
      } catch (err) {
        setError('Erro ao conectar ao servidor');
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box p={4}>
          {error ? (
            <Text color="red.500">{error}</Text>
          ) : (
            <>
              <Text fontSize="xl" fontWeight="bold">Informações do Perfil</Text>
              <Text mt={2}>Nome de Usuário: {username}</Text>
              <Text mt={2}>Email: {email}</Text>
              <Text mt={2}>Função: {role}</Text>
            </>
          )}
          <Button mt={4} onPress={() => navigation.navigate('Form')}>Acessar Formulário</Button>
          <Button mt={2} onPress={() => navigation.goBack()}>Voltar</Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default ProfileInformationScreen;
