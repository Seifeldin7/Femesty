import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: 32,
      width: 32,
      // resizeMode: "contain", problem with flex so replaced with width
    },
  });
  