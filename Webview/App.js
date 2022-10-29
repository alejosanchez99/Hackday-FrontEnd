import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

export default function App() {
  const URL = 'https://hackdaykonecta.z13.web.core.windows.net/';

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={ { width: '100%', height: '100%' } }>
      <WebView 
          source={{ uri: URL }}
          onLoad={console.log('Webview cargada')}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
