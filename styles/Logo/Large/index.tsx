import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { MainColors } from "../../Colors";

export const largeLogoStyles = StyleSheet.create({
  logoContainer: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    backgroundColor: MainColors.Dark,
    borderRadius: responsiveWidth(20) / 40,
    alignItems:'center',
    justifyContent:'center'
  },
  logo: {
    width: responsiveWidth(22),
    height: responsiveWidth(18),
    resizeMode: "contain",
  },
});
