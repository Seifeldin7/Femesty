import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import { Button } from "../../../../components/SharedComponents/buttons";


test('should render button in all screens', () => {
    const tree = render(
        <Button 
            backgroundColor= {'red'}
            style= {{}}
            title= {"hello"}
            textColor={'black'}
            key={1}
            onPress={() => {0}}
            enable={true}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


describe('Button', () => {
  it('renders the passed-in name', () => {
    const {queryByText} = render(
        <Button 
            backgroundColor= {'red'}
            style= {{}}
            title= {"Hello, world!"}
            textColor={'black'}
            key={1}
            onPress={() => {0}}
            enable={true}
        />
    );
    expect(queryByText('Hello, world!')).not.toBeNull();
  });
});



describe('Button', () => {
    let onPresshandler = jest.fn();
    it('renders the passed-in name', () => {
      const {queryByTestId} = render(
          <Button 
              backgroundColor= {'red'}
              style= {{}}
              title= {"Hello, world!"}
              textColor={'black'}
              key={1}
              onPress={onPresshandler}
              enable={false}
          />
      );
      expect(queryByTestId('ButtonTouchableOpacity')?.props.style.backgroundColor).toBe('red');
    });
  });
  

describe('button pressed fired', () => {
    it('clears the message field', () => {
        const {getByText} = render(
            <Button 
                backgroundColor= {'red'}
                style= {{}}
                title= {"Hello, world!"}
                textColor={'black'}
                key={1}
                onPress={() => {0}}
                enable={true}
            />
        );
        fireEvent.press(getByText('Hello, world!'));
    });
});


describe('check props values assigned correctly', () => {
    it('clears the message field', () => {
        const {getByText, debug} = render(
            <Button 
                backgroundColor= {'red'}
                style= {{}}
                title= {"Hello, world!"}
                textColor={'black'}
                key={1}
                onPress={() => {0}}
                enable={true}
            />
        );
        // debug();
        expect(getByText('Hello, world!').props).toEqual(
            {"children": "Hello, world!", 
                "style": [
                    {"color": "black"}, 
                    {"fontFamily": "Lato_Regular",
                        "fontSize": 16, 
                        "margin": 14
                    }
                ]
            }
        )
    });
});
