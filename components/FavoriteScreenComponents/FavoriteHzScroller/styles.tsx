import { Dimensions, StyleSheet } from "react-native";

let screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  fullscreen: {
    height: "100%",
    width: screenWidth / 1.5,
  },
});
