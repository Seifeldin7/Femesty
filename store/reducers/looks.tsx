import { GET_LOOKS, SET_OFFSET, REFRESH, SET_END_OF_LIST_FLAG } from '../actions/looks';
import { AnyAction } from 'redux';
import Look from '../../entities/Look';

const initialState = {
    looks: [],
    isEndOfList: false,
    offset: 0,
};

export const LooksReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_LOOKS:
            let updatedLooks = state.looks;
            for (let look of action.looks) {
                updatedLooks.push(look);
            }
            return {
                ...state,
                looks: updatedLooks
            };
        case SET_OFFSET:
            return {
                ...state,
                offset: action.count
            };
        case REFRESH:
            return {
                ...state,
                looks: [],
            };
        case SET_END_OF_LIST_FLAG:
            return {
                ...state,
                isEndOfList: action.isEndOfList
            }
    }

    return state;
};
