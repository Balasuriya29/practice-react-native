import React from "react";
import { View, StyleSheet, Image, StatusBar, Platform } from "react-native";
import colors from "../config/colors";

function ImageViewPage(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/image_section.jpg")}
      />
      <View style={styles.deleteIcon}></View>
      <View style={styles.closeIcon}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  closeIcon: {
    position: "absolute",
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    top: 30,
    right: 30,
  },
  deleteIcon: {
    position: "absolute",
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    top: 30,
    left: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageViewPage;
