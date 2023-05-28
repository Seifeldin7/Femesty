import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { MainColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";
import { Logo } from "../Logo";

import { styles } from "./styles";
import { componentProps } from "./types";

export const TitleBar = ({
  goBackNavigation,
  title,
  rightControlButton,
  rightControlButtonNavigation,
}: componentProps) => {
  return (
    <View style={styles.titleBar}>
      {goBackNavigation ? (
        (goBackNavigation == "none" ? (
          <View style={styles.backButton}/>
        ) : (
          <TouchableOpacity
            style={styles.backButton}
            onPress={goBackNavigation}
          >
            <Ionicons
              name="ios-arrow-back"
              size={responsiveScreenWidth(10)}
              color={MainColors.Dark}
            />
          </TouchableOpacity>
        ))
      ) : (
        <Logo size={"small"} />
      )}

      {title ? (
        <View style={styles.tile}>
          <Text style={FontStyles.Heading1}>{title}</Text>
        </View>
      ) : (
        <View style={styles.tile} />
      )}

      {rightControlButton ? (
        <TouchableOpacity
          style={styles.rightControlButton}
          onPress={rightControlButtonNavigation}
        >
          <Ionicons
            name={rightControlButton}
            size={responsiveScreenWidth(10)}
            color={MainColors.Dark}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.rightControlButton} />
      )}
    </View>
  );
};
