import React from "react";
import { render } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import { VisibleItem } from "../../../../components/NotificationsScreenComponents";

test('Should render visible item correctly in notifications', () => {
    let data = {
        item: {
            id: 1,
            description: "Item is shipped",
            subject_type: "Order",
            subject: {
                delivery_date: "Monday, 28 September",
                product: {
                    name: 'T-Shirt White'
                }
            },
            is_read: false,
        }
    };
    const tree = render(
        <VisibleItem data={data} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('<Notification rendered data (Order)>', () => {
    let queryByText: (text: string) => ReactTestInstance | null;
    let queryByTestId: (text: string) => ReactTestInstance | null;
    let data = {
        item: {
            id: 1,
            description: "Item is shipped",
            subject_type: "Order",
            subject: {
                delivery_date: "Monday, 28 September",
                product: {
                    name: 'T-Shirt White'
                }
            },
            is_read: true,
        }
    };
    beforeEach(() => {
        ({ queryByText, queryByTestId } = render(
            <VisibleItem data={data} />
        ));
    });

    test('Notification description', () => {
        const description = queryByText(data.item.description);
        expect(description).toBeDefined();
    });

    test('Notification product name', () => {
        const name = queryByText(data.item.subject.product.name);
        expect(name).toBeDefined();
    });

    test('Notification date', () => {
        const date = queryByText(data.item.subject.delivery_date);
        expect(date).toBeDefined();
    });

    test('Notification is_read circle', () => {
        const is_read = queryByTestId("notificationCircle");
        expect(is_read).toBeDefined();
    });
});

describe('<Notification rendered data (Product)>', () => {
    let queryByText: (text: string) => ReactTestInstance | null;
    let queryByTestId: (text: string) => ReactTestInstance | null;
    let data = {
        item: {
            id: 1,
            description: "Item is shipped",
            subject_type: "Product",
            subject: {
                name: 'T-Shirt White'
            },
            is_read: false,
        }
    };
    beforeEach(() => {
        ({ queryByText, queryByTestId } = render(
            <VisibleItem data={data} />
        ));
    });

    test('Notification description', () => {
        const description = queryByText(data.item.description);
        expect(description).toBeDefined();
    });

    test('Notification is_read circle', () => {
        const is_read = queryByTestId("notificationCircle");
        expect(is_read).toBeNull();
    });
});
