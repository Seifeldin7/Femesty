import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { FontStyles } from "./../../Fonts";

export const ButtonTextStyles = StyleSheet.create({
  XSmall: {
    ...FontStyles.SmallText,
    fontSize:responsiveFontSize(1),
  },
  Small: {
    ...FontStyles.SmallText,
    fontSize:responsiveFontSize(1.25)
  },
  Medium: {
    ...FontStyles.NormalText,
    fontSize:responsiveFontSize(1.5)
  },
  Large: {
    ...FontStyles.Heading1,
    fontSize:responsiveFontSize(2),
  },
  XLarge: {
    ...FontStyles.Title,
    fontSize:responsiveFontSize(3),
  },
});
