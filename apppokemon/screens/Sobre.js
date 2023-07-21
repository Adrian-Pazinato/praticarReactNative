// Exemplo de DetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Sobre = ({ navigation }) => {
  return (
    <View>
      <Text>Página de Detalhes</Text>
      <Button
        title="Voltar para a página inicial"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Sobre;
