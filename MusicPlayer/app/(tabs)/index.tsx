import { useNavigation } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          alignItems: "centre",
          margin: 100,
          flexDirection: "row",
          marginLeft: 40,
        }}
      >
        <Ionicons
          name="search-outline"
          size={24}
          onPress={() => {
            navigation.navigate("/app/Search");
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 2,
        }}
      >
        <TouchableOpacity
          style={styles.someButton}
          onPress={() => {
            navigation.navigate("mymusic");
          }}
        >
          <Text style={styles.txtinbutton}> Playlists</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.someButton}
          onPress={() => {
            navigation.navigate("mymusic");
          }}
        >
          <Text style={styles.txtinbutton}> Genre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.someButton}
          onPress={() => {
            navigation.navigate("liked");
          }}
        >
          <Text style={styles.txtinbutton}> Liked</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  someButton: {
    backgroundColor: "#2C2C2C",
    width: 100,
    height: 50,
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  txtinbutton: {
    color: "white",
  },
});

//
