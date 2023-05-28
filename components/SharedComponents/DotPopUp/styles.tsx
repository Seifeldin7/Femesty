import { StyleSheet } from "react-native";
import { MainColors } from "../../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },

    flexDirectionColumn: {
        flexDirection: 'column',
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    calloutSquare: {
        backgroundColor: MainColors.Natural,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 12,
    },

    calloutTriangle: {
        backgroundColor: 'transparent',
        width: 20,
        height: 20,

        alignSelf: 'center',

        borderStyle: 'solid',
        borderBottomColor: MainColors.Natural,
        borderBottomWidth: 15,

        borderLeftWidth: 10,
        borderLeftColor: 'transparent',

        borderRightWidth: 10,
        borderRightColor: 'transparent',
    },

    transformTriangleDown: {
        transform: [
            { rotate: '180deg' }
        ],
    },

    transformTriangleLeft: {
        marginLeft: -5,
        marginRight: -1,
        alignSelf: 'center',
        transform: [
            { rotate: '90deg' }
        ]
    },

    transformTriangleRight: {
        marginLeft: -5,
        marginRight: -1,
        alignSelf: 'center',
        transform: [
            { rotate: '270deg' }
        ]
    },
    dot: {
		color: MainColors.Natural,
        alignSelf: 'center',
	},
})