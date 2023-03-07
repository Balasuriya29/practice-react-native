import { React } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function AppCard({ title, description, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    margin: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginHorizontal: 20,
  },
  description: {
    fontSize: 15,
    color: "blue",
    fontWeight: 400,
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});

export default AppCard;
