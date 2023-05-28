import { AnyAction } from "redux";
import { ApiClient } from "../../services";
import { ThunkDispatch } from "redux-thunk";
import { Auth } from "../../config/Routes";
import { Storage } from "../../services";
import { googleLogIn } from "../../utility/GoogleUtil";
import { facebookLogIn } from "../../utility/FaceBookUtil";
import { refreshLooks } from "./looks";
import { fetchProfile } from "./profile";

type errMess = string | null;

type Result = { result: any; status: number } | undefined;

export const Login = "LOGIN";
export const LoginSuccess = "LOGIN_SUCCESS";
export const LoginFail = "LOGIN_FAIL";
export const LogOut = "LOGOUT";

export const facebookLogin = () => (
  dispatch: ThunkDispatch<any, any, AnyAction>
) => {
  return async () => {
    try {
      const response = await facebookLogIn();

      if (response.type === "success") {
        // const userData = await fetch(
        //     `https://graph.facebook.com/me?access_token=${response.token}&fields=id,name,birthday,picture.type(large),email`
        //   );
        const result: Result = await ApiClient.postRequest(Auth.facebookAuth, {
          accessToken: response.token,
        });
        if (result?.status === 200) {
          Storage.write("authToken", JSON.stringify(result.result));
          dispatch(fetchProfile());
          dispatch(loginSuccess(result));
        }
      }
    } catch (errMsg) {
      dispatch(loginFailed(errMsg));
      console.log(`Facebook Login Error: ${errMsg}`);
    }
  };
};

export const GoogleLogin = () => (
  dispatch: ThunkDispatch<any, any, AnyAction>
) => {
  return async () => {
    try {
      const response = await googleLogIn();

      if (response.type === "success") {
        const result: Result = await ApiClient.postRequest(Auth.googleAuth, {
          accessToken: response.accessToken,
        });
        if (result?.status === 200) {
          Storage.write("authToken", JSON.stringify(result.result));
          dispatch(fetchProfile());
          dispatch(loginSuccess(result));
        }
      }
    } catch (errMsg) {
      dispatch(loginFailed(errMsg));
      console.log(`Google Login Error: ${errMsg}`);
    }
  };
};

export const AppleLogin = () => (
  dispatch: ThunkDispatch<any, any, AnyAction>
) => {
  return async () => {
    alert("not implemented yet!");
  };
};

export const LogIn = () => (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return async () => {
    let response = await Storage.read("authToken");
    if (response) {
      let result: Result = {
        status: 200,
        result: JSON.parse(response),
      };
      dispatch(fetchProfile());
      dispatch(loginSuccess(result));
    }
  };
};

export const Logout = () => (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return async () => {
    Storage.delete("authToken");
    dispatch(refreshLooks());
    dispatch(logout());
  };
};

const logout = () => ({
  type: LogOut,
  payload: null,
});

const loginSuccess = (result: Result) => ({
  type: LoginSuccess,
  payload: result?.result,
});

const loginFailed = (errMess: errMess) => ({
  type: LoginFail,
  payload: errMess,
});
