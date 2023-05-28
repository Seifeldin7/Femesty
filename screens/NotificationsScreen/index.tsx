import React, { Component } from "react";
import {
  View,
  StatusBar,
  Text,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { SwipeListView } from "react-native-swipe-list-view";
import { VisibleItem, HiddenItem } from "../../components/NotificationsScreenComponents";
import { MainColors } from "../../styles/Colors";
import { NotificationScreenLoading } from "../../components/ThemeComponents/Views/LoadingViews";
import { ScreenSkeleton } from "../../components/ThemeComponents/ScreenSkeleton";

export class NCNotificationScreen extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      notifications: [],
      refreshing: false,
      loadMore: false,
      hasScrolled: false,
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.renderHiddenItem = this.renderHiddenItem.bind(this);
  }

  async markAsRead(id: number) {
    await this.props.MarkAsRead(id);
  }

  async markAllAsRead() {
    await this.props.MarkAllAsRead();
  }

  async onLoadMore() {
    if (!this.state.hasScrolled) {
      return null;
    }
    this.setState({ loadMore: true });
    await this.props.FetchNotifications();
    this.setState({ loadMore: false });
  }

  renderItem = (data: any, rowMap: any) => {
    return <VisibleItem data={data} />;
  };

  renderHiddenItem = (data: any) => {
    return <HiddenItem data={data} onMarkAsRead={this.markAsRead} />;
  };

  renderLoader = () => {
    return this.state.loadMore ? (
      <View style={styles.loader}>
        <ActivityIndicator
          size="large"
          style={styles.loader}
          color={MainColors.Dark}
        />
      </View>
    ) : null;
  };

  async componentDidMount() {
    this.setState({ refreshing: true });
    await this.props.FetchNotifications();
    this.setState({ refreshing: false });
  }

  async onRefresh() {
    this.setState({ refreshing: true });
    await this.props.RefreshNotifications();
    await this.props.FetchNotifications();
    this.setState({ refreshing: false });
  }

  onScroll = () => {
    this.setState({ hasScrolled: true });
  };

  render() {
    return (
      <ScreenSkeleton
        goBackNavigation={() => this.props.navigation.goBack()}
        title={"My Notifications"}
      >
        <TouchableOpacity
          style={styles.saveView}
          onPress={() => this.markAllAsRead()}
        >
          <Text style={styles.save}>Mark all as read</Text>
        </TouchableOpacity>
        {this.state.refreshing ? (
            <NotificationScreenLoading />
        ) : (
          <View style={{ flex: 5.2 }}>
            <SwipeListView
              onScroll={this.onScroll}
              keyExtractor={(item: any) => item.id.toString()}
              scrollEnabled={true}
              style={{ marginTop: 20 }}
              data={this.props.notifications.notifications}
              renderItem={this.renderItem}
              renderHiddenItem={this.renderHiddenItem}
              rightOpenValue={-120}
              disableRightSwipe
              leftActivationValue={100}
              rightActivationValue={-200}
              leftActionValue={0}
              rightActionValue={0}
              onEndReachedThreshold={0.01}
              onEndReached={() => {
                this.onLoadMore();
                this.renderLoader();
              }}
              ListFooterComponent={this.renderLoader}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                />
              }
            />
          </View>
        )}

      </ScreenSkeleton>
    );
  }
}

export const NotificationScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCNotificationScreen);
