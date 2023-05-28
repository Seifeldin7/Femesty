import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const IconStyles = StyleSheet.create({
  Small: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
  },
  Medium: {
    height: responsiveHeight(7),
    width: responsiveWidth(11),
  },
  Large: {
    height: responsiveHeight(20),
    width: responsiveWidth(50),
  },
});
