import { Dimensions } from "react-native";
import Product from "../../../entities/Product";
export type componentProps = {
  product: Product;
  isVisible: boolean;
  setModalVisible: Function;
  navigation?: {
    reset: (arg0: { index: number; routes: { name: string }[] }) => void;
    navigate: (arg0: string) => void;
  };
};
export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;
