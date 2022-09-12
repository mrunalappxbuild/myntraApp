import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartMyntra from './screens/StartMyntra';
import Login from './screens/Login';

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"; 



const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSansRegular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSansBold.ttf"),
    "open-sans-Extra-bold": require("./assets/fonts/OpenSansExtraBold.ttf"),

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={StartMyntra}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
   );
}


