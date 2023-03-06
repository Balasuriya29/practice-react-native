import { Platform } from "react-native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import LoginPage from "./app/screens/LoginPage";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
