import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    cart: [],
    isError: false,
}

export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_LOADING:
            return { ...state, isLoading: true, isError: false };
        case ADD_TO_CART_SUCCESS:
            return { ...state, isLoading: false, isError: false, cart: payload };
        case ADD_TO_CART_ERROR:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}