import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { styles } from "./styles";
import { LooksResultVerticalScroller } from "../../components/SharedComponents/LooksResultVerticalScroller";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { FontStyles } from "../../styles/Fonts";
import { BasicColors } from "../../styles/Colors";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

export class NCSearchResultScreen extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      selectedPage: 0
    };
    this.name = this.name.bind(this);
  }

  componentDidMount() {
    this.props.FetchLooksBySearch(
      this.props.route.params.search,
      this.props.route.params.type
    );
  }
  componentWillUnmount() {
    this.props.ClearSearch();
  }
  name = () => {
    if (this.props.route.params.type === "tag") {
      return this.props.route.params.tag;
    } else {
      return this.props.route.params.search;
    }
  };

  render() {
    if (this.props.search.noresults) {
      this.props.navigation.navigate("Search");
      alert("No Results Found");
    }

    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="default"
        />

        <View style={styles.statusBar}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons
              name="ios-arrow-back"
              size={35}
              color={BasicColors.White}
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>

          <View style={styles.nameContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode={"clip"}
              style={[
                FontStyles.Heading1,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  color: BasicColors.White,
                  fontSize: responsiveScreenFontSize(3.5)
                },
              ]}
            >
              {this.name()}
            </Text>
          </View>

          <View style={styles.Icon}>
            <Text style={[FontStyles.NormalText, { color: BasicColors.White, fontSize: 20 }]}>
              {this.state.selectedPage + 1}/{this.props.search.search.length}
            </Text>
          </View>
        </View>
        <LooksResultVerticalScroller
          data={this.props.search.search}
          refreshLooks={(count: number) => {
            return this.props.FetchLooksBySearch(
              this.props.route.params.search,
              this.props.route.params.type
            );
          }}
          addFavorite={this.props.AddFavorite}
          deleteFavorite={this.props.DeleteFavorite}
          navigation={this.props.navigation}
          setSelectedResultPage={(page: number) => {
              this.setState({selectedPage: page});
          }}
        />
      </View>
    );
  }
}

export const SearchResultScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCSearchResultScreen);
