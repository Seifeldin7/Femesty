import { StyleSheet } from "react-native";
import { BasicColors } from "../../../styles/Colors";

export const styles = StyleSheet.create({
  check: {
    color: BasicColors.White,
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    marginBottom: 15,
    borderRadius: 10,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#8C9DB3",
    width: 150,
    right: 0,
    top: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
