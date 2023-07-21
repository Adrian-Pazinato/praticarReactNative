// Exemplo de DetailsScreen.js
import React from 'react';
import styles from '../styles';
import { View, Text, Button } from 'react-native';

const Sobre = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.botao1}
        title="Voltar para o inicio"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Sobre;
