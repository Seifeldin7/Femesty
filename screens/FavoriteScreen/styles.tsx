import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  statusBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  back: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 7,
    marginLeft: 10,
  },
  header: {
    flex: 2.5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
});
