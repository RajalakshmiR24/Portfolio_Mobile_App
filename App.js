const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import EXPERIENCE from "./screens/EXPERIENCE";
import SCREENINTRO from "./screens/SCREENINTRO";
import SCREENMAIN from "./screens/SCREENMAIN";
import MAIN from "./screens/MAIN";
import BANNER from "./screens/BANNER";
import LOGO from "./screens/LOGO";
import PACKAGING from "./screens/PACKAGING";
import MORE from "./screens/MORE";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Anton-Regular": require("./assets/fonts/Anton-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="EXPERIENCE"
              component={EXPERIENCE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SCREENINTRO"
              component={SCREENINTRO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SCREENMAIN"
              component={SCREENMAIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MAIN"
              component={MAIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BANNER"
              component={BANNER}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LOGO"
              component={LOGO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PACKAGING"
              component={PACKAGING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MORE"
              component={MORE}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
