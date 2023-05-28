import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { MainColors } from "../../Colors";

export const smallLogoStyles = StyleSheet.create({
  logoContainer: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    backgroundColor: MainColors.Dark,
    borderRadius: responsiveWidth(12) / 5,
    alignItems:'center',
    justifyContent:'center'
  },
  logo: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    resizeMode: "contain",
  },
});
