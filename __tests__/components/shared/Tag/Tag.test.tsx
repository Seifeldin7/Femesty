import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import { Tag } from "../../../../components/SharedComponents/Tag";

test('should render Selected Tag in all screens', () => {
    const tagName = "Hello";
    let onPressHandler = jest.fn();
    const tree = render(
        <Tag
            name={tagName}
            TagStyle={{height: 20, marginTop: 10,paddingRight: 10,}}
            hashTag={{fontWeight: "bold",fontSize: 15,}}
            key={1}
            onPress={onPressHandler}
            selected = {true}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe( 'New Tag', () => {
    describe( 'clicking onPress', () => {
        const tagName = "Hello";
        let onPressHandler: Function, getByText: (text: string | RegExp) => ReactTestInstance;
        beforeEach(() => {
            onPressHandler = jest.fn();
            ({getByText} = render(
                <Tag
                    name={tagName}
                    TagStyle={{height: 20, marginTop: 10,paddingRight: 10,}}
                    hashTag={{fontWeight: "bold",fontSize: 15,}}
                    key={1}
                    onPress={onPressHandler}
                    selected = {true}
                />
            ))
            fireEvent.press(getByText(tagName));
        })

        it('should set background to #FFA07A if selected', async () => {
            expect(getByText(tagName).props.style[1].backgroundColor).toBe('#FFA07A')
        });


        it('calls the onPress Handler', () => {
            expect(onPressHandler).toHaveBeenNthCalledWith(1, tagName)
        });
    })

    describe('not Pressed color', () => {
        const tagName = "Hello";
        let onPressHandler: Function, 
            getByText: (text: string | RegExp) => ReactTestInstance;
        beforeEach(() => {
            onPressHandler = jest.fn();
            ({getByText} = render(
                <Tag
                    name={tagName}
                    TagStyle={{height: 20, marginTop: 10,paddingRight: 10,}}
                    hashTag={{fontWeight: "bold",fontSize: 15,}}
                    key={1}
                    onPress={onPressHandler}
                    selected = {false}
                />
            ))
            fireEvent.press(getByText(tagName));
        })
        it('should not set background color if not selected', async () => {
            expect(getByText('Hello')).not.toBeNull();
            expect(getByText(tagName).props.style[1]).toBeUndefined();
        });        
    });
})