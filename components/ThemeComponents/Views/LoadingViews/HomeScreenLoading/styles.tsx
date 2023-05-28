import { Dimensions, StatusBar, StyleSheet } from "react-native";

import { windowWidth } from "./types";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  statusBarPlaceHolder: {
    height: StatusBar.currentHeight,
  },
  tabNavigator: {
    flex: 1,
  },
  loadingBar: {
    flex: 1,
  },
  body: {
    flex: 10,
  },
  placeHolderContainer: {
    alignItems: "flex-end",
    marginBottom: windowWidth / 3.8,
    marginEnd: 20,
  },
});
