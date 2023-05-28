import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "../../../../../services/react-native-skeleton-placeholder";

import { styles } from "./styles";
import { windowWidth } from "./types";

export const HomeScreenLoading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarPlaceHolder} />
      <View style={styles.loadingBar} />
      <View style={[styles.body, { justifyContent: "flex-end" }]}>
        <SkeletonPlaceholder>
          <View
            style={{
              alignItems: "flex-end",
              marginBottom: windowWidth / 3.8,
              marginEnd: 20,
            }}
          >
            <View
              style={{
                width: windowWidth / 10,
                height: windowWidth / 10,
                borderRadius: windowWidth / 20,
                marginBottom: 20,
              }}
            />
            <View
              style={{
                width: windowWidth / 10,
                height: windowWidth / 10,
                borderRadius: windowWidth / 20,
                marginBottom: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 10,
            }}
          >
            <View
              style={{
                width: windowWidth / 3,
                height: 30,
                borderRadius: 4,
                marginBottom: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              margin: 10,
            }}
          >
            <View
              style={{
                width: windowWidth / 20,
                height: windowWidth / 20,
                borderRadius: windowWidth / 20,
              }}
            />
            <View
              style={{
                marginLeft: 10,
                width: windowWidth / 3,
                height: 20,
                borderRadius: 4,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 10,
            }}
          >
            <View
              style={{
                width: windowWidth / 1.3,
                height: 30,
                borderRadius: 4,
                marginBottom: 10,
              }}
            />
            <View
              style={{
                width: windowWidth / 1.3,
                height: 30,
                borderRadius: 4,
                marginBottom: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: windowWidth / 3,
              marginVertical: 20,
            }}
          >
            <View
              style={{
                width: windowWidth / 10,
                height: 10,
                borderRadius: 4,
                margin: 5,
              }}
            />
            <View
              style={{
                width: windowWidth / 20,
                height: 10,
                borderRadius: 4,
                margin: 5,
              }}
            />
            <View
              style={{
                width: windowWidth / 20,
                height: 10,
                borderRadius: 4,
                margin: 5,
              }}
            />
          </View>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.tabNavigator} />
    </View>
  );
};
