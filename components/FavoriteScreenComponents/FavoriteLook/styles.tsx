import { StyleSheet } from "react-native";
import { BasicColors } from "../../../styles/Colors";

export const styles = StyleSheet.create({
    media: {
      height: "100%",
      overflow: "hidden",
      width: undefined,
      position: "relative",
      top: 2,
      left: 2,
      borderRadius: 30,
      borderColor: "transparent",
    },
    deleteButton: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    textStyle: {
      position: "absolute",
      bottom: 20,
      left: 10,
    },
    titleText: {
      color: BasicColors.White,
      marginBottom: 10,
      textShadowRadius: 2,
      textShadowColor: BasicColors.Black,
    },
    designerText: {
      color: BasicColors.White,
      marginTop: 5,
      marginLeft: 4,
      textShadowRadius: 2,
      textShadowColor: BasicColors.Black,
    },
    logo: {
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      borderColor: "grey",
      borderWidth: 2,
    },
  });
  