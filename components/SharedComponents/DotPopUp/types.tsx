import { GestureResponderEvent } from "react-native";

export interface componentProps {
    arrowDirection: "up" | "down" | "right" | "left",
    visibility: number,
    children: React.ReactNode,
    onCalloutPressed?: (event: GestureResponderEvent) => void,
}
