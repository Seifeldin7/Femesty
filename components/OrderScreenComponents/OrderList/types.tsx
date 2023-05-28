import Order from "../../../entities/Order";

export interface propsType {
    orders: Order[],
    deleteOrder: Function
}