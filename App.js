import react from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharacterStack } from "./screens/Navigation.js";
import StartingScreen from "./screens/StartingScreen.js";
import QuestionScreen from './screens/QuestionScreen'


export default function App() {
  return (
      <NavigationContainer >
       <CharacterStack/>
      </NavigationContainer>
  );
}


{/* <Stack.Navigator>
<Stack.Screen 
  name = "Starting Screen"
  component={StartingScreen}
/>

<Stack.Screen 
  name = "Question Screen"
  component={QuestionScreen}
/>  


</Stack.Navigator> */}