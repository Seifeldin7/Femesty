import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import {
    clearLooksBySearch,
    fetchLooksBySearch,
    fetchRelatedLooksBySearch,
    addFavorite,
    deleteFavorite
} from "../../store/actions"
import { RootState } from "../../store/configureStore"
import Look from "../../entities/Look"


export interface componentProps {
    navigation: any,
    route: any
}

export type State = {
    selectedPage: number
}

export interface StateFromProps {
    search: {
        search: any[],
        noresults: Boolean
    },
}

export interface DispatchFromProps {
    ClearSearch: () => Promise<void>,
    FetchLooksBySearch: (search: string, type: string) => Promise<void>,
    FetchRelatedLooksBySearch: () => Promise<void>,
    AddFavorite: (look: Look) => Promise<void>,
    DeleteFavorite: (lookId: number) => Promise<void>,
}

export const mapStateToProps = (state: RootState) => {
    return {
        search: state.search,
    }
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchFromProps => {
    return {
        ClearSearch: () => dispatch(clearLooksBySearch()),
        FetchLooksBySearch: (search: string, type: string) => dispatch(fetchLooksBySearch(search, type)),
        FetchRelatedLooksBySearch: () => dispatch(fetchRelatedLooksBySearch()),
        AddFavorite: (look) => dispatch(addFavorite(look)),
        DeleteFavorite: (lookId) => dispatch(deleteFavorite(lookId))
    }
}
export type Props = StateFromProps & DispatchFromProps & componentProps
