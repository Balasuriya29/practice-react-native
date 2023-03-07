import React, { useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

import colors from "./app/config/colors";
import ImageViewPage from "./app/screens/ImageViewPage";
import DetailsListingPage from "./app/screens/DetailsListingPage";
import ListingPage from "./app/screens/ListingPage";
import AppCard from "./app/components/AppCard";
import AppIcon from "./app/components/AppIcon";
import AppButton from "./app/components/AppButton";

const randomHexColor = () => {
  return "#000000".replace(/0/g, () => {
    return Math.round(Math.random() * 16).toString(16);
  });
};

const Box = (id) => {
  return (
    <View
      key={id}
      style={{
        width: 75,
        height: 75,
        backgroundColor: randomHexColor(),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{id}</Text>
    </View>
  );
};

const flex_direction = ["column", "column-reverse", "row", "row-reverse"];

const justifyContents = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
];

const alignItemsArr = [
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "baseline",
];

const alignContents = [
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "space-between",
  "space-around",
];

const wraps = ["nowrap", "wrap", "wrap-reverse"];

export default function App() {
  const [totalBox, setTotalBox] = useState([Box(1), Box(2), Box(3)]);
  const [flexDirectionsindex, setFlexDirectionsIndex] = useState(0);
  const [wrapindex, setWrapIndex] = useState(0);
  const [justifycontentindex, setJustifyContentIndex] = useState(0);
  const [alignitemsindex, setAlignItems] = useState(0);
  const [aligncontentsindex, setAlignContents] = useState(0);
  const [columngap, setColumnGap] = useState(0);
  const [rowgap, setRowGap] = useState(0);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.boxContainer,
          {
            flexDirection: flex_direction[flexDirectionsindex],
            flexWrap: wraps[wrapindex],
            justifyContent: justifyContents[justifycontentindex],
            alignItems: alignItemsArr[alignitemsindex],
            alignContent: alignContents[aligncontentsindex],
            columnGap: columngap,
            rowGap: rowgap,
          },
        ]}
      >
        {totalBox.map((box) => box)}
      </View>

      <View style={[styles.buttonContainer]}>
        <AppButton
          title={"Add Box"}
          onPress={() => {
            setTotalBox([...totalBox, Box(totalBox.length + 1)]);
          }}
        />
        <AppButton
          title={"Delete Box"}
          onPress={() => {
            totalBox.pop();
            setTotalBox([...totalBox]);
          }}
        />
        <AppButton
          title={`Flex Direction\n${
            flexDirectionsindex === 0 ? "Default: " : ""
          }${flex_direction[flexDirectionsindex]}`}
          onPress={() => {
            setFlexDirectionsIndex((flexDirectionsindex + 1) % 4);
          }}
        />
        <AppButton
          title={`Justify Content\n${
            justifycontentindex === 0 ? "Default: " : ""
          }${justifyContents[justifycontentindex]}`}
          onPress={() => {
            setJustifyContentIndex((justifycontentindex + 1) % 6);
          }}
        />
        <AppButton
          title={`Align Items\n${alignitemsindex === 0 ? "Default: " : ""}${
            alignItemsArr[alignitemsindex]
          }`}
          onPress={() => {
            setAlignItems((alignitemsindex + 1) % 5);
          }}
        />
        <AppButton
          title={`Wrap\n${wrapindex === 0 ? "Default: " : ""}${
            wraps[wrapindex]
          }`}
          onPress={() => {
            setWrapIndex((wrapindex + 1) % 3);
            if (wrapindex === 0) {
              setColumnGap(0);
              setAlignContents(0);
            }
          }}
        />
        {wrapindex !== 0 ? (
          <AppButton
            title={`Align Content\n${
              aligncontentsindex === 0 ? "Default: " : ""
            }${alignContents[aligncontentsindex]}`}
            onPress={() => {
              setAlignContents((aligncontentsindex + 1) % 6);
            }}
          />
        ) : null}

        <View style={styles.incDecContainer}>
          <Pressable
            onPress={() => {
              setColumnGap(columngap + 1);
            }}
          >
            <AppIcon
              style={styles.icons}
              name="plus"
              backgroundColor={colors.primary}
              size={50}
            />
          </Pressable>
          <Text style={styles.text}>Column{"\n"}Gap</Text>
          <Pressable
            onPress={() => {
              setColumnGap(columngap - 1);
            }}
          >
            <AppIcon
              style={styles.icons}
              name="minus"
              backgroundColor={colors.primary}
              size={50}
            />
          </Pressable>
        </View>
        <View style={styles.incDecContainer}>
          <Pressable
            onPress={() => {
              setRowGap(rowgap + 1);
            }}
          >
            <AppIcon
              style={styles.icons}
              name="plus"
              backgroundColor={colors.primary}
              size={50}
            />
          </Pressable>
          <Text style={styles.text}>Row{"\n"}Gap</Text>
          <Pressable
            onPress={() => {
              setRowGap(rowgap - 1);
            }}
          >
            <AppIcon
              style={styles.icons}
              name="minus"
              backgroundColor={colors.primary}
              size={50}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    height: "50%",
  },
  buttonContainer: {
    height: "50%",
    backgroundColor: colors.secondary,
    alignContent: "center",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  icons: {},
  incDecContainer: {
    paddingVertical: 13,
    paddingLeft: 2.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: 600,
    color: colors.black,
  },
});
