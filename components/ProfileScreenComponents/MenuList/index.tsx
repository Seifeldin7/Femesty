import React from "react";
import { View } from "react-native";
import { DoubleVz21Container } from "../../../styles/Containers";
import { MenuIcon } from "../../SharedComponents/IconMenuComponents";

import { componentProps } from "./types";

export const MenuList = ({ navigation, setVisible }: componentProps) => {
  return (
    <View style={DoubleVz21Container.Container}>
      <View style={DoubleVz21Container.TopComponent}>
        <View style={{ flex: 1 }} />
        <MenuIcon
          name={"Delivery Details"}
          icon={"address-book-o"}
          navigation={() => {
            navigation.navigate("DeliveryAddress");
          }}
        />
        <MenuIcon
          name={"My Favorites"}
          icon={"heart-o"}
          navigation={() => {
            navigation.navigate("Favorites");
          }}
        />
        <MenuIcon
          name={"Live Chat"}
          icon={"commenting-o"}
          navigation={() => {
            navigation.navigate("Chat");
          }}
        />
        <MenuIcon name={"Logout"} icon={"sign-in"} navigation={setVisible} />
      </View>
      <View style={DoubleVz21Container.BottomComponent} />
    </View>
  );
};
