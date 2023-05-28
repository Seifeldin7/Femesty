import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loadingBar: {
      marginTop: 40,
      marginRight: 45,
      width: Dimensions.get('window').width / 2,
      height: Dimensions.get('window').height / 1.8,
      borderRadius: 4
    }
  });
  