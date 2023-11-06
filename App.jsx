import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GamesListScreen from './screens/GamesListScreen';
import Game1Screen from './screens/Game1Screen';
import Game2Screen from './screens/Game2Screen';
import Game3Screen from './screens/Game3Screen';



const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e', //es como un naranja ver p/modificar
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="GamesList" component={GamesListScreen} options={{ title: 'Lista De Juegos' }} />
        <Stack.Screen name="Game1" component={Game1Screen} />
        <Stack.Screen name="Game2" component={Game2Screen} />
        <Stack.Screen name="Game3" component={Game3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;