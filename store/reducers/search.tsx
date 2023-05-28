import { GET_SEARCH, GET_RELATED, CLEAR_SEARCH, NOT_RESULTS } from '../actions/search';
import { AnyAction } from 'redux';

const initialState = {
    search: [],
    noresults: false
};

export const SearchReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_RELATED:
            let updatedSearch = state.search;
            for (let search of action.search) {
                if (!(updatedSearch.includes(search))) {
                    updatedSearch.push(search);
                }
            }
            return {
                ...state,
                search: updatedSearch,
                noresults: false
            };
        case GET_SEARCH:
            return {
                ...state,
                search: action.search,
                noresults: false
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                search: [],
                noresults: false
            };
        case NOT_RESULTS:
            return {
                ...state,
                noresults: true
            };
    }

    return state;
};
