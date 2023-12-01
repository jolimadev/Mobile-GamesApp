import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Alert, StyleSheet,TouchableOpacity } from "react-native";

const NumberGuessingGame = () => {
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [newGame, setNewGame] = useState(false);
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  useEffect(() => {
    setSecretNumber(generateRandomNumber());
    setFeedback("");
    setUserGuess("");
    setAttempts(0);
  }, [newGame]);

  const handleGuess = () => {
    const guess = parseInt(userGuess);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      Alert.alert("Invalid Guess", "Please enter a number between 1 and 100.");
      return;
    }

    setAttempts(attempts + 1);

    if (guess === secretNumber) {
      setFeedback(`Congratulations! You guessed the number in ${attempts} attempts.`);
      Alert.alert("Congratulations", `You guessed the number in ${attempts} attempts.`);
      setNewGame(!newGame);
    } else if (guess < secretNumber) {
      setFeedback("Try a higher number!");
    } else {
      setFeedback("Try a lower number!");
    }

    setUserGuess("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number Game</Text>
      <Text style={styles.feedback}>{feedback}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        keyboardType="numeric"
        value={userGuess}
        onChangeText={(text) => setUserGuess(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleGuess}>
        <Text style={styles.buttonText}>Guess</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setNewGame(!newGame)}>
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  feedback: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10, // Ajuste vertical
    padding: 5,
    width: 200,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3498db", // Color del botón
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontSize: 16,
    width: 110,
    height: 40,
    marginVertical: 10, // Ajuste vertical
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default NumberGuessingGame;
