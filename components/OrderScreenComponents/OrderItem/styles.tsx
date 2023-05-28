import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { SecondaryColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";

import { deviceHeight, deviceWidth } from "./types";

export const styles = StyleSheet.create({
  container: {
    elevation: 1,
    zIndex: 1,
    alignItems: "flex-end",
  },
  row1: {
    flexDirection: "row",
    width: deviceWidth * 0.85,
    alignSelf: "center",
    maxHeight: responsiveHeight(13),
  },
  productInfo: {
    marginLeft: 30,
    flex: 1,
    maxWidth: '60%',    
    
  },
  sellerAndPrice: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    
  },
  size: {
    elevation: 2,
    zIndex: 2,
    width: 38,
    height: 43,
    borderRadius: 8,
    margin: responsiveHeight(1),
    alignItems: "center",
    marginLeft: 10,
    justifyContent: "center",
  },
  sizes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  colors: {
    marginLeft: 10,
  },
  color: {
    width: 30,
    height: 30,
    borderRadius: 20,
    elevation: 1,
    zIndex: 1,
    justifyContent: "center",
  },
  name: {
    ...FontStyles.Heading1,
    fontSize: responsiveFontSize(3.25),
    marginBottom: responsiveHeight(0.5)
  },
  price: {
    ...FontStyles.MediumBoldText,
    fontSize: responsiveFontSize(1.9),
    color: '#BFBBB9'
  },
  egp: {
    ...FontStyles.NormalText,
    fontSize: responsiveFontSize(1.9),
    color: '#BFBBB9'
  },
  labels: {
    marginLeft: deviceWidth * 0.05,
    ...FontStyles.NormalText,
  },
  seller: {
    ...FontStyles.MediumBoldText,
    fontSize: responsiveFontSize(2.7)
  },
  check: {
    alignSelf: "center",
  },
  confirm: {
    ...FontStyles.Heading2,
    fontSize: 20,
    marginBottom: 5
  },
  pleaseConfirm: {
    ...FontStyles.NormalText,
    color: "#BFBBB9",
    fontSize: 14
  },
  colorPicked: {
    width: 16,
    height: 16,
    borderRadius: 12.5,
    elevation: 1,
    zIndex: 1,
  },
  imagebig: {
    width: 150,
    height: deviceHeight * 0.25,
  },
  title: {
    ...FontStyles.Heading1
  },
  sorryText: {
    ...FontStyles.NormalText,
    textAlign: "center",
  },
  sorryAndSuccess: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
