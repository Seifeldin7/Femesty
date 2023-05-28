import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { styles, mystateStyle } from "./styles";
import { componentProps } from "./types";
import { MainColors } from "../../../styles/Colors";
import { Avatar } from "../../ThemeComponents/Avatar";

export const OrderCard = ({ order, TestId }: componentProps) => {
  return (
    <Animatable.View
      animation="fadeInRightBig"
      duration={1000}
      delay={200}
      style={{ backgroundColor: MainColors.Natural }}
    >
      <View style={styles.container} testID={TestId}>
        <View style={styles.image}>
          {order.product.image1 !== "" ? (
            <Avatar style={styles.logo} imgPath={{ uri: order.product.image1 }} size="medium" />
          ) : (
            <FontAwesome name="user-circle-o" size={70} color="gray" />
          )}
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardData}>
            <View style={styles.productDetails}>
              <Text numberOfLines={2} style={styles.title}>
                {order.product.name}
              </Text>
              <Text numberOfLines={1} style={styles.brand}>
                {order.product.seller.name}
              </Text>
              <View style={styles.sizeColor}>
                <Text numberOfLines={1} style={styles.size}>
                  size: <Text style={styles.actualSize}>{order.size}</Text>
                </Text>
                <View
                  style={[styles.color, { backgroundColor: order.color }]}
                ></View>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.statePrice}>
              <Text
                style={[styles.state, { color: mystateStyle[order.status] }]}
              >
                {order.status}
              </Text>
              <Text numberOfLines={1} style={styles.price}>
                {order.price.toFixed(2)} <Text style={styles.egp}>EGP</Text> 
              </Text>
            </View>
          </View>
          <View style={styles.date}>
            <Text numberOfLines={1} style={styles.TextDate}>
              requested on {order.created_at.toString()}
            </Text>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};
