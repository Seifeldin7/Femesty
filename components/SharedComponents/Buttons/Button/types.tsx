import { GestureResponderEvent, ViewStyle } from "react-native";

export interface ButtonProps {
    style: ViewStyle,
    backgroundColor: string,
    textColor: string,
    title: string,
    enable: boolean, 
    onPress: (event: GestureResponderEvent) => void
}
