import React, { useCallback, useEffect, useReducer } from "react";
import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import { componentProps } from './types'
import { Input } from "../Input";
import { styles } from "./styles";
import { AnyAction } from "redux";

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state: any, action: AnyAction) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};


export const Form = ({
  formData,
  inputProps,
  onSubmit,
  submitIsPressed }: componentProps) => {
  const inputValidities = { ...formData };
  for (let key of Object.keys(inputValidities)) {
    inputValidities[key] = formData ? true : false;
  }
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      ...formData
    },
    inputValidities: inputValidities,
    formIsValid: formData ? true : false
  });

  useEffect(() => {
    if (submitIsPressed) {
      if (!formState.formIsValid) {
      } else {
        onSubmit(formState.inputValues);
      }
      submitIsPressed = false;
    }
  }, [formState, submitIsPressed]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.form}>
          {Object.keys(formData).map((key: string) => {
            return (
              <Input
                key={key}
                id={key}
                label={inputProps[key] && inputProps[key].label ? inputProps[key].label : ''}
                keyboardType={inputProps[key] && inputProps[key].keyboardType ? inputProps[key].keyboardType : 'default'}
                placeholder={inputProps[key] && inputProps[key].placeholder ? inputProps[key].placeholder : ''}
                autoCapitalize={inputProps[key] && inputProps[key].autoCapitalize ? inputProps[key].autoCapitalize : 'sentences'}
                returnKeyType={inputProps[key] && inputProps[key].returnKeyType ? inputProps[key].returnKeyType : 'next'}
                errorText={inputProps[key] && inputProps[key].errorText ? inputProps[key].errorText : ''}
                onInputChange={inputChangeHandler}
                initialValue={formData ? formData[key] : ''}
                initiallyValid={!!formData}
              />
            );
          })}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
