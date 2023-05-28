import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  wrapingView: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    flex: 1,
    borderRadius: responsiveWidth(2),
    marginVertical: responsiveHeight(1),
    justifyContent: 'center',
  },
  icon: {
    flex: 0.2,
    alignItems: "center",
  },
  text: {
    flex: 0.5,
    justifyContent: "center",
  },
});
