import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Audio } from "expo-av";
import { useRoute } from "@react-navigation/native";
import { LikedSongsContext } from "../../app/_layout";

export default function MyMusic() {
  const route = useRoute();
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const { song } = route.params; // Get the song object from navigation params
  const songsContext = useContext(LikedSongsContext);

  const handlePlayPause = async () => {
    if (isPlaying) {
      // Pause playback
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      // Play or resume playback
      if (sound) {
        await sound.playAsync();
      } else {
        loadSound();
      }
      setIsPlaying(true);
    }
  };

  // Load sound when the component mounts
  const loadSound = async () => {
    if (song.preview_url) {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: song.preview_url },
        { shouldPlay: true }
      );
      setSound(newSound);
      setIsPlaying(true);
    } else {
      console.log("No preview URL available for this song.");
    }
  };

  const toggleLike = () => {
    const isLiked = songsContext?.likedSongs.some(
      (likedSong) => likedSong.id === song.id
    );
    if (isLiked) {
      // Remove song from liked songs
      songsContext?.setLikedSongs(
        songsContext?.likedSongs.filter((likedSong) => likedSong.id !== song.id)
      );
    } else {
      // Add song to liked songs
      songsContext?.setLikedSongs([...songsContext?.likedSongs, song]);
    }
  };

  const isLiked = songsContext?.likedSongs.some(
    (likedSong) => likedSong.id === song.id
  ); // Check if song is liked

  // Unload sound when the component unmounts
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/playlist01.jpeg")}
        style={styles.albumCover}
      />

      <Text style={styles.songTitle}>{song.name}</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.timeText}>0:00</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.timeText}>0:30</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back-outline" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <Ionicons
            name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
            size={48}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-forward-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
        <Ionicons
          name={isLiked ? "heart" : "heart-outline"}
          size={32}
          color={isLiked ? "red" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  albumCover: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  songTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  timeText: {
    color: "white",
    fontSize: 12,
    marginHorizontal: 8,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#555",
    borderRadius: 2,
  },
  progressFill: {
    width: "20%", // Adjust according to progress
    height: "100%",
    backgroundColor: "#ffd33d",
    borderRadius: 2,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "60%",
    marginTop: 30,
  },
  likeButton: {
    marginTop: 30,
  },
});
