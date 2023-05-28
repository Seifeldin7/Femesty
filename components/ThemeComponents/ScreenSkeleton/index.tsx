import React from "react";
import { View } from "react-native";

import { NormalStatusBar } from "../StatusBars";
import { TitleBar } from "../TitleBar";
import { ScreenStyles } from "../../../styles/Containers";

import { styles } from "./styles";
import { componentProps } from "./types";

export const ScreenSkeleton = ({
  goBackNavigation,
  title,
  rightControlButton,
  rightControlButtonNavigation,
  children,
}: componentProps) => {
  {
    return (
      <View style={[ScreenStyles.Screen]}>
        <NormalStatusBar />
        <TitleBar
          title={title}
          goBackNavigation={goBackNavigation}
          rightControlButton={rightControlButton}
          rightControlButtonNavigation={rightControlButtonNavigation}
        />
        <View style={{ flex: 10 }}>{children}</View>
      </View>
    );
  }
};
