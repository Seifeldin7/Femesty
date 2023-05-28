import { AnyAction } from "redux";
import { ApiClient } from "../../services";
import { ThunkDispatch } from "redux-thunk";
import { User } from "../../config/Routes";
import Dialog from '../../components/ThemeComponents/Dialog';


type Result = { result: any; status: number } | undefined;

export const GET_PROFILE = 'GET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

export const fetchProfile = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      const result: Result = await ApiClient.getRequest(User.getUser);
      if (result?.status === 200) {
        const profile = result?.result;
        dispatch({
          type: GET_PROFILE,
          profile: profile.user,
        });
      } else {
        console.log(`Cannot fetch profile Info 1`);
      }
    } catch (errMsg) {
      console.log(`Cannot fetch profile Info 2`);
    }
  };
};

export const editProfile = (name: string, username: string) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      const body = {
        name: name,
        username: username,
      };
      const result: Result = await ApiClient.putRequest(User.updateUser, body);
      if (result?.status === 200) {
        dispatch({
          type: UPDATE_PROFILE,
          payload: body,
        });
      } else {
        console.log(`Something went wrong`);
      }
    } catch (errMsg) {
      console.log(`Something went wrong`);
    }
  };
};

export const editAddress = (name: string, phone: string, address: string) => {

  return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState: any) => {
    try {
      const stat = getState().deliverAddress.verificationResult;
      if (!stat) {
        const body = {
          name: name,
          phone: phone,
          address: address
        };
        const result = await ApiClient.putRequest(User.updateAddress, body);
        if (result?.status === 200) {
          dispatch({
            type: UPDATE_ADDRESS,
            payload: body
          })
        }
        else {
          Dialog.fail(`Something went wrong in updating the address`);
        }
      } else {
        Dialog.fail(`The code you entered is not correct. Please try again`);
        console.log(`code is wrong`);
      }
    } catch (errMsg) {
      Dialog.fail(`can't update the address`);
      console.log(`can't update the address`);
    }
  }
}
