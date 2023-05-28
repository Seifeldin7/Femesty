import React, { Component } from "react";
import { View } from "react-native";
import { ScreenSkeleton } from "../../components/ThemeComponents/ScreenSkeleton";
import { DoubleVz12Container } from "../../styles/Containers";
import { CustomAlert } from "../../components/SharedComponents/Alert";

import {
  MenuList,
  ProfileInformation,
} from "../../components/ProfileScreenComponents";

import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
export class NCProfileScreen extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      isAlertVisible: false,
    };
  }

  render() {
    return (
      <ScreenSkeleton
        goBackNavigation={"none"}
        title={"My Profile"}
        rightControlButton={"ios-notifications-outline"}
        rightControlButtonNavigation={() =>
          this.props.navigation.navigate("Notifications")
        }
      >
        <CustomAlert
          title="Are You Sure?"
          description="Do you want to log out from Femesty?"
          isVisible={this.state.isAlertVisible}
          setIsAlertVisible={(visible: boolean) =>
            this.setState({ isAlertVisible: visible })
          }
          type="confirm"
          callableFunction={() => this.props.LogOut()}
        />

        <View style={DoubleVz12Container.Container}>
          <View style={DoubleVz12Container.TopComponent}>
            <ProfileInformation
              navigation={this.props.navigation}
              image={this.props.profile.profile.image}
              name={this.props.profile.profile.name}
              username={this.props.profile.profile.username}
            />
          </View>
          <View style={DoubleVz12Container.BottomComponent}>
            <MenuList
              navigation={this.props.navigation}
              setVisible={() => this.setState({ isAlertVisible: true })}
            />
          </View>
        </View>
      </ScreenSkeleton>
    );
  }
}

export const ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCProfileScreen);
