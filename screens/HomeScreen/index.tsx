import React, { Component } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Logo } from '../../components/ThemeComponents/Logo';
import { LooksResultVerticalScroller } from "../../components/SharedComponents/LooksResultVerticalScroller";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { Icon } from "../../components/ThemeComponents/Icon";

export class NCHomeScreen extends Component<Props, State>
{
    constructor(props: Readonly<Props>) {
        super(props);

        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
                <View style={styles.row1}>
                    <TouchableOpacity activeOpacity={1.0} onPress={
                        () => { this.props.RefreshLooks(); this.props.FetchLooks(2) }
                    } style={styles.logo}>
                        <Logo size="medium" />
                    </TouchableOpacity>
                    <Icon
                        outerStyle={styles.Icon}
                        size="medium"
                        iconPath={require("../../assets/icons/small_icons/search.png")}
                        onPress={() => this.props.navigation.navigate("Search")} />
                </View>
                <LooksResultVerticalScroller
                    data={this.props.looks.looks}
                    getNextLook={(count: number) => { return this.props.FetchLooks(count); }}
                    refreshLooks={() => { return this.props.RefreshLooks() }}
                    addFavorite={this.props.AddFavorite}
                    deleteFavorite={this.props.DeleteFavorite}
                    navigation={this.props.navigation} />
            </View>
        );
    }

}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(NCHomeScreen);
