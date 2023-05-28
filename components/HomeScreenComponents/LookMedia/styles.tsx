import { StyleSheet } from "react-native";
import { MainColors } from "../../../styles/Colors";
import { FontStyles } from "../../../styles/Fonts";
import { screenHeight } from './types'

export const styles = StyleSheet.create({
	modelTitle: {
		...FontStyles.Heading2,
		color: MainColors.Natural,
	},
	textStyle: {
		marginLeft: 15,
		position: 'absolute',
		marginTop: screenHeight / 1.45,
		width: '96%',
	},
	madeBy: {
		...FontStyles.SmallText,
		color: MainColors.Natural,
		marginTop: 6,
		marginHorizontal: 4
	},
	description: {
		...FontStyles.NormalText,
		color: MainColors.Natural,
		marginTop: 6,
		width: '80%',
	},
	dotStyle: {
		position: 'absolute',
		width: 200,
	},
	dot: {
		color: MainColors.Natural,
	},
	product: {
		backgroundColor: MainColors.Natural,
		padding: 5,
		borderRadius: 10,
		elevation: 1,
        zIndex: 1
	},

});