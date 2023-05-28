import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { OrderScreenLoading } from "../../components/ThemeComponents/Views/LoadingViews";
import { TagScroller } from "../../components/SharedComponents/TagScroller";
import { styles } from "./styles";
import { OrderList } from "../../components/OrderScreenComponents";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, Props, State } from "./types";
import { checkConnected } from "../../utility/CheckConnection";
import {NoConnection} from "../../components/ThemeComponents/Views/NoConnectionView";
import {NoContent} from "../../components/ThemeComponents/Views/NoContentsView";
import Order from "../../entities/Order";

export class NCOrderScreen extends Component<Props, State> {
  _unsubscribe: any;
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      filter: ["All", "Accepted", "Rejected", "Pending", "Shipped"],
      orders: [],
      selected: "All",
    };
    this.filterState = this.filterState.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.filterState(this.state.selected);
    })
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  filterState = (current: string) => {
    this.props.FetchOrders().then(() => {
      this.setState({ selected: current });
      if (current !== "All") {
        this.setState({
          orders: this.props.orders.orders.filter((o: Order) => {
            return o.status === current;
          }),
        });
      } else {
        this.setState({ orders: this.props.orders.orders });
      }
    });
  };

  deleteOrder(orderId: number) {
    try {
      this.props.DeleteOrder(orderId).then(() => {
        this.filterState(this.state.selected);
      });
    } catch (error) {
      console.log("failed");
    }
  }

  CheckConnection = () => {
    let result = false;
    checkConnected()
      .then((res: boolean) => {
        return res;
      })
      .catch((err) => {
        return result;
      });
    return result;
  };

  render() {
    if (this.CheckConnection()) {
      return <NoConnection onCheck={this.props.FetchOrders} />;
    } else if (this.props.orders.loading) {
      return (
        <View style={styles.Screen}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="default"
          />

          <View style={[styles.Title, { marginTop: 20 }]}>
            <Text style={styles.TitleText}>My Orders</Text>
          </View>
          <View
            style={{
              flex: 20,
            }}
          >
            <OrderScreenLoading />
          </View>
          <View style={{ flex: 1 }} />
        </View>
      );
    } else if (!this.props.orders.orders) {
      return (
        <View style={styles.Screen}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="default"
          />

          <View style={[styles.Title, { marginTop: 20 }]}>
            <Text style={styles.TitleText}>My Orders</Text>
          </View>
          <View
            style={{
              flex: 20,
            }}
          >
            <NoContent
              onCheck={this.props.FetchOrders}
              name={"orders"}
              description={
                "Nothing on the Orders right now, Get started by ordering some Products."
              }
            />
          </View>
          <View style={{ flex: 1 }} />
        </View>
      );
    } else {
      const data = {
        orders: this.state.orders,
        deleteOrder: this.deleteOrder,
      };
      return (
        <View style={styles.Screen}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>My Orders</Text>
          </View>

          <View style={styles.TagScroller}>
            <TagScroller
              myTagsNames={this.state.filter}
              horizontalScrollerStyle={""}
              TagStyle={styles.Tag}
              hashTag={styles.filterText}
              filter={(current: string) => {
                this.filterState(current);
              }}
              selected={this.state.selected}
            />
          </View>

          <View style={styles.OrdersScroller}>
            <OrderList {...data} />
          </View>
        </View>
      );
    }
  }
}

export const OrderScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NCOrderScreen);
