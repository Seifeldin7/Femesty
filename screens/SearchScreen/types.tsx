import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import LookCategory from "../../entities/LookCategory"
import { fetchAllCategories,getSearchHistory,updateSearchHistory } from "../../store/actions"
import { RootState } from "../../store/configureStore"

export interface  componentProps {
    navigation: any
}

export type State = {
    loading : boolean,
    search : string,
    selected: string
    tags:Array<LookCategory>,
    history:Array<string>,
    searchFocused: boolean
}
export interface StateFromProps {
    tags:Array<LookCategory>,
    history:Array<string>,
}


export interface DispatchFromProps {
    FetchAllCategories: () => Promise<void>,
    GETSEARCHHISTORY: ()=> Promise<void>,
    UPDATESEARCHHISTORY: (description:string)=> Promise<void>,
}

export const mapStateToProps = (state : RootState) => {
    return {
        tags: state.tags.categories,
        history: state.searchHistory.searchHistory,
    }
}

export const mapDispatchToProps = (dispatch : ThunkDispatch<any, any, AnyAction>) : DispatchFromProps => {
    return {
        FetchAllCategories: dispatch(fetchAllCategories()),
        GETSEARCHHISTORY: dispatch(getSearchHistory()),
        UPDATESEARCHHISTORY: (description:string)=>dispatch(updateSearchHistory(description)),
    }
}

export type Props =  StateFromProps & DispatchFromProps & componentProps
