import { GET_ORDERS, DELETE_ORDER, ADD_ORDER } from '../actions';
import { AnyAction } from 'redux';
import Order from '../../entities/Order';

const initialState = {
    orders: [],
    loading: true,
};

export const OrdersReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading
            };

        case DELETE_ORDER:
            return state.filter((order: any) => order.id !== action.payload);

        case ADD_ORDER:
        //TODO: implement    
        let order = new Order(
            action.orderDetails.id, 
            action.orderDetails.product.price, 
            3,
            action.orderDetails.created_at,
            action.orderDetails.color,
            action.orderDetails.size,
            1,
            'Pending',
            action.orderDetails.product);
            return {
                ...state,
                orders: state.orders.push(order)
            };
        default:
            return state;
    }
};
