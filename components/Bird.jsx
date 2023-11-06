import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View,TouchableWithoutFeedback } from "react-native";

const Bird = ({ birdBottom, birdLeft }) => {
  let gameTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeftTimerIdTwo;
  //constantes p/obstaculos
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const obstaclesWidth = 60;
  const obstaclesHeight = 300;
  const gap = 150;
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  //constantes p/obstaculos2
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenHeight / 2 + 30
  );
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);

  //Constantes p/ bird component
  const gravity = 3;
  const birdWidth = 50;
  const birdHeight = 60;
  //ver si funca esto aca sino exportar a Game3Screen:
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const birdLeft = screenWidth / 2;
  //verificar useState
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState(0)


  //realizar caida del pajaro:
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 100);
    }
    return () => {
      clearInterval(gameTimerId);
    };
  }, [birdBottom]);
  console.log("birdBottom", birdBottom);

  //function para saltar(exportar)
const jump = () => {
  if( !isGameOver && (birdBottom < screenHeight)) {
    setBirdBottom(birdBottom => birdBottom + 50)
    console.log('jumped pelucaneitor')
  }
}



  //1eros obstaculos(ver si hacerlo componente);
  useEffect(() => {
    if (obstaclesLeft > -obstaclesWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5);
      }, 100);
      return () => {
        clearInterval(obstaclesLeftTimerId);
      };
    } else {
      setObstaclesLeft(screenWidth); //loop para seguir viendo obstaculos
      setObstaclesNegHeight(-Math.random() * 100);
    }
  }, [obstaclesLeft]);

  //2dos obstaculos
  useEffect(() => {
    if (obstaclesLeftTwo > -obstaclesWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo((obstaclesLeftTwo) => obstaclesLeftTwo - 5);
      }, 100);
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo);
      };
    } else {
      setObstaclesLeftTwo(screenWidth); //loop para seguir viendo obstaculos
      setObstaclesNegHeightTwo(-Math.random() * 100);
      setScore(score => score + 1)
    }
  }, [obstaclesLeftTwo]);


  //Check for collisions:
   useEffect(() => {
    if (
      ((birdBottom < (obstaclesNegHeight + obstaclesHeight + 30) ||
      birdBottom > (obstaclesNegHeight + obstaclesHeight + gap -30)) &&
      (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30 )
      )
      || 
      ((birdBottom < (obstaclesNegHeightTwo + obstaclesHeight + 30) ||
      birdBottom > (obstaclesNegHeightTwo + obstaclesHeight + gap -30)) &&
      (obstaclesLeftTwo > screenWidth/2 -30 && obstaclesLeftTwo < screenWidth/2 + 30 )
      )
      ) 
      {
      console.log('game over')
      gameOver()
     
    }
  })
  
//GAME OVER FUNCTION:

const gameOver = () => {
  clearInterval(gameTimerId)
  clearInterval(obstaclesLeftTimerId)
  clearInterval(obstaclesLeftTimerIdTwo)
  setIsGameOver(true)
}

  return (
    <View style={styles.container}>
      <Text>BIRD PELUCA GAME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", //ver si estos estilos los exporto para game3screen
    backgroundColor: "blue",
    width: birdWidth,
    height: birdHeight,
    left: birdLeft - birdWidth / 2,
    bottom: birdBottom(birdHeight / 2),
  },
});

export default Bird;
