import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Ver o Japa"
                onPress={() => navigation.navigate('Japa')}
                styles={styles.botaoJapa}
            />
        </View>

    );
};

export default HomeScreen;
