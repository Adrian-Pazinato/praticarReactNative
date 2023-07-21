import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ola arrombado</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pisca a xereca</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
