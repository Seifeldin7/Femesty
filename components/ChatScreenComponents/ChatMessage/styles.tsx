import { StyleSheet } from "react-native";
import { SecondaryColors } from "../../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 5,
    padding: 15,
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: SecondaryColors.gray,
  },
});
