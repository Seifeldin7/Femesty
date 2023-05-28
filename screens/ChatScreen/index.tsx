import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { ChatInputBox } from "../../components/ChatScreenComponents/ChatInputBox";
import { ChatMessage } from "../../components/ChatScreenComponents";
import { styles } from "./styles";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { ScreenSkeleton } from "../../components/ThemeComponents/ScreenSkeleton";

export class NCChatScreen extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {};
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage = async (message: any) => {
    try {
      await this.props.AddMessage(message);
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {
    try {
      await this.props.FetchMessages();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <ScreenSkeleton
        goBackNavigation={() => this.props.navigation.goBack()}
        title={"Live Chat"}
      >
        <FlatList
          data={this.props.messages.messages}
          renderItem={({ item }) => <ChatMessage message={item} />}
          keyExtractor={(item: any) => item.id.toString()}
          inverted
        />
        <ChatInputBox
          sendMessageFunction={(message: any) => this.sendMessage(message)}
        />
      </ScreenSkeleton>
    );
  }
}

export const ChatScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCChatScreen);
