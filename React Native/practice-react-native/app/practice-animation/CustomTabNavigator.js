import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

function CustomTabNavigator({}) {
  const { width, height } = useWindowDimensions();
  const translateXForTabs = useSharedValue(0);
  const panGestureEventTabs = useAnimatedGestureHandler({
    onStart: (event, context) => {
      console.log("Here");
      context.startX = translateXForTabs.value;
    },
    onActive: (event, context) => {
      if (
        event.translationX + context.startX > 0 &&
        event.translationX + context.startX < (width * 0.9) / 2
      )
        translateXForTabs.value = event.translationX + context.startX;
    },
    onEnd: () => {
      if ((width * 0.9) / 4 >= translateXForTabs.value)
        translateXForTabs.value = withSpring(0);
      else translateXForTabs.value = withSpring((width * 0.9) / 2);
    },
  });

  const animatedStyleTabs = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXForTabs.value }],
    };
  });
  return (
    <PanGestureHandler onGestureEvent={panGestureEventTabs}>
      <Animated.View
        style={{
          height: 50,
          flexDirection: "row",
          // marginHorizontal: 100,
        }}
      >
        <View
          style={[
            {
              width: (width * 0.9) / 2,
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingTop: 10,
            },
          ]}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Pending
          </Text>

          <Animated.View
            style={[
              {
                borderWidth: 2,
                width: "100%",
                borderColor: colors.black,
                backgroundColor: colors.black,
              },
              animatedStyleTabs,
            ]}
          />
        </View>
        <View
          style={{
            width: (width * 0.9) / 2,
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Completed
          </Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
}

export default CustomTabNavigator;
