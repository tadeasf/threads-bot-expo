import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome to Threads Bot</ThemedText>
      <ThemedView style={styles.buttonContainer}>
        <ThemedText type="button">Connect with Threads</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#0a7ea4',
  },
});
