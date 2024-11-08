import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      {/* Album Cover */}
      <Image
        source={require("../../assets/images/playlist01.jpeg")}
        style={styles.albumCover}
      />

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.timeText}>0:06</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.timeText}>3:09</Text>
      </View>

      {/* Control Buttons */}
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() => {
            /* Handle previous */
          }}
        >
          <Ionicons name="play-skip-back-outline" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <Ionicons
            name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
            size={48}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* Handle next */
          }}
        >
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
