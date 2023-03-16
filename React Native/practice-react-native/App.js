import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  useWindowDimensions,
} from "react-native";
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
import AppSBNB from "./app/practice-animation/AppSBNB";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppSBNB />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
