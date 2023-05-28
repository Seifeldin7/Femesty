import React from 'react'
import { Share } from "react-native";
// import {LoginButton, ShareContent, ShareDialog} from 'react-native-fbsdk';

import Dialog from '../components/ThemeComponents/Dialog';
import Look from '../entities/Look';

export const ShareLook = async (look: Look) => {
    try {
        let massage = 
            "Look: " + look.name + 
            "\nDesigned By: " + look.stylist.name + 
            "\n" + look.description + 
            "\n\n" + encodeURI(look.media1) + 
            "\n"   + encodeURI(look.media2)
            "\n"   + encodeURI(look.media3)
            "\n"   + encodeURI(look.media4);

        const result = await Share.share({
            title: look.name + " by " + look.stylist.name,
            message: massage,
            url: look.media1
        }, {
            dialogTitle: 'Share ' + look.name
        });

        if (result.action === Share.sharedAction) {
        if (result.activityType) {
            Dialog.success('Look shared Successfully with activity type ' + result.activityType);
        } else {
            Dialog.success('Look shared Successfully');
        }
        } else if (result.action === Share.dismissedAction) {
            Dialog.fail('Failed to share Look, Please Try AgainLater');
        }
    } catch (error) {
        alert(error.message);
    }
};
