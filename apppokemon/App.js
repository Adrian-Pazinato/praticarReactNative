import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sobre from './screens/Sobre';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
