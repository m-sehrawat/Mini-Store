import axios from "axios";
import { cartTotalAmount, notify } from "../../utils/extrafunctions";
import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, SET_CART_TOTAL } from "./actionTypes";


export const addToCartLoading = () => {
    return { type: ADD_TO_CART_LOADING };
};

export const addToCartSuccess = (payload) => {
    return { type: ADD_TO_CART_SUCCESS, payload };
};

export const addToCartError = () => {
    return { type: ADD_TO_CART_ERROR };
};

export const setCartTotal = (payload) => {
    return { type: SET_CART_TOTAL, payload };
};


export const addToCartRequest = (payload, token, toast) => async () => {
    try {
        await axios.post("/cart", payload, { headers: { 'Authorization': `Bearer ${token}` } });
        notify(toast, "Product is added to the Cart", "success");
    } catch (err) {
        console.log(err.response.data);
    }
};

export const getCartDataRequest = (token) => async (dispatch) => {
    try {
        dispatch(addToCartLoading());
        let res = await axios.get("/cart", { headers: { 'Authorization': `Bearer ${token}` } });
        res = res.data;
        dispatch(addToCartSuccess(res));
        const payload = cartTotalAmount(res);
        console.log('payload:', payload)
        let response = await axios.post("/amount", payload, { headers: { 'Authorization': `Bearer ${token}` } });
        console.log('response:', response.data)
        dispatch(setCartTotal(payload));
    } catch (err) {
        console.log(err.response.data);
        dispatch(addToCartError());
    }
}