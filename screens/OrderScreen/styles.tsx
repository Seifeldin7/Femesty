import { StyleSheet } from "react-native";
import { MainColors } from "../../styles/Colors";
import { FontStyles } from "../../styles/Fonts";

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: MainColors.Natural,
    alignItems: "center",
    paddingBottom: 50
  },
  Title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  TitleText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  TagScroller: {
    flex: 2,
    maxHeight: 30,
    marginBottom: 20,
  },
  OrdersScroller: {
    flex: 7,
  },
  Tag: {
    height: 20,
    paddingRight: 10,
  },
  filterText: {
    ...FontStyles.MediumText
  },
});
