import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function AppButton({ title, color = "primary" }) {
  return (
    <View style={[styles.button, { backgroundColor: colors[color] }]}>
      <Text style={styles.buttonTitle}> {title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: "6%",
    width: "95%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 7.5,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default AppButton;
