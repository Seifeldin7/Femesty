import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { ButtonProps } from './types';


const Button = ({ style, backgroundColor, textColor, title, enable = true, onPress } : ButtonProps) => {
  const { containerStyle, textStyle } = styles;

  return (
    <TouchableOpacity
        style={[{ opacity: enable ? 1 : 0.3, backgroundColor}, containerStyle, style]}
        disabled={!enable}
        onPress={onPress}
        testID='ButtonTouchableOpacity'
    >
      <Text style={[textStyle, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


export { Button };
