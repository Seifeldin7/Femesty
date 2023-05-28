import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { MainColors } from "../../Colors";

export const mediumLogoStyles = StyleSheet.create({
  logoContainer: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    backgroundColor: MainColors.Dark,
    borderRadius: responsiveWidth(14) / 8,
    alignItems:'center',
    justifyContent:'center'
  },
  logo: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    resizeMode: "contain",
  },
});
