import { GET_ORDER_DATA_ERROR, GET_ORDER_DATA_LOADING, GET_ORDER_DATA_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    orderData: [],
    isError: false
}

export const orderReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ORDER_DATA_LOADING:
            return { ...state, isLoading: true, isError: false };
        case GET_ORDER_DATA_SUCCESS:
            return { ...state, isLoading: false, isError: false, orderData: payload };
        case GET_ORDER_DATA_ERROR:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}