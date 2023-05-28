import React from 'react';
import { ScrollView } from 'react-native';
import { componentProps } from './types'
import { Tag } from '../Tag'
import {styles} from './styles'

export function TagScroller ({ myTagsNames, TagStyle, hashTag, horizontalScrollerStyle , filter, selected}: componentProps) {
    
    return (
        <ScrollView
            horizontal
            style={[styles.horizontalScroll, horizontalScrollerStyle, {marginHorizontal: 20}]}
            showsHorizontalScrollIndicator={false}
        >
            {myTagsNames.map((name, index) => (
                <Tag
                    name={name}
                    TagStyle={TagStyle}
                    hashTag={hashTag}
                    key={index}
                    onPress={(name:string)=>{
                        filter(name);
                    }}
                    selected = {selected===name? true: false}
                />
            ))}
        </ScrollView>
    )
}   
