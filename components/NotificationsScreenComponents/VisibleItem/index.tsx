import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { componentProps } from "./types";
import { Avatar } from "../../ThemeComponents/Avatar";
import { responsiveHeight } from "react-native-responsive-dimensions";

export const VisibleItem = ({ data }: componentProps) => {
  const height = data.item.subject_type == "Order" ? responsiveHeight(13) : responsiveHeight(13);
  return (
    <View style={{ ...styles.rowFront, height: height }}>
      <View style={styles.rowFrontVisible}>
        {data.item.is_read ? (
          <View testID="notificationCircle" style={styles.circle}>
          </View>
        ) : null}
        {data.item.subject_type == "Order" ? (
          <View style={{ flexDirection: "row" }}>
            <Avatar imgPath={{ uri: data.item.subject?.product.image1 }} style={{marginRight: 10}} size="medium" />
            <View>
              <Text style={styles.desc}> {data.item.description}</Text>
              <Text style={styles.productName}>
                {" "}
                {data.item.subject?.product.name}
              </Text>
              {data.item.created_at ? (
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.productName}> Delivered By: </Text>
                  <Text style={styles.date}> {data.item.created_at}</Text>
                </View>
              ) : null}
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Avatar imgPath={{ uri: data.item.subject?.image1 }} size="medium" />
            <View>
              <Text style={styles.desc}> {data.item.description}</Text>
              <Text style={styles.productName}> {data.item.subject?.name}</Text>
              {data.item.created_at ? (
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.productName}> Delivered By: </Text>
                  <Text style={styles.date}> {data.item.created_at}</Text>
                </View>
              ) : null}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
