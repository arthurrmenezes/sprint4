import React from 'react';
import { Box, Text, Button, Input } from 'native-base';

const FormScreen = () => {
  return (
    <Box flex={1} safeArea bg="white" padding={4}>
      <Text fontSize="2xl" color="primary.500" fontWeight="bold">Formulário</Text>
      <Input placeholder="Nome" mt={4} />
      <Input placeholder="Email" mt={4} />
      <Button mt={4} colorScheme="blue">Enviar</Button>
    </Box>
  );
};

export default FormScreen;
