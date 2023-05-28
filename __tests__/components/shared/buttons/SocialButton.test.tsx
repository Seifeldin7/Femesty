import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import { SocialButton } from "../../../../components/SharedComponents/buttons";

test('should render button in all screens', () => {
    const tree = render(
        <SocialButton
            style= {{}}
            icon={'facebook'}
            color={'blue'}
            title={'Signin with Facebook'}
            key={1}
            onPress={() => {0}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


describe('Button', () => {
  it('renders the passed-in name', () => {
    const {queryByText} = render(
        <SocialButton
            style= {{}}
            icon={'facebook'}
            color={'blue'}
            title={'Signin with Facebook'}
            key={1}
            onPress={() => {0}}
        />
    );
    expect(queryByText("Signin with Facebook")).not.toBeNull();
  });
});


describe('Button', () => {
    it('renders text-if no image', () => {
        const {getByTestId} = render(
            <SocialButton
                style= {{}}
                icon={'facebook'}
                color={'blue'}
                title={'Signin with Facebook'}
                key={1}
                onPress={() => {0}}
            />
        );
        expect(getByTestId("SocailButton").props.children).toBeDefined();
    });
  });
  

describe('button pressed fired', () => {
    it('clears the message field', () => {
        const {getByText} = render(
            <SocialButton
                style= {{}}
                icon={'facebook'}
                color={'blue'}
                title={'Signin with Facebook'}
                key={1}
                onPress={() => {0}}
            />
        );
        fireEvent.press(getByText('Signin with Facebook'));
    });
});


describe('check props values assigned correctly', () => {
    it('clears the message field', () => {
        const {getByTestId} = render(
            <SocialButton
                style= {{}}
                icon={'facebook'}
                color={'blue'}
                title={'Signin with Facebook'}
                key={1}
                onPress={() => {0}}
            />
        );
        expect(getByTestId("SocailButton")).toBeDefined()
    });
});
