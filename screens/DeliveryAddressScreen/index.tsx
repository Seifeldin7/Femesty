import React, { Component } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { Form } from "../../components/SharedComponents/Form";
import { Button } from "../../components/SharedComponents/Buttons";
import { BasicColors, MainColors } from "../../styles/Colors";
import { ButtonStyles } from "../../styles/Buttons";
import { ScreenSkeleton } from "../../components/ThemeComponents/ScreenSkeleton";
import { DoubleVz21Container } from "../../styles/Containers";

export class NCDeliveryAddressScreen extends Component<Props, State>
{
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            submitIsPressed: false,
            formValues: {}
        };
        this.onConfirm = this.onConfirm.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
    }
    async onConfirm(formValues: any) {
        await this.props.SENDCODE(formValues.phone);
        this.setState({ formValues: formValues });
        this.props.navigation.navigate("PhoneConfirmation", {
            verify: this.props.VERIFYCODE,
            updateAddress: this.updateAddress, 
            cancelcode: this.props.CANCELCODE
        });
    }
    async updateAddress() {
        let userAddress = this.state.formValues;
        this.props.EDITADDRESS(userAddress.name, userAddress.phone, userAddress.address);
        this.props.navigation.navigate("Profile");
    }
    render() {
        return (
            <ScreenSkeleton
                goBackNavigation={() => { this.props.navigation.navigate("Profile") }}
                title={"Delivery Details"}
                rightControlButtonNavigation={() =>
                    this.props.navigation.navigate("Profile")
                }
            >
                <View style={DoubleVz21Container.Container}>
                    <View style={{ ...DoubleVz21Container.TopComponent, ...styles.row2 }}>
                        <Form
                            submitIsPressed={this.state.submitIsPressed}
                            onSubmit={this.onConfirm}
                            formData={{
                                name: this.props.profile.profile.name,
                                phone: this.props.profile.profile.phone,
                                address: this.props.profile.profile.address

                            }}
                            inputProps={{
                                name: {
                                    label: "Name",
                                    placeholder: "Jane Doe",
                                },
                                phone: {
                                    label: "Phone Number",
                                    placeholder: "+20213456789",
                                    autoCompleteType: "tel",
                                    errorText: "Please enter a valid phone number!"

                                },
                                address: {
                                    label: "Address",
                                    placeholder: "13th street Egypt square",
                                }
                            }} />
                    </View>
                    <View style={{ ...DoubleVz21Container.BottomComponent, ...styles.row3 }}>
                        <Button
                            style={{ ...ButtonStyles.Large, alignSelf: 'center' }}
                            textColor={BasicColors.White}
                            backgroundColor={MainColors.Light}
                            enable={true}
                            title="Confirm"
                            onPress={() => this.setState({ submitIsPressed: true })} />
                    </View>
                </View>
            </ScreenSkeleton>
        );
    }
}

export const DeliveryAddressScreen = connect(mapStateToProps, mapDispatchToProps)(NCDeliveryAddressScreen);
