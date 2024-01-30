// Button.tsx
import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const Button = ({ title, onPress, type }) => {
  return (
    <Pressable style={[styles.button, styles[type]]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    borderRadius: 8,
    padding: 15,
    fontSize: 40,
    marginVertical: 15,
  },
  buttonPrimary: {
    backgroundColor: "#673ab7",
  },
  buttonSecondary: {
    backgroundColor: "#8561c5",
  },
});

export default Button;
