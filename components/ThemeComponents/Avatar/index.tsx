import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import { AvatarStyles } from '../../../styles/Avatar';
import { AvatarRoundedRectangleStyles } from '../../../styles/AvatarRoundedRectangle';
import { AvatarProps } from './types';


const Avatar = ({ style, onPress, imgPath, size, borderRadius }: AvatarProps) => {
    let innerStyle = AvatarStyles.Small;
    switch (size) {
        case "medium":
            innerStyle = AvatarStyles.Medium;
            if (borderRadius == "rounded-rectangle") {
                innerStyle = { ...innerStyle, ...AvatarRoundedRectangleStyles.Medium };
            }
            break;
        case "large":
            innerStyle = AvatarStyles.Large;
            if (borderRadius == "rounded-rectangle") {
                innerStyle = { ...innerStyle, ...AvatarRoundedRectangleStyles.Large };
            }
            break;
        default:
            innerStyle = AvatarStyles.Small;
            if (borderRadius == "rounded-rectangle") {
                innerStyle = { ...innerStyle, ...AvatarRoundedRectangleStyles.Small };
            }
            break;
    }
    return (
        (onPress != null) ?

            <TouchableOpacity
                style={style}
                onPress={onPress}>
                <Image source={imgPath} style={innerStyle} />
            </TouchableOpacity> :
            <View style={style}>
                <Image source={imgPath} style={innerStyle} />
            </View>
    );
};


export { Avatar };
