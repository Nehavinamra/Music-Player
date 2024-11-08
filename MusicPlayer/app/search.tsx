import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TabLayout from "./(tabs)/_layout";

export default function Search() {
  const text = React.useState("");
  return (
    <View style={{ flex: 0.4, alignItems: "center", justifyContent: "center" }}>
      <TabLayout />
      <TextInput
        style={styles.searchstyle}
        value={text}
        placeholder="Search Songs"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchstyle: {
    borderWidth: 2,
    padding: 10,
    width: 300,
  },
});
