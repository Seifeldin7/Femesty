import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Chat } from "../../config/Routes";
import User from "../../entities/Usernew";
import { ApiClient } from "../../services";

export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";

type Result = { result: any; status: number } | undefined;

export const fetchMessages = () => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState: any) => {
        try {
            const userId: number = getState().profile.profile.id;
            const result: Result = await ApiClient.getRequest(Chat.getMessages+ `?userId=${userId}`, "");
            const messages = result?.result;
            if (result?.status === 200) {
                dispatch({
                    type: GET_MESSAGES,
                    messages: messages,
                });
            }
        } catch (err) {
            console.log("Cannot fetch Messages   " + err);
        } 
    };
};

export const addMessage = (
    description: string,
) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState: any) => {
        try {
            const user: User = getState().profile.profile;
            const body = {
                userId: user.id,
                description: description
            };
            const result: Result = await ApiClient.postRequest(
                Chat.addMessage,
                body
            );
            const msgDetails = {
                id: result?.result,
                description: description,
                user: user
            }
            if (result?.status === 200) {
                dispatch({
                    type: ADD_MESSAGE,
                    msgDetails: msgDetails,
                });
            }
        } catch (err) {
            console.log("Cannot add message   " + err);
        }
    };
};
