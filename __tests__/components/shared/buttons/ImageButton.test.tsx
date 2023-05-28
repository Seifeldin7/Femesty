import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import { ImageButton } from "../../../../components/SharedComponents/buttons";

test('should render button in all screens', () => {
    const tree = render(
        <ImageButton
            style= {{}}
            size={10}
            source={'../../../assets/images/01.jpg'}
            key={1}
            onPress={() => {0}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


describe('Button', () => {
  it('renders the passed-in image', () => {
    const {getByTestId} = render(
        <ImageButton
            style= {{}}
            size={10}
            source={'../../../assets/images/01.jpg'}
            key={1}
            onPress={() => {0}}
        />
    );
    expect(getByTestId("ImageButtonTouchableOpacity").props).toBeDefined();
  });
});


describe('Button', () => {
    it('renders text-if no image', () => {
      const {getByTestId} = render(
          <ImageButton
              style= {{}}
              size={10}
              source={''}
              key={1}
              onPress={() => {0}}
          />
      );
      expect(getByTestId("ImageButtonTouchableOpacity").props.children).toBeDefined();
    });
  });
  

describe('button pressed fired', () => {
    it('clears the message field', () => {
        const {getByTestId} = render(
            <ImageButton
                style= {{}}
                size={10}
                source={'../../../assets/images/01.jpg'}
                key={1}
                onPress={() => {0}}
            />
        );
        fireEvent.press(getByTestId("ImageButtonTouchableOpacity"));
    });
});


describe('check props values assigned correctly', () => {
    it('clears the message field', () => {
        const {getByTestId} = render(
            <ImageButton
                style= {{}}
                size={10}
                source={'../../../assets/images/01.jpg'}
                key={1}
                onPress={() => {0}}
            />
        );
        expect(getByTestId("ImageButtonTouchableOpacity").props).toBeDefined()
    });
});
