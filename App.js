import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// Exemplos
import Exemplo01 from './src/exemplos/exemplo-01';

// Atividades
import Atividade01 from './src/atividade/atividade-01';


export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
   // alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight || 8,
    
  },
});
