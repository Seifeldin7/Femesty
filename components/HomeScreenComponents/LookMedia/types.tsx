import { Dimensions } from "react-native";

export type componentProps = {
	poster: string,
	username: string,
	image: string,
	description: string,
	title: string,
	dots: unknown[],
	firstMedia?: boolean,
	navigation: any,
	index?:number,
	pageNumSelected?: number
}
export let screenHeight = Dimensions.get('window').height;
export let screenWidth = Dimensions.get('window').width;