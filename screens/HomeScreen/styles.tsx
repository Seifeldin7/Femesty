import {Dimensions, StatusBar, StyleSheet} from 'react-native'
import { BasicColors } from '../../styles/Colors';
let screenHeight = Dimensions.get('window').height ;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        height: screenHeight,
    },
    row1: {
        elevation: 1,
		zIndex: 1,
		position: 'absolute',
		flexDirection: "row",
		alignItems: "center",
		marginTop: StatusBar.currentHeight,
        justifyContent: 'space-between',
        width:'100%',
    },
	Icon: {
        marginRight:15,
        color: BasicColors.White,
    },
    logo: {
        marginLeft:15,
        flexDirection:'row',          
    }
});
