import { useNavigation } from 'expo-router';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <View style={styles.backgroundHomeColor}>
      <Button title="Playlists" onPress={()=> {
      //Mymusic
      navigation.navigate("mymusic")
    }} />
    <Button title="Genre" onPress={()=> {
      //Genre
      navigation.navigate("mymusic")
    }} />
    <Button title="Liked" onPress={()=> {
      //Liked songs
      navigation.navigate("liked")
    }} />
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
