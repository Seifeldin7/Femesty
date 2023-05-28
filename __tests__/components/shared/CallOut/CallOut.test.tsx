import React from "react";
import { Text } from "react-native";
import { render, fireEvent } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";

import { DotPopUp } from "../../../../components/SharedComponents/DotPopUp";


test('should render Selected Callout in all screens', () => {
    const TextElem = () => <Text>Hello, World!</Text>;
    const tree = render(
        <DotPopUp
            arrowDirection={'up'}
            visibility={80}
            key={1}
        >
            <TextElem />
        </DotPopUp>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe( 'New Callout', () => {
    describe( 'UP Callout', () => {
        const TextElem = () => <Text>Hello, World!</Text>;
        let queryByTestId: (testID: string) => ReactTestInstance | null;
        beforeEach(() => {
            ({queryByTestId} = render(
                <DotPopUp
                    arrowDirection={'up'}
                    visibility={80}
                    key={1}
                >
                    <TextElem />
                </DotPopUp>
            ))
        })

        it('should call renderDotPopUp once', async () => {
            expect(queryByTestId('DotPopUp')?.props).toBeDefined()
        });
    })

    describe( 'UP DotPopUp', () => {
        const TextElem = () => <Text>Hello, World!</Text>;
        let queryByTestId: (testID: string) => ReactTestInstance | null;
        beforeEach(() => {
            ({queryByTestId} = render(
                <DotPopUp
                    arrowDirection={'up'}
                    visibility={80}
                    key={1}
                >
                    <TextElem />
                </DotPopUp>
            ))
        })

        it('should call renderDotPopUp once', async () => {
            expect(queryByTestId('DotPopUp')?.props).toBeDefined()
            expect(queryByTestId('DotPopUp')?.children).toBeDefined()
        });

        it('should render with right animation', async () => {
            expect(queryByTestId('DotPopUp')?.props.children).toBeInstanceOf(Object);
        });
    })

    describe( 'Down DotPopUp', () => {
        const TextElem = () => <Text>Hello, World!</Text>;
        let queryByTestId: (testID: string) => ReactTestInstance | null;
        beforeEach(() => {
            ({queryByTestId} = render(
                <DotPopUp
                    arrowDirection={'down'}
                    visibility={80}
                    key={1}
                >
                    <TextElem />
                </DotPopUp>
            ))
        })

        it('should call renderDotPopUp once', async () => {
            expect(queryByTestId('DotPopUp')?.props).toBeDefined()
            expect(queryByTestId('DotPopUp')?.children).toBeDefined()
        });
    })

    describe( 'LEFT DotPopUp', () => {
        const TextElem = () => <Text>Hello, World!</Text>;
        let queryByTestId: (testID: string) => ReactTestInstance | null;
        beforeEach(() => {
            ({queryByTestId} = render(
                <DotPopUp
                    arrowDirection={'left'}
                    visibility={80}
                    key={1}
                >
                    <TextElem />
                </DotPopUp>
            ))
        })

        it('should call renderDotPopUp once', async () => {
            expect(queryByTestId('DotPopUp')?.props).toBeDefined()
            expect(queryByTestId('DotPopUp')?.children).toBeDefined()
        });
    })

    describe( 'right DotPopUp', () => {
        const TextElem = () => <Text>Hello, World!</Text>;
        let queryByTestId: (testID: string) => ReactTestInstance | null;
        beforeEach(() => {
            ({queryByTestId} = render(
                <DotPopUp
                    arrowDirection={'right'}
                    visibility={80}
                    key={1}
                >
                    <TextElem />
                </DotPopUp>
            ))
        })

        it('should call renderDotPopUp once', async () => {
            expect(queryByTestId('DotPopUp')?.props).toBeDefined()
            expect(queryByTestId('DotPopUp')?.children).toBeDefined()
        });
    })
})