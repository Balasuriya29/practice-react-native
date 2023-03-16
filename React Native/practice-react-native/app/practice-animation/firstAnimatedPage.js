import React, { useState } from "react";
import { Animated } from "react-native";
import { Button, StyleSheet, View, StatusBar, Platform } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   Easing,
// } from "react-native-reanimated";

import colors from "./app/config/colors";

export default function App() {
  // Vanilla Animation
  const width = useState(new Animated.Value(100))[0];

  const makeBox = () => {
    Animated.timing(width, {
      toValue: Math.random() * 300,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  //Reanimated Animation
  // const width = useSharedValue(100);

  // const opacityStyle = useAnimatedStyle(() => {
  //   return {
  //     width: withTiming(width.value, {
  //       duration: 300,
  //       easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  //     }),
  //   };
  // });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            backgroundColor: "blue",
            height: 100,
          },
          {
            width: width,
          },
        ]}
      />
      <Button onPress={makeBox} title="Hey" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
