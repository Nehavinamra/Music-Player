import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Playlist() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playlists</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.playlist}
          onPress={() => {
            navigation.navigate("mymusic");
          }}
        >
          <Image
            source={require("../assets/images/playlist01.jpeg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playlist}
          onPress={() => {
            navigation.navigate("mymusic");
          }}
        >
          <Image
            source={require("../assets/images/playlist02.jpeg")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.4,
  },
  playlist: {
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});
