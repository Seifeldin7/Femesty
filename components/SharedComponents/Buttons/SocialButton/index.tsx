import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { SocialButtonProps } from "./types";
import { styles } from "./styles";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { FontStyles } from "../../../../styles/Fonts";
import { MainColors } from "../../../../styles/Colors";

const SocialButton = ({ color, icon, title, onPress }: SocialButtonProps) => {
  return (
    <TouchableOpacity style={[styles.menuItem, { backgroundColor: color }]} onPress={onPress}>
      <View style={styles.wrapingView}>
        <View style={styles.icon}>
          <FontAwesome5
            name={icon}
            size={responsiveHeight(4)}
            color={MainColors.Natural}

          />
        </View>
        <View style={styles.text}>
          <Text
            style={[FontStyles.MediumBoldText, { color: MainColors.Natural, fontSize: responsiveFontSize(1.8) }]}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {title}
          </Text>
        </View>
      </View>

    </TouchableOpacity>
  );
};

export { SocialButton };
