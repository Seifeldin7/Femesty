import { Dimensions, StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { MainColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        width: responsiveWidth(75),
        backgroundColor: MainColors.Natural,
        alignSelf: 'center',
        maxHeight: responsiveHeight(38),
        borderRadius: responsiveHeight(40) / 20,
        marginTop: responsiveHeight(30)
    },
    close: {
        margin: 10,
        alignSelf: 'flex-end'
    },
    title: {
        ...FontStyles.Heading2,
        marginBottom:4,
        alignSelf: 'center',
        fontSize: 24
    },
    description: {
        ...FontStyles.NormalText,
        textAlign: 'center',
        fontSize: 17,
        width: '90%',
        alignSelf: 'center'
    },
    button: {
        alignSelf: 'center',
        elevation: 5,
        zIndex: 5
    }
})
