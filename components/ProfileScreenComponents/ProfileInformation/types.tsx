import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../../navigation/ProfileNavigator";

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "Profile"
>;

export interface componentProps {
  navigation: ProfileScreenNavigationProp;
  image: string;
  name: string;
  username: string;
}
