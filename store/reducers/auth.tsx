import { AnyAction } from 'redux';
import { LoginFail, LoginSuccess, LogOut } from '../actions/auth';

type errMess = string | null

type stateTemp = {
    auth: boolean,
    userData: any
    errMess: errMess,
} | undefined

export const LoginReducer = (
    state: stateTemp = {
        auth: false,
        userData: null,
        errMess: null
    }, action: AnyAction) => {
    switch (action.type) {
        case LoginSuccess:
            return { ...state, auth: true, errMess: null, userData: action.payload }

        case LoginFail:
            return { ...state, auth: false, errMess: action.payload, userData: null }

        case LogOut:
            return { ...state, auth: false, errMess: null, userData: null }

        default:
            return state;
    }
}
