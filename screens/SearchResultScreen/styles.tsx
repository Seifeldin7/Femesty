import {Dimensions, StyleSheet} from 'react-native'
import { BasicColors } from '../../styles/Colors';
import { FontStyles } from '../../styles/Fonts';
let screenHeight = Dimensions.get('window').height ;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        height: screenHeight
    },
    statusBar: {
        elevation: 1,
        zIndex: 1,
		position: 'absolute',
		flexDirection: "row",
		alignContent: "flex-start",
        marginTop: 40,
        justifyContent:'center',
        alignItems:'center'
    },
	Icon: {
        marginRight:20,
        color:BasicColors.White,
    },
    back: {
        flex: 1
    },
    nameContainer:{
        flex:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
});
