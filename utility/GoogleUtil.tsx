import Constants from 'expo-constants';
import * as Google from "expo-google-app-auth";


export const googleLogIn = async () => {
    const googleAndroidClientId = Constants.manifest.extra.googleAndroidClientId;
    const googleStandaloneAppAndroidClientId = Constants.manifest.extra.googleStandaloneAppAndroidClientId;
    const googleIosClientId = Constants.manifest.extra.googleIosClientId;
    
    const response = await Google.logInAsync({
        iosClientId: googleIosClientId,
        androidClientId: googleAndroidClientId,
        androidStandaloneAppClientId: googleStandaloneAppAndroidClientId,
        scopes: ["profile", "email"],
        behavior: 'web' 
    });
    return response;
}
