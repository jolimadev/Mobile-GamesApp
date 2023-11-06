import React from "react";
import { View } from "react-native";

const ObstaclesForBirdGame = ({
  color,
  obstaclesLeft,
  obstaclesLeftTwo,
  obstaclesWidth,
  obstaclesHeight,
  gap,
  randomBottom
}) => {
  return (
    <>
      <View style={styles.container}></View>
      <View style={styles.container2}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", //ver si estos estilos los exporto para game3screen
    backgroundColor: color,
    width: obstaclesWidth,
    height: obstaclesHeight,
    left: obstaclesLeft,
    bottom: randomBottom + obstaclesHeight + gap,
  },
  container2: {
    position: "absolute", //ver si estos estilos los exporto para game3screen
    backgroundColor: color,
    width: obstaclesWidth,
    height: obstaclesHeight,
    left: obstaclesLeftTwo,
    bottom: randomBottom + obstaclesHeight + gap,
  },
});

export default ObstaclesForBirdGame;
