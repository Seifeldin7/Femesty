import { RootState } from "../../store/configureStore";
import { facebookLogin, GoogleLogin, AppleLogin, LogIn } from '../../store/actions/auth';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import User from "../../entities/User";

export interface StateFromProps {
    login: {
        auth: boolean;
        errMess: string | null;
        userData: any | null;
    },
    profile: {
        profile: User
    }
}

export interface DispatchFromProps {
    FacebookLogin: () => Promise<void>,
    GoogleLogin: () => Promise<void>,
    AppleLogin: () => Promise<void>,
    LogIn: () => Promise<void>
}


export const mapStateToProps = (state: RootState) => {
    return {
        login: state.login,
        profile: state.profile
    }
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchFromProps => {
    return {
        FacebookLogin: dispatch(facebookLogin()),
        GoogleLogin: dispatch(GoogleLogin()),
        AppleLogin: dispatch(AppleLogin()),
        LogIn: dispatch(LogIn())
    }
}


export interface componentProps {
    navigation: { reset: (arg0: { index: number; routes: { name: string; }[]; }) => void; navigate: (arg0: string) => void; }
}

export type Props = StateFromProps & DispatchFromProps & componentProps

export type State = {
    isLoading: boolean
}

