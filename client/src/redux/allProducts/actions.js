import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, RESET_FILTER, SET_CATEGORY, SET_GENDER, SET_GRID, SET_PAGE, SET_SORT } from "./actionTypes";
import axios from "axios";
import { setItem } from "../../utils/sessionStorage";
import { notify } from "../../utils/extrafunctions";


export const getDataLoading = () => {
    return { type: GET_DATA_LOADING };
};

export const getDataSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload };
};

export const getDataError = () => {
    return { type: GET_DATA_ERROR };
};

export const setGender = (payload) => {
    return { type: SET_GENDER, payload };
};

export const setCategory = (payload) => {
    return { type: SET_CATEGORY, payload };
};

export const setSort = (payload) => {
    return { type: SET_SORT, payload };
};

export const setGrid = (payload) => {
    return { type: SET_GRID, payload };
};

export const setPage = (payload) => {
    return { type: SET_PAGE, payload };
};

export const resetFilter = () => {
    return { type: RESET_FILTER };
};

export const getAllDataRequest = (page, setlimit, size, isGender, category, isSort, setTotalProducts, grid, reset, setReset, toast) => async (dispatch) => {
    try {
        dispatch(getDataLoading());
        let res = await axios.get(`/products?page=${page}&gender=${isGender}&category=${category}&sort=${isSort}&limit=${size}`);
        res = res.data;
        setlimit(res.totalPages);
        setTotalProducts(res.totalProducts);
        dispatch(getDataSuccess(res.item));

        if (reset) {
            setItem("isGender", isGender);
            setItem("category", category);
            setItem("grid", grid);
            setItem("size", size);
            setItem("page", page);
            setReset(false);
            notify(toast, "Reset all filters successfully", "success");
        }

    } catch (err) {
        console.log(err.response.data);
        dispatch(getDataError());
    }
};
