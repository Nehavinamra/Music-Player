import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="liked"
        options={{
          title: "Liked",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="mymusic"
        options={{
          title: "My Music",
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-notes-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
