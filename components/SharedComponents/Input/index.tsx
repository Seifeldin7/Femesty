import React, { useReducer, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { AnyAction } from 'redux';
import { MainColors } from '../../../styles/Colors';
import { styles } from './styles';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';
const INPUT_FOCUS = 'INPUT_FOCUS';

const inputReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    case INPUT_FOCUS:
      return {
        ...state,
        focused: true
      };
    default:
      return state;
  }
};

export const Input = (props: any) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false,
    focused: false
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (text: string) => {
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostTouchHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  const focusHandler = () => {
    dispatch({ type: INPUT_FOCUS });
  };

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={{ ...styles.input, borderBottomColor: (inputState.focused) ? MainColors.Light : MainColors.Dark }}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostTouchHandler}
        onFocus={focusHandler}
        placeholder={props.placeholder}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

