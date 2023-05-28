import React, { Component } from "react";
import { View, Text } from "react-native";
import { SocialButton } from "../../components/SharedComponents/Buttons";
import { TermsAndConditions } from "../../components/LoginScreenComponents/TermsAndConditions";
import { Popup } from "../../components/SharedComponents/Popup";
import { Logo } from "../../components/ThemeComponents/Logo";

import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { connect } from "react-redux";

import { styles } from "./styles";
import {
  DoubleVzEqualContainer,
  TripleVz131Container,
} from "../../styles/Containers";
import { TranslucentStatusBar } from "../../components/ThemeComponents/StatusBars";

export class NCLoginScreen extends Component<Props, State> {
  async componentDidMount() {
    this.props.LogIn();
  }

  render() {
    return (
      <View style={styles.screen}>
        <TranslucentStatusBar />
        <View style={DoubleVzEqualContainer.Container}>
          <View style={styles.topContainer}>
            <View style={{
              height: '80%', alignItems: "center",
              justifyContent: "flex-end",
            }}>
              <Logo size="large" color="white" />
              <View>
                <Text style={styles.title}>FEMESTY</Text>
                <Text style={styles.slogan}>Shop the Look</Text>
              </View>
            </View>

          </View>
          <View style={DoubleVzEqualContainer.BottomComponent} />
          <Popup isVisible={true}>
            <View style={[TripleVz131Container.Container, {}]}>
              <View style={styles.popup}>
                <Text style={styles.header}>Sign Up For Femesty</Text>
              </View>
              <View
                style={[
                  TripleVz131Container.MiddleComponent,
                  { flexDirection: "row" },
                ]}
              >
                <View style={{ flex: 1 }} />
                <View style={{ flex: 20 }}>
                  <SocialButton
                    title="SIGN UP WITH APPLE"
                    icon="apple"
                    color="black"
                    onPress={() => this.props.AppleLogin()}
                  />
                  <SocialButton
                    title="SIGN UP WITH FACEBOOK"
                    icon="facebook"
                    color="#3b5998"
                    onPress={() => { this.props.FacebookLogin(); }}
                  />
                  <SocialButton
                    title="SIGN UP WITH GOOGLE"
                    icon="google"
                    color="#DB4437"
                    onPress={() => this.props.GoogleLogin()}
                  />
                </View>
                <View style={{ flex: 1 }} />
              </View>
              <View style={TripleVz131Container.BottomComponent}>
                <View style={styles.termsAndConditions}>
                  <TermsAndConditions />
                </View>
              </View>
            </View>
          </Popup>
        </View>
      </View>
    );
  }
}

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCLoginScreen);
