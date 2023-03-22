import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

import LoginPage from "../screens/LoginPage";
import ListingPage from "../screens/ListingPage";
import AppIcon from "../components/AppIcon";
const Tab = createMaterialTopTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      //   tabBar={() => {
      //     return <AppIcon name="close" />;
      //   }}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },

        tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name="Login"
        children={() => <LoginPage user="Bala" />}
        // options={{
        //   tabBarLabelStyle: {
        //     borderWidth: 2,
        //     padding: 10,
        //     borderRadius: 20,
        //   },
        //   animationEnabled: true,
        //   tabBarBadge: () => {
        //     return <AppIcon name="close" />;
        //   },

        // }}
      />
      <Tab.Screen name="Listing" component={ListingPage} />
    </Tab.Navigator>
  );
}
