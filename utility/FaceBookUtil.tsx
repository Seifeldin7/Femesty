import Constants from 'expo-constants';
import * as Facebook from "expo-facebook";


export const facebookLogIn = async () => {
    const facebookAppId = Constants.manifest.extra.facebookAppId;
    await Facebook.initializeAsync(facebookAppId);
    const response = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
    });

    return response;
}
