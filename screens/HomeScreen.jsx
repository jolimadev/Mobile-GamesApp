import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";



const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={require("../assets/images/bgimg.png")}
        style={{
          flex: 0,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
        }}
      />
       <Text style={styles.title}>WELCOME TO LOGIC GAMES</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("GamesList")}>
          <Text style={{ color: "#ffffff" }}>Play to Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontSize: 16,
    width: 110,
    height: 40,
  },
});

export default HomeScreen;