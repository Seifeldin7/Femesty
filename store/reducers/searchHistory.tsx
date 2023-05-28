import { GET_SEARCHHISTORY, LOADING, UPDATE_SEARCHHISTORY } from '../actions/searchHistory';
import { AnyAction } from 'redux';

const initialState = {
    searchHistory: [],
    loading: false,
};

const pushAndReturn = (arr: Array<any>, val: any) => {
    let temp = arr;
    temp.push(val);
    return temp;
}

export const HistoryReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_SEARCHHISTORY:
            return {
                ...state,
                searchHistory: action.history
            };
        case LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case UPDATE_SEARCHHISTORY:
            return {
                ...state,
                searchHistory: pushAndReturn(state.searchHistory, action.description)
            };
        default:
            return state;
    }
};
