import { GestureResponderEvent, ViewStyle } from "react-native";

export interface AvatarProps {
    style?: ViewStyle,
    onPress?: (event: GestureResponderEvent) => void,
    imgPath: any,
    size?: "small" | "medium" | "large";
    borderRadius?: "rounded" | "rounded-rectangle";
}
