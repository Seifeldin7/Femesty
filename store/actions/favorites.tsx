import Constants from "expo-constants";

import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Favorite from "../../entities/Favorite";
import { Favorites } from "../../config/Routes";
import { ApiClient } from "../../services";
import Look from "../../entities/Look";

export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

type Result = { result: any; status: number } | undefined;

export const fetchFavorites = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState: any) => {
    try {
      dispatch({ type: "SET_LOADING", loading: true });
      const userId: number = getState().profile.profile.id;
      const result: Result = await ApiClient.getRequest(
        Favorites.Favorites + `?userId=${userId}`,
        ""
      );
      const favorites: Favorite[] | undefined = result?.result;

      if (favorites?.length) {
        dispatch({
          type: GET_FAVORITES,
          favorites: favorites,
        });
      }
      dispatch({ type: "SET_LOADING", loading: false });
    } catch (err) {
      console.log("cannot fetch favorites");
    }
  };
};

export const addFavorite = (look: Look) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState: any) => {
    try {
      dispatch({ type: "SET_LOADING", loading: true });
      const userId: number = getState().profile.profile.id;
      const result: Result = await ApiClient.postRequest(
        Favorites.Favorites,
        {
          userId: userId,
          lookId: look.id,
        },
        ""
      );
      let favorite: Favorite = new Favorite(result?.result,new Date(),new Date(),getState().profile.profile,look)
      if (result?.status === 200) {
        dispatch({ type: ADD_FAVORITE, payload: favorite });
      }
      dispatch({ type: "SET_LOADING", loading: false });
    } catch (err) {
      console.log("cannot add favorite");
    }
  };
};

export const deleteFavorite = (lookId: number) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      dispatch({ type: "SET_LOADING", loading: true });
      const result: Result = await ApiClient.deleteRequest(
        Favorites.Favorites + lookId,
        {},
        ""
      );
      if (result?.status === 200) {
        dispatch({ type: DELETE_FAVORITE, payload: lookId });
      }
      dispatch({ type: "SET_LOADING", loading: false });
    } catch (err) {
      console.log("cannot delete favorite");
    }
  };
};
