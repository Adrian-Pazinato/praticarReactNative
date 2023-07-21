// Exemplo de HomeScreen.js
import React from 'react';
import styles from '../styles';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                style={styles.botao1}
                title="Ir para a página de detalhes"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
};

export default HomeScreen;
