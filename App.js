import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export ANDROID_HOME = /Users/ < username > /Library/Android / sdk /
export PATH = $PATH: $ANDROID_HOME / tools: $ANDROID_HOME / platform - tools

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} t>È us guri, não tem jeito</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff21',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
