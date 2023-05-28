import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { componentProps } from './types';
import { Button } from '../../components/SharedComponents/Buttons';
import { BasicColors, MainColors } from '../../styles/Colors';
import { ButtonStyles } from '../../styles/Buttons';
import { ScreenSkeleton } from '../../components/ThemeComponents/ScreenSkeleton';
import { TripleVzEqualContainer } from '../../styles/Containers';

export const PhoneConfirmationScreen = ({ navigation, route }: componentProps) => {
    const CELL_COUNT = 4;

    const [counter, setCounter] = useState(5);
    const [value, setValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 60000);
    }, [counter]);

    const onSubmit = () => {
        if (value.length == CELL_COUNT) {
            setSubmitted(true);
            route.params.verify(value);
            route.params.updateAddress();
        }
    }

    const back = () => {
        setSubmitted(false);
        navigation.goBack();
        if (!submitted) {
            route.params.cancelcode();
        }
    }

    return (
        <ScreenSkeleton
            goBackNavigation={() => { back() }}
            title={"Delivery Details"}
        >
            <View style={TripleVzEqualContainer.Container}>
                <View style={[TripleVzEqualContainer.TopComponent, styles.row1]}>
                    <Text style={styles.title}>Confrim Your Phone Number</Text>
                    <Text style={styles.regular}>Please confirm your phone number to help us reach you.</Text>
                    <Text style={styles.regular}>this is a ONE time process.</Text>
                </View>
                <View style={TripleVzEqualContainer.MiddleComponent}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>
                <View style={TripleVzEqualContainer.BottomComponent}>
                    <Button
                        style={{ ...ButtonStyles.Large, alignSelf: 'center' }}
                        backgroundColor={MainColors.Light}
                        textColor={BasicColors.White}
                        title={"Confirm"}
                        onPress={onSubmit}
                        enable={true} />
                </View>
            </View>

        </ScreenSkeleton>
    )
}
