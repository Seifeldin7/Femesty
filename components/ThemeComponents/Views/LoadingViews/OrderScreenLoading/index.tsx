import React from "react";
import { View, ScrollView } from "react-native";
import SkeletonPlaceholder from "../../../../../services/react-native-skeleton-placeholder";

import { styles } from "./styles";
import { windowWidth } from "./types";

const CardLoading = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 5,
        borderRadius: 15,
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <SkeletonPlaceholder>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: windowWidth / 5,
              height: windowWidth / 5,
              borderRadius: windowWidth / 5,
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <View
              style={{
                marginTop: 6,
                width: windowWidth / 2,
                height: 30,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: windowWidth / 2 - 40,
                height: 30,
                borderRadius: 4,
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View style={styles.loadingBar} />
          <View style={styles.loadingBar} />
        </View>
      </SkeletonPlaceholder>
      <View style={{ flex: 1 }} />
    </View>
  );
};

export const OrderScreenLoading = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, marginBottom: 10 }}>
        <CardLoading />
      </View>
      <View style={{ flex: 1, marginBottom: 10 }}>
        <CardLoading />
      </View>
      <View style={{ flex: 1, marginBottom: 10 }}>
        <CardLoading />
      </View>
      <View style={styles.tabNavigator} />
    </ScrollView>
  );
};
