import React from 'react';
import {
    View,
    Animated,
} from 'react-native';
import { componentProps } from './types';
import { styles } from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


export const DotPopUp = ({ arrowDirection, visibility, children, onCalloutPressed }: componentProps) => {
    const renderCallout = () => {
        if (arrowDirection == 'down') {
            return (

                <Animated.View style={[styles.container,
                {
                    opacity: visibility,
                }
                ]}>
                    <FontAwesomeIcon
                        size={20}
                        icon={faCircle} style={styles.dot} />
                    <View style={styles.calloutTriangle}>
                    </View>

                    <TouchableOpacity activeOpacity={1.0} onPress={onCalloutPressed}>
                        {children}
                    </TouchableOpacity>
                </Animated.View>


            );
        }
        else if (arrowDirection == 'up') {
            return (

                <Animated.View style={[styles.container,
                {
                    opacity: visibility,
                    marginTop: -70
                }
                ]}>
                    <TouchableOpacity activeOpacity={1.0} onPress={onCalloutPressed} >
                        {children}
                    </TouchableOpacity>

                    <View style={[styles.calloutTriangle, styles.transformTriangleDown]}>
                    </View>
                    <FontAwesomeIcon
                        size={20}
                        icon={faCircle} style={styles.dot} />
                </Animated.View>

            );
        }
        else if (arrowDirection == 'right') {
            return (
                <Animated.View style={[styles.container, styles.flexDirectionRow,
                {
                    opacity: visibility,
                    marginRight: -180,
                }
                ]}>
                    <View style={[styles.calloutTriangle, styles.transformTriangleRight]}>
                    </View>

                    <TouchableOpacity activeOpacity={1.0} onPress={onCalloutPressed} >
                        <View style={styles.calloutSquare}>
                            {children}
                        </View>

                    </TouchableOpacity>
                </Animated.View>

            );
        }
        else {
            return (
                <View >
                    <FontAwesomeIcon
                        size={20}
                        icon={faCircle} style={styles.dot} />

                    <Animated.View style={[styles.container, styles.flexDirectionRow,
                    {
                        opacity: visibility,
                        marginLeft: -180,
                    }
                    ]}>
                        <TouchableOpacity activeOpacity={1.0} onPress={onCalloutPressed} >
                            <View style={styles.calloutSquare}>
                                {children}
                            </View>

                        </TouchableOpacity>

                        <View style={[styles.calloutTriangle, styles.transformTriangleLeft]}>
                        </View>
                    </Animated.View>
                </View>

            );
        }
    }

    return (
        <View testID="Callout">
            {renderCallout()}
        </View>
    )

}

