import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";

export const AvatarRoundedRectangleStyles = StyleSheet.create({
    Small: {
        height: responsiveHeight(5),
        width: responsiveWidth(15),
        borderRadius: responsiveHeight(15) / 2,
    },
    Medium: {
        height: responsiveHeight(7.9),
        width: responsiveWidth(17),
        borderRadius: responsiveHeight(30) / 30,
    },
    Large: {
        height: responsiveHeight(15),
        width: responsiveWidth(30),
        borderRadius: responsiveHeight(30) / 12,
    },
});
