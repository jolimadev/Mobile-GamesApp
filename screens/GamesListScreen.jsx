import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MemoGame from '../components/MemoGame';
import QuizGame from '../components/QuizGame';

const GamesListScreen = ({ navigation }) => {
  const handleOnPress = (gameName) => {
    if (gameName === "QuizGame") {
      navigation.navigate("QuizGame");
    } else {
      gameName === "MemoGame";
      navigation.navigate("MemoGame");
    }
  };

  return (
    <View>
      <Text style={styles.textTitle}>
        Empieza por el juego que más te interese:
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOnPress("MemoGame")}
        >
          <Text style={styles.buttonText}>Memo Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOnPress("QuizGame")}
        >
          <Text style={styles.buttonText}>Quiz Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>3rd Game Coming Soon</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../assets/images/bgimg.png")}
        style={styles.backgroundImage}
      ></ImageBackground>
    </View>
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
    backgroundColor: "#53269C",
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
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, //si comento esta linea se estira el contenedor de preguntas, pero tapa la imagen
    resizeMode: "cover",
    justifyContent: "center",
    width: 350,
    height: 240,
    marginTop: 430,
    marginLeft: 20,
    backgroundColor: "#8033FF",
  },
});

export default GamesListScreen;
