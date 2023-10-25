import React from "react";
import { View, Text, Button } from "react-native";
import MemoGame from "../components/MemoGame";

const Game2Screen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Game 2</Text>
      <MemoGame />
      <Button title="Back to Game's List" onPress={() => navigation.goBack()} />
      <Button title="Go back to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Game2Screen;
