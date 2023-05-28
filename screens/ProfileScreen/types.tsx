import { RootState } from "../../store/configureStore";
import { Logout } from '../../store/actions/auth';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import User from "../../entities/User";

import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../navigation/ProfileNavigator";

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "Profile"
>;

export type componentProps = {
  navigation: ProfileScreenNavigationProp;
};

export type State = {
    isAlertVisible: boolean
}

export interface StateFromProps {
    profile: {
        profile: User
    }
}

export const mapStateToProps = (state : RootState) => {
    return {
        profile: state.profile
    }
}

export interface DispatchFromProps {
    LogOut: () => Promise<void>,
}

export const mapDispatchToProps = (dispatch : ThunkDispatch<any, any, AnyAction>) : DispatchFromProps => {
    return {
       LogOut: dispatch(Logout()),
    }
}

export type Props = StateFromProps & DispatchFromProps & componentProps

