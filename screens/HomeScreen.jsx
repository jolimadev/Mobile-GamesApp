import React from "react";
import { View, Text, StyleSheet, ImageBackground, Button} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={require("../assets/images/bgimg.png")}
        style={styles.backgroundImage}
      ></ImageBackground>
      <Text>🎮Welcolme to Logic Games🧠</Text>
      <Button style={{ backgroundColor:'yellow'}}
        title="Play to Start"
        onPress={() => navigation.navigate("GamesList")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

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