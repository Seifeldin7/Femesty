import { Dimensions, StyleSheet } from 'react-native'
import { BasicColors, MainColors, SecondaryColors } from '../../../styles/Colors';
let screenHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
    indicator: {
        elevation: 1,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        marginBottom: screenHeight / 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    dotActive: {
        backgroundColor: MainColors.Light,
        marginLeft: 3,
        elevation: 3,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        textShadowColor: BasicColors.Black,
        height: 3,
        width: 24,
        borderRadius: 1.5
    },
    dotInActive: {
        backgroundColor: SecondaryColors.lightGrey,
        marginLeft: 3,
        height: 3,
        width: 12,
        borderRadius: 1.5
    }
});
