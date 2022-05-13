import { getItem } from "../../utils/sessionStorage";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, RESET_FILTER, SET_CATEGORY, SET_GENDER, SET_GRID, SET_PAGE, SET_SORT } from "./actionTypes";

const initState = {
    isLoading: false,
    products: [],
    isError: false,
    isGender: getItem("isGender") || "allProducts",
    category: getItem("category") || "allCategory",
    isSort: null,
    grid: getItem("grid") || 3,
    size: getItem("size") || 6,
    page: getItem("page") || 1
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
        case SET_CATEGORY:
            return { ...state, category: payload, isSort: null };
        case SET_SORT:
            return { ...state, isSort: payload };
        case SET_GRID:
            return { ...state, grid: payload.grid, size: payload.size };
        case SET_PAGE:
            return { ...state, page: state.page + payload };
        case RESET_FILTER:
            return { ...state, isSort: null, isGender: "allProducts", category: "allCategory", grid: 3, size: 6, page: 1 };
        default:
            return state;
    }
}