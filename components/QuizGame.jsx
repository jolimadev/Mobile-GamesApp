import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  // Array de objetos con las preguntas p/el quiz, esto podemos mejorarlo con Firebase y actualizar las preguntas desde ahí.
  const preguntas = [
    {
      pregunta:
        "¿Cuál es el siguiente número en la secuencia: 1, 2, 4, 8, 16, ...?",
      opciones: ["32", "64", "256", "512"],
      respuestaCorrecta: 1,
      explicación:
        "La secuencia es una progresión geométrica, en la que cada número es el doble del anterior. Por lo tanto, el siguiente número es 2 * 16 = 32.",
    },
    {
      pregunta: "¿Cuál es el animal que tiene más patas?",
      opciones: [
        "El pulpo",
        "La araña",
        "La estrella de mar",
        "La lombriz de tierra",
      ],
      respuestaCorrecta: 3,
      explicación:
        "La estrella de mar tiene hasta 50 patas, lo que la convierte en el animal con más patas.",
    },
    {
      pregunta: "¿Cuál es la capital de Francia?",
      opciones: ["París", "Roma", "Londres", "Berlín"],
      respuestaCorrecta: 1,
      explicación: "París es la capital de Francia.",
    },
    {
      pregunta: "¿Cuál es el resultado de 2 + 2 * 2?",
      opciones: ["6", "8", "10", "12"],
      respuestaCorrecta: 2,
      explicación:
        "El orden de las operaciones matemáticas es: 1. Multiplicación y división 2. Suma y restaPor lo tanto, el resultado es 2 * 2 = 4, luego 4 + 2 = 6.",
    },
    {
      pregunta: "¿Cuál es la respuesta a la vida, el universo y todo?",
      opciones: ["42", "La respuesta es 42", "No hay respuesta", "No lo sé"],
      respuestaCorrecta: 1,
      explicación:
        "La respuesta a la vida, el universo y todo es 42, según la novela de Douglas Adams 'La Guía del Autoestopista Galáctico'.",
    },
  ];

  // Logica para setear las respuestas, como ven recibiimos como param un dato tipo number
  const handleAnswer = (respuestaSeleccionada) => {
    if (!showExplanation) {
      const preguntaActual = preguntas[currentQuestion];
      if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
        setScore(score + 1);
      }
      setShowExplanation(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setShowExplanation(false);
      }, 4000);
    }
  };
  // Función para reiniciar el quiz
  const reiniciarQuiz = () => {
    setCurrentQuestion(0);
    setShowExplanation(false);
    setScore(0);
  };

  //Renderiza el quiz con las preguntas y opciones correspondientes, despues se reincia el quiz dandole click:
  const renderizarQuiz = () => {
    if (currentQuestion >= preguntas.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            QUIZ COMPLETADO {`\n`} 🎉¡Gracias por participar!🎉
          </Text>
          <Text style={styles.text}>
            {`\n`}Puntaje: {score} / {preguntas.length}
          </Text>
          <TouchableOpacity style={styles.opcion} onPress={reiniciarQuiz}>
            <Text style={styles.text}>Reintentar Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }

    const { pregunta, opciones } = preguntas[currentQuestion];

    return (
      <View>
        {/*Ver si sacar o no la pregunta de abajo */}
        {/* <Text style={styles.text}>Por favor, responde la siguiente pregunta:</Text> */}
        <Text style={styles.pregunta}>{pregunta}</Text>
        {opciones.map((opcion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.opcion}
            onPress={() => handleAnswer(index)}
            disabled={showExplanation}
          >
            <Text style={styles.text}>{opcion}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderizarExplicacion = () => {
    if (showExplanation && currentQuestion < preguntas.length) {
      const { explicacion } = preguntas[currentQuestion];
      return (
        <View style={styles.containerExplicacion}>
          <Text style={styles.explicacion}>Explicación:</Text>
          <Text style={styles.text}>{explicacion}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <>
   
      <View style={styles.container}>
        {renderizarQuiz()}
        {renderizarExplicacion()}

        {showExplanation ? null : (
          //Esta opcion va a ser muy buena para escoger imagenes de la tematica del quiz
          <ImageBackground
          // source={require("../assets/images/bgimg.png")}
          // style={{
          //   flex: 0,
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          // }}
        />
        )}
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
    padding: 40,
    backgroundColor: "#F0F0F0",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 0,
  },
  pregunta: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  opcion: {
    backgroundColor: "#3498db",
    padding: 20,
    marginVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  containerExplicacion: {
    padding: 20,
    marginBottom: 40,
    backgroundColor: "#3498db",
    color: "#fff",
  },
  explicacion: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  // backgroundImage: {
  //   ...StyleSheet.absoluteFillObject,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  //   width: 350,
  //   height: 640,
  //   marginTop: 30,
  //   marginLeft: 20,
  //   // backgroundColor: "#F0F0F0",
  // },
});

export default QuizGame;
