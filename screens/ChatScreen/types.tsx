import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store/configureStore";
import { fetchMessages, addMessage } from '../../store/actions';
import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../navigation/ProfileNavigator";

type ProfileScreenNavigationProp = StackNavigationProp<
    ProfileStackParamList,
    "Profile"
>;

export type State = {};

type componentProps = {
    navigation: ProfileScreenNavigationProp;
};

interface StateFromProps {
    messages: {
        messages: [],
    };
}

interface DispatchFromProps {
    FetchMessages: () => Promise<void>;
    AddMessage: (description: string) => Promise<void>;
}

export const mapStateToProps = (state: RootState) => {
    return {
        messages: state.messages,
    };
};

export const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AnyAction>
): DispatchFromProps => {
    return {
        FetchMessages: () => dispatch(fetchMessages()),
        AddMessage: (description: string) => dispatch(addMessage(description)),
    };
};
export type Props = StateFromProps & DispatchFromProps & componentProps;
