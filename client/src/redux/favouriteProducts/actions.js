import axios from "axios";
import { notify } from "../../utils/extrafunctions";
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
        await axios.post("/favourite", payload, { headers: { 'Authorization': `Bearer ${token}` } });
        notify(toast, "Product added to the favourite", "success");
    } catch (err) {
        console.log(err.response.data);
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
        console.log(err.response.data);
        dispatch(getFavouriteError());
    }
}

export const removeFavouriteRequest = (id, toast, token) => async (dispatch) => {
    try {
        await axios.delete(`/favourite/${id}`);
        dispatch(getFavouriteRequest(token));
        notify(toast, "Item removed from favourites", "success");
    } catch (err) {
        console.log(err);
        notify(toast, "Something went wrong", "error");
    }
}
