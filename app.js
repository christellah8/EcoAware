import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen        from './screens/HomeScreen';
import InformationScreen from './screens/informationscreen';
import VideoScreen       from './screens/videoscreen';
import QuizScreen        from './screens/quizscreen';
import ResultsScreen     from './screens/resultsscreen';
import AboutScreen       from './screens/aboutscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home"        component={HomeScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="Video"       component={VideoScreen} />
        <Stack.Screen name="Quiz"        component={QuizScreen} />
        <Stack.Screen name="Results"     component={ResultsScreen} />
        <Stack.Screen name="About"       component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}