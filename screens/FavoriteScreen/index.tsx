import React, { Component } from "react";
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";
import { styles } from "./styles";
import { FavoriteHzScroller } from "../../components/FavoriteScreenComponents";

import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { checkConnected } from "../../utility/CheckConnection";
import { NoConnection } from "../../components/ThemeComponents/Views/NoConnectionView";
import { NoContent } from "../../components/ThemeComponents/Views/NoContentsView";
import { FavoritesScreenLoading } from "../../components/ThemeComponents/Views/LoadingViews";
import { ScreenSkeleton } from "../../components/ThemeComponents/ScreenSkeleton";

export class NCFavoriteScreen extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props
      .FetchFavorites()
      .then()
      .catch((err) => console.log(err));
  }

  CheckConnection = () => {
    let result = false;
    checkConnected()
      .then((res: boolean) => {
        result = res;
      })
      .catch((err) => { });
    return result;
  };

  render() {
    if (this.CheckConnection()) {
      return <NoConnection onCheck={this.props.FetchFavorites} />;
    } else if (this.props.favorites.loading) {
      return (
        <ScreenSkeleton
          goBackNavigation={() => this.props.navigation.goBack()}
          title={"My Favorites"}>

          <View style={{ flex: 1 }} />
          <View style={{ flex: 8, marginLeft: 40 }}>
            <FavoritesScreenLoading />
          </View>
          <View style={{ flex: 2.5 }} />
        </ScreenSkeleton>
      );
    } else if (!this.props.favorites.favorites.length) {
      return (
        <ScreenSkeleton
          goBackNavigation={() => this.props.navigation.goBack()}
          title={"My Favorites"}>

          <View style={{ flex: 1 }} />
          <View
            style={{
              flex: 12,
              marginRight: Dimensions.get("window").width / 15,
            }}
          >
            <NoContent
              onCheck={this.props.FetchFavorites}
              name={"Favorites"}
              description={
                "Nothing on the Favorites right now, Get started by liking some Looks."
              }
            />
          </View>
          <View style={{ flex: 2.5 }} />
        </ScreenSkeleton>

      );
    } else {
      return (
        <ScreenSkeleton
          goBackNavigation={() => this.props.navigation.goBack()}
          title={"My Favorites"}>

          <View style={{ flex: 1 }} />
          <View style={{ flex: 8, marginLeft: 40 }}>
            <FavoriteHzScroller
              favorites={this.props.favorites.favorites}
              deleteFavorite={this.props.DeleteFavorite}
            />
          </View>
          <View style={{ flex: 2.5 }} />
        </ScreenSkeleton>
      );
    }
  }
}

export const FavoriteScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCFavoriteScreen);
