import { getItem } from "../../helpers/sessionStorage";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, SET_GENDER } from "./actionTypes";

const initState = {
    isLoading: false,
    products: [],
    isError: false,
    isGender: getItem("isGender") || false
}

export const allProductsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING:
            return { ...state, isLoading: true, isError: false };
        case GET_DATA_SUCCESS:
            return { ...state, isLoading: false, products: payload, isError: false };
        case GET_DATA_ERROR:
            return { ...state, isLoading: false, isError: true };
        case SET_GENDER:
            return { ...state, isGender: payload };
        default:
            return state;
    }
}