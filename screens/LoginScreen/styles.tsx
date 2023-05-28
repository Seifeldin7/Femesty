import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  DoubleVzEqualContainer,
  ScreenStyles,
  TripleVz131Container,
} from "../../styles/Containers";

import { MainColors } from "../../styles/Colors";
import { FontStyles } from "../../styles/Fonts";

export const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.Screen,
    backgroundColor: MainColors.Dark,
  },
  topContainer: {
    ...DoubleVzEqualContainer.TopComponent,
    backgroundColor: MainColors.Dark,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: MainColors.Natural,
    fontSize: responsiveFontSize(6.8),
    fontFamily: 'Octarine_Bold',
  },
  slogan: {
    ...FontStyles.SmallText,
    color: MainColors.Natural,
    alignSelf: "flex-end",
    paddingEnd: responsiveWidth(4),
    fontSize: responsiveFontSize(1.2)
  },
  popup: {
    ...TripleVz131Container.TopComponent,
    alignContent: "center",
    justifyContent: "center",
  },
  header: {
    ...FontStyles.SubTitle,
    alignSelf: "center",
    fontSize: responsiveFontSize(3.2)
  },
  termsAndConditions: {
    ...DoubleVzEqualContainer.TopComponent,
    justifyContent: "center",
    alignContent: "center",
  },
});
