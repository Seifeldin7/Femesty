import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import User from "../../entities/User"
import { sendCode, cancelCode, verifyCode } from "../../store/actions/deliveryAddress"
import { editAddress } from "../../store/actions/profile"
import { RootState } from "../../store/configureStore"

import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../navigation/ProfileNavigator";

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "DeliveryAddress"
>;

export type componentProps = {
  navigation: ProfileScreenNavigationProp;
};

export type State = {
    submitIsPressed: boolean,
    formValues: any
}

export interface StateFromProps {
    profile: {
        profile: User
    }
}

export interface DispatchFromProps {
    SENDCODE: (phone: string) => Promise<void>,
    VERIFYCODE: (code: string) => Promise<void>,
    CANCELCODE: () => Promise<void>,
    EDITADDRESS: (name: string, phone: string, address: string) => Promise<void>,
}

export const mapStateToProps = (state: RootState) => {
    return {
        profile: state.profile,
    }
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchFromProps => {
    return {
        SENDCODE: (phone: string) => dispatch(sendCode(phone)),
        VERIFYCODE: (code: string) => dispatch(verifyCode(code)),
        CANCELCODE: () => dispatch(cancelCode()),
        EDITADDRESS: (name: string, phone: string, address: string) =>
            dispatch(editAddress(name, phone, address)),
    }
}
export type Props = StateFromProps & DispatchFromProps & componentProps
