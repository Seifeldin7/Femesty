import React from "react";
import { View } from "react-native";
import { componentProps } from "./types";
import { styles } from "./styles";
import Modal from "react-native-modal";
import { Icon } from "../../ThemeComponents/Icon";

export const Popup = ({
  isVisible,
  setIsModalVisible,
  children,
  onCloseModal,
}: componentProps) => {
  const closeModal = () => {
    setIsModalVisible ? setIsModalVisible(false) : null;
    onCloseModal ? onCloseModal() : null;
  };

  return (
    <View testID="Popup">
      {setIsModalVisible ? (
        <Modal
          isVisible={isVisible}
          onBackdropPress={closeModal}
          onSwipeComplete={closeModal}
          swipeDirection={["down"]}
          style={{margin: 0}}
        >
          <View style={styles.mainContainer}>
            <View style={styles.popupContainer}>
              <View>
                <View style={styles.bar}></View>
                <Icon
                  size="small"
                  outerStyle={styles.close}
                  onPress={() => closeModal()}
                  iconPath={require("../../../assets/icons/small_icons/close.png")}
                />
              </View>
              {children}
            </View>
          </View>
        </Modal>
      ) : (
        <Modal
          isVisible={isVisible}
          backdropOpacity={0.0}
          onBackdropPress={closeModal}
          style={{margin: 0}}
        >
          <View style={styles.mainContainer}>
            <View style={[styles.popupContainer, styles.noClose]}>
              {children}
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};
