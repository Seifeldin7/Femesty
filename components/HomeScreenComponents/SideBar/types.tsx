import { Dimensions } from "react-native";
import Look from "../../../entities/Look";

export type componentProps = {
  look: Look;
  addFavorite: (look: Look) => Promise<void>;
  deleteFavorite: (lookId: number) => Promise<void>;
};

export let screenHeight = Dimensions.get("window").height;
