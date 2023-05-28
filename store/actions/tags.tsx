import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Looks } from "../../config/Routes";
import { ApiClient } from "../../services";
const SET_LOADING = "SET_LOADING";
export const GET_ALL_CATS = "GET_ALL_CATS";

export const fetchAllCategories = () => (
  dispatch: ThunkDispatch<any, any, AnyAction>
) => {
  return async () => {
    try {
      const result = await ApiClient.getRequest(Looks.getCatNames);
      const cats = result?.result;
      dispatch({
        type: SET_LOADING,
        loading: true,
      });
      if (result?.status === 200) {
        dispatch({
          type: GET_ALL_CATS,
          categories: cats,
        });
      }
      dispatch({
        type: SET_LOADING,
        loading: false,
      });
    } catch (err) {
      console.log(`Cannot Fetch categories`);
    }
  };
};
