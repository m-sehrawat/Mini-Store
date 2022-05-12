import { GET_ONE_DATA_ERROR, GET_ONE_DATA_LOADING, GET_ONE_DATA_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: true,
    oneProduct: {
        _id: "",
        img: [],
        name: "",
        description: "",
        price: 0,
        brand: "",
        collections: "",
        gender: "",
        rating: 0,
        size: []
    },
    isError: false,
}

export const oneProductReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ONE_DATA_LOADING:
            return { ...state, isLoading: true, isError: false };
        case GET_ONE_DATA_SUCCESS:
            return { ...state, isLoading: false, oneProduct: payload, isError: false };
        case GET_ONE_DATA_ERROR:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}