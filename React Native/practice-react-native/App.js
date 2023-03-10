import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";

import colors from "./app/config/colors";
import axios from "axios";
import AppToDoList from "./app/components/AppToDoList";
import AppBar from "./app/components/AppBar";
import AppFloatingActionButton from "./app/components/AppFloatingActionButton";
import AppIcon from "./app/components/AppIcon";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
});
