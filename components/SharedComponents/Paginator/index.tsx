import React from 'react';
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles';
import { componentProps } from './types';

export const Paginator = ({ curPage, maxPages }: componentProps) => {
    let pageNumbers: any = [{}];
    for (let i = 0; i < maxPages; i++) {
        pageNumbers[i] = {};
    }
    let icons = pageNumbers.map((dot: any, index: number) => {
        return (
            <View
                key={index}
                style={(curPage == index) ? styles.dotActive : styles.dotInActive}>

            </View>
        )
    })
    return (
        <View style={styles.indicator}>
            {icons}
        </View>
    )
}

