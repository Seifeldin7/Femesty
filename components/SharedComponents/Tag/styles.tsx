import { StyleSheet } from "react-native";
import { FontStyles } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
    Tag: {
        padding: 12,
        margin: 10,
        borderRadius: 5,
        height: 60,
        width:100
    },
    hashTag: {
        ...FontStyles.SmallText,
        textAlign:'center'
    }
})
