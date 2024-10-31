import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Search" options={{ headerShown: false }} />
      <Stack.Screen name="Playlist" options={{ headerShown: false }} />
    </Stack>
  );
}
