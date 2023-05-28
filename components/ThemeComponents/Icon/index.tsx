import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { IconStyles } from "../../../styles/Icons/IconStyles";
import { IconProps } from './types';


export const Icon = ({ outerStyle, iconPath, onPress, size }: IconProps) => {
    let innerStyle = IconStyles.Small;

    switch (size) {
        case "medium":
            innerStyle = IconStyles.Medium;
            break;
        case "large":
            innerStyle = IconStyles.Large;
            break;
        default:
            innerStyle = IconStyles.Small;
            break;
    }
    return (
        <TouchableOpacity
            style={outerStyle}
            onPress={onPress}
        >
            <Image source={iconPath} style={innerStyle} />
        </TouchableOpacity>
    );
};
