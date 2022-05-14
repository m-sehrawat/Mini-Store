import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, SET_CART_TOTAL, SET_SHIPPING_ADDRESS } from "./actionTypes";

const initState = {
    isLoading: false,
    cart: [],
    isError: false,
    amount: {
        discount: 0,
        productCount: 0,
        shippingCharges: 0,
        totalMRP: 0,
        payableAmount: 0
    },
    address: {
        fullName: "",
        mobile: "",
        streetAddress: "",
        landmark: "",
        city: "",
        state: "",
        pincode: ""
    }
}

export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_LOADING:
            return { ...state, isLoading: true, isError: false };
        case ADD_TO_CART_SUCCESS:
            return { ...state, isLoading: false, isError: false, cart: payload };
        case ADD_TO_CART_ERROR:
            return { ...state, isLoading: false, isError: true };
        case SET_CART_TOTAL:
            return {
                ...state,
                amount: {
                    discount: payload.discount,
                    productCount: payload.productCount,
                    shippingCharges: payload.shippingCharges,
                    totalMRP: payload.totalMRP,
                    payableAmount: payload.payableAmount
                }
            };
        case SET_SHIPPING_ADDRESS:
            return {
                ...state,
                address: {
                    fullName: payload.fullName,
                    mobile: payload.mobile,
                    streetAddress: payload.streetAddress,
                    landmark: payload.landmark,
                    city: payload.city,
                    state: payload.state,
                    pincode: payload.pincode
                }
            };
        default:
            return state;
    }
}