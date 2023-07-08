import React, { useState, useEffect } from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet } from "react-native";

const GameScreen = () => {
  const [numberString, setNumberString] = useState("");
  const [guess, setGuess] = useState([]);

  useEffect(() => {
    generateRandomNumberString();
  }, []);

  const generateRandomNumberString = () => {
    const random1 = Math.floor(Math.random() * 90) + 10;
    const random2 = Math.floor(Math.random() * 90) + 10;
    const random3 = Math.floor(Math.random() * 90) + 10;

    const formattedRandom2 = random2 < 10 ? `0${random2}` : random2;

    setNumberString(`${random1} - ${formattedRandom2} - ${random3}`);
    setGuess(Array.from({ length: 6 }, () => ""));
  };

  const handleGuessChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const updatedGuess = [...guess];
      updatedGuess[index] = value;
      setGuess(updatedGuess);
    }
  };

  const handleNumpadPress = (number) => {
    const updatedGuess = [...guess];
    const selectedIndex = updatedGuess.findIndex((digit) => digit === "");
    if (selectedIndex !== -1) {
      updatedGuess[selectedIndex] = number;
      setGuess(updatedGuess);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Game</Text>
      <View style={styles.numberContainer}>
        {[...numberString].map((char, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.numberBox,
              index % 3 === 2 && styles.hyphen,
              { borderColor: getBorderColor(index) },
            ]}
            activeOpacity={1}
            onPress={() => {}}
          >
            {char !== " " && (
              <Text style={styles.numberText}>{guess[index]}</Text>
            )}
            {char === " " && <Text style={styles.dashText}>-</Text>}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.numpadContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "DEL"].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.numpadButton}
            onPress={() => handleNumpadPress(number)}
          >
            <Text style={styles.numpadButtonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="New Numbers" onPress={generateRandomNumberString} />
    </View>
  );
};

const getBorderColor = (index) => {
  const colors = ["red", "yellow", "blue", "green", "orange", "purple"];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  numberBox: {
    width: 60,
    height: 60,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  numberText: {
    fontSize: 24,
  },
  dashText: {
    fontSize: 24,
  },
  hyphen: {
    width: 20,
    alignItems: "center",
    borderBottomWidth: 2,
  },
  numpadContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  numpadButton: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  numpadButtonText: {
    fontSize: 24,
  },
});

export default GameScreen;
