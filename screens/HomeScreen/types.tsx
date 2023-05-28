import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import Look from "../../entities/Look"
import { fetchLooks, refreshLooks, addFavorite, deleteFavorite } from "../../store/actions"
import { RootState } from "../../store/configureStore"

export interface componentProps {
    navigation: { reset: (arg0: { index: number; routes: { name: string; }[]; }) => void; navigate: (arg0: string) => void; }
}

export type State = {
}

export interface StateFromProps {
    looks: {
        looks: Look[],
        offset: number
    },

}

export interface DispatchFromProps {
    FetchLooks: (count: number) => Promise<void>,
    RefreshLooks: () => Promise<void>,
    AddFavorite: (look: Look) => Promise<void>,
    DeleteFavorite: (lookId: number) => Promise<void>,
}

export const mapStateToProps = (state: RootState) => {
    return {
        looks: state.looks,
    }
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchFromProps => {
    return {
        FetchLooks: (count: number) => dispatch(fetchLooks(count)),
        RefreshLooks: () => dispatch(refreshLooks()),
        AddFavorite: (look) => dispatch(addFavorite(look)),
        DeleteFavorite: (lookId) => dispatch(deleteFavorite(lookId))
    }
}
export type Props = StateFromProps & DispatchFromProps & componentProps
