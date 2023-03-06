import { StyleSheet, Text, View, Image } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image
        blurRadius={2.5}
        style={styles.backgroundImage}
        source={require("../assets/login_banner.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/app_logo.png")} />
        <Text style={styles.slogan}>Sell What You Don't Need</Text>
      </View>

      <AppButton title="Login" />
      <AppButton title="Register" color="secondary" />
    </View>
  );
}

let styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 100,
  },
  loginButton: {
    width: "100%",
    height: "10%",
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: "10%",
    backgroundColor: colors.secondary,
  },
  slogan: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 20,
  },
});
