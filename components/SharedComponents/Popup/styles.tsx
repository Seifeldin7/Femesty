import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { MainColors } from "../../../styles/Colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  popupContainer: {
    flex: 1,
    backgroundColor: MainColors.Natural,
    borderTopLeftRadius: responsiveWidth(7),
    borderTopRightRadius: responsiveWidth(7),
    maxHeight: responsiveHeight(55),
    width: responsiveWidth(98),
  },
  noClose: {
    maxHeight: responsiveHeight(50),
  },
  close: {
    marginTop: 20,
    marginRight: 15,
    alignSelf: "flex-end",
  },
  bar: {
    width: responsiveWidth(35),
    height: responsiveHeight(0.5),
    backgroundColor: MainColors.Dark,
    borderRadius: responsiveHeight(0.5) / 2,
    alignSelf: "center",
    marginTop: 6,
  },
});
