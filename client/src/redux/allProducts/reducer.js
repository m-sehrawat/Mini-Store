import { getItem } from "../../helpers/sessionStorage";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, SET_GENDER, SET_SORT } from "./actionTypes";

const initState = {
    isLoading: false,
    products: [],
    isError: false,
    isGender: getItem("isGender") || "allProducts",
    isSort: null
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
            return { ...state, isGender: payload, isSort: null };
        case SET_SORT:
            return { ...state, isSort: payload };
        default:
            return state;
    }
}