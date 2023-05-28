import { StyleSheet } from 'react-native'
import { FontStyles } from '../../styles/Fonts';
import { MainColors } from '../../styles/Colors';


export const styles = StyleSheet.create({
    row1: {
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    title: {
        ...FontStyles.Heading2,
        marginBottom: 5
    },
    regular: {
        ...FontStyles.NormalText,
        marginBottom: 5
    },
    codeFieldRoot: {
        width: '60%',
        alignSelf: 'center'
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 40,
        ...FontStyles.Heading2,
        textAlign: 'center',
        borderBottomWidth: 1,

    },
    focusCell: {
        borderBottomColor: MainColors.Light
    },
});
