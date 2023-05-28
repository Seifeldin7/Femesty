import {
  GET_FAVORITES,
  DELETE_FAVORITE,
  ADD_FAVORITE,
} from "../actions/favorites";
import Favorite from "../../entities/Favorite";

import { AnyAction } from "redux";

const initialState = {
  favorites: [],
  loading: true,
};

export const FavoritesReducer = (
  state: any = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    case ADD_FAVORITE:
      if (
        state.favorites.some((favorite: Favorite) => favorite.id === action.payload.id)
      ) {
        return state;
      } else {
        return {
          ...state,
          favorites: state.favorites.concat(action.payload),
        };
      }

    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite: Favorite) => favorite.id !== action.payload
        ),
      };
  }

  return state;
};
