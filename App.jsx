import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import GamesListScreen from "./screens/GamesListScreen";
import Game1Screen from "./screens/Game1Screen";
import Game2Screen from "./screens/Game2Screen";
import Game3Screen from "./screens/Game3Screen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: styles.headerStyle,
            headerTintColor: "#fff",
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="GamesList"
          component={GamesListScreen}
          options={{ title: "Lista De Juegos",
          headerStyle: styles.headerStyle,
          headerTintColor: "#fff",
          headerTitleStyle: styles.headerTitleStyle, }}
        />
        <Stack.Screen name="Game1" component={Game1Screen}
        options={{
          title: "Quiz Game",
          headerStyle: styles.headerStyle,
          headerTintColor: "#fff",
          headerTitleStyle: styles.headerTitleStyle,
        }} />
        <Stack.Screen name="Game2" component={Game2Screen}
         options={{
          title: "Memo Game",
          headerStyle: styles.headerStyle,
          headerTintColor: "#fff",
          headerTitleStyle: styles.headerTitleStyle,
        }} />
        <Stack.Screen name="Game3" component={Game3Screen}
         options={{
          title: "Guess the Number",
          headerStyle: styles.headerStyle,
          headerTintColor: "#fff",
          headerTitleStyle: styles.headerTitleStyle,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#2C3E50", // tono oscuro (Midnight Blue)
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});

export default App;
