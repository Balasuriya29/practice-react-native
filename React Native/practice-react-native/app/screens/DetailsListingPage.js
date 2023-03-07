import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppUserCard from "../components/AppUserCard";

function DetailsListingPage({ title, description, image }) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <AppUserCard
        title="Mosh Hamedani"
        subTitle="5 Listings"
        image={require("../assets/mosh.jpg")}
        style={styles.userCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    color: "blue",
    fontWeight: 400,
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 20,
    marginHorizontal: 20,
  },
  userCard: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default DetailsListingPage;
