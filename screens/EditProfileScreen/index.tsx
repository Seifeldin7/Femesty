import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles } from "./styles";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { Form } from "../../components/SharedComponents/Form";
import { ScreenSkeleton } from "../../components/ThemeComponents/ScreenSkeleton";
import { TripleVz123Container } from "../../styles/Containers";
import { Avatar } from "../../components/ThemeComponents/Avatar";

export class NCEditProfileScreen extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      submitIsPressed: false
    };
    this.saveChanges = this.saveChanges.bind(this);
  }

  async saveChanges(formValues: any) {
    await this.props.EditProfile(formValues.name, formValues.username);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScreenSkeleton
        goBackNavigation={() => this.props.navigation.goBack()}
        title={"Edit Profile"}
      >
        <View style={TripleVz123Container.Container}>
          <View style={TripleVz123Container.TopComponent}>
            <TouchableOpacity
              style={styles.saveView}
              onPress={() => {
                this.setState({ submitIsPressed: true })
                this.props.navigation.goBack();
              }}
            >
              <Text style={styles.save}>Save Changes</Text>
            </TouchableOpacity>
          </View>
          <View style={[TripleVz123Container.MiddleComponent, { alignSelf: 'center' }]}>
            {this.props.profile.profile.image ? (
              <Avatar imgPath={{ uri: this.props.profile.profile.image }}
                size="large" borderRadius="rounded-rectangle" />
            ) : (
              <Avatar imgPath={require("../../assets/images/default_profile_pic.jpg")}
                size="large" borderRadius="rounded-rectangle" />
            )}
          </View>
          <View style={[TripleVz123Container.BottomComponent, styles.inputs]}>
            <Form
              submitIsPressed={this.state.submitIsPressed}
              onSubmit={this.saveChanges}
              formData={{
                name: this.props.profile.profile.name,
                username: this.props.profile.profile.username,
              }}
              inputProps={{
                name: {
                  label: "Name",
                  placeholder: "@name",
                },
                username: {
                  label: "User Name",
                  placeholder: "@username",

                },
              }} />
          </View>
        </View>
      </ScreenSkeleton>
    );
  }
}

export const EditProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCEditProfileScreen);
