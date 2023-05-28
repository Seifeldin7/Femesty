import { Dimensions, StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SecondaryColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    borderRadius: 15,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    backgroundColor: "white",
  },
  image: {
    flex: 1.1,
    margin: 5,
  },
  cardContent: {
    flex: 4,
    flexDirection: "column",
  },
  cardData: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productDetails: {
    flex: 2.3,
  },
  title: {
    flex: 1,
    marginTop: 15,
    ...FontStyles.MediumBoldText,
    fontSize: responsiveFontSize(2.2),
  },
  brand: {
    flex: 1,
    alignItems: "flex-start",
    ...FontStyles.MediumText,
    fontSize: responsiveFontSize(2.2)
  },
  sizeColor: {
    flexDirection: "row",
    alignItems: 'center'
  },
  size: {
    flex: 1,
    ...FontStyles.SmallText
  },
  actualSize: {
    ...FontStyles.NormalText,
    fontSize: responsiveFontSize(2.2),
  },
  color: {
    width: responsiveFontSize(1.6),
    height: responsiveFontSize(1.6),
    borderRadius: responsiveFontSize(1.6) / 2,
  },
  divider: {
    flex: 1,
  },
  statePrice: {
    paddingVertical: 15,
  },
  state: {
    flex: 1,
    ...FontStyles.NormalText,
    alignSelf: 'flex-end',
    textAlign: "center",
    marginRight: 3
  },
  price: {
    flex: 0.5,
    ...FontStyles.MediumBoldText,
    alignSelf: "center",
    marginRight: 3,
    fontSize: responsiveFontSize(2.2)
  },
  logo: {
    marginRight: 5,
    marginTop: 5,
  },
  date: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 5
  },
  TextDate: {
    ...FontStyles.SmallText,
    color: SecondaryColors.darkGrey

  },
  egp: {
    ...FontStyles.NormalText,
    fontSize: responsiveFontSize(1.8)
  }
});

export const mystateStyle: any = {
  Accepted: "mediumaquamarine",
  Rejected: "red",
  Shipped: "aqua",
  Pending: "khaki",
};
