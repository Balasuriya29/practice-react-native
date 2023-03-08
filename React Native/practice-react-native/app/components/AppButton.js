import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../config/colors";

function AppButton({ title, color = "primary", onPress, width, height }) {
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: colors[color], width: width, height: height },
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonTitle}> {title} </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 7.5,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default AppButton;
