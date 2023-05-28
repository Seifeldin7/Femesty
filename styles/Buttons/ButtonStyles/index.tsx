import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const ButtonStyles = StyleSheet.create({
  XSmall: {
    alignItems: "center",
    justifyContent:'center',
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    borderRadius: responsiveHeight(10) / 2,
  },
  Small: {
    alignItems: "center",
    justifyContent:'center',
    height: responsiveHeight(5),
    width: responsiveWidth(15),
    borderRadius: responsiveHeight(15) / 2,
  },
  Medium: {
    alignItems: "center",
    justifyContent:'center',
    height: responsiveHeight(6),
    width: responsiveWidth(50),
    borderRadius: responsiveHeight(50) / 2,
  },
  Large: {
    alignItems: "center",
    justifyContent:'center',
    height: responsiveHeight(7),
    width: responsiveWidth(70),
    borderRadius: responsiveHeight(70) / 2,
  },
  XLarge: {
    alignItems: "center",
    justifyContent:'center',
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    borderRadius: responsiveHeight(90) / 2,
  },
});
