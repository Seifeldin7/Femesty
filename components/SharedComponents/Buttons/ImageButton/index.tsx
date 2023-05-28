import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ImageButtonProps } from './types';



const ImageButton = ({ style, size, source, onPress } : ImageButtonProps) => {
  const { containerStyle, imageStyle} = styles;
  const ImageSrc = () => {
    if (source === '') {
      return <Text> No Image</Text>
    }
    else {
      return <Image 
          style={[{ width: size, height: size }, imageStyle]} 
          source={{ uri: source }}        
        />
    }
  }

  return (
    <TouchableOpacity 
      style={[containerStyle, style]} 
      onPress={onPress}
      testID="ImageButtonTouchableOpacity"
    >
      <ImageSrc/>
    </TouchableOpacity>
  );
};


export { ImageButton };
