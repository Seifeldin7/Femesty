import React from "react";
import { Text } from "react-native";
import { render, fireEvent } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";

import { Popup } from "../../../../components/SharedComponents/Popup";


test('should render Popup in all screens', () => {
    const TextElem = () => <Text>Hello, World!</Text>;
    const tree = render(
        <Popup
            isVisible={true}
        >
            <TextElem />
        </Popup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Popup Without Close', () => {
    const TextElem = () => <Text>Hello, World!</Text>;
    let queryByTestId: (testID: string) => ReactTestInstance | null;
    beforeEach(() => {
        ({ queryByTestId } = render(
            <Popup
                isVisible={true}
            >
                <TextElem />
            </Popup>
        ))
    })

    it('should call Popup witout close button', async () => {
        expect(queryByTestId('Popup')).toBeDefined()
        expect(queryByTestId('closePopup')).toBeNull()
    });
});

describe('Popup With Close', () => {
    const TextElem = () => <Text>Hello, World!</Text>;
    let queryByTestId: (testID: string) => ReactTestInstance | null;
    let setIsModalVisible = jest.fn();
    beforeEach(() => {
        ({ queryByTestId } = render(
            <Popup
                isVisible={true}
                setIsModalVisible={setIsModalVisible}
            >
                <TextElem />
            </Popup>
        ))
    })

    it('should call Popup with close button', async () => {
        expect(queryByTestId('Popup')).toBeDefined()
        expect(queryByTestId('closePopup')).toBeDefined()
    });

    it('should close when clicked', async () => {
        let closeBtn = queryByTestId('closePopup');
        if (closeBtn) {
            fireEvent.press(closeBtn);
            expect(setIsModalVisible).toHaveBeenCalledTimes(1);
        }
            
    });
});
//     describe('UP Callout', () => {
//         const TextElem = () => <Text>Hello, World!</Text>;
//         let queryByTestId: (testID: string) => ReactTestInstance | null;
//         beforeEach(() => {
//             ({ queryByTestId } = render(
//                 <Popup
//                     isVisible={true}
//                 >
//                     <TextElem />
//                 </Popup>
//             ))
//         })

//         it('should call renderCallout once', async () => {
//             expect(queryByTestId('Callout')?.props).toBeDefined()
//             expect(queryByTestId('Callout')?.children).toBeDefined()
//         });

//         it('should render with right animation', async () => {
//             expect(queryByTestId('Callout')?.props.children).toBeInstanceOf(Object);
//         });
//     })

//     describe('Down Callout', () => {
//         const TextElem = () => <Text>Hello, World!</Text>;
//         let queryByTestId: (testID: string) => ReactTestInstance | null;
//         beforeEach(() => {
//             ({ queryByTestId } = render(
//                 <Popup
//                     isVisible={true}
//                 >
//                     <TextElem />
//                 </Popup>
//             ))
//         })

//         it('should call renderCallout once', async () => {
//             expect(queryByTestId('Callout')?.props).toBeDefined()
//             expect(queryByTestId('Callout')?.children).toBeDefined()
//         });
//     })

//     describe('LEFT Callout', () => {
//         const TextElem = () => <Text>Hello, World!</Text>;
//         let queryByTestId: (testID: string) => ReactTestInstance | null;
//         beforeEach(() => {
//             ({ queryByTestId } = render(
//                 <Popup
//                     isVisible={true}
//                 >
//                     <TextElem />
//                 </Popup>
//             ))
//         })

//         it('should call renderCallout once', async () => {
//             expect(queryByTestId('Callout')?.props).toBeDefined()
//             expect(queryByTestId('Callout')?.children).toBeDefined()
//         });
//     })

//     describe('right Callout', () => {
//         const TextElem = () => <Text>Hello, World!</Text>;
//         let queryByTestId: (testID: string) => ReactTestInstance | null;
//         beforeEach(() => {
//             ({ queryByTestId } = render(
//                 <Popup
//                     isVisible={true}
//                 >
//                     <TextElem />
//                 </Popup>
//             ))
//         })

//         it('should call renderCallout once', async () => {
//             expect(queryByTestId('Callout')?.props).toBeDefined()
//             expect(queryByTestId('Callout')?.children).toBeDefined()
//         });
//     })
// })