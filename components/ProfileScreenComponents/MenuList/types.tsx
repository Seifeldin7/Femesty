import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../../navigation/ProfileNavigator";

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "Profile"
>;

export type componentProps = {
  navigation: ProfileScreenNavigationProp;
  setVisible: any;
};
