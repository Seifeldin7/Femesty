import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontStyles } from "../../../styles/Fonts";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { FavoritesScreenLoading } from "../../ThemeComponents/Views/LoadingViews";

import { styles } from "./styles";
import { componentProps } from "./types";
import { CustomAlert } from "../../SharedComponents/Alert";

export const FavoriteLook = ({ favorite, deleteFavorite }: componentProps) => {
  const [alertVisible, setAlertVisible] = useState(false);

  if (favorite.look.media1) {
    return (
      <TouchableOpacity activeOpacity={1.0} onPress={() => { }}>
        <ImageBackground
          source={{ uri: favorite.look.media1 }}
          style={styles.media}
        >
          <CustomAlert
            title="Are You Sure?"
            description="Do you want to delete this favorite?"
            isVisible={alertVisible}
            setIsAlertVisible={(visible: boolean) =>
              setAlertVisible(visible)
            }
            type="confirm"
            callableFunction={() => deleteFavorite(favorite.id)}
          />
          <AntDesign
            name="close"
            size={35}
            color="white"
            style={styles.deleteButton}
            onPress={() =>
              setAlertVisible(true)
            }
          />
          <View style={styles.textStyle}>
            <Text style={[FontStyles.Heading2, styles.titleText]}>
              {favorite.look.name}
            </Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              {favorite.look.stylist.image ? (
                <Image
                  style={styles.logo}
                  source={{ uri: favorite.look.stylist.image }}
                />
              ) : (
                <FontAwesome name="user-circle-o" size={40} color="gray" />
              )}
              <Text style={[FontStyles.SmallText, styles.designerText]}>
                {favorite.look.stylist.name}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  } else {
    return <FavoritesScreenLoading />;
  }
};
