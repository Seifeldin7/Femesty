import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/configureStore';
import { MainColors } from '../../../styles/Colors';

import {styles} from './styles'
import {ChatMessageProps} from './types'

export const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;
    const user = useSelector((state: RootState) => state.profile.profile);
    const isMyMessage = () => {
        return message.user.id === user.id;
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? MainColors.Light : 'white',
                    marginLeft: isMyMessage() ? 100 : 0,
                    marginRight: isMyMessage() ? 0 : 100,
                }
            ]}>
                <Text style={[styles.message, {
                    color: isMyMessage() ? 'white' : 'black',
                }]}>{message.description}</Text>
                
            </View>
            <Text style={styles.time}>{message.created_at}</Text>
        </View>
    )
}