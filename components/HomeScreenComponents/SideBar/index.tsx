import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { ShareLook } from "../../../utility/ShareLook";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { componentProps } from "./types";
import { Icon } from "../../ThemeComponents/Icon";

export const Sidebar = ({
  look,
  addFavorite,
  deleteFavorite,
}: componentProps) => {
  const [heartColor, setHeartColor] = useState("white");
  return (
    <View style={styles.container}>
      <Icon
        outerStyle={{ marginBottom: 30, marginRight: 15 }}
        size="medium"
        iconPath={require("../../../assets/icons/small_icons/share.png")}
        onPress={() => ShareLook(look)} />

      <View>
        <TouchableOpacity
          onPress={() => {
            heartColor === "red"
              ? deleteFavorite(look.id)
                .then(() =>
                  setHeartColor((heartColor) =>
                    heartColor == "white" ? "red" : "white"
                  )
                )
                .catch()
              : addFavorite(look)
                .then(() =>
                  setHeartColor((heartColor) =>
                    heartColor == "white" ? "red" : "white"
                  )
                )
                .catch();
          }}
        >
          <View style={{ marginRight: 17 }}>
            {(heartColor == "white") ?
              <FontAwesome name="heart-o" size={28} color={heartColor} /> :
              <FontAwesome name="heart" size={28} color={heartColor} />
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
