import { GET_TOKEN_SUCCESS } from "./actionTypes";
import axios from 'axios';
import { setItem } from "../../helpers/sessionStorage";
import { notify } from "../../helpers/extrafunctions";


export const getTokenSuccess = (payload) => {
    return { type: GET_TOKEN_SUCCESS, payload };
};

export const signupRequest = (payload, toast, navigate) => async (dispatch) => {
    try {
        let res = await axios.post("/signup", payload);
        dispatch(getTokenSuccess(res.data));
        setItem("token", res.data.token);
        setItem("user", res.data.user);
        notify(toast, 'Account Created Successfully', 'success');
        navigate("/");
    } catch (err) {
        console.log(err);
        notify(toast, err.response.data.message, 'error');
    }
}

export const loginRequest = (payload, toast, navigate) => async (dispatch) => {
    try {
        let res = await axios.post("/login", payload);
        console.log('res:', res.data)
        dispatch(getTokenSuccess(res.data));
        setItem("token", res.data.token);
        setItem("user", res.data.user);
        notify(toast, 'Login Successfully', 'success');
        navigate("/");
    } catch (err) {
        console.log(err);
        notify(toast, err.response.data.message, 'error');
    }
}