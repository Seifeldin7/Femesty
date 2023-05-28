import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import { HiddenItem } from "../../../../components/NotificationsScreenComponents";

test('Should render hidden item correctly in notifications', () => {
    let markAsRead = jest.fn();
    let data = {}
    const tree = render(
        <HiddenItem onMarkAsRead= {markAsRead} data={data}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test("markAsRead function should be called", ()=> {
    let getByText: (text: string) => ReactTestInstance | null;
    let markAsRead = jest.fn();
    let data = {item: {
        id: 1
    }};
    ({ getByText } = render(
        <HiddenItem onMarkAsRead= {markAsRead} data={data}/>
    ))
    const markAsReadBtn = getByText("Mark as read");
    expect(markAsReadBtn).toBeDefined();
    if (markAsReadBtn) {
        fireEvent.press(markAsReadBtn);
        expect(markAsRead).toBeCalledWith(1);
    }
});
