import React from 'react';
import { Box, Text, Button } from 'native-base';

const ProfileInformationScreen = () => {
  return (
    <Box flex={1} safeArea bg="white" padding={4}>
      <Text fontSize="2xl" color="primary.500" fontWeight="bold">Informações do Perfil</Text>
      {/* Adicione informações do perfil aqui */}
      <Button mt={4} colorScheme="blue">Editar Informações</Button>
    </Box>
  );
};

export default ProfileInformationScreen;
