import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  button: {
    padding: 15,
    width: Dimensions.get("window").width * 0.7,
    justifyContent: "center",
    borderRadius: 50,
    alignSelf: "center",
  },
  imageBig: {
    height: Dimensions.get("window").height * 0.58,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
  },
});
