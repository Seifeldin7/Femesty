import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { deleteFavorite, fetchFavorites } from "../../store/actions";
import { RootState } from "../../store/configureStore";

import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../navigation/ProfileNavigator";
import Favorite from "../../entities/Favorite";

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "Profile"
>;

export type State = {};

type componentProps = {
  navigation: ProfileScreenNavigationProp;
};

interface StateFromProps {
  favorites: {
    favorites: Favorite[];
    loading: boolean;
  };
}

interface DispatchFromProps {
  FetchFavorites: () => Promise<void>;
  DeleteFavorite: (lookId: number) => Promise<void>;
}

export const mapStateToProps = (state: RootState) => {
  return {
    favorites: state.favorites,
  };
};

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AnyAction>
): DispatchFromProps => {
  return {
    FetchFavorites: () => dispatch(fetchFavorites()),
    DeleteFavorite: (lookId) => dispatch(deleteFavorite(lookId)),
  };
};
export type Props = StateFromProps & DispatchFromProps & componentProps;
