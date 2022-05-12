import { GET_TOKEN_SUCCESS, REMOVE_TOKEN_SUCCESS } from "./actionTypes";
import axios from 'axios';
import { deleteKeyFromObject, notify } from "../../helpers/extrafunctions";
import { removeItemToLocal, setItemToLocal } from "../../helpers/localStorage";


export const getTokenSuccess = (payload) => {
    return { type: GET_TOKEN_SUCCESS, payload };
};

export const removeTokenSuccess = () => {
    return { type: REMOVE_TOKEN_SUCCESS };
};

export const signupRequest = (payload, toast, navigate) => async (dispatch) => {
    try {
        let res = await axios.post("/signup", payload);
        deleteKeyFromObject(res.data.user, "password");
        dispatch(getTokenSuccess(res.data));
        setItemToLocal("token", res.data.token);
        setItemToLocal("user", res.data.user);
        notify(toast, 'Account Created Successfully', 'success');
        navigate(-2);
    } catch (err) {
        console.log(err);
        notify(toast, err.response.data.message, 'error');
    }
}

export const loginRequest = (payload, toast, navigate) => async (dispatch) => {
    try {
        let res = await axios.post("/login", payload);
        deleteKeyFromObject(res.data.user, "password");
        dispatch(getTokenSuccess(res.data));
        setItemToLocal("token", res.data.token);
        setItemToLocal("user", res.data.user);
        notify(toast, 'Login Successfully', 'success');
        navigate(-1);
    } catch (err) {
        console.log("here:",err);
        notify(toast, err.response.data.message, 'error');
    }
}

export const logoutRequest = (toast) => (dispatch) => {
    dispatch(removeTokenSuccess());
    removeItemToLocal("token");
    removeItemToLocal("user");
    notify(toast, 'Logout Successfully', 'success');
}