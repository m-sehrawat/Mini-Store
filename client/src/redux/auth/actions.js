import { GET_TOKEN_ERROR, GET_TOKEN_LOADING, GET_TOKEN_SUCCESS } from "./actionTypes";
import axios from 'axios';
import { setItem } from "../../helpers/sessionStorage";

export const getTokenLoading = () => {
    return { type: GET_TOKEN_LOADING };
};

export const getTokenSuccess = (payload) => {
    return { type: GET_TOKEN_SUCCESS, payload };
};

export const getTokenError = () => {
    return { type: GET_TOKEN_ERROR };
};

export const signupRequest = (payload) => async (dispatch) => {
    try {
        dispatch(getTokenLoading());
        let res = await axios.post("/signup", payload);
        dispatch(getTokenSuccess(res.data));
        setItem("token", res.data.token);
        setItem("user", {...res.data.user, password: ""});
    } catch (err) {
        console.log(err);
        dispatch(getTokenError());
    }
}