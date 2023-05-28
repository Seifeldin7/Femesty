import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MainColors } from '../../../styles/Colors';
import { componentProps } from './types'


export const Tag = ({ TagStyle, hashTag, name, onPress, selected }: componentProps) => {


    return (
        <TouchableOpacity
            style={TagStyle}
            onPress={() => { onPress(name) }}
        >
            <Text numberOfLines={1}
                ellipsizeMode={'clip'}
                style={
                    selected ? [
                        hashTag, {
                        backgroundColor: MainColors.Light, 
                        paddingHorizontal: 15, 
                        borderRadius: 5, 
                        color: MainColors.Natural
                    }] : hashTag
                }>
                {name.toLowerCase()}</Text>
        </TouchableOpacity>
    )
}
