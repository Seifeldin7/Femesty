import { GestureResponderEvent, ViewStyle } from "react-native";

export interface IconProps {
    iconPath: any,
    onPress?: (event: GestureResponderEvent) => void,
    size: "small" | "medium" | "large";
    outerStyle?: ViewStyle
}
