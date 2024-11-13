import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Audio } from "expo-av";
import { useRoute } from "@react-navigation/native";

export default function MyMusic() {
  const route = useRoute();
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const { song } = route.params; // Get the song object from navigation params

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
      {/* Album Cover */}
      <Image
        source={require("../../assets/images/playlist01.jpeg")} // Replace with dynamic album art if available
        style={styles.albumCover}
      />

      {/* Song Title */}
      <Text style={styles.songTitle}>{song.name}</Text>

      {/* Progress Bar (optional: enhance to show playback progress) */}
      <View style={styles.progressContainer}>
        <Text style={styles.timeText}>0:00</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.timeText}>0:30</Text>
      </View>

      {/* Control Buttons */}
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

      {/* Like Button */}
      <TouchableOpacity style={styles.likeButton}>
        <Ionicons name="heart-outline" size={32} color="white" />
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
