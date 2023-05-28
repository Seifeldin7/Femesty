import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Dialog from '../../components/ThemeComponents/Dialog';
import { DeliverAddress } from '../../config/Routes'
import { ApiClient } from '../../services';
export const SEND_CODE = 'SEND_CODE';
export const VERIFY_CODE = 'VERIFY_CODE';


export const sendCode = (phone: string) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        try {
            const result = await ApiClient.getRequest(DeliverAddress.sendCode + '?phone=' + phone);
            // const result={result: '12345'};
            const verificationId = result?.result;

            if (result) {
                dispatch({
                    type: SEND_CODE, verificationId: verificationId
                });
                console.log(verificationId);
            }

        } catch (err) {
            Dialog.fail(`failed to send code, please try again`);
            console.log(`can't send the code`);
        }
    };
};

export const verifyCode = (code: string) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState: any) => {
        try {
            const VId = getState().deliverAddress.verificationId;
            const result = await ApiClient.getRequest(DeliverAddress.verifyCode + '?verificationId=' + VId + '&code=' + code);
            const vReults = result?.result;
            let stat: boolean;
            if (vReults.status == "0") {
                stat = false;
            } else {
                stat = true;
            }

            if (result) {
                dispatch({
                    type: VERIFY_CODE, verificationResult: stat
                });
            }

        } catch (err) {
            dispatch({
                type: VERIFY_CODE, verificationResult: false
            });
            // Dialog.fail(`failed to verify code, please try again`);
            console.log(`can't verify the code`);
        }
    };
};

export const cancelCode = () => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState: any) => {
        try {
            const VId = getState().deliverAddress.verificationId;
            const result = await ApiClient.getRequest(DeliverAddress.cancelCode + '?verificationId=' + VId);

            if (result?.status === 200) {
                console.log("code has been cancelled");
            }
            console.log(`cancel Code`);

        } catch (err) {
            console.log(`can't cancel the code`);
        }
    };
};
