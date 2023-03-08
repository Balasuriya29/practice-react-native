import React, { useEffect, useRef, useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";

import colors from "./app/config/colors";
import AppIcon from "./app/components/AppIcon";
import AppButton from "./app/components/AppButton";

export default function App() {
  const [reference, setReference] = useState(null);
  const myBtn = useRef(null);
  const clickIt = () => myBtn.current.click();

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.grey}
        barStyle={"dark-content"}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      <View style={styles.textContainer}>
        <ScrollView
          ref={(ref) => {
            setReference(ref);
          }}
          style={styles.scrollView}
        >
          <View style={{ backgroundColor: "red", width: 100, height: 100 }} />
          <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
          <View style={{ backgroundColor: "blue", width: 100, height: 100 }} />
          <View style={{ backgroundColor: "pink", width: 100, height: 100 }} />
          <View
            style={{ backgroundColor: "yellow", width: 100, height: 100 }}
          />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Click Me"
          height="10%"
          onPress={() => reference.scrollToEnd()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  text: {
    paddingHorizontal: 30,
    fontSize: 50,
  },
  textContainer: {
    height: "50%",
  },
});
