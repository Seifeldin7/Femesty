import { GET_MESSAGES, ADD_MESSAGE } from '../actions';
import { AnyAction } from 'redux';
import Message from '../../entities/Message';

const initialState = {
    messages: [],
};

export const ChatReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            };
        case ADD_MESSAGE:
            let msg = new Message(
                action.msgDetails.id,
                new Date().toUTCString().split(' ').slice(0, 5).join(' '),
                new Date().toUTCString().split(' ').slice(0, 5).join(' '),
                action.msgDetails.user,
                action.msgDetails.description);
            state.messages.unshift(msg);
            return {
                ...state,
                messages: state.messages
            };
        default:
            return state;
    }
};
