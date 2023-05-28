import { SEND_CODE, VERIFY_CODE } from '../actions/deliveryAddress';
import { AnyAction } from 'redux';

const initialState = {
    verificationId: '',
    verificationResult: false
};

export const DeliverAddressReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case SEND_CODE:
            return {
                ...state,
                verificationId: action.verificationId
            };
        case VERIFY_CODE:
            return {
                ...state,
                verificationResult: action.verificationResult
            };
    }

    return state;
};
