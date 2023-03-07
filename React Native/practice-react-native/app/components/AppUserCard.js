import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function AppUserCard({ title, subTitle, image, style }) {
  return (
    <View style={[styles.userContainer, style]}>
      <Image style={styles.image} source={image} />
      <View style={styles.userDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userContainer: {
    flexDirection: "row",
  },
  userDetails: {
    justifyContent: "center",
    flexDirection: "column",
    marginHorizontal: 10,
  },
  title: {
    marginBottom: 5,
    fontWeight: 600,
    fontSize: 17,
  },
  subTitle: {
    color: colors.grey,
  },
});

export default AppUserCard;
