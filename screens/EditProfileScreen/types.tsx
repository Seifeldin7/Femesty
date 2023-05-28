import { RootState } from "../../store/configureStore";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { editProfile } from '../../store/actions/profile';
import User from "../../entities/User";

export interface componentProps {
    navigation: {
        reset: (arg0: { index: number; routes: { name: string; }[]; }) => void;
        navigate: (arg0: string) => void;
        goBack: () => void;
    }
}

export type State = {
    submitIsPressed: boolean
}

export interface StateFromProps {
    profile: {
        profile: User
    }
}

export const mapStateToProps = (state: RootState) => {
    return {
        profile: state.profile
    }
}

export interface DispatchFromProps {
    EditProfile: (name: string, username: string) => Promise<void>
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchFromProps => {
    return {
        EditProfile:  (name: string, username: string) => dispatch(editProfile(name, username)),
    }
}

export type Props = StateFromProps & DispatchFromProps & componentProps

