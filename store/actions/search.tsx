import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Look from "../../entities/Look";
import { Looks } from "../../config/Routes";
import { ApiClient } from "../../services";
import Dialog from "../../components/ThemeComponents/Dialog";
export const GET_SEARCH = "GET_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const GET_RELATED = "GET_RELATED";
export const NOT_RESULTS = "NOT_RESULTS";

type Result = { result: any; status: number } | undefined;

export const fetchLooksBySearch = (search: string, type: string = "search") => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      if (type === "tag") {
        const result: Result = await ApiClient.getRequest(
          Looks.getLooks + `?category=${search}`
        );
        const looks: Look[] | undefined = result?.result;
        if (looks?.length) {
          dispatch({
            type: GET_SEARCH,
            search: looks,
          });
        } else {
          dispatch({
            type: NOT_RESULTS,
          });
        }
      } else if (type === "search") {
        const result: Result = await ApiClient.getRequest(
          Looks.getLooks + `?search=${search}`
        );
        const looks: Look[] | undefined = result?.result;
        if (looks?.length) {
          dispatch({
            type: GET_SEARCH,
            search: looks,
          });
        } else {
          dispatch({
            type: NOT_RESULTS,
          });
        }
      }
    } catch (err) {
      Dialog.fail("Something went wrong");
    }
  };
};

export const fetchRelatedLooksBySearch = () => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>,
    getState: any
  ) => {
    try {
      let search = getState().search.search;
      if (search.length != 0) {
        const result: Result = await ApiClient.getRequest(
          Looks.getLooks + search.pop().id + `/related`
        );
        const looks: Look[] | undefined = result?.result;
        if (looks?.length) {
          dispatch({
            type: GET_RELATED,
            search: looks,
          });
        }
      }
    } catch (err) {
      Dialog.fail("Something went wrong");
    }
  };
};

export const clearLooksBySearch = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      dispatch({
        type: CLEAR_SEARCH,
      });
    } catch (err) {
      Dialog.fail("Something went wrong");
    }
  };
};
