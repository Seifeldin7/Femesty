import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { styles } from "./styles";

const Menu = styled.Text`
  color: #fff;
  letter-spacing: 0.8px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  opacity: ${(props) => (props.bold ? 1 : 0.8)};
  font-size: ${(props) => (props.bold ? "16px" : "15px")};
`;
const Separator = styled.View`
  width: 1px;
  height: 13px;
  background-color: #d8d8d8;
  opacity: 0.6;
`;

export const HeaderTab = () => {
  return (
    <View style={styles.container}>
      <Menu>Following</Menu>
      <Separator />
      <Menu bold="true">Explore</Menu>
    </View>
  );
};
