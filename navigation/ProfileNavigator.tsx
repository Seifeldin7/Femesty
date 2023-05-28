import React from "react";
import {
  ProfileScreen,
  DeliveryAddressScreen,
  PhoneConfirmationScreen,
  EditProfileScreen,
  FavoriteScreen,
  NotificationScreen,
  ChatScreen,
} from "../screens";

import { createStackNavigator } from "@react-navigation/stack";

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  Favorites: undefined;
  DeliveryAddress: undefined;
  PhoneConfirmation: undefined;
  Notifications: undefined;
  Chat: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

export const Profile = ({ navigation, route }: any) => {
  if (route.state && route.state.routes[route.state.index].name === "Chat") {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="DeliveryAddress" component={DeliveryAddressScreen} />
      <Stack.Screen name="Favorites" component={FavoriteScreen} />
      <Stack.Screen
        name="PhoneConfirmation"
        component={PhoneConfirmationScreen}
      />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
