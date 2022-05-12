import axios from "axios";
import { notify } from "../../helpers/extrafunctions";
import { GET_FAVOURITE_ERROR, GET_FAVOURITE_LOADING, GET_FAVOURITE_SUCCESS } from "./actionTypes";


export const getFavouriteLoading = () => {
    return { type: GET_FAVOURITE_LOADING };
};

export const getFavouriteSuccess = (payload) => {
    return { type: GET_FAVOURITE_SUCCESS, payload };
};

export const getFavouriteError = () => {
    return { type: GET_FAVOURITE_ERROR };
};


export const addFavouriteRequest = (payload, token, toast) => async () => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: JSON.stringify(payload),
            url: "/favourite",
        };
        await axios(options);
        notify(toast, "Product added to the favourite", "success");
    } catch (err) {
        console.log(err);
        if (err.response.data.message === "Already present in the Favourite") {
            notify(toast, err.response.data.message, "info");
        } else {
            notify(toast, "Something went wrong", "error");
        }
    }
}


export const getFavouriteRequest = (token) => async (dispatch) => {
    try {
        dispatch(getFavouriteLoading());
        let res = await axios.get("/favourite", { headers: { 'Authorization': `Bearer ${token}` } });
        dispatch(getFavouriteSuccess(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getFavouriteError());
    }
}
