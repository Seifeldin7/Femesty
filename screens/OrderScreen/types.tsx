import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import Order from "../../entities/Order"
import { deleteOrder, fetchOrders } from "../../store/actions"
import { RootState } from "../../store/configureStore"


export type State = {
    filter: string[],
    orders: Order[],
    selected: string
}
export interface  componentProps {
    navigation: any
}


export interface StateFromProps {
    orders:{
        orders: [];
        loading: boolean
    },
    
}
  
export interface DispatchFromProps {
    FetchOrders: () => Promise<void>,
    DeleteOrder: (orderId: number) => Promise<void>
}

export const mapStateToProps = (state : RootState) => {
    return {
        orders: state.orders,
    }
}

export const mapDispatchToProps = (dispatch : ThunkDispatch<any, any, AnyAction>) : DispatchFromProps => {
    return {
        FetchOrders: () => dispatch(fetchOrders()),
        DeleteOrder: (orderId) => dispatch(deleteOrder(orderId))
    }
}
export type Props =  StateFromProps & DispatchFromProps & componentProps
