import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Look from "../../entities/Look";
import { Looks } from "../../config/Routes";
import { ApiClient } from "../../services";

export const GET_LOOKS = "GET_LOOKS";
export const SET_OFFSET = "SET_OFFSET";
export const REFRESH = "REFRESH";
export const SET_END_OF_LIST_FLAG = "SET_END_OF_LIST_FLAG";

type Result = { result: any; status: number } | undefined;
export const fetchLooks = (count: number) => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>,
    getState: any
  ) => {
    try {
      const { offset } = getState().looks;
      const result: Result = await ApiClient.getRequest(
        Looks.getLooks + `?offset=${offset}&count=${count}&shuffle=true`
      );
      if (result?.status === 200) {
        const looks: Look[] | undefined = result?.result;
        if (looks?.length) {
          dispatch({
            type: SET_OFFSET,
            count: looks.length + offset,
          });

          dispatch({
            type: GET_LOOKS,
            looks: looks,
          });
        }
      }
      else {
        dispatch({
          type: SET_END_OF_LIST_FLAG,
          isEndOfList: true
        })
      }
    } catch (err) {
      console.log("Something went wrong");
    }
  };
};

export const refreshLooks = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch({
      type: SET_END_OF_LIST_FLAG,
      isEndOfList: false
    })
    dispatch({
      type: SET_OFFSET,
      count: 0,
    });
    dispatch({
      type: REFRESH,
    });
  };
};
