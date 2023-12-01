import React from "react";
import { View, Button, StyleSheet } from "react-native";
import NumberGuessingGame from "../components/NumberGuessingGame";

const Game3Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NumberGuessingGame />
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Game's List"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go back to Home" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0", // Color de fondo de pantalla
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default Game3Screen;
