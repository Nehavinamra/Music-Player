import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import TabLayout from "./(tabs)/_layout";
import { searchSongs } from "../components/SpotifyService"; // Import SpotifyService
import { useNavigation } from "@react-navigation/native"; // Import the hook

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigation = useNavigation(); // Use the hook to get navigation

  const handleSearch = async () => {
    try {
      const songs = await searchSongs(query);
      console.log("Search Results:", songs); // Log to inspect the structure
      setResults(songs);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TabLayout />
      <TextInput
        style={styles.searchstyle}
        value={query}
        onChangeText={setQuery}
        placeholder="Search Songs"
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("mymusic", { song: item })}
          >
            <Text style={styles.songText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  searchstyle: {
    borderWidth: 2,
    padding: 10,
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
  },
  songText: {
    fontSize: 16,
    padding: 10,
  },
});
