import { GET_ALL_CATS } from '../actions/tags';
import { AnyAction } from 'redux';

const initialState = {
    categories: []
};

export const TagsReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading
            };
        case GET_ALL_CATS:
            return {
                ...state,
                categories: action.categories
            };
    }

    return state;
};
