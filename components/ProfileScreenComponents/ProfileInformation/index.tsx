import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { TripleHzEqualContainer } from "../../../styles/Containers";
import { Avatar } from "../../ThemeComponents/Avatar";

import { styles } from "./styles";
import { componentProps } from "./types";

export const ProfileInformation = ({
  navigation,
  image,
  name,
  username,
}: componentProps) => {
  return (
    <View style={TripleHzEqualContainer.Container}>
      <View style={TripleHzEqualContainer.LeftComponent} />
      <View style={TripleHzEqualContainer.MiddleComponent}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          style={styles.info}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Avatar imgPath={image
            ? { uri: "https://i.ibb.co/TW6mdgY/unnamed.png" }
            : require("../../../assets/images/default_profile_pic.jpg")} size="large" borderRadius="rounded-rectangle" />
          <View style={styles.circle}>
          </View>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode={"clip"}>{name ? name : "@name"}</Text>
          <Text style={styles.username} numberOfLines={1} ellipsizeMode={"clip"}>
            {username ? "@" + username : "@username"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={TripleHzEqualContainer.RightComponent} />
    </View>
  );
};
