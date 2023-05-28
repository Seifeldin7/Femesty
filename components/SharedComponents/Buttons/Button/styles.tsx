  import { StyleSheet } from "react-native";
import { MainColors } from "../../../../styles/Colors";
import {FontStyles} from "../../../../styles/Fonts";
const margin = 14;
export const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    borderRadius: 25,
    margin,
    height: 50
  },
  textStyle: {
    ...FontStyles.NormalText,
    margin
  }
});
