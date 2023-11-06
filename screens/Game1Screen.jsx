import React from "react";
import { View, Text, Button } from 'react-native';
import QuizGame from '../components/QuizGame';


const Game1Screen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <QuizGame />
      <Button title="Back to Game's List" onPress={() => navigation.goBack()} />
      <Button title="Go back to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Game1Screen;
