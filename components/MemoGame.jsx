import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Alert,
} from "react-native";


const MemoGame = () => {
  const [cardsChosen, setCardsChosen] = useState([]); // Para almacenar las cartas solas
  const [cardsChosenIds, setCardsChosenIds] = useState([]); // Para almacenar los IDs de las cartas seleccionadas
  const [cardsWon, setCardsWon] = useState([]);
  //Hook para setear los puntos del juego bro:
  const [score, setScore] = useState(0);

  //Array de Cartas(imagenes del planeta)
  const [cardArray, setCardArray] = useState([
    {
      name: "sun",
      img: require("../assets/images/sun.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "mars",
      img: require("../assets/images/mars.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "earth",
      img: require("../assets/images/earth.png"),
      matched: false,
      isFlipped: false,
    },

    {
      name: "mars",
      img: require("../assets/images/mars.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "sun",
      img: require("../assets/images/sun.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "earth",
      img: require("../assets/images/earth.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "earth",
      img: require("../assets/images/earth.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "mars",
      img: require("../assets/images/mars.png"),
      matched: false,
      isFlipped: false,
    },

    {
      name: "sun",
      img: require("../assets/images/sun.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "sun",
      img: require("../assets/images/sun.png"),
      matched: false,
      isFlipped: false,
    },

    {
      name: "earth",
      img: require("../assets/images/earth.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "mars",
      img: require("../assets/images/mars.png"),
      matched: false,
      isFlipped: false,
    },
  ]);
  //TUkiii esto es para crear la grilla
  const createBoard = () => {
    return cardArray.map((card, index) => (
      <TouchableOpacity key={index} onPress={() => flipCard(index)}>
        <Image
          source={
            card.isFlipped
              ? card.img
              : require("../assets/images/moon.png")
          }
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    ));
  };

  const flipCard = (index) => {
    if (cardsChosenIds.length < 2 && !cardArray[index].isFlipped) {
      // Voltear la carta al cambiar su atributo "isFlipped"
      const updatedCardArray = [...cardArray];
      updatedCardArray[index].isFlipped = true;

      setCardsChosen([...cardsChosen, cardArray[index].name]);
      setCardsChosenIds([...cardsChosenIds, index]);
      console.log("Carta volteada:", cardArray[index].name);

      // Aquí actualizamos el estado del array cardArray con el nuevo valor de isFlipped
      setCardArray(updatedCardArray);
    }
  };
  //Esta funcion nos sirve para chequear si fue par o no. Riquelme
  const checkMatch = () => {
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (cardsChosen[0] === cardsChosen[1] && cardsChosen[0] !== "") {
      // console.log('¡Encontraste un par!');

      Alert.alert("   \n ¡Encontraste un par!✔️");
      setCardsWon([...cardsWon, cardsChosen[0]]);

      setScore(score + 1); // Incrementar el score en 1 al encontrar un par

      // Reiniciar solo las cartas seleccionadas después de un tiempo para permitir ver el par encontrado
      setTimeout(() => {
        setCardsChosenIds([]);
        setCardsChosen([]);
      }, 1000);

      // Verificar si  si el juego termino)
      if (cardsWon.length === cardArray.length / 2 - 1) {
        Alert.alert(
          "         ¡GANASTE!🎁! \n ¿Querés canjear tu premio ahora?"
        );
      }
    } else {
      Alert.alert(" Lo siento Bro, Intenta de nuevo ❌");

      // Voltear las cartas no coincidentes cambiando su atributo "isFlipped"
      const updatedCardArray = [...cardArray];
      updatedCardArray[optionOneId].isFlipped = false;
      updatedCardArray[optionTwoId].isFlipped = false;

      // Actualizamos el estado del array cardArray para reflejar el cambio en las imágenes
      setCardArray(updatedCardArray);

      // Reiniciar las cartas seleccionadas después de un tiempo para permitir ver la segunda carta volteada
      setTimeout(() => {
        setCardsChosenIds([]);
        setCardsChosen([]);
      }, 1000);
    }
  };
  //funcion p/intentos disponibles
  const lifesAvailable = () => {
    //ver si colocar vidas disponibles == intentos disponibles
  };

  //Ver si se puede optimizar esto:
  useEffect(() => {
    if (cardsChosenIds.length === 2) {
      checkMatch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsChosenIds]);

  return (
    <>
       <View style={styles.container}>
        <Text style={styles.scoreText}>
          SCORE: <Text style={styles.scoreValue}>{score}</Text>
        </Text>
        <View style={styles.grid}>{createBoard()}</View>
      </View>
    </>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 20,
  },
  scoreText: {
    fontSize: 25,
    color: "#0c0c0c",
    marginBottom: 10,
  },
  scoreValue: {
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  grid: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 320,
    height: 420,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 10,
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 7,
  },
});

export default MemoGame;
