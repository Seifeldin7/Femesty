import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MainColors } from "../../../styles/Colors";

import { styles } from "./styles";
import { componentProps } from "./types";

export const ChatInputBox = (props: componentProps) => {
  const [message, setMessage] = useState("");

  const onSendPress = () => {
    props.sendMessageFunction(message);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ width: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TextInput
            placeholder={"Type something"}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity
            onPress={onSendPress}
            style={{ alignSelf: "center" }}
          >
            <MaterialIcons name="send" size={28} color={MainColors.Light} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
