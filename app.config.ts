export default {
    "name": "femesty",
    "slug": "femesty",
    "scheme": "femesty",
    "version": "1.0.0",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "icon": "./assets/icons/logo/icon.png",
    "splash": {
        "image": "./assets/images/splash/drawable-xxxhdpi/splash.png",
        "resizeMode": "cover",
        "backgroundColor": "#ffffff"
    },
    "updates": {
        "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
        "**/*"
    ],
    "ios": {
        "supportsTablet": true,
        "bundleIdentifier": "com.femesty.app",
        // "buildNumber": "1.0.0",
    },
    "android": {
        //"package": "com.femesty.app"
        "package": "host.exp.exponent",
        "config": {
            "googleSignIn": {
            "apiKey": "AIzaSyDwfsJgrxRpnKek3QPMO2HnEYOmkp5ID6A",
            "certificateHash": "aa:d4:66:58:7b:61:69:79:2e:51:dc:1c:ee:05:0c:4d:01:ca:0e:f0"
            }
        },
        // "versionCode": 1
    },
    "web": {
        "favicon": "./assets/icons/logo/icon.png"
    },
    "notification": {
        "icon": "./assets/icons/logo/icon.png",
        "androidMode": "default",   
        "androidCollapsedTitle": "n/a"
      },
     
    "extra": {
        "baseUrl": process.env.EXPO_BASE_URL,
        "facebookAppId": process.env.EXPO_FACEBOOK_APP_ID,
        "googleIosClientId": process.env.EXPO_GOOGLE_IOS_CLIENT_ID,
        "googleAndroidClientId": process.env.EXPO_GOOGLE_ANDROID_CLIENT_ID,
        "googleStandaloneAppAndroidClientId": process.env.EXPO_GOOGLE_ANDROID_STANDALONE_APP_CLIENT_ID
    }
}