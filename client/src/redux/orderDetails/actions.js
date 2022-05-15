import axios from "axios";
import { GET_ORDER_DATA_ERROR, GET_ORDER_DATA_LOADING, GET_ORDER_DATA_SUCCESS } from "./actionTypes";

export const getOrderDataLoading = () => {
    return { type: GET_ORDER_DATA_LOADING };
};

export const getOrderDataSuccess = (payload) => {
    return { type: GET_ORDER_DATA_SUCCESS, payload };
};

export const getOrderDataError = () => {
    return { type: GET_ORDER_DATA_ERROR };
};

export const getOrderDataRequest = (token) => async (dispatch) => {
    try {
        dispatch(getOrderDataLoading());
        let res = await axios.get("/orders", { headers: { 'Authorization': `Bearer ${token}` } });
        dispatch(getOrderDataSuccess(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getOrderDataError());
    }
};