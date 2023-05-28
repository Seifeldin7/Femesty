import React from "react";
import { StatusBar } from "react-native";
import { View } from "react-native-animatable";

export function NormalStatusBar() {
  return (
    <View style={{ height: StatusBar.currentHeight }}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
    </View>
  );
}
