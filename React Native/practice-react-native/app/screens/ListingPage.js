import React from "react";
import { FlatList, View } from "react-native";

import data from "../config/data";
import AppCard from "../components/AppCard";

function ListingPage() {
  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id}
      renderItem={({ item }) => {
        return (
          <AppCard
            title={item.title}
            description={item.subTitle}
            image={item.image}
          />
        );
      }}
    />
  );
}

export default ListingPage;
