import React from "react";
import { Dimensions, Platform, StatusBar } from "react-native";

export function TranslucentStatusBar() {
  return (
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="light-content"
    />
  );
}
