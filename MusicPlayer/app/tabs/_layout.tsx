import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }}  />
      <Tabs.Screen name="liked" options={{ title: 'Liked' }} />
      <Tabs.Screen name="mymusic" options={{ title: 'My Music' }} />


    </Tabs>
  );
}
