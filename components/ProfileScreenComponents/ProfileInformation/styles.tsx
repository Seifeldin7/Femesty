import { StatusBar, StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { MainColors, SecondaryColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
    info: {
        flex: 3,
        alignItems: 'center',
    },
    profilePic: {
        width: responsiveWidth(33),
        height: responsiveWidth(33),
        borderRadius: responsiveWidth(8),
    },
    name: {
        ...FontStyles.NormalText
    },
    username: {
        ...FontStyles.SmallText,
        color: SecondaryColors.darkGrey
    },
    circle: {
        borderColor: MainColors.Light,
        height: responsiveHeight(1.4),
        width: responsiveHeight(1.4),
        borderRadius: responsiveHeight(1.4) / 2,
        alignSelf: "flex-end",
        borderWidth: 2.5
    }
});
