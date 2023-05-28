import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";
import { MainColors } from "../styles/Colors";

export class NotificationService {
  static async obtainNotificationPermission() {
    let permission = await Permissions.getAsync(
      Permissions.USER_FACING_NOTIFICATIONS
    );
    if (permission.status !== "granted") {
      permission = await Permissions.askAsync(
        Permissions.USER_FACING_NOTIFICATIONS
      );
      if (permission.status !== "granted") {
        console.log("Permission not granted to show notification");
      }
    } else {
      if (Platform.OS === "android") {
        Notifications.createChannelAndroidAsync("notify", {
          name: "notify",

          sound: true,

          vibrate: true,
        });
      }
      return permission;
    }
  }

  static async PushNotification(data: any) {
    try {
      await NotificationService.obtainNotificationPermission();
      Notifications.presentLocalNotificationAsync({
        title: data.name,
        body: data.description,
        ios: {
          sound: true,
        },
        android: {
          channelId: "notify",
          color: MainColors.Light,
        },
      });
    } catch (error) {
      console.log("Failed to push notification: \n" + error);
    }
  }
}
