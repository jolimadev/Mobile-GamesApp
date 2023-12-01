import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Text,
  ImageBackground,
} from "react-native";

const GamesListScreen = ({ navigation }) => {
  const handleOnPress = (selectedGame) => {
    navigation.navigate(selectedGame); // Navegar a la pantalla seleccionada
  };

  return (
    <React.Fragment>
      <ImageBackground
        source={require("../assets/images/bgimg.png")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: 640,
          marginTop: 60,
        }}
      />
      <Text style={styles.textTitle}>
        Empieza por el juego que más te interese:
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOnPress("Game1")} // Navega a Game1Screen
        >
          <Text style={styles.buttonText}>Quiz Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOnPress("Game2")} // Navega a Game2Screen
        >
          <Text style={styles.buttonText}>Memo Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOnPress("Game3")}
        >
          <Text style={styles.buttonText}>Guess the Number</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    color: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    padding: 24,
    paddingBottom: 10,
    backgroundColor: "black",
  },
  buttonContainer: {
    backgroundColor: "transparent",
    paddingTop: 22,
    paddingRight: 16,
    paddingBottom: 22,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 16,
    marginVertical: 25,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default GamesListScreen;
