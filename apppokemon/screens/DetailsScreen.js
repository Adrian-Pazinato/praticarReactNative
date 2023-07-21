import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../styles';

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Image
        source={require('../images/victor.jpg')}
        style={styles.imagemJapa}
      />
    </View>

  );
};

export default DetailsScreen;
