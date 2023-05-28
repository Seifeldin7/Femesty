import Look from "../../../entities/Look";

export const LOOKS_TO_FETCH_COUNT = 2;

export type componentProps = {
  data: Look[];
  getNextLook?: Function;
  refreshLooks: Function;
  addFavorite: (look: Look) => Promise<void>;
  deleteFavorite: (lookId: number) => Promise<void>;
  navigation: any;
  setSelectedResultPage?: Function
};
