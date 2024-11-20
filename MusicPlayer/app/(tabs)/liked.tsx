import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LikedSongsContext } from "../_layout";

export default function Liked() {
  const songsContext = useContext(LikedSongsContext);
  console.log(songsContext?.likedSongs);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liked Songs</Text>
      {songsContext?.likedSongs.length === 0 ? (
        <Text style={styles.emptyText}>No liked songs yet!</Text>
      ) : (
        <FlatList
          data={songsContext?.likedSongs}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => (
            <View style={styles.songItem}>
              <Text style={styles.songText}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#25292e", padding: 20 },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 90,
  },
  songItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#555" },
  songText: { color: "white", fontSize: 16 },
  emptyText: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
