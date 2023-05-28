import ViewPager from "@react-native-community/viewpager";
import React from "react";
import {
  View,
} from "react-native";
import { FavoriteLook } from "../FavoriteLook";


import {styles} from './styles';
import {componentProps} from './types';


export const FavoriteHzScroller = ({ favorites, deleteFavorite }: componentProps) => {
  return (
    <ViewPager style={styles.fullscreen} orientation="horizontal">
      {favorites.map((favorite, index) => (
        <View style={{ marginRight: 45 }} key={index}>
          <FavoriteLook favorite={favorite} deleteFavorite={deleteFavorite}/>
        </View>
      ))}
    </ViewPager>
  );
};


