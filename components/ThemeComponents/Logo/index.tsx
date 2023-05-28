import React from "react";
import { Image, View } from "react-native";
import {
  largeLogoStyles,
  mediumLogoStyles,
  smallLogoStyles,
} from "../../../styles/Logo";

import { componentProps } from "./types";

export const Logo = ({ size, color }: componentProps) => {
  let image = require("../../../assets/icons/logo/icon.png");
  if (color == "white") {
    image = require("../../../assets/icons/logo/app_icon_white.png");
  }
  let style = smallLogoStyles;
  switch (size) {
    case "small":
      style = smallLogoStyles;
      break;
    case "medium":
      style = mediumLogoStyles;
      break;
    case "large":
      style = largeLogoStyles;
      break;
    default:
      style = smallLogoStyles;
      break;
  }
  return (
    <View style={style.logoContainer}>
      <Image style={style.logo} source={image} />
    </View>
  );
};
