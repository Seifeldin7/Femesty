import { AnyAction } from "redux";
import { ApiClient } from "../../services";
import { ThunkDispatch } from "redux-thunk";
import { Notifications } from "../../config/Routes";
import Notification from "../../entities/Notification";
import { NotificationService } from "../../services/Notifications";

type Result = { result: any; status: number } | undefined;

export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
export const MARK_AS_READ = "MARK_AS_READ";
export const MARK_ALL_AS_READ = "MARK_ALL_AS_READ";
export const REFRESH_NOTIFICATIONS = "REFRESH_NOTIFICATIONS";
export const SET_NOTIFICATIONS_OFFSET = "SET_NOTIFICATIONS_OFFSET";
const COUNT = 7;

export const fetchNotifications = () => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>,
    getState: any
  ) => {
    try {
      const { offset } = getState().notifications;
      const userId: number = getState().profile.profile.id;
      const result: Result = await ApiClient.getRequest(
        Notifications.getNotifications +
          `?userId=${userId}&offset=${offset}&count=${COUNT}`
      );
      if (result?.status === 200) {
        const notifications: Notification[] | undefined = result?.result;
        if (notifications?.length) {
          dispatch({
            type: SET_NOTIFICATIONS_OFFSET,
            count: notifications.length + offset,
          });
          dispatch({
            type: GET_NOTIFICATIONS,
            notifications: notifications,
          });
        }
      } else {
        console.log("Cannot fetch notifications");
      }
    } catch (errMsg) {
      console.log(`${errMsg}`);
    }
  };
};

export const markAsRead = (id: number) => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>,
    getState: any
  ) => {
    try {
      const userId: number = getState().profile.profile.id;
      const result: Result = await ApiClient.putRequest(
        Notifications.markAsRead + `${id}?userId=${userId}`
      );
      if (result?.status === 200) {
        dispatch({
          type: MARK_AS_READ,
          notificationId: id,
        });
      } else {
        console.log("Error on markAsRead");
      }
    } catch (errMsg) {
      console.log(`${errMsg}`);
    }
  };
};

export const markAllAsRead = () => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>,
    getState: any
  ) => {
    try {
      const userId: number = getState().profile.profile.id;
      const result: Result = await ApiClient.putRequest(
        Notifications.markAsRead + `?userId=${userId}`
      );
      if (result?.status === 200) {
        dispatch({ type: MARK_ALL_AS_READ });
      } else {
        console.log("Error on markAllAsRead");
      }
    } catch (errMsg) {
      console.log(`${errMsg}`);
    }
  };
};

export const refreshNotifications = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch({
      type: REFRESH_NOTIFICATIONS,
    });
  };
};

export const postNotification = (
  name: string,
  description: string,
  subject_type: string,
  subject_id: number
) => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>,
    getState: any
  ) => {
    try {
      const userId: number = getState().profile.profile.id;
      const body = {
        name: name,
        description: description,
        subject_type: subject_type,
        subjectId: subject_id,
        userId: userId,
      };

      const result: Result = await ApiClient.postRequest(
        Notifications.postNotification,
        body
      );
      if (result?.status === 200) {
        NotificationService.PushNotification(body);
        fetchNotifications();
      }
    } catch (err) {
      console.log("Cannot add orders   " + err);
    }
  };
};
