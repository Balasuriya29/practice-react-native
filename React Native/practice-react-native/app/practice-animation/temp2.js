import React, { Fragment, useEffect, useRef, useState } from "react";
import { Animated, useWindowDimensions } from "react-native";
import { Text } from "react-native";
import { Easing } from "react-native";
import { PanResponder } from "react-native";
import { Platform, StyleSheet, View, StatusBar } from "react-native";

import colors from "./app/config/colors";

export default function App() {
  const { width, height } = useWindowDimensions();
  const [bottomNavigationShown, setBottomNavigationShown] = useState(false);

  const pan = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // console.log("Starting");
      // console.log(pan);
      return true;
    },
    // onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      // console.log(gestureState.numberActiveTouches);
      // console.log(pan);
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          // dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      console.log(pan.y);
      console.log(pan);
      // console.log(height * 0.25);

      //  1.
      // if (bottomNavigationShown) {
      //   let shown = false;
      //   console.log("Shown");
      //   if (pan.y._value >= height * 0.25) {
      //     Animated.spring(
      //       pan,
      //       {
      //         toValue: { x: 0, y: height * 0.69 },
      //         useNativeDriver: false,
      //       } // Back to zero
      //     ).start();
      //     shown = true;
      //   } else {
      //     Animated.spring(
      //       pan,
      //       { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
      //     ).start();
      //   }
      //   if (shown) {
      //     setBottomNavigationShown(!bottomNavigationShown);
      //     console.log("Change Bottom 2");
      //   } else {
      //     console.log("Change Bottom 3");
      //   }
      //   pan.flattenOffset();
      // }

      // 2.
      // else {
      // console.log("Not Shown");
      if (pan.y._value * -1 >= height / 2) {
        Animated.spring(
          pan,
          {
            toValue: { x: 0, y: height * -0.69 },
            useNativeDriver: false,
          } // Back to zero
        ).start();
      } else {
        Animated.spring(
          pan,
          { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
        ).start();
      }
      pan.flattenOffset();
      // }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            backgroundColor: "red",
            width: "100%",
            // bottom: !bottomNavigationShown ? "-89%" : "-25%",
            bottom: "-89%",
            height: "100%",
            borderRadius: 50,
            position: "absolute",
          },
          {
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          },
        ]}
        {...panResponder.panHandlers}
      />
      <Text style={{ position: "absolute", fontSize: 30, bottom: 0 }}>
        Hello bottom: {!bottomNavigationShown ? "-89%" : "-25%"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "",
    // justifyContent: "flex-end",
  },
});
