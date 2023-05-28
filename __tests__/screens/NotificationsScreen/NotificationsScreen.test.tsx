import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import Notification from "../../../entities/Notification";
import Product from "../../../entities/Product";
import User from "../../../entities/User";
import { NCNotificationScreen } from "../../../screens/NotificationsScreen";


jest.mock('../../../services/ApiClient', () => ({
    constants: {
        manifest: {
            developer: {
                projectRoot: '/home/test/project',
            },
            logUrl: 'https://localhost:19001/logs',
            extra: {
                baseUrl: '192.168.1.1'
            }
        }
    },
}));

test('should render notifications correctly', () => {
    const not = new Notification(
        1,
        "not1",
        "Item is shipped",
        new Date,
        false,
        new Product(1,
            'JEANS',
            'Blue Jeans',
            20,
            ['XL', 'S'],
            ['blue'],
            '',
            '',
            '',
            'pants',
            { name: 'ZARA' },
            new Date), "Product", new User("s.seif@yahoo.com",
                "11 Nov 2020",
                "",
                "",
                "",
                "Famous Designer",
                "01111111",
                "Mokattam"));
    const props = {
        FetchNotifications: jest.fn(),
        MarkAsRead: jest.fn(),
        MarkAllAsRead: jest.fn(),
        RefreshNotifications: jest.fn(),
        navigation: { goBack: jest.fn(), reset: jest.fn(), navigate: jest.fn() },
        notifications: {
            notifications: [not],
        }
    };

    const tree = render(
        <NCNotificationScreen
            {...props}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();

});

describe('<Notifications>', () => {
    let getByText: (text: string) => ReactTestInstance | null;
    let getByTestId: (testID: string) => ReactTestInstance | null;
    const fetchNotifications = jest.fn();
    const markAllAsRead = jest.fn();
    const notifications = [new Notification(
        1,
        "not1",
        "Item is shipped",
        new Date,
        false,
        new Product(1,
            'JEANS',
            'Blue Jeans',
            20,
            ['XL', 'S'],
            ['blue'],
            '',
            '',
            '',
            'pants',
            { name: 'ZARA' },
            new Date), "Product", new User("s.seif@yahoo.com",
                "11 Nov 2020",
                "",
                "",
                "",
                "Famous Designer",
                "01111111",
                "Mokattam")),
    new Notification(
        2,
        "not2",
        "Item is returned",
        new Date,
        false,
        new Product(1,
            'JEANS',
            'Blue Jeans',
            20,
            ['XL', 'S'],
            ['blue'],
            '',
            '',
            '',
            'pants',
            { name: 'ZARA' },
            new Date), "Product", new User("s.seif@yahoo.com",
                "11 Nov 2020",
                "",
                "",
                "",
                "Famous Designer",
                "01111111",
                "Mokattam"))];
    const props = {
        FetchNotifications: fetchNotifications,
        MarkAsRead: jest.fn(),
        MarkAllAsRead: markAllAsRead,
        RefreshNotifications: jest.fn(),
        navigation: { goBack: jest.fn(), reset: jest.fn(), navigate: jest.fn() },
        notifications: {
            notifications: notifications,
        }
    };
    beforeEach(() => {
        ({ getByText, getByTestId } = render(
            <NCNotificationScreen
                {...props}
            />
        ))
    });
    test('fetch function to be called', () => {
        expect(fetchNotifications).toHaveBeenCalledTimes(1);
    });
    test('mark all as read', () => {
        const markAllAsReadBtn = getByText("Mark all as read");
        expect(markAllAsReadBtn).toBeDefined();
        if(markAllAsReadBtn) {
            fireEvent.press(markAllAsReadBtn);
            expect(markAllAsRead).toHaveBeenCalledTimes(1);
        }
    });
});
