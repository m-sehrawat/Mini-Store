import { Box, Button, Center, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCartDataRequest } from "../../redux/cartProducts/actions";
import { CartBox } from "./CartBox";
import { EmptyList } from "../loading/EmptyList";
import { Error } from "../loading/Error";
import { Loading } from "../loading/Loading";
import { OrderSummary } from "./OrderSummary";


export const Cart = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.authReducer.token);
    const { isLoading, isError, cart } = useSelector((state) => state.cartReducer, shallowEqual);

    useEffect(() => {
        dispatch(getCartDataRequest(token));
    }, [dispatch, token])



    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Flex justify={'space-between'} maxW={1200} m={'90px auto 20px'} px={'20px'}>
                <Center>
                    <Heading fontSize={['28px', '35px']}>Cart &nbsp;</Heading>
                    <Text fontSize={['18px', '24px']}> ({cart.length})</Text>
                </Center>
            </Flex>

            <Grid templateColumns={['100%', '100%', '100%', '62% 33%']} gap={'50px'} maxW={1200} m={'40px auto'} p={'20px'}>

                <Box>
                    {cart.length === 0 ? <EmptyList /> : <Flex className="shadow" flexDirection={'column'}  >
                        {cart.map((e, i) => (
                            <CartBox key={i} data={e} />
                        ))}
                        <Flex border={'1px solid red'}>
                            <Button>Add more Products</Button>
                            <Button>Proceed to Checkout</Button>
                        </Flex>
                    </Flex>}
                </Box>

                <OrderSummary data={cart} />

            </Grid>
        </>
    );
};