import { Alert } from "react-native";

export default class Dialog {
    static success(message: string) {
        Alert.alert("Success:", JSON.stringify(message), [{ text: 'OK', onPress: () => { } }], { cancelable: true });
    };

    static fail = (message: string) => {
        Alert.alert("Fail:", JSON.stringify(message), [{ text: 'OK', onPress: () => { } }], { cancelable: true });
    };
}
