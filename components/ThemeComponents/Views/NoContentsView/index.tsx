import React from "react";
import { View, Text, Image } from "react-native";
import { MainColors } from "../../../../styles/Colors";
import { FontStyles } from "../../../../styles/Fonts";
import { Button } from "../../../SharedComponents/Buttons/Button/index";

import {styles} from './styles'

export const NoContent = ({
  onCheck,
  name,
  description,
}: {
  onCheck: any;
  name: string;
  description: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarPlaceHolder} />
      <View style={styles.loadingBar} />
      <Image
        style={styles.imageBig}
        source={require("../../../../assets/icons/vectors/vector-not-found.png")}
      />
      <View
        style={{
          alignItems: "center",
          alignContent: "center",
          marginHorizontal: 40,
          marginVertical: 10,
        }}
      >
        <Text style={[FontStyles.MediumBoldText, { textAlign: "center" }]}>
        Nothing on the {name}
        </Text>
      </View>
      <View style={styles.tabNavigator} />
    </View>
  );
};
