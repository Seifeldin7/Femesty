import { Dimensions, Platform, StatusBar } from "react-native";
import Look from "../../../entities/Look";

export type componentProps = {
  look: Look;
  addFavorite: (look: Look) => Promise<void>;
  deleteFavorite: (lookId: number) => Promise<void>;
  navigation: any;
  index:number;
  pageNumSelected: number
};

export let screenWidth = Dimensions.get("window").width;
export let screenHeight =
  Platform.OS == "android" &&
  (StatusBar.currentHeight ? StatusBar.currentHeight : 0) > 24
    ? Dimensions.get("window").height +
      (StatusBar.currentHeight ? StatusBar.currentHeight : 0)
    : Dimensions.get("window").height;
