import { Platform } from "react-native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import colors from "./app/config/colors";
import ImageViewPage from "./app/screens/ImageViewPage";
import DetailsListingPage from "./app/screens/DetailsListingPage";
import ListingPage from "./app/screens/ListingPage";
import AppCard from "./app/components/AppCard";
import AppIcon from "./app/components/AppIcon";

export default function App() {
  return (
    <View style={styles.container}>
      <AppIcon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor={colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
