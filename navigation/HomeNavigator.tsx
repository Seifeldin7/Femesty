import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, SearchScreen, SearchResultScreen } from "../screens";

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  SearchResultScreen: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export const Home = ({ navigation, route }: any) => {
  if (
    route.state &&
    (route.state.routes[route.state.index].name === "Search" ||
    route.state.routes[route.state.index].name === "SearchResultScreen")) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
