import { Stack } from "expo-router";
import { createContext, Dispatch, useState } from "react";

interface ILikedSongs {
  id: string | number;
  name: string;
}
interface ILikedSongsContext {
  likedSongs: ILikedSongs[];
  setLikedSongs: Dispatch<React.SetStateAction<ILikedSongs[]>>;
}
export const LikedSongsContext = createContext<ILikedSongsContext | null>(null);

export default function RootLayout() {
  // Create the context
  const [likedSongs, setLikedSongs] = useState<ILikedSongs[]>([]); // State to store liked songs

  return (
    <LikedSongsContext.Provider value={{ likedSongs, setLikedSongs }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Search" options={{ headerShown: false }} />
        <Stack.Screen name="Playlist" options={{ headerShown: false }} />
      </Stack>
    </LikedSongsContext.Provider>
  );
}
