import React from "react";
import { Text, Linking } from "react-native";
import { MainColors, SecondaryColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";

import { styles } from "./styles";

export const TermsAndConditions = () => {
  return (
    <Text style={styles.text}>
      <Text style={[FontStyles.SmallText,{ flexDirection: "row",color:SecondaryColors.lightGrey }]}>
        by continuing, you agree to our
      </Text>
      <Text
        style={[FontStyles.SmallText,{ fontWeight: "bold" , flexDirection: "row"}]}
        onPress={PressHandler}
      >
        {"  "}
        Terms of Use
        {"  "}
      </Text>
      <Text style={[FontStyles.SmallText,{ flexDirection: "row",color:SecondaryColors.lightGrey }]}> and our</Text>
      <Text style={[FontStyles.SmallText,{ fontWeight: "bold" }]} onPress={PressHandler}>
        {"  "}
        Privacy Policy
      </Text>
    </Text>
  );
};

const PressHandler = () => {
  Linking.openURL("http://femesty.com");
};
