import React from "react";
import { View, StyleSheet, Image, StatusBar, Platform } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageViewPage(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/image_section.jpg")}
      />
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={35}
        color="white"
      />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="delete-outline"
        size={35}
        color="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: "absolute",
    top: 30,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageViewPage;
