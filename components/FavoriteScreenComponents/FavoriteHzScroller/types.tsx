import Favorite from "../../../entities/Favorite";

export type componentProps = {
  favorites: Favorite[];
  deleteFavorite: Function;
};
