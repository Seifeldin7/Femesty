import { StyleSheet } from "react-native";
import { SecondaryColors } from '../../styles/Colors';
import { FontStyles } from "../../styles/Fonts";

export const styles = StyleSheet.create({
    info: {
        alignItems: 'center',
    },
    save: {
        ...FontStyles.NormalText,
        color: SecondaryColors.Green
    },
    saveView: {
        alignItems: 'flex-end',
        marginHorizontal: 10
    },
    profilepic: {
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    inputs: {
        width: '90%',
        alignSelf: 'center'
    },
});
