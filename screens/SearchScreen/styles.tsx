import { StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { MainColors } from "../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  statusBar: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  back: {
    flex: 1,
  },
  searchBar: {
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    height: 35,
    borderRadius: 8,
  },
  tagsContainer: {
    flex: 2,
  },
  tagsScroller: {
    padding:responsiveHeight(1)
  },
  tag: {
    margin:8,
    height:responsiveHeight(5),
    borderRadius:10,
    paddingHorizontal:10,
    backgroundColor: MainColors.Light,
    justifyContent:'center',
    alignItems:'center'
  },
  searchHistory: {
    flex: 15,
  },
});
