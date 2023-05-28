import React from "react";
import { View, ScrollView } from "react-native";
import SkeletonPlaceholder from "../../../../../services/react-native-skeleton-placeholder";

import { styles } from "./styles";
import { windowWidth } from "./types";

export const ProfileScreenLoading = () => {
  return (
    <>
      <View style={styles.loadingBar} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.statusBarPlaceHolder} />
        <SkeletonPlaceholder>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: windowWidth / 3,
                height: windowWidth / 3,
                borderRadius: windowWidth / 3,
              }}
            />
            <View style={{ marginLeft: 20 }}>
              <View
                style={{
                  width: windowWidth / 2 - 40,
                  height: 40,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: windowWidth / 2,
                  height: 40,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={styles.loadingBar} />
            <View style={styles.loadingBar} />
            <View style={styles.loadingBar} />
            <View style={styles.loadingBar} />
            <View style={styles.loadingBar} />
          </View>
        </SkeletonPlaceholder>
      </ScrollView>
    </>
  );
};
