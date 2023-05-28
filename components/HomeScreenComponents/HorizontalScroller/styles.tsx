import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "./types";

export const styles = StyleSheet.create({
  fullscreen: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    height: "100%",
    width: screenWidth,
    position: "absolute",
  },
  indicator: {
    elevation: 1,
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    marginBottom: screenHeight / 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
