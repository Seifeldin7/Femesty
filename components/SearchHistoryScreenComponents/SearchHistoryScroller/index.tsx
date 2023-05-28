import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontStyles } from "../../../styles/Fonts";

import { styles } from "./styles";
import { componentProps } from "./types";

export const SearchHistoryScroller = ({ onpress, history }: componentProps) => {
  const renderItem = ({ item }: any) => {
    const onPress = () => {
      onpress(item);
    };
    return (
      <Animatable.View animation="fadeInUpBig" duration={1000}>
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
          style={styles.historyScroller}
        >
          <FontAwesomeIcon style={styles.icon} size={20} icon={faHistory} />
          <Text
            numberOfLines={1}
            ellipsizeMode={"clip"}
            style={[FontStyles.NormalText, { fontSize: 18 }]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  };
  return (
    <FlatList
      data={history}
      renderItem={renderItem}
      keyExtractor={(item) => history.indexOf(item).toString()}
      style={styles.container}
    />
  );
};