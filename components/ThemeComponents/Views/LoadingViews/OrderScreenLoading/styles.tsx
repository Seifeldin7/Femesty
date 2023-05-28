import { StyleSheet } from "react-native";

import { windowWidth } from "./types";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  statusBarPlaceHolder: {
    flex: 0.1,
  },
  loadingBar: {
    marginTop: 15,
    width: windowWidth - 40,
    height: 30,
    borderRadius: 4,
  },
  tabNavigator: {
    flex: 0.1,
  },
});
