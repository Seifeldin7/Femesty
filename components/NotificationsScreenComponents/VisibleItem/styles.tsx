import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { BasicColors, MainColors, SecondaryColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: MainColors.Natural,
    borderRadius: 5,
    margin: 5,
    marginBottom: 15,
    shadowColor: BasicColors.Black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 10,
  },
  rowFrontVisible: {
    backgroundColor: MainColors.Natural,
    borderRadius: 10,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  desc: {
    ...FontStyles.MediumBoldText,
    marginBottom: 5,
    fontSize: responsiveFontSize(2.3)
  },
  productName: {
    ...FontStyles.SmallText,
    fontSize: responsiveFontSize(2)
  },
  date: {
    ...FontStyles.SmallText,
    color: SecondaryColors.darkGrey,
    alignSelf: 'center'
  },
  circle: {
    borderColor: MainColors.Light,
    height: responsiveHeight(1.4),
    width: responsiveHeight(1.4),
    borderRadius: responsiveHeight(1.4) / 2,
    alignSelf: "flex-end",
    borderWidth: 2.5
}
});
