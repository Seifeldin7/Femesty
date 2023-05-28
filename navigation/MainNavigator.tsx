import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { OrderScreen, LoginScreen } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { RootState } from "../store/configureStore";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Home } from "./HomeNavigator";
import { Profile } from "./ProfileNavigator";
import { MainColors } from "../styles/Colors";
import { Icon } from "../components/ThemeComponents/Icon";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
interface StateFromProps {
  login: {
    auth: boolean;
    errMess: string | null;
    userData: any | null;
  };
}

const mapStateToProps = (state: RootState) => {
  return {
    login: state.login,
  };
};

class NCMainNavigator extends Component<StateFromProps> {
  render() {
    return (
      <NavigationContainer>
        {this.props.login.auth ? (
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === "Home") {
                  return (
                    <FontAwesomeIcon icon={faHome} size={size} color={color} />
                  );
                } else if (route.name === "Orders") {
                  return (
                    <Feather name="shopping-bag" size={size} color={color} />
                  );
                } else {
                  return (
                    <FontAwesome
                      name="user-circle-o"
                      size={size}
                      color={color}
                    />
                  );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: MainColors.Light,
              inactiveTintColor: "white",
              labelStyle: {
                fontSize: 13,
              },
              style: {
                backgroundColor: "transparent",
                borderTopWidth: 0,
                position: "absolute",
                elevation: 0,
              },
              keyboardHidesTabBar: true,
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Orders" component={OrderScreen} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

export const MainNavigator = connect(mapStateToProps)(NCMainNavigator);
