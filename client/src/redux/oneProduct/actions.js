import axios from "axios";
import { GET_ONE_DATA_ERROR, GET_ONE_DATA_LOADING, GET_ONE_DATA_SUCCESS } from "./actionTypes";


export const getOneDataLoading = () => {
    return { type: GET_ONE_DATA_LOADING };
}

export const getOneDataSuccess = (payload) => {
    return { type: GET_ONE_DATA_SUCCESS, payload };
}

export const getOneDataError = () => {
    return { type: GET_ONE_DATA_ERROR };
}

export const getOneDataRequest = (id) =>  async (dispatch) => {
    try {
        dispatch(getOneDataLoading());
        let res = await axios.get(`/products/${id}`);
        dispatch(getOneDataSuccess(res.data));
        
    } catch (err) {
        console.log(err.response.data);
        dispatch(getOneDataError());
    }
}

