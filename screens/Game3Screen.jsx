import React from "react";
import { View, Text, Button, TouchableWithoutFeedback } from "react-native";
import Bird from "../components/Bird";
import ObstaclesForBirdGame from "../components/ObstaclesForBirdGame";

const Game3Screen = ({ navigation, jump }) => {
  return (

<TouchableWithoutFeedback onPress={jump}>




    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     
     {isGameOver && <Text>{score}</Text>}
     
      <Button title="Back to Game's List" onPress={() => navigation.goBack()} />
      <Button title="Go back to Home" onPress={() => navigation.popToTop()} />
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
      <ObstaclesForBirdGame
        obstaclesWidth={obstaclesWidth}
        obstaclesHeight={obstaclesHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}
        randomBottom={obstaclesNegHeight}
        color={'green'}
      />
        <ObstaclesForBirdGame
        color={'yellow'}
        obstaclesWidth={obstaclesWidth}
        obstaclesHeight={obstaclesHeight}
        randomBottom={obstaclesNegHeightTwo}
        gap={gap}
        obstaclesLeftTwo={obstaclsLeftTwo}
      />
    </View>
    </TouchableWithoutFeedback>
  );
};

export default Game3Screen;
