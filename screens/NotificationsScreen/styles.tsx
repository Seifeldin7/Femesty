import { StyleSheet, StatusBar } from 'react-native'
import { FontStyles } from '../../styles/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    saveView: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        flex: 0.1
    },
    save: {
        ...FontStyles.SmallText
    },
    loader: {
        marginTop: 10,
        alignItems: 'center',
    }
});
