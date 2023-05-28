import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import { OrderItem } from "../../../../components/OrderScreenComponents";
import Product from "../../../../entities/Product";

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useSelector: () => jest.fn().mockReturnValueOnce({ name: 'ko', phone: '09', address: 'kkk' }),
    useDispatch: () => mockDispatch
}));
jest.mock('../../../services/ApiClient', () => ({
    Constants: {
        manifest: {
            extra: {
                baseUrl: '192.168.1.1'
            }
        }
    },
}));

test('Should render order popup correctly', () => {
    let setModalVisible = jest.fn();
    const tree = render(
        <OrderItem
            isVisible={true}
            product={new Product(1,'', '', 1, [], [], '', '', '', '', {}, new Date())}
            setModalVisible={setModalVisible}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('<Order item>', () => {

    let getByTestId: (testID: string) => ReactTestInstance | null;
    let getByText: (text: string) => ReactTestInstance | null;
    let setModalVisible = jest.fn();
    let product = new Product(
        1,
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
        new Date
    );
    beforeEach(() => {
        ({ getByTestId, getByText } = render(
            <OrderItem
                isVisible={true}
                product={product}
                setModalVisible={setModalVisible}
            />
        ))
    });
    test('start state', () => {
        
        const orderInfo = getByTestId('orderInfo');
        const colorAndSizePickers = getByTestId('colorAndSizePickers');
        const orderItemButton = getByText('Order Item');
        const productName = getByText(product.name);
        const productSeller = getByText(product.seller.name);
        const productPrice = getByText(product.price.toString() + " EGP");
        for (let i = 0; i < product.sizes.length; i++) {
            expect(getByText(product.sizes[i])).toBeDefined();
        }
        expect(orderInfo).toBeDefined();
        expect(colorAndSizePickers).toBeDefined();
        expect(orderItemButton).toBeDefined();
        expect(productName).toBeDefined();
        expect(productSeller).toBeDefined();
        expect(productPrice).toBeDefined();
    });

    test('confirm state', () => {
        
        const selectedSize = getByText(product.sizes[0]);
        if (selectedSize) {
            fireEvent.press(selectedSize);
        }
        const orderItemButton = getByText('Order Item');
        if (orderItemButton) {
            fireEvent.press(orderItemButton);
            const confirmOrderButton = getByText('Confirm');
            expect(confirmOrderButton).toBeDefined();
            // test the selected size appears is the one that appears in confirmation
            const confirmSize = getByText(product.sizes[0]);
            expect(confirmSize).toBeDefined();
            const productName = getByText(product.name);
            const productSeller = getByText(product.seller.name);
            const productPrice = getByText(product.price.toString() + " EGP");
            expect(productName).toBeDefined();
            expect(productSeller).toBeDefined();
            expect(productPrice).toBeDefined();
        }
    });

    test('order failed state', () => {
        
        const orderItemButton = getByText('Order Item');
        if (orderItemButton) {
            fireEvent.press(orderItemButton);
            const confirmOrderButton = getByText('Confirm');
            if (confirmOrderButton) {
                fireEvent.press(confirmOrderButton);
                const completeDeliveryDataBtn = getByText('Continue');
                expect(completeDeliveryDataBtn).toBeDefined();
            }
        }
    });

});
