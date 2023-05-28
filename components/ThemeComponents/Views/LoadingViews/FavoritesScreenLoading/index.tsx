import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "../../../../../services/react-native-skeleton-placeholder";

import {styles} from './styles'

export const FavoritesScreenLoading = () => {
  return (


    <SkeletonPlaceholder>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.loadingBar} />
        <View style={styles.loadingBar} />
      </View>
    </SkeletonPlaceholder>

  );
};

