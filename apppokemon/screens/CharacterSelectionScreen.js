// Exemplo de DetailsScreen.js
import React, { useState } from 'react';
import styles from '../styles';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const charactersData = [
  { id: 1, name: 'Personagem 1' },
  { id: 2, name: 'Personagem 2' },
  { id: 3, name: 'Personagem 3' },
];

const CharacterSelectionScreen = ({ navigation }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const renderCharacterItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.characterItem,
        selectedCharacter && selectedCharacter.id === item.id && styles.selectedCharacterItem,
      ]}
      onPress={() => handleCharacterSelect(item)}
    >
      <Text style={styles.characterName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={charactersData}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedCharacter && (
        <Text style={styles.selectedCharacterText}>
          Personagem selecionado: {selectedCharacter.name}
        </Text>
      )}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          // Navegue para a próxima tela ou execute alguma ação com o personagem selecionado
          if (selectedCharacter) {
            navigation.navigate('DetalhesPersonagem', { character: selectedCharacter });
          } else {
            alert('Por favor, selecione um personagem primeiro.');
          }
        }}
      >
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterSelectionScreen;
