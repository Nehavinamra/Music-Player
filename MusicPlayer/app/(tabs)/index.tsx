import { useNavigation } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";

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
            navigation.navigate("../Search");
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 50,
          marginLeft: 10,
        }}
      >
        <TouchableOpacity
          style={styles.playlist}
          onPress={() => {
            navigation.navigate("mymusic");
          }}
        >
          <Image
            source={require("../../assets/images/playlist01.jpeg")}
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
            source={require("../../assets/images/playlist02.jpeg")}
            style={{ width: 150, height: 150 }}
          />
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
  playlist: {
    backgroundColor: "#a9a9a9",
    width: 150,
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  txtinbutton: {
    color: "white",
  },
});

//
