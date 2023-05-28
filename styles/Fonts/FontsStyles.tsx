import { StyleSheet } from "react-native";
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import * as Colors from "../Colors";

export const FontStyles = StyleSheet.create({
  Title: {
    fontFamily: 'Lato_SemiBold',
    fontSize: responsiveFontSize(4),
    color: Colors.MainColors.Dark,
    letterSpacing: -0.2,
  },
  SubTitle: {
    fontFamily: 'Lato_SemiBold',
    fontSize: responsiveFontSize(3.6),
    color: Colors.MainColors.Dark,
    letterSpacing: -0.2,
  },
  Heading1: {
    fontFamily: 'Lato_Bold',
    fontSize: responsiveFontSize(4),
    color: Colors.MainColors.Dark,
    letterSpacing: -0.2,
  },
  Heading2: {
    fontFamily: 'Lato_SemiBold',
    fontSize: responsiveFontSize(3),
    color: Colors.MainColors.Dark,
    letterSpacing: -0.2,
  },
  NormalText: {
    fontFamily: 'Lato_Regular',
    fontSize: responsiveFontSize(2.2),
    color: Colors.MainColors.Dark,
    letterSpacing: -0.2,
  },
  MediumText: {
    fontFamily: 'Lato_Medium',
    fontSize: responsiveFontSize(2.7),
    color: Colors.MainColors.Dark,
    letterSpacing: -0.2,
  },
  MediumBoldText: {
    fontFamily: 'Lato_Bold',
    fontSize: responsiveFontSize(2.7),
    color: Colors.MainColors.Dark,
    letterSpacing: -0.2,
  },
  SmallText: {
    fontFamily: 'Lato_Medium',
    fontSize: responsiveFontSize(1.8),
    color: Colors.MainColors.Dark,
    letterSpacing: -0.2,
  },
})
