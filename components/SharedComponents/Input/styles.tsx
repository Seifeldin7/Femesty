import { StyleSheet } from "react-native";
import { FontStyles } from '../../../styles/Fonts';
import { MainColors } from '../../../styles/Colors';

export const styles = StyleSheet.create({
  formControl: {
    width: '100%'
  },
  label: {
    ...FontStyles.MediumText
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    marginBottom: 8,
    borderBottomWidth: 1,
    ...FontStyles.NormalText
  },
  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    ...FontStyles.SmallText,
    color: MainColors.Light,
  }
})
