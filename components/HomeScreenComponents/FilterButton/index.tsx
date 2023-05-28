import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";

import { styles } from "./styles";

const Menu = styled.TouchableOpacity`
  align-items: center;
`;

const MenuText = styled.Text`
  font-size: 9px;
  color: "rgba(255,255,255,1)";
`;

export const FilterButton = () => {
  return (
    <View style={styles.container}>
      <Menu>
        <Image
          source={require("../../../assets/icons/small_icons/filter.png")}
          style={styles.image}
        />
        <MenuText active="true">Filter</MenuText>
      </Menu>
    </View>
  );
};
