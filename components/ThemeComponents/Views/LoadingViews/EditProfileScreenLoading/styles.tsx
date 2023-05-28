import { StyleSheet } from "react-native";

import {windowWidth} from './types'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'flex-start',
      padding: 20
    },
    statusBarPlaceHolder: {
      flex: 0.1,
    },
    loadingBar: {
      marginTop: 40,
      width: windowWidth - 40,
      height: 40,
      borderRadius: 4
    }
  });
  