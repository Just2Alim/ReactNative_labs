import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Hello, World!</Text>

      <Text style={styles.subtitle}>
        Дисциплина: React Native (5 ECTS)
      </Text>

      <Text style={styles.name}>Шаймухамбетов Алим Асланулы</Text>

      <Text style={styles.info}>SE, 5 семестр</Text>

      <Text style={styles.device}>
        Запущено на iPhone 14 pro
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5b00a0ff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#eaeaea',
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: '#a0a0b0',
    marginBottom: 24,
  },
  device: {
    fontSize: 14,
    color: '#0f3460',
    backgroundColor: '#e600ffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
    fontWeight: '500',
  },
});
