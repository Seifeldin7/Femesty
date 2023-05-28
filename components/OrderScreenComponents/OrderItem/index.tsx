import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { MainColors } from "../../../styles/Colors";
import { Popup } from "../../SharedComponents/Popup";
import { Button } from "../../SharedComponents/Buttons";
import { AntDesign } from "@expo/vector-icons";
import { makeOrder } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/configureStore";

import { styles } from "./styles";
import { componentProps, deviceWidth } from "./types";
import { FontStyles } from "../../../styles/Fonts";
import { ButtonStyles } from "../../../styles/Buttons";
import { TripleVz123Container } from "../../../styles/Containers";
import { Avatar } from "../../ThemeComponents/Avatar";
import { Icon } from "../../ThemeComponents/Icon";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { AvatarRoundedRectangleStyles } from "../../../styles/AvatarRoundedRectangle";

export const OrderItem = ({
  product,
  isVisible,
  setModalVisible,
  navigation,
}: componentProps) => {
  const [colorPicked, setColorPicked] = useState(0);
  const [sizePicked, setSizePicked] = useState(0);
  const [confirmState, setConfirmState] = useState(false);
  const [successState, setSucessState] = useState(false);
  const [startState, setStartState] = useState(true);
  const [completeDeliveryData, setCompleteDeliveryData] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile.profile);
  const makeAnOrder = () => {
    if (user?.name && user.address && user.phone) {
      dispatch(
        makeOrder(
          product,
          user.id,
          product.sizes[sizePicked],
          product.colors[colorPicked]
        )
      );
      setConfirmState(false);
      setSucessState(true);
    } else {
      setConfirmState(false);
      setCompleteDeliveryData(true);
    }
  };
  const onCloseModal = () => {
    setConfirmState(false);
    setSucessState(false);
    setCompleteDeliveryData(false);
    setStartState(true);
  };
  const closeAndDelv = (navigation: any) => {
    setModalVisible(false);
    navigation?.navigate("Profile", { screen: "DeliveryAddress" });
  };
  return (
    <Popup
      isVisible={isVisible}
      setIsModalVisible={setModalVisible}
      onCloseModal={onCloseModal}
    >
      <View style={[TripleVz123Container.Container, { justifyContent: 'space-between' }]}>
        {startState ? (

          <View >
            <View testID="orderInfo" style={styles.row1}>
              <Image source={{ uri: product.image1 }} style={{ ...AvatarRoundedRectangleStyles.Medium, height: '100%' }} />
              <View style={styles.productInfo}>
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.sellerAndPrice}>
                  <Text style={styles.seller}>{product.seller.name}</Text>
                  <Text style={styles.price}>{product.price}
                    <Text style={styles.egp}> EGP</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>

        ) : null}

        {startState ? (
          <View testID="colorAndSizePickers" >
            <Text style={styles.labels}>Size</Text>
            <ScrollView contentContainerStyle={styles.sizes} horizontal={true}>
              {product.sizes ? (
                product.sizes.map((size, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{
                        ...styles.size,
                        backgroundColor:
                          index == sizePicked ? MainColors.Light : MainColors.Natural,
                      }}
                      onPress={() => {
                        setSizePicked(index);
                      }}
                    >
                      <Text
                        style={{
                          ...FontStyles.NormalText,
                          fontSize: 12,
                          color: index == sizePicked ? MainColors.Natural : MainColors.Dark,
                        }}
                      >
                        {size}
                      </Text>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <View style={{ padding: 8, flex: 1 }}>
                  <Text style={{ ...styles.price, textAlign: "center" }}>
                    There are no available sizes for this product
                </Text>
                </View>
              )}
            </ScrollView>
          </View>


        ) : null}
        {startState ? (
          <View>
            <Text style={styles.labels}>Color</Text>
            <ScrollView contentContainerStyle={styles.sizes} horizontal={true}>
              {product.colors ? (
                product.colors.map((color, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.colors}
                      onPress={() => {
                        setColorPicked(index);
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: color,
                          ...styles.color,
                        }}
                      >
                        {index == colorPicked ? (
                          <AntDesign
                            style={styles.check}
                            name="checkcircleo"
                            size={18}
                            color="black"
                          />
                        ) : null}
                      </View>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <View style={{ padding: 5, flex: 1 }}>
                  <Text style={{ ...styles.price, textAlign: "center" }}>
                    There are no available colors for this product</Text>
                </View>
              )}
            </ScrollView>


          </View>
        ) : null}
        {startState ? (
          <View style={{ justifyContent: 'flex-start' }}>
            <Button
              backgroundColor={MainColors.Light}
              title="Order Item"
              style={{ ...ButtonStyles.Large, alignSelf: 'center' }}
              textColor={MainColors.Natural}
              onPress={() => {
                setConfirmState(true);
                setStartState(false);
              }}
              enable={true}
            ></Button>
          </View>
        ) : null}
        {confirmState ? (
          <View style={{ ...TripleVz123Container.TopComponent, maxHeight: responsiveHeight(3) }}>
            <View testID="confirmOrderHeader" style={{ width: '62%', alignItems: 'center' }}>
              <Text style={styles.confirm}>Confirm Your Order</Text>
            </View>
            <View testID="confirmOrderHeader" style={{ width: '75%', alignItems: 'center' }}>
              <Text style={styles.pleaseConfirm}>Please confirm your order to proceed</Text>
            </View>
          </View>) : null}
        {confirmState ? (
          <View testID="orderInfo" style={[styles.row1, TripleVz123Container.MiddleComponent, { justifyContent: 'flex-start' }]}>
            <Image source={{ uri: product.image1 }} style={{ ...AvatarRoundedRectangleStyles.Medium, height: '65%' }} />
            <View style={styles.productInfo}>
              <Text style={styles.name}>{product.name}</Text>
              <View style={{ ...styles.sellerAndPrice, marginVertical: responsiveHeight(1.2) }}>
                <Text style={styles.seller}>{product.seller.name}</Text>
                <Text style={styles.price}>{product.price} EGP</Text>
              </View>
              <View style={{ ...styles.sellerAndPrice }}>
                <Text style={{ ...FontStyles.NormalText }}>Size:</Text>
                <Text style={{ ...FontStyles.SmallText, marginLeft: 5 }}>{product.sizes[sizePicked]}</Text>
                <Text style={styles.labels}>Color:</Text>
                <View style={{ backgroundColor: product.colors[colorPicked], ...styles.colorPicked }}></View>
              </View>
            </View>
          </View>) : null}
        {confirmState ? (
          <View style={{ ...TripleVz123Container.BottomComponent, justifyContent: 'flex-end', maxHeight: responsiveHeight(15) }}>
            <Button
              backgroundColor={MainColors.Light}
              title="Confirm"
              style={{ ...ButtonStyles.Large, alignSelf: 'center' }}
              textColor={MainColors.Natural}
              onPress={() => makeAnOrder()}
              enable={true}
            ></Button>
          </View>
        ) : null}
        {successState ? (
          <View style={styles.sorryAndSuccess} testID="successView">
            <View
              style={{
                width: deviceWidth * 0.9,
                alignItems: "center",
              }}
            >
              <Icon size="large" iconPath={require("../../../assets/icons/vectors/vector-success.png")} />
              <Text style={styles.title}>Order Successful</Text>
              <Button
                backgroundColor={MainColors.Light}
                title="View Order"
                style={{ ...ButtonStyles.Large, alignSelf: 'center' }}
                textColor={MainColors.Natural}
                onPress={() => {
                  navigation?.navigate("Orders");
                }}
                enable={true}
              ></Button>
            </View>
          </View>
        ) : null}
        {completeDeliveryData ? (
          <View style={styles.sorryAndSuccess}>
            <View
              style={{
                width: deviceWidth * 0.9,
                alignItems: "center",
              }}
            >
              <Icon size="large" iconPath={require("../../../assets/icons/vectors/vector-not-found.png")} />
              <Text style={styles.title}>Sorry!</Text>
              <Text style={styles.sorryText}>
                Please complete your delivery data before requesting an item
            </Text>
              <Button
                backgroundColor={MainColors.Light}
                title="Continue"
                style={{ ...ButtonStyles.Large, alignSelf: 'center' }}
                textColor={MainColors.Natural}
                onPress={() => {
                  closeAndDelv(navigation);
                }}
                enable={true}
              ></Button>
            </View>
          </View>
        ) : null}
      </View>
    </Popup>
  );
};
