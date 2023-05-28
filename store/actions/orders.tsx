import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Order from "../../entities/Order";
import { Orders } from "../../config/Routes";
import { ApiClient } from "../../services";
import Product from "../../entities/Product";
import { postNotification } from "./notifications";

export const GET_ORDERS = "GET_ORDERS";
export const DELETE_ORDER = "GET_ORDERS";
export const ADD_ORDER = "ADD_ORDER";

type Result = { result: any; status: number } | undefined;

export const fetchOrders = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>, getState: any) => {
    try {
      dispatch({ type: "SET_LOADING", loading: true });
      const userId: number = getState().profile.profile.id;
      const result: Result = await ApiClient.getRequest(Orders.getOrder + `?buyerId=${userId}`, "");
      const orders = result?.result;
      if (result?.status === 200) {
        dispatch({
          type: GET_ORDERS,
          orders: orders,
        });
      }
    } catch (err) {
      console.log("Cannot find orders   " + err);
    } finally {
      dispatch({ type: "SET_LOADING", loading: false });
    }
  };
};

export const deleteOrder = (orderId: number) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      const result: Result = await ApiClient.deleteRequest(
        Orders.deleteOrder + orderId,
        {},
        ""
      );
      if (result?.status) {
        dispatch({
          type: DELETE_ORDER,
          order: orderId,
        });
      } else {
        console.log("Cannot Cancel the order\n please try again latter");
      }
    } catch (err) {
      console.log("Cannot Cancel the order\n please try again latter");
    }
  };
};

export const makeOrder = (
  product: Product,
  userId: number,
  size: string,
  color: string
) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      const body = {
        size: size,
        color: color,
        userId: userId,
        productId: product.id,
      };
      const result: Result = await ApiClient.postRequest(
        Orders.makeOrder,
        body
      );
      if (result?.status === 200) {
        dispatch(
          postNotification(
            product.name,
            "Order is Pending Approval",
            "Order",
            result.result
          )
        );
        const orderDetails = {
          id: result.result,
          product: product,
          size: size,
          color: color,
          created_at: new Date().toUTCString().replace("GMT", ""),
        };
        dispatch({
          type: ADD_ORDER,
          orderDetails: orderDetails,
        });
      }
    } catch (err) {
      console.log("Cannot add orders   " + err);
    }
  };
};
