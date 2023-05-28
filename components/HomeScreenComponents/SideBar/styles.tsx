import { StyleSheet } from "react-native";

import { screenHeight } from "./types";

export const styles = StyleSheet.create({
  container: {
    elevation: 1,
    zIndex: 1,
    alignItems: "flex-end",
    marginTop: screenHeight / 3 + 50,
    alignSelf: 'flex-end',
  },
});
