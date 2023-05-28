import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: StatusBar.currentHeight
    },
    statusBar: {
        flexDirection: "row",
        alignItems: "center",
    },
    back: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 7,
        marginLeft: 10,
    },
    header: {
        flex: 2.5,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
    },
});
