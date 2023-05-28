import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

import { styles } from "./styles";
import { componentProps } from "./types";

export const HiddenItem = ({ data, onMarkAsRead }: componentProps) => {
  const height = data.item?.subject_type == "Order" ? responsiveHeight(13) : responsiveHeight(13);
  return (
    <View style={{ ...styles.rowBack, height: height }}>
      <TouchableHighlight
        style={{ ...styles.backRightBtn, height: height }}
        onPress={() => onMarkAsRead(data.item.id)}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign
            style={styles.check}
            name="checkcircleo"
            size={26}
            color="black"
          />
          <Text style={{ color: "white" }}>Mark as read</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
