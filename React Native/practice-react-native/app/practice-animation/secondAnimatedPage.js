import React, { useState } from "react";
import { Button, StyleSheet, View, StatusBar, Platform } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

import colors from "./app/config/colors";

export default function App() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.startX;
      translateY.value = event.translationY + context.startY;
    },
    onEnd: (event, context) => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < 200) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.square, animatedStyle]} />
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
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
  circle: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: "blue",
  },
});
