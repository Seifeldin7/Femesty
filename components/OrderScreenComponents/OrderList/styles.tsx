import { StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { MainColors, SecondaryColors } from "../../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backTextWhite: {
    color: MainColors.Natural,
  },
  backLeftBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    width: 75,
    marginTop: 5
  },
  backRightBtnRight: {
    backgroundColor: SecondaryColors.darkGrey,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
  },
});
