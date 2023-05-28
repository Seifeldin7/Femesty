import {
    GET_NOTIFICATIONS,
    MARK_ALL_AS_READ,
    MARK_AS_READ,
    REFRESH_NOTIFICATIONS,
    SET_NOTIFICATIONS_OFFSET
} from '../actions/notifications';
import { AnyAction } from 'redux';

const initialState = {
    notifications: [],
    offset: 0
};

export const NotificationsReducer = (state: any = initialState, action: AnyAction) => {
    let updatedNotifications;
    switch (action.type) {
        case GET_NOTIFICATIONS:
            updatedNotifications = state.notifications;
            for (let not of action.notifications) {
                updatedNotifications.push(not);
            }
            return {
                ...state,
                notifications: updatedNotifications
            };
        case MARK_ALL_AS_READ:
            updatedNotifications = [];
            for (let not of state.notifications) {
                not.is_read = true;
                updatedNotifications.push(not);
            }
            return {
                ...state,
                notifications: updatedNotifications
            };
        case MARK_AS_READ:
            updatedNotifications = state.notifications;
            const NotificationIndex = state.notifications.findIndex(
                (notification: any) => notification.id === action.notificationId
            );
            updatedNotifications[NotificationIndex].is_read = true;
            return {
                ...state,
                notifications: updatedNotifications
            };
        case SET_NOTIFICATIONS_OFFSET:
            return {
                ...state,
                offset: action.count
            };
        case REFRESH_NOTIFICATIONS:
            return {
                ...state,
                notifications: [],
                offset: 0
            };
    }

    return state;
};
