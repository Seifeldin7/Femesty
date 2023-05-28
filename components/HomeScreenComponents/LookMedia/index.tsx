import React, { useEffect, useState } from "react"
import styled from "styled-components/native"
import { Text, View, TouchableOpacity } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Product from '../../../entities/Product';
import { DotPopUp } from "../../SharedComponents/DotPopUp";
import { OrderItem } from "../../OrderScreenComponents"
import { styles } from './styles'
import { componentProps, screenHeight, screenWidth } from './types'
import { SecondaryColors } from "../../../styles/Colors"
import { FontStyles } from "../../../styles/Fonts"
import { Avatar } from "../../ThemeComponents/Avatar"
import { Ionicons } from "@expo/vector-icons"
import { responsiveScreenWidth } from "react-native-responsive-dimensions"

const Poster = styled.ImageBackground`
	height: 100%;
`

const LookMedia = ({
	poster,
	username,
	image,
	description,
	title,
	dots,
	index,
	firstMedia,
	pageNumSelected,
	navigation }: componentProps) => {
	const [clicked, setClicked] = useState(false);
	const [flag, setFlag] = useState(true);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [chosenProduct, setChosenProduct] = useState(new Product(1, '', '', 1, [], [], '', '', '', '', {}, new Date()));

	const media = <Poster source={{ uri: poster }} />;
	const wait = (timeout: any) => {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	};
	useEffect(() => {
		if (index === pageNumSelected) {
			wait(1200).then(() => setFlag(false));
		}
	}, [pageNumSelected])

	const openModal = (product: Product) => {
		setChosenProduct(product);
		setIsModalVisible(true);
	}
	const isUpperScreen = (dotX: number, dotY: number) => {
		return (((dotY <= screenHeight / 2) || isLowerEdge(dotY)) && !isUpperEdge(dotY))
		//&& !isLeftOfScreen(dotX) && !isRightOfScreen(dotX) 
	}
	const isLowerScreen = (dotX: number, dotY: number) => {
		return (((dotY > screenHeight / 2) || isUpperEdge(dotY)) && !isLowerEdge(dotY))
		//&& !isLeftOfScreen(dotX) && !isRightOfScreen(dotX)
	}
	const isLeftOfScreen = (dotX: number) => {
		return (dotX <= screenWidth / 5)
	}
	const isRightOfScreen = (dotX: number) => {
		return (dotX >= (screenWidth - 100))
	}
	const isUpperEdge = (dotY: number) => {
		return (dotY <= 150)
	}
	const isLowerEdge = (dotY: number) => {
		return (dotY >= screenHeight - 150)
	}
	return (
		<TouchableOpacity activeOpacity={1.0} onPress={() => { setClicked(!clicked) }}>
			{media}
			<OrderItem
				product={chosenProduct}
				isVisible={isModalVisible}
				setModalVisible={setIsModalVisible}
				navigation={navigation} />

			{dots.map((dot: any, index: number) => {
				let pos = JSON.parse(dot.pos);
				let dotX: number = (pos.x) * screenWidth;
				let dotY: number = (pos.y) * screenHeight;
				let product: Product = dot.product;

				let productView =
					<View style={styles.product}>
						<Text style={{ ...FontStyles.SmallText }} >{product.name}</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
							<Text style={{ ...FontStyles.SmallText }}>{product.seller.name}</Text>
							<Text style={{ marginLeft: 50, color: SecondaryColors.darkGrey, marginRight: 3 }}>{product.price} EGP</Text>
							<Ionicons
								name="ios-arrow-forward"
								size={responsiveScreenWidth(5)}
								color={SecondaryColors.darkGrey}
							/>
						</View>
					</View>;
				return (

					<View
						key={index}
						style={{ ...styles.dotStyle, marginTop: dotY, marginLeft: dotX - 100 }}>
						{((!flag && firstMedia) || !firstMedia) && !clicked ?
							<TouchableOpacity
								activeOpacity={1.0} onPress={() => { setClicked(true); }}
								style={{ alignItems: 'center' }}>
								<FontAwesomeIcon
									size={20}
									icon={faCircle} style={styles.dot} />
							</TouchableOpacity> : null}
						{(clicked && !flag) ?
							<DotPopUp
								visibility={1}
								arrowDirection={isUpperScreen(dotX, dotY) ? "up" : "down"}
								onCalloutPressed={() => { openModal(product); }}>
								{productView}
							</DotPopUp> : null}

					</View>
				)
			})}
			<View style={styles.textStyle}>
				<Text style={styles.modelTitle}>{title}</Text>
				<View style={{ flexDirection: 'row', alignItems: "center", paddingVertical: 5 }}>
					{(image == '') ?
						<Avatar imgPath={require("../../../assets/images/default_profile_pic.jpg")} /> :
						<Avatar imgPath={{ uri: image }} />
					}
					<Text style={styles.madeBy}>By: {username}</Text>
				</View>
				<Text style={styles.description}>{description}</Text>
			</View>
		</TouchableOpacity >
	)
}


export const MemoLookMedia = React.memo(LookMedia);
