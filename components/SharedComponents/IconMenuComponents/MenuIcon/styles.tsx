import { StyleSheet } from "react-native";
import { TripleHz123Container } from "../../../../styles/Containers";

export const styles = StyleSheet.create({
    menuItem: {
        ...TripleHz123Container.Container
    },
    icon: {
        ...TripleHz123Container.LeftComponent,
        alignItems: "center", justifyContent: "center"
    },
    text: {

        ...TripleHz123Container.MiddleComponent,
        justifyContent: "center", alignItems: "flex-start"

    }
});
