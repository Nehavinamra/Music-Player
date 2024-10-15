import { Text, View, StyleSheet } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.backgroundHomeColor}>
      <Text>Homescreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundHomeColor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
