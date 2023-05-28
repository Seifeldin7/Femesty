import React from "react";
import { View, Text, Image } from "react-native";
import { MainColors } from "../../../../styles/Colors";
import { FontStyles } from "../../../../styles/Fonts";
import { Button } from "../../../SharedComponents/Buttons/Button/index";

import { styles } from "./styles";

export const NoConnection = ({ onCheck }: any) => {
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
        <Text style={[FontStyles.Title, { fontSize: 30 }]}>
          Everything is so quiet
        </Text>
        <Text style={[FontStyles.NormalText, { textAlign: "center" }]}>
          It's just that you lost your Internet connection.
        </Text>
      </View>
      <Button
        backgroundColor={MainColors.Light}
        title="Retry"
        style={styles.button}
        textColor="white"
        onPress={onCheck}
        enable={true}
      />
      <View style={styles.tabNavigator} />
    </View>
  );
};
