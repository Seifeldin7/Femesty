import { StyleSheet } from "react-native";
import { BasicColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: BasicColors.White,
    padding: 10,
    flex: 1,
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    height: 90,
    ...FontStyles.SmallText,
  },
  icon: {
    marginHorizontal: 5,
  },
});
