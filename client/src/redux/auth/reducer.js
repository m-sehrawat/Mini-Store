import { getItem } from "../../helpers/sessionStorage";
import { GET_TOKEN_ERROR, GET_TOKEN_LOADING, GET_TOKEN_SUCCESS } from "./actionTypes";


const initState = {
    isLoading: false,
    token: getItem("token") || false,
    user: getItem("user") || {},
    isError: false
};

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_TOKEN_LOADING:
            return { ...state, isLoading: true, isError: false };
        case GET_TOKEN_SUCCESS:
            return { ...state, isLoading: false, token: payload.token, user: payload.user, isError: false };
        case GET_TOKEN_ERROR:
            return { ...state, isError: true, isLoading: false };
        default:
            return state;
    }
}