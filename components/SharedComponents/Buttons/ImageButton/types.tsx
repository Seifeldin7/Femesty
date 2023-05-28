import { GestureResponderEvent, ImageSourcePropType, ViewStyle } from "react-native";

export interface ImageButtonProps {
    style: false | ViewStyle | null,
    size: number,
    source: string,
    onPress: (event: GestureResponderEvent) => void
}