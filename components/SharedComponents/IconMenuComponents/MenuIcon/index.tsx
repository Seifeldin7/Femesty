import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  DoubleHz12Container,
  TripleHz123Container,
} from "../../../../styles/Containers";
import { FontStyles } from "../../../../styles/Fonts";
import { MainColors } from "../../../../styles/Colors";

import { componentProps } from "./types";
import { styles } from "./styles";
import { responsiveHeight } from "react-native-responsive-dimensions";

export const MenuIcon = ({ icon, name, navigation }: componentProps) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={navigation}>
      <View style={styles.icon}>
        <FontAwesome name={icon} size={responsiveHeight(4)} color={MainColors.Dark} />
      </View>
      <View style={styles.text}>
        <Text style={FontStyles.NormalText} numberOfLines={1} ellipsizeMode={'tail'}>{name}</Text>
      </View>
      <View style={{flex:2}} />
    </TouchableOpacity>
  );
};
