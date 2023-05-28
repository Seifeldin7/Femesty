import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";
import { componentProps } from './types'
import Modal from 'react-native-modal';
import { BasicColors, MainColors } from '../../../styles/Colors';
import { Button } from "../Buttons";
import { AntDesign } from '@expo/vector-icons';
import { ButtonStyles } from '../../../styles/Buttons';
import { Icon } from '../../ThemeComponents/Icon';
export const CustomAlert = ({
    isVisible,
    setIsAlertVisible,
    onCloseAlert,
    title,
    description,
    type,
    callableFunction }: componentProps) => {
    const closeModal = () => {
        setIsAlertVisible ? setIsAlertVisible(false) : null;
        onCloseAlert ? onCloseAlert() : null;
    }

    return (
        <Modal
            isVisible={isVisible}
            style={styles.view}
            onBackdropPress={closeModal}>
            <View style={{ justifyContent: 'center' }}>
                <Icon size="small"
                    outerStyle={styles.close}
                    onPress={() => closeModal()} 
                    iconPath={require("../../../assets/icons/small_icons/close.png")} />
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
                {(type === 'confirm') ?
                    <View>
                        <Button
                            backgroundColor={MainColors.Light}
                            title="NO"
                            style={{ ...ButtonStyles.Medium, ...styles.button }}
                            textColor={BasicColors.White}
                            onPress={() => closeModal()}
                            enable={true}></Button>
                        <Button
                            backgroundColor={BasicColors.White}
                            title="YES"
                            style={{ ...ButtonStyles.Medium, ...styles.button }}
                            textColor={BasicColors.Black}
                            onPress={() => callableFunction()}
                            enable={true}></Button>
                    </View> : <View>
                        <Button
                            backgroundColor={MainColors.Light}
                            title="OK"
                            style={{ ...ButtonStyles.Medium, ...styles.button }}
                            textColor={BasicColors.White}
                            onPress={() => closeModal()}
                            enable={true}></Button>
                    </View>}
            </View>
        </Modal>
    )
}
