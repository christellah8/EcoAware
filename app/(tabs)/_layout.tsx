import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#faf9ee' } }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="info" />
      <Stack.Screen name="video" />
      <Stack.Screen name="quiz" />
      <Stack.Screen name="results" />
      <Stack.Screen name="about" />
    </Stack>
  );
}
