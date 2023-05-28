import React, { Component } from "react";
import { StatusBar, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { SearchBar } from "react-native-elements";
import { styles } from "./styles";

import { TagScroller } from "../../components/SharedComponents/TagScroller";
import { SearchHistoryScroller } from "../../components/SearchHistoryScreenComponents";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { HomeScreenLoading } from "../../components/ThemeComponents/Views/LoadingViews";

import { connect } from "react-redux";
import { State, mapDispatchToProps, mapStateToProps, Props } from "./types";
import { FontStyles } from "../../styles/Fonts";

console.ignoredYellowBox = ["Warning"];
export class NCSearchScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: false,
      search: "",
      selected: "",
      tags: [],
      history: [],
      searchFocused: false
    };
    this.searchHandeller = this.searchHandeller.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.updateSearchHistory = this.updateSearchHistory.bind(this);
    this.tagsOnpress = this.tagsOnpress.bind(this);
  }

  async componentDidMount() {
    await this.props.FetchAllCategories();
    this.setState({ tags: this.props.tags });
    //get search history from the api
    await this.props.GETSEARCHHISTORY();
    for (let i = 0; i < this.props.history.length; i++) {
      if (this.state.history.includes(this.props.history[i])) {
        this.state.history.splice(
          this.state.history.indexOf(this.props.history[i]),
          1
        );
      }
      this.state.history.push(this.props.history[i]);
    }
    this.forceUpdate();
  }

  updateSearchHistory = (searchText: string) => {
    if (this.state.history.includes(searchText)) {
      this.state.history.splice(this.state.history.indexOf(searchText), 1);
    }
    this.state.history.push(searchText);
    this.forceUpdate();
    //update the search history in the database
  };

  async updateSearch(searchText: any) {
    this.setState({ search: searchText });
    //auto_complete(); if it would be implemented
  }

  searchHandeller = (searchText = this.state.search) => {
    if (searchText !== "") {
      if (
        typeof this.state.tags !== "undefined" &&
        this.state.tags.filter((tag) =>
          tag.name === searchText ? true : false
        )
      ) {
        this.tagsOnpress(searchText);
      } else {
        this.updateSearchHistory(searchText);
        this.updateSearch(searchText);
        this.props.navigation.navigate("SearchResultScreen", {
          search: searchText,
          type: "search",
        });
        console.log("search for: " + searchText); //temp
        this.props.UPDATESEARCHHISTORY(searchText);
        this.setState({ search: "" });
      }
    }
  };

  tagsOnpress = (searchText: string) => {
    if (searchText !== "") {
      this.setState({ selected: searchText });
      this.updateSearchHistory(searchText);
      this.updateSearch(searchText);
      this.props.navigation.navigate("SearchResultScreen", {
        search: searchText.replace("#", "").trim(),
        type: "tag",
        tag: searchText.replace("#", "").toUpperCase(),
      });
      this.props.UPDATESEARCHHISTORY(searchText);
      this.setState({ search: "" });
    }
  };

  render() {
    const SafeTagScroller = () => {
      if (
        typeof this.state.tags !== "undefined" &&
        this.state.tags.length != 0 && 
        !this.state.searchFocused
      ) {
        return (
          <Animatable.View
            animation="pulse"
            duration={1000}
            style={styles.tagsContainer}
          >
            <TagScroller
              myTagsNames={this.state.tags.map(
                (elem) => "# " + elem.name.replace("#", "").toLowerCase()
              )}
              horizontalScrollerStyle={styles.tagsScroller}
              TagStyle={styles.tag}
              hashTag={[FontStyles.MediumText, { color: "white", fontSize: 14 }]}
              filter={this.tagsOnpress}
              selected={this.state.selected}
            />
          </Animatable.View>
        );
      } else {
        return (
         (!this.state.searchFocused) ? 
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  marginVertical={20}
                  width={90}
                  height={40}
                  borderRadius={10}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  marginVertical={20}
                  width={90}
                  height={40}
                  borderRadius={10}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  marginVertical={20}
                  width={90}
                  height={40}
                  borderRadius={10}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  marginVertical={20}
                  width={90}
                  height={40}
                  borderRadius={10}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>: null
        );
      }
    };

    return this.state.loading ? (
      <HomeScreenLoading />
    ) : (
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
              color="black"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
          <SearchBar
            value={this.state.search}
            style={{...FontStyles.MediumBoldText, marginBottom: 5}}
            showLoading={false}
            placeholder="Search by tags"
            platform={"android"}
            round={true}
            onSubmitEditing={() => {this.searchHandeller();} }
            onChangeText={this.updateSearch}
            containerStyle={styles.searchBar}
            onEndEditing={()=> this.setState({searchFocused: false})}
            onFocus={() => this.setState({searchFocused: true})}
          />
        </View>

        <SafeTagScroller />

        <View style={styles.searchHistory}>
          <SearchHistoryScroller
            history={this.state.history
              .reverse()
              .map((elem) => elem.replace("#", ""))}
            onpress={(item: any) => {
              this.searchHandeller(item);
            }}
          />
        </View>
        <View style={{ flex: 2 }} />
      </View>
    );
  }
}

export const SearchScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCSearchScreen);
