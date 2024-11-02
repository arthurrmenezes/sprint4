import React, { useState } from 'react';
import { Box, Text, Button, Input, Toast } from 'native-base';

const FormScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !email) {
      Toast.show({
        description: "Por favor, preencha todos os campos.",
        placement: "top",
      });
      return;
    }
    
    Toast.show({
      description: "Dados enviados com sucesso!",
      placement: "top",
      status: "success",
    });

    setName('');
    setEmail('');
  };

  return (
    <Box flex={1} safeArea bg="white" padding={4}>
      <Text fontSize="2xl" color="primary.500" fontWeight="bold">Formulário</Text>
      <Input 
        placeholder="Nome" 
        mt={4} 
        value={name}
        onChangeText={setName} 
      />
      <Input 
        placeholder="Email" 
        mt={4} 
        value={email}
        onChangeText={setEmail} 
      />
      <Button mt={4} colorScheme="blue" onPress={handleSubmit}>Enviar</Button>

      {/* Botão para voltar ao menu principal */}
      <Button mt={4} colorScheme="gray" onPress={() => navigation.goBack()}>Voltar ao Menu</Button>
    </Box>
  );
};

export default FormScreen;
