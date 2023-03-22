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
import { NavigationContainer } from "@react-navigation/native";

import colors from "./app/config/colors";
import TabNav from "./app/practice-animation/TabNav";

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TabNav />
        </View>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
