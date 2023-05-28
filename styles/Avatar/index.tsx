import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";

export const AvatarStyles = StyleSheet.create({
    Small: {
        height: responsiveHeight(3),
        width: responsiveWidth(6),
        borderRadius: responsiveHeight(5) / 2,
    },
    Medium: {
        height: responsiveHeight(6),
        width: responsiveWidth(13),
        borderRadius: responsiveHeight(6) / 2,
    },
    Large: {
        height: responsiveHeight(7),
        width: responsiveWidth(30),
        borderRadius: responsiveHeight(7) / 2,
    },
});
