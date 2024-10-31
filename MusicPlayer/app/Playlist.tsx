import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Playlist() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        flex: 0.7,
      }}
    >
      <TouchableOpacity
        style={styles.playlist}
        onPress={() => {
          navigation.navigate("mymusic");
        }}
      >
        <Image
          source={require("../assets/images/playlist01.jpeg")}
          style={{ width: 150, height: 150 }}
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
          style={{ width: 150, height: 150 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  playlist: {
    justifyContent: "center",
    padding: 10,
  },
});
