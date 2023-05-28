import { GET_PROFILE, UPDATE_PROFILE, UPDATE_ADDRESS } from '../actions/profile';
import { AnyAction } from 'redux';

const initialState = {
    profile: {},
};

export const profileReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: (action.payload.name) ? action.payload.name : state.profile.name,
                    username: (action.payload.username) ? action.payload.username : state.profile.username,
                }
            };
        case UPDATE_ADDRESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: (action.payload.name) ? action.payload.name : state.profile.name,
                    address: (action.payload.address) ? action.payload.address : state.profile.address,
                    phone: (action.payload.phone) ? action.payload.phone : state.profile.phone,
                }
            };
    }
    return state;
};
