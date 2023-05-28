import React from "react";
import { View, ScrollView } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SkeletonPlaceholder from "../../../../../services/react-native-skeleton-placeholder";
import { DoubleHz12Container } from "../../../../../styles/Containers";

import { styles } from "./styles";

const CardLoading = () => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 15,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <SkeletonPlaceholder>
        <View
          style={[
            DoubleHz12Container.Container,
            { width: responsiveWidth(90) },
          ]}
        >
          <View
            style={[
              DoubleHz12Container.LeftComponent,
              { alignItems: "flex-start", padding: responsiveWidth(1) },
            ]}
          >
            <View
              style={{
                width: responsiveWidth(15),
                height: responsiveWidth(15),
                borderRadius: responsiveWidth(15),
              }}
            />
          </View>
          <View style={{ flex: 4 }}>
            <View style={{ alignItems: "flex-start" }}>
              <View
                style={{
                  marginTop: responsiveHeight(1),
                  width: responsiveWidth(30),
                  height: responsiveHeight(3.5),
                  borderRadius: responsiveWidth(2),
                }}
              />
              <View
                style={{
                  marginTop: responsiveHeight(1),
                  width: responsiveWidth(25),
                  height: responsiveHeight(3.5),
                  borderRadius: responsiveWidth(2),
                }}
              />
              <View
                style={{
                  marginTop: responsiveHeight(1),
                  width: responsiveWidth(60),
                  height: responsiveHeight(3.5),
                  borderRadius: responsiveWidth(2),
                }}
              />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
      <View style={{ flex: 1 }} />
    </View>
  );
};

export const NotificationScreenLoading = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, marginBottom: responsiveHeight(3) }}>
        <CardLoading />
      </View>
      <View style={{ flex: 1, marginBottom: responsiveHeight(3) }}>
        <CardLoading />
      </View>
      <View style={{ flex: 1, marginBottom: responsiveHeight(3) }}>
        <CardLoading />
      </View>
      <View style={{ flex: 2 }} />
    </ScrollView>
  );
};
