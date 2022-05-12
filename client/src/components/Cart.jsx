import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCartDataRequest } from "../redux/cartProducts/actions";

export const Cart = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.authReducer.token);
    const { isLoading, isError, cart } = useSelector((state) => state.cartReducer, shallowEqual);
    // console.log('cart:', cart)
    console.table(cart);

    useEffect(() => {
        dispatch(getCartDataRequest(token));
    }, [dispatch, token])

    return (
        <>
            <Heading>Cart Page</Heading>
        </>
    );
};