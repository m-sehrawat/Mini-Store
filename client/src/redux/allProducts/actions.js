import axios from "axios";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, SET_GENDER } from "./actionTypes";

export const getDataLoading = () => {
    return { type: GET_DATA_LOADING };
}

export const getDataSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload };
}

export const getDataError = () => {
    return { type: GET_DATA_ERROR };
}

export const setGender = (payload) => {
    return { type: SET_GENDER, payload };
}

export const getAllDataRequest = (page, isGender, setlimit) => async (dispatch) => {
    try {
        dispatch(getDataLoading());
        let res = await axios.get(`/products?page=${page}&gender=${isGender}`);
        let data = res.data.item;
        setlimit(res.data.totalPages);
        dispatch(getDataSuccess(data));

    } catch (err) {
        console.log(err);
        dispatch(getDataError());
    }
}
